/* Starting data for the mockup (fictional clients and projects). Users' changes are saved over this in the browser — see the data store in shared.js. */
const SEED = {
  "projects": [
    {
      "id": "P-214",
      "name": "Harbor Point Medical Office",
      "type": "4-story MOB · 62,000 sf",
      "phase": "Interiors",
      "pct": 72,
      "budget": 14800000,
      "spent": 10900000,
      "forecast": 15100000,
      "status": "risk",
      "pm": "D. Okafor",
      "due": "Mar 12, 2027",
      "c": "var(--p1)",
      "over": {
        "MEP": 300000
      },
      "client": "C-01"
    },
    {
      "id": "P-219",
      "name": "Cedar Row Townhomes",
      "type": "24 units · wood frame",
      "phase": "Framing",
      "pct": 41,
      "budget": 9600000,
      "spent": 3700000,
      "forecast": 9400000,
      "status": "on",
      "pm": "A. Lindqvist",
      "due": "Aug 28, 2027",
      "c": "var(--p2)",
      "over": {
        "Finishes": -200000
      },
      "client": "C-02"
    },
    {
      "id": "P-221",
      "name": "Northgate Elementary Addition",
      "type": "14 classrooms · steel",
      "phase": "Envelope",
      "pct": 58,
      "budget": 11200000,
      "spent": 6800000,
      "forecast": 11900000,
      "status": "over",
      "pm": "J. Whitfield",
      "due": "Jul 30, 2027",
      "c": "var(--p3)",
      "over": {
        "Site": 450000,
        "Structure": 250000
      },
      "client": "C-03"
    },
    {
      "id": "P-226",
      "name": "Mill St. Retail Shell",
      "type": "Single-story · 18,500 sf",
      "phase": "Sitework",
      "pct": 18,
      "budget": 4100000,
      "spent": 620000,
      "forecast": 4000000,
      "status": "on",
      "pm": "S. Moreau",
      "due": "May 21, 2027",
      "c": "var(--p4)",
      "over": {
        "Concrete": -100000
      },
      "client": "C-04"
    },
    {
      "id": "P-230",
      "name": "Westlake Distribution Center",
      "type": "Tilt-up · 210,000 sf",
      "phase": "Foundations",
      "pct": 27,
      "budget": 18400000,
      "spent": 4600000,
      "forecast": 18600000,
      "status": "on",
      "pm": "D. Okafor",
      "due": "Nov 15, 2027",
      "c": "var(--p5)",
      "over": {
        "Envelope": 200000
      },
      "client": "C-05"
    },
    {
      "id": "P-208",
      "name": "Riverside Fire Station 9",
      "type": "Essential facility",
      "phase": "Closeout",
      "pct": 96,
      "budget": 6300000,
      "spent": 6100000,
      "forecast": 6250000,
      "status": "on",
      "pm": "A. Lindqvist",
      "due": "Nov 6, 2026",
      "c": "var(--p6)",
      "over": {
        "GC": -50000
      },
      "client": "C-06"
    }
  ],
  "details": {
    "P-214": {
      "address": "1420 Harbor Point Way",
      "city": "Portland, OR 97209",
      "lat": 45.5345,
      "lon": -122.683,
      "architect": "Lund + Ames Architects",
      "contract": "GMP · CM at-risk",
      "size": "62,000 sf · 4 stories",
      "start": "Jan 8, 2026",
      "super": "T. Brennan",
      "photo": "assets/projects/p-214.jpg",
      "credit": {
        "by": "Dclemens1971",
        "license": "CC BY 4.0",
        "url": "https://commons.wikimedia.org/wiki/File:Clinical_Office_Building_and_Outpatient_Clinic_Building_under_construction,_St_Jude.jpg"
      }
    },
    "P-219": {
      "address": "5210 Cedar Row Ln",
      "city": "Portland, OR 97206",
      "lat": 45.5048,
      "lon": -122.6097,
      "architect": "Stillwater Design Studio",
      "contract": "Lump sum",
      "size": "24 units · 41,800 sf",
      "start": "Apr 14, 2026",
      "super": "M. Castillo",
      "photo": "assets/projects/p-219.jpg",
      "credit": {
        "by": "Marek Ślusarczyk (Tupungato)",
        "license": "CC BY 3.0",
        "url": "https://commons.wikimedia.org/wiki/File:25_Wood_frame_condominium_construction_in_Canada_-_apartment_building_construction_in_Fernie,_British_Columbia.jpg"
      }
    },
    "P-221": {
      "address": "8800 Northgate Ave",
      "city": "Portland, OR 97203",
      "lat": 45.5875,
      "lon": -122.708,
      "architect": "Corbel Education Architects",
      "contract": "Design-bid-build",
      "size": "14 classrooms · 38,500 sf",
      "start": "Feb 2, 2026",
      "super": "R. Iqbal",
      "photo": "assets/projects/p-221.jpg",
      "credit": {
        "by": "Tim Sheerman-Chase",
        "license": "CC BY 2.0",
        "url": "https://commons.wikimedia.org/wiki/File:Construction_of_New_Cosham_Fire_Station_3_-_53023468447.jpg"
      }
    },
    "P-226": {
      "address": "310 Mill St",
      "city": "Beaverton, OR 97005",
      "lat": 45.491,
      "lon": -122.803,
      "architect": "Hart Shell Design",
      "contract": "Lump sum",
      "size": "18,500 sf · single story",
      "start": "Sep 1, 2026",
      "super": "K. Osei",
      "photo": "assets/projects/p-226.jpg",
      "credit": {
        "by": "Paul Collins",
        "license": "CC BY-SA 2.0",
        "url": "https://commons.wikimedia.org/wiki/File:Retail_building_under_construction_-_geograph.org.uk_-_5145305.jpg"
      }
    },
    "P-230": {
      "address": "2700 Westlake Industrial Pkwy",
      "city": "Troutdale, OR 97060",
      "lat": 45.548,
      "lon": -122.41,
      "architect": "Ferro Industrial Group",
      "contract": "Design-build",
      "size": "210,000 sf · 42 docks",
      "start": "Jul 20, 2026",
      "super": "B. Novak",
      "photo": "assets/projects/p-230.jpg",
      "credit": {
        "by": "Thomas Roberts",
        "license": "CC BY-SA 2.0",
        "url": "https://commons.wikimedia.org/wiki/File:New_warehouse_under_construction_in_Longbridge_-_geograph.org.uk_-_8311260.jpg"
      }
    },
    "P-208": {
      "address": "9 Riverside Dr",
      "city": "Milwaukie, OR 97222",
      "lat": 45.446,
      "lon": -122.639,
      "architect": "Ardent Civic Architecture",
      "contract": "GMP · CM/GC",
      "size": "14,200 sf · 3 apparatus bays",
      "start": "Aug 11, 2025",
      "super": "L. Ferreira",
      "photo": "assets/projects/p-208.jpg",
      "credit": {
        "by": "Rodhullandemu",
        "license": "CC BY-SA 4.0",
        "url": "https://commons.wikimedia.org/wiki/File:St_Helens_Community_Fire_Station.jpg"
      }
    }
  },
  "clients": [
    {
      "id": "C-01",
      "name": "Harbor Health Partners",
      "office": "2200 NW Lovejoy St, Suite 400, Portland, OR 97210",
      "contacts": [
        {
          "name": "Priya Natarajan",
          "role": "VP, Facilities & Construction",
          "tag": "Primary",
          "phone": "(503) 555-0142",
          "mobile": "(503) 555-0187",
          "email": "p.natarajan@harborhealth.example.com"
        },
        {
          "name": "Greg Halvorsen",
          "role": "Owner's rep · Halvorsen PM",
          "tag": "Owner's rep",
          "phone": "(503) 555-0119",
          "email": "greg@halvorsenpm.example.com"
        },
        {
          "name": "Dana Whitcomb",
          "role": "Accounts payable",
          "tag": "Billing",
          "phone": "(503) 555-0160",
          "email": "ap@harborhealth.example.com"
        }
      ]
    },
    {
      "id": "C-02",
      "name": "Cedar Row Homes LLC",
      "office": "815 SE Hawthorne Blvd, Portland, OR 97214",
      "contacts": [
        {
          "name": "Marcus Bell",
          "role": "Managing Partner",
          "tag": "Primary",
          "phone": "(503) 555-0175",
          "mobile": "(971) 555-0133",
          "email": "marcus@cedarrowhomes.example.com"
        },
        {
          "name": "Hannah Cho",
          "role": "Development Manager",
          "tag": "Day-to-day",
          "phone": "(503) 555-0128",
          "email": "hannah@cedarrowhomes.example.com"
        },
        {
          "name": "Lena Okoro",
          "role": "Controller",
          "tag": "Billing",
          "phone": "(503) 555-0151",
          "email": "billing@cedarrowhomes.example.com"
        }
      ]
    },
    {
      "id": "C-03",
      "name": "Northgate Unified School Dist.",
      "office": "501 N Dixon St, Portland, OR 97227",
      "contacts": [
        {
          "name": "Dr. Alan Pruitt",
          "role": "Director of Capital Projects",
          "tag": "Primary",
          "phone": "(503) 555-0108",
          "mobile": "(503) 555-0194",
          "email": "apruitt@northgateusd.example.com"
        },
        {
          "name": "Rosa Delgado",
          "role": "Principal, Northgate Elementary",
          "tag": "Site contact",
          "phone": "(503) 555-0137",
          "email": "rdelgado@northgateusd.example.com"
        },
        {
          "name": "Kevin Marsh",
          "role": "Business Services · Payables",
          "tag": "Billing",
          "phone": "(503) 555-0166",
          "email": "payables@northgateusd.example.com"
        }
      ]
    },
    {
      "id": "C-04",
      "name": "Millpond Retail Partners",
      "office": "4800 SW Griffith Dr, Suite 210, Beaverton, OR 97005",
      "contacts": [
        {
          "name": "Sofia Brandt",
          "role": "Principal",
          "tag": "Primary",
          "phone": "(503) 555-0183",
          "mobile": "(971) 555-0110",
          "email": "sofia@millpondretail.example.com"
        },
        {
          "name": "Tom Reyes",
          "role": "Leasing & Tenant Coordination",
          "tag": "Tenant",
          "phone": "(503) 555-0145",
          "email": "tom@millpondretail.example.com"
        },
        {
          "name": "June Albright",
          "role": "Accounting",
          "tag": "Billing",
          "phone": "(503) 555-0172",
          "email": "accounting@millpondretail.example.com"
        }
      ]
    },
    {
      "id": "C-05",
      "name": "Westlake Logistics REIT",
      "office": "1100 SW 6th Ave, Floor 18, Portland, OR 97204",
      "contacts": [
        {
          "name": "Nathan Ruiz",
          "role": "SVP, Development",
          "tag": "Primary",
          "phone": "(503) 555-0114",
          "mobile": "(503) 555-0199",
          "email": "nruiz@westlakereit.example.com"
        },
        {
          "name": "Aisha Grant",
          "role": "Construction Manager",
          "tag": "Day-to-day",
          "phone": "(503) 555-0156",
          "email": "agrant@westlakereit.example.com"
        },
        {
          "name": "Owen Park",
          "role": "Draw administration",
          "tag": "Billing",
          "phone": "(503) 555-0131",
          "email": "draws@westlakereit.example.com"
        }
      ]
    },
    {
      "id": "C-06",
      "name": "City of Riverside",
      "office": "10722 SE Main St, Milwaukie, OR 97222",
      "contacts": [
        {
          "name": "Chief Elena Vasquez",
          "role": "Fire Chief",
          "tag": "Primary",
          "phone": "(503) 555-0102",
          "mobile": "(503) 555-0190",
          "email": "evasquez@riverside.example.gov"
        },
        {
          "name": "Brian Toole",
          "role": "City Project Manager, Public Works",
          "tag": "Day-to-day",
          "phone": "(503) 555-0148",
          "email": "btoole@riverside.example.gov"
        },
        {
          "name": "Carla Jensen",
          "role": "Finance · Retainage & pay apps",
          "tag": "Billing",
          "phone": "(503) 555-0163",
          "email": "finance@riverside.example.gov"
        }
      ]
    }
  ],
  "records": [
    {
      "id": "R-001",
      "kind": "Change orders",
      "cells": [
        "CO-214-017",
        "P-214",
        "Owner-added MRI suite RF shielding",
        186400,
        "Oct 14",
        [
          "Pending owner",
          "warn"
        ]
      ],
      "files": [
        {
          "id": "F-demo-001",
          "name": "CO-214-017 Change order request.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        },
        {
          "id": "F-demo-002",
          "name": "RF shielding vendor quote.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    },
    {
      "id": "R-002",
      "kind": "Change orders",
      "cells": [
        "CO-230-002",
        "P-230",
        "Dock leveler spec change (40k lb)",
        61300,
        "Oct 12",
        [
          "Pending owner",
          "warn"
        ]
      ],
      "files": [
        {
          "id": "F-demo-003",
          "name": "CO-230-002 Change order request.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        },
        {
          "id": "F-demo-004",
          "name": "Dock leveler cut sheet.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    },
    {
      "id": "R-003",
      "kind": "Change orders",
      "cells": [
        "CO-219-004",
        "P-219",
        "Window upgrade to Type B units",
        38750,
        "Oct 9",
        [
          "In review",
          "neutral"
        ]
      ],
      "files": [
        {
          "id": "F-demo-005",
          "name": "CO-219-004 Change order request.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    },
    {
      "id": "R-004",
      "kind": "Change orders",
      "cells": [
        "CO-214-018",
        "P-214",
        "Revised ceiling grid at main lobby",
        12900,
        "Oct 19",
        [
          "Draft",
          "neutral"
        ]
      ],
      "files": [
        {
          "id": "F-demo-006",
          "name": "CO-214-018 Draft change order.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    },
    {
      "id": "R-005",
      "kind": "Change orders",
      "cells": [
        "CO-221-009",
        "P-221",
        "Unforeseen rock excavation, east footings",
        94200,
        "Sep 30",
        [
          "Approved",
          "good"
        ]
      ],
      "files": [
        {
          "id": "F-demo-007",
          "name": "CO-221-009 Executed change order.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        },
        {
          "id": "F-demo-008",
          "name": "Geotechnical rock report.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    },
    {
      "id": "R-006",
      "kind": "Change orders",
      "cells": [
        "CO-221-010",
        "P-221",
        "Added fire-alarm devices per AHJ",
        18450,
        "Oct 2",
        [
          "Revise & resubmit",
          "serious"
        ]
      ],
      "files": [
        {
          "id": "F-demo-009",
          "name": "CO-221-010 Change order request.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        },
        {
          "id": "F-demo-010",
          "name": "AHJ plan review comments.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    },
    {
      "id": "R-007",
      "kind": "Permits",
      "cells": [
        "BLD-26-04411",
        "P-214",
        "Right-of-way encroachment",
        "City DOT",
        "Oct 31, 2026",
        [
          "Expires in 11 days",
          "serious"
        ]
      ],
      "files": [
        {
          "id": "F-demo-011",
          "name": "BLD-26-04411 ROW encroachment permit.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    },
    {
      "id": "R-008",
      "kind": "Permits",
      "cells": [
        "ELE-26-01892",
        "P-219",
        "Electrical — Bldgs C/D",
        "City Building Dept.",
        "—",
        [
          "In review",
          "neutral"
        ]
      ],
      "files": [
        {
          "id": "F-demo-012",
          "name": "ELE-26-01892 Permit application.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    },
    {
      "id": "R-009",
      "kind": "Permits",
      "cells": [
        "CO-APP-0318",
        "P-208",
        "Certificate of occupancy",
        "City Building Dept.",
        "—",
        [
          "Applied Oct 15",
          "neutral"
        ]
      ],
      "files": [
        {
          "id": "F-demo-013",
          "name": "Certificate of occupancy application.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    },
    {
      "id": "R-010",
      "kind": "Permits",
      "cells": [
        "GRD-26-00771",
        "P-226",
        "Grading & erosion control",
        "County Public Works",
        "Apr 2, 2027",
        [
          "Issued",
          "good"
        ]
      ],
      "files": [
        {
          "id": "F-demo-014",
          "name": "GRD-26-00771 Grading permit.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        },
        {
          "id": "F-demo-015",
          "name": "Erosion control plan.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    },
    {
      "id": "R-011",
      "kind": "Permits",
      "cells": [
        "BLD-26-05120",
        "P-230",
        "Building — foundation only",
        "County Building",
        "Jun 18, 2027",
        [
          "Issued",
          "good"
        ]
      ],
      "files": [
        {
          "id": "F-demo-016",
          "name": "BLD-26-05120 Foundation permit.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    },
    {
      "id": "R-012",
      "kind": "Permits",
      "cells": [
        "ROF-26-00233",
        "P-221",
        "Re-roof / new membrane",
        "School District / State",
        "Mar 9, 2027",
        [
          "Issued",
          "good"
        ]
      ],
      "files": [
        {
          "id": "F-demo-017",
          "name": "ROF-26-00233 Roofing permit.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    },
    {
      "id": "R-013",
      "kind": "Inspections",
      "cells": [
        "Tue, Oct 20",
        "P-214",
        "Above-ceiling MEP, Level 3",
        "City — R. Haynes",
        "9:00 AM",
        [
          "Scheduled today",
          "warn"
        ]
      ],
      "files": [
        {
          "id": "F-demo-018",
          "name": "P-214 Inspection request confirmation.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    },
    {
      "id": "R-014",
      "kind": "Inspections",
      "cells": [
        "Wed, Oct 21",
        "P-219",
        "Framing, Building C",
        "City — K. Patel",
        "1:30 PM",
        [
          "Scheduled",
          "neutral"
        ]
      ],
      "files": [
        {
          "id": "F-demo-019",
          "name": "P-219 Inspection request confirmation.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    },
    {
      "id": "R-015",
      "kind": "Inspections",
      "cells": [
        "Thu, Oct 22",
        "P-230",
        "Footing pre-pour, grid A–C",
        "County — L. Brandt",
        "7:00 AM",
        [
          "Scheduled",
          "neutral"
        ]
      ],
      "files": [
        {
          "id": "F-demo-020",
          "name": "P-230 Inspection request confirmation.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    },
    {
      "id": "R-016",
      "kind": "Inspections",
      "cells": [
        "Fri, Oct 23",
        "P-214",
        "Fire sprinkler hydrostatic (re-test)",
        "Fire Marshal",
        "10:00 AM",
        [
          "Re-inspection",
          "serious"
        ]
      ],
      "files": [
        {
          "id": "F-demo-021",
          "name": "P-214 Inspection request confirmation.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    },
    {
      "id": "R-017",
      "kind": "Inspections",
      "cells": [
        "Fri, Oct 23",
        "P-208",
        "Final fire & life safety",
        "Fire Marshal",
        "2:00 PM",
        [
          "Scheduled",
          "neutral"
        ]
      ],
      "files": [
        {
          "id": "F-demo-022",
          "name": "P-208 Inspection request confirmation.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    },
    {
      "id": "R-018",
      "kind": "Inspections",
      "cells": [
        "Fri, Oct 16",
        "P-214",
        "Fire sprinkler hydrostatic",
        "Fire Marshal",
        "—",
        [
          "Failed",
          "critical"
        ]
      ],
      "files": [
        {
          "id": "F-demo-023",
          "name": "P-214 Correction notice.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    },
    {
      "id": "R-019",
      "kind": "Inspections",
      "cells": [
        "Thu, Oct 15",
        "P-221",
        "Structural steel connections",
        "Special inspector",
        "—",
        [
          "Passed",
          "good"
        ]
      ],
      "files": [
        {
          "id": "F-demo-024",
          "name": "P-221 Inspection report.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    },
    {
      "id": "R-020",
      "kind": "Invoices",
      "cells": [
        "Pay App #6",
        "P-221",
        "Northgate USD (owner)",
        684500,
        "Oct 8",
        [
          "Overdue 12 days",
          "critical"
        ]
      ],
      "files": [
        {
          "id": "F-demo-025",
          "name": "Pay App #6 (AIA G702-G703).pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    },
    {
      "id": "R-021",
      "kind": "Invoices",
      "cells": [
        "Pay App #12",
        "P-208",
        "City of Riverside (owner) · retainage",
        315000,
        "Oct 16",
        [
          "Overdue 4 days",
          "critical"
        ]
      ],
      "files": [
        {
          "id": "F-demo-026",
          "name": "Pay App #12 retainage release.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    },
    {
      "id": "R-022",
      "kind": "Invoices",
      "cells": [
        "Pay App #9",
        "P-214",
        "Harbor Health (owner)",
        1120000,
        "Nov 5",
        [
          "Sent",
          "neutral"
        ]
      ],
      "files": [
        {
          "id": "F-demo-027",
          "name": "Pay App #9 (AIA G702-G703).pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    },
    {
      "id": "R-023",
      "kind": "Invoices",
      "cells": [
        "SE-4471",
        "P-214",
        "Summit Electric (sub)",
        212300,
        "Oct 25",
        [
          "Approved to pay",
          "good"
        ]
      ],
      "files": [
        {
          "id": "F-demo-028",
          "name": "SE-4471 Invoice.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        },
        {
          "id": "F-demo-029",
          "name": "SE-4471 Conditional lien waiver.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    },
    {
      "id": "R-024",
      "kind": "Invoices",
      "cells": [
        "KC-1189",
        "P-230",
        "Keystone Concrete (sub)",
        148900,
        "Oct 30",
        [
          "Awaiting lien waiver",
          "warn"
        ]
      ],
      "files": [
        {
          "id": "F-demo-030",
          "name": "KC-1189 Invoice.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    },
    {
      "id": "R-025",
      "kind": "Invoices",
      "cells": [
        "TL-0932",
        "P-219",
        "TrueLine Framing (sub)",
        96400,
        "Nov 2",
        [
          "In review",
          "neutral"
        ]
      ],
      "files": [
        {
          "id": "F-demo-031",
          "name": "TL-0932 Invoice.pdf",
          "type": "application/pdf",
          "addedAt": "2026-10-19T08:00:00",
          "addedBy": "Imported",
          "demo": true
        }
      ],
      "notes": "",
      "activity": [
        {
          "at": "2026-10-19T08:00:00",
          "by": "Imported",
          "text": "Imported with demo data"
        }
      ]
    }
  ]
};
