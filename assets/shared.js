/* Shared data + helpers for every Ironline page (mockup data). */
const themeParam = new URLSearchParams(location.search).get('theme');
if (themeParam) document.documentElement.dataset.theme = themeParam;
const $ = (s, el = document) => el.querySelector(s);
const money = v => v >= 1e6 ? '$' + (v / 1e6).toFixed(v >= 1e7 ? 1 : 2).replace(/\.?0+$/, '') + 'M' : v >= 1e3 ? '$' + Math.round(v / 1e3) + 'K' : '$' + v;
const moneyFull = v => '$' + Math.round(v).toLocaleString('en-US');

const STATUS = {
  on:   { label: 'On track',    color: 'var(--good)',     icon: '<svg viewBox="0 0 12 12" fill="none" stroke="var(--good)" stroke-width="2"><path d="m2.5 6.5 2.2 2.2L9.5 3.5"/></svg>' },
  risk: { label: 'At risk',     color: 'var(--warn)',     icon: '<svg viewBox="0 0 12 12" fill="var(--warn)"><path d="M6 1 11 10.5H1z"/></svg>' },
  over: { label: 'Over budget', color: 'var(--critical)', icon: '<svg viewBox="0 0 12 12" fill="var(--critical)"><circle cx="6" cy="6" r="5"/><path d="M6 3.2v3.4M6 8.4v.2" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>' },
};
const chip = k => `<span class="chip">${STATUS[k].icon}${STATUS[k].label}</span>`;
const stateChip = (label, kind) => {
  const map = { good: 'var(--good)', warn: 'var(--warn)', serious: 'var(--serious)', critical: 'var(--critical)', neutral: 'var(--ink-3)' };
  return `<span class="chip"><i style="background:${map[kind]}"></i>${label}</span>`;
};

/* ---------- Data store ----------
   SEED (assets/seed.js) is the starting data. Anything users add or edit on the Clients page is saved
   in this browser's localStorage under STORE_KEY and read back by every page. A real deployment would
   swap loadStore/saveStore for calls to a backend. */
const STORE_KEY = 'ironline-data-v1';
function loadStore() {
  let db = null;
  try { const raw = localStorage.getItem(STORE_KEY); if (raw) db = JSON.parse(raw); } catch {}
  db = db || {};
  // data saved before a section existed (e.g. records) picks it up from the seed
  for (const k of Object.keys(SEED)) if (!(k in db)) db[k] = JSON.parse(JSON.stringify(SEED[k]));
  return db;
}
function saveStore() {
  try { DB.savedAt = new Date().toISOString(); localStorage.setItem(STORE_KEY, JSON.stringify(DB)); return true; } catch { return false; }
}
function resetStore() { try { localStorage.removeItem(STORE_KEY); } catch {} return fileDB.clear().catch(() => {}); }
const DB = loadStore();
const projects = DB.projects, details = DB.details, clients = DB.clients;
const P = Object.fromEntries(projects.map(p => [p.id, p]));
const C = Object.fromEntries(clients.map(c => [c.id, c]));
const clientOf = pid => C[P[pid].client] || { name: '—', office: '', contacts: [] };
// Project colors follow the validated categorical order; past eight, projects share a neutral.
const PROJECT_COLORS = ['var(--p1)', 'var(--p2)', 'var(--p3)', 'var(--p4)', 'var(--p5)', 'var(--p6)', 'var(--p7)', 'var(--p8)'];
const nextColor = () => PROJECT_COLORS.find(c => !projects.some(p => p.c === c)) || 'var(--p-other)';
const PLACEHOLDER_PHOTO = 'https://placehold.co/1280x720/2a2722/2a2722?text=.';
// another tab saved changes: show them here too
window.addEventListener('storage', e => { if (e.key === STORE_KEY) location.reload(); });

/* ---------- Cost codes ---------- */
const CODES = [
  { k: 'Site', name: '02 · Sitework', share: .08, s: 0, e: .2 },
  { k: 'Concrete', name: '03 · Concrete', share: .14, s: .08, e: .35 },
  { k: 'Structure', name: '05/06 · Structure', share: .18, s: .2, e: .5 },
  { k: 'Envelope', name: '07/08 · Envelope', share: .12, s: .4, e: .7 },
  { k: 'MEP', name: '21–26 · MEP', share: .24, s: .35, e: .9 },
  { k: 'Finishes', name: '09 · Finishes', share: .16, s: .6, e: 1 },
  { k: 'GC', name: '01 · General conditions', share: .08, s: 0, e: 1 },
];
function costCodes(p) {
  const c = p.pct / 100;
  const raw = CODES.map(cd => ({ ...cd, budget: p.budget * cd.share, prog: Math.min(1, Math.max(0, (c - cd.s) / (cd.e - cd.s))) }));
  const rawSpent = raw.reduce((a, r) => a + r.budget * r.prog, 0) || 1;
  const k = p.spent / rawSpent;
  const over = { ...(p.over || {}) }, rest = (p.forecast - p.budget) - Object.values(over).reduce((a, b) => a + b, 0);
  if (Math.abs(rest) >= 1) over.GC = (over.GC || 0) + rest;
  const rows = raw.map(r => { const variance = over[r.k] || 0, cap = (r.budget + variance) * 0.98; return { ...r, variance, cap, spent: Math.min(r.budget * r.prog * k, cap) }; });
  // spend that hit a code's cap moves to codes with headroom, so project cost to date still matches
  for (let i = 0; i < 5; i++) {
    const left = p.spent - rows.reduce((a, r) => a + r.spent, 0); if (left < 1) break;
    const open = rows.filter(r => r.prog > 0 || r.k === 'GC'), room = open.reduce((a, r) => a + (r.cap - r.spent), 0);
    if (room <= 0) break;
    open.forEach(r => { r.spent += left * (r.cap - r.spent) / room; });
  }
  return rows;
}
const ccTotals = rows => rows.reduce((a, r) => ({ budget: a.budget + r.budget, spent: a.spent + r.spent, variance: a.variance + r.variance }), { budget: 0, spent: 0, variance: 0 });
const portfolioCodes = list => CODES.map(cd => {
  const rows = list.map(p => costCodes(p).find(r => r.k === cd.k));
  return { ...cd, ...ccTotals(rows) };
});
const tel = n => 'tel:+1' + n.replace(/\D/g, '');
const esc = v => String(v ?? '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const contactCard = (c, i, subject) => `
        <div class="contact">
          <div class="avatar" aria-hidden="true">${esc(c.name.replace(/^(Dr\.|Chief) /, '').split(' ').map(w => w[0]).join('').slice(0, 2))}</div>
          <div class="who">
            <div class="flex items-center gap-2 flex-wrap"><strong>${esc(c.name)}</strong><span class="ctag ${i === 0 ? 'primary' : ''}">${esc(c.tag)}</span></div>
            <div class="role">${esc(c.role)}</div>
            <div class="lines">
              ${c.phone ? `<a href="${tel(c.phone)}"><span>Office</span>${esc(c.phone)}</a>` : ''}
              ${c.mobile ? `<a href="${tel(c.mobile)}"><span>Mobile</span>${esc(c.mobile)}</a>` : ''}
              <a href="mailto:${esc(c.email)}"><span>Email</span>${esc(c.email)}</a>
            </div>
          </div>
          <div class="acts">
            ${c.mobile || c.phone ? `<a class="ico" href="${tel(c.mobile || c.phone)}" aria-label="Call ${esc(c.name)}" title="Call"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg></a>` : ''}
            <a class="ico" href="mailto:${esc(c.email)}?subject=${encodeURIComponent(subject)}" aria-label="Email ${esc(c.name)}" title="Email"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg></a>
            <button class="ico" type="button" data-copy="${esc(c.name)}, ${esc(c.role)}\n${esc(c.phone)}${c.mobile ? ' · m ' + c.mobile : ''}\n${esc(c.email)}" aria-label="Copy contact for ${esc(c.name)}" title="Copy contact"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button>
          </div>
        </div>`;
const signed = v => v ? (v > 0 ? '+' : '−') + money(Math.abs(v)) : '—';

/* ---------- Visual style: Glass (default) or Site office ---------- */
function setStyle(v) { try { localStorage.setItem('ironline-style', v); } catch {} const u = new URL(location.href); u.searchParams.delete('style'); location.href = u.toString(); }
(function mountStyleUI() {
  const glass = document.documentElement.dataset.style === 'glass';
  const nav = document.querySelector('.side .nav');
  if (nav) {
    const sw = document.createElement('div');
    sw.className = 'style-switch'; sw.setAttribute('role', 'group'); sw.setAttribute('aria-label', 'Visual style');
    sw.innerHTML = `<button type="button" aria-pressed="${glass}" data-s="glass">Glass</button><button type="button" aria-pressed="${!glass}" data-s="office">Site office</button>`;
    sw.addEventListener('click', e => { const b = e.target.closest('button'); if (b && b.getAttribute('aria-pressed') !== 'true') setStyle(b.dataset.s); });
    nav.after(sw);
  }
  if (!glass || !window.L) return;
  // satellite backdrop with every located project pinned
  const el = document.createElement('div'); el.id = 'bgmap'; el.setAttribute('aria-hidden', 'true'); document.body.prepend(el);
  const map = L.map(el, { zoomControl: false, attributionControl: false, dragging: false, scrollWheelZoom: false, doubleClickZoom: false, boxZoom: false, keyboard: false, touchZoom: false, zoomSnap: .25 });
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom: 17 }).addTo(map);
  const pts = projects.filter(p => details[p.id] && details[p.id].lat != null).map(p => [details[p.id].lat, details[p.id].lon, p]);
  pts.forEach(([lat, lon, p]) => L.marker([lat, lon], { icon: L.divIcon({ className: '', html: '<div class="site-pin"></div>', iconSize: [18, 18], iconAnchor: [9, 9] }) }).addTo(map));
  if (pts.length) map.fitBounds(pts.map(x => [x[0], x[1]]), { paddingTopLeft: [Math.min(innerWidth * .45, 700), 120], paddingBottomRight: [80, 120] });
  else map.setView([45.52, -122.62], 11);
  document.querySelectorAll('main > footer').forEach(f => f.insertAdjacentHTML('beforeend', ' · <span class="map-credit">Background imagery © Esri, Maxar, Earthstar Geographics</span>'));
})();

/* ---------- Documents: record types ---------- */
// cells follow cols; `field` says how the add-document form asks for each one
const DOC_TYPES = {
  'Change orders': { one: 'Change order', cols: ['No.', 'Project', 'Description', 'Amount', 'Submitted', 'Status'], right: [3],
    field: ['text', 'project', 'text', 'money', 'date-md', 'status'],
    statuses: [['Draft', 'neutral'], ['In review', 'neutral'], ['Pending owner', 'warn'], ['Approved', 'good'], ['Revise & resubmit', 'serious'], ['Rejected', 'critical']] },
  'Permits': { one: 'Permit', cols: ['Permit', 'Project', 'Type', 'Authority', 'Expires', 'Status'], right: [],
    field: ['text', 'project', 'text', 'text', 'date-mdy', 'status'],
    statuses: [['Applied', 'neutral'], ['In review', 'neutral'], ['Issued', 'good'], ['Expires soon', 'serious'], ['Expired', 'critical']] },
  'Inspections': { one: 'Inspection', cols: ['Date', 'Project', 'Inspection', 'Inspector', 'Time', 'Result'], right: [],
    field: ['date-wmd', 'project', 'text', 'text', 'time', 'status'],
    statuses: [['Scheduled', 'neutral'], ['Scheduled today', 'warn'], ['Passed', 'good'], ['Re-inspection', 'serious'], ['Failed', 'critical']] },
  'Invoices': { one: 'Invoice', cols: ['Invoice', 'Project', 'Party', 'Amount', 'Due', 'Status'], right: [3],
    field: ['text', 'project', 'text', 'money', 'date-md', 'status'],
    statuses: [['In review', 'neutral'], ['Sent', 'neutral'], ['Approved to pay', 'good'], ['Awaiting lien waiver', 'warn'], ['Overdue', 'critical'], ['Paid', 'good']] },
};
const records = DB.records;
const recordsOf = kind => records.filter(r => r.kind === kind);
const fmtSize = b => b == null ? 'Sample PDF' : b < 1024 ? b + ' B' : b < 1048576 ? Math.round(b / 1024) + ' KB' : (b / 1048576).toFixed(1) + ' MB';
const newId = p => p + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const CURRENT_USER = 'Maria Reyes';

/* ---------- Documents: file storage ----------
   File contents live in IndexedDB (room for hundreds of MB); their names, sizes and owners live in DB.records. */
const fileDB = (() => {
  let conn;
  const open = () => conn || (conn = new Promise((res, rej) => {
    const r = indexedDB.open('ironline-files', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('files');
    r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
  }));
  const run = async (mode, fn) => { const db = await open(); return new Promise((res, rej) => {
    const t = db.transaction('files', mode), req = fn(t.objectStore('files'));
    t.oncomplete = () => res(req && req.result); t.onerror = () => rej(t.error); t.onabort = () => rej(t.error);
  }); };
  return { put: (id, blob) => run('readwrite', s => s.put(blob, id)), get: id => run('readonly', s => s.get(id)),
           del: id => run('readwrite', s => s.delete(id)), clear: () => run('readwrite', s => s.clear()) };
})();

// sample files that came with the demo data are drawn on request as one-page PDFs
function demoPdf(rec, file) {
  const t = DOC_TYPES[rec.kind], p = P[rec.cells[1]];
  const ascii = v => String(v).replace(/[—–]/g, '-').replace(/·/g, '-').replace(/[^\x20-\x7e]/g, '');
  const pesc = v => ascii(v).replace(/[\\()]/g, '\\$&');
  const lines = [];
  const text = (x, y, size, str, bold) => lines.push(`BT /${bold ? 'F2' : 'F1'} ${size} Tf 1 0 0 1 ${x} ${y} Tm (${pesc(str)}) Tj ET`);
  let y = 690;
  text(56, y, 20, file.name.replace(/\.pdf$/i, ''), true); y -= 26;
  text(56, y, 11, `${t.one} - ${p ? p.id + ' ' + p.name : rec.cells[1]}`); y -= 36;
  t.cols.forEach((c, i) => {
    const v = rec.cells[i], shown = Array.isArray(v) ? v[0] : typeof v === 'number' ? moneyFull(v) : v;
    text(56, y, 10, c.toUpperCase(), true); text(200, y, 11, shown); y -= 22;
  });
  y -= 20; text(56, y, 9, 'Sample document generated for the Ironline dashboard mockup. Replace with the real file.');
  const content = `0.11 0.11 0.11 rg 0 742 612 50 re f 1 1 1 rg BT /F2 14 Tf 1 0 0 1 56 761 Tm (IRONLINE BUILDERS) Tj ET 0 0 0 rg\n` + lines.join('\n');
  const objs = ['<< /Type /Catalog /Pages 2 0 R >>', '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>',
    `<< /Length ${content.length} >>\nstream\n${content}\nendstream`,
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>', '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>'];
  let pdf = '%PDF-1.4\n'; const offs = [];
  objs.forEach((o, i) => { offs.push(pdf.length); pdf += `${i + 1} 0 obj\n${o}\nendobj\n`; });
  const xref = pdf.length;
  pdf += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n` + offs.map(o => String(o).padStart(10, '0') + ' 00000 n \n').join('') +
    `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return new Blob([pdf], { type: 'application/pdf' });
}
const fileBlob = async (rec, f) => f.demo ? demoPdf(rec, f) : fileDB.get(f.id);
