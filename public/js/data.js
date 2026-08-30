/**
 * SRISHTI ESTATE - Master Data Layer
 * Commercial & Industrial Property Solutions
 * Authorized Person: Sanjeet Kumar | 8750098666
 * Office: I-Thum Tower-B, 1035, 10th Floor, Sector-62, Noida, Uttar Pradesh - 201301
 */

const SRISHTI_DATA = {
  brand: {
    name: "Shristi Estate",
    tagline: "Commercial & Industrial Property Solutions",
    owner: "Sanjeet Kumar",
    role: "Principal Commercial Real Estate Advisor",
    phone: "8750098666",
    phoneDisplay: "+91 87500 98666",
    whatsapp: "918750098666",
    email: "contract@shristiestate.in",
    address: {
      tower: "I-Thum Tower-B",
      unit: "Unit 1035, 10th Floor",
      area: "Sector-62",
      city: "Noida",
      state: "Uttar Pradesh",
      pincode: "201301",
      full: "I-Thum Tower-B, 1035, 10th Floor, Sector-62, Noida, Uttar Pradesh – 201301"
    },
    googleMapsUrl: "https://maps.google.com/?q=The+I-Thum+Tower+Sector+62+Noida+Uttar+Pradesh+201301",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5855217438407!2d77.36988877550005!3d28.61220997567798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56627051b73%3A0xc4f598466e344e2b!2sThe%20I-Thum!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    experienceYears: "15+",
    propertiesManaged: "500+",
    corporatesServed: "350+",
    areaTransacted: "2.8M+ Sq.Ft."
  },

  categories: [
    {
      id: "office-spaces",
      name: "Office Spaces",
      title: "Furnished & Commercial Office Spaces",
      desc: "Find fully furnished, plug-and-play, semi-furnished, and bare-shell corporate office spaces tailored for startups, MNCs, and growing enterprises across Noida.",
      icon: "building-2",
      cta: "Explore Office Spaces",
      link: "office-spaces.html",
      badge: "Highest Demand",
      count: "45+ Available"
    },
    {
      id: "it-parks",
      name: "IT / Business Parks",
      title: "Premium Grade-A IT & Business Parks",
      desc: "World-class commercial business centres, modern IT hubs, institutional complexes, and corporate campuses equipped with high-speed fiber and 100% power backup.",
      icon: "cpu",
      cta: "Explore IT Parks",
      link: "it-parks.html",
      badge: "Grade-A Infrastructure",
      count: "30+ Available"
    },
    {
      id: "warehouses",
      name: "Warehouses",
      title: "Warehousing & Logistics Spaces",
      desc: "Strategic logistics parks, storage sheds, distribution centres, and cold storage options with heavy vehicle access, high clear height, and dock levellers.",
      icon: "warehouse",
      cta: "Explore Warehouses",
      link: "warehouses.html",
      badge: "Heavy Vehicle Access",
      count: "22+ Available"
    },
    {
      id: "industrial-properties",
      name: "Industrial Properties",
      title: "Manufacturing & Factory Setups",
      desc: "Approved industrial plots, built-up factory premises, and workshop spaces with dedicated industrial power load, wide road frontages, and pollution clearances.",
      icon: "factory",
      cta: "Explore Industrial Properties",
      link: "industrial-properties.html",
      badge: "UPSIDC Approved",
      count: "28+ Available"
    },
    {
      id: "land",
      name: "Commercial & Industrial Land",
      title: "Strategic Land Opportunities",
      desc: "Prime commercial, institutional, and industrial land parcels with clear titles, sanctionable FAR, and unbeatable highway and expressway connectivity.",
      icon: "map",
      cta: "Explore Land",
      link: "land.html",
      badge: "Clear Title Land",
      count: "15+ Available"
    },
    {
      id: "shops",
      name: "Shops & Retail Spaces",
      title: "High-Street Retail & Commercial Shops",
      desc: "High-footfall retail units, showroom spaces, ground-floor commercial shops, food court spaces, and anchor store locations in bustling commercial sectors.",
      icon: "shopping-bag",
      cta: "Explore Shops",
      link: "shops.html",
      badge: "High Footfall Hubs",
      count: "18+ Available"
    }
  ],

  locations: [
    {
      id: "sector-62",
      name: "Sector 62, Noida",
      slug: "sector-62-noida",
      type: "Commercial & IT Hub",
      category: ["office", "it-park", "shop"],
      tag: "Prime IT Hub",
      availableCount: 42,
      priceRange: "₹45 - ₹75 / sq.ft.",
      saleRange: "₹7,500 - ₹12,000 / sq.ft.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      desc: "The nerve centre of Noida's IT and corporate ecosystem. Home to I-Thum, Noida One, Corenthum, and top multinational corporate headquarters with direct Blue Line Metro access.",
      popularBuildings: ["I-Thum Tower", "KLJ Noida One", "The Iconic Corenthum", "Stellar IT Park", "Masters Capitol Avenue", "Bhutani Cyber Park"],
      metroConnectivity: "Electronic City Metro Station (Blue Line) & Sector 62 Metro Station",
      roadConnectivity: "NH-24 / Delhi-Meerut Expressway, Fortis Hospital Road",
      businessAdvantages: "Established corporate cluster, 24/7 power backup, walk-to-metro convenience, ample executive dining, premier banking branches.",
      faqs: [
        { q: "What is the average rent for office space in Sector 62 Noida?", a: "Furnished office spaces range between ₹50 to ₹75 per sq.ft. per month, while bare shell units start around ₹40 to ₹50 per sq.ft." },
        { q: "Is Sector 62 connected to Delhi Metro?", a: "Yes, Sector 62 is directly connected via the Noida Blue Line through Sector 62 Metro Station and Noida Electronic City Station." }
      ]
    },
    {
      id: "sector-63",
      name: "Sector 63, Noida",
      slug: "sector-63-noida",
      type: "Industrial & IT Zone",
      category: ["office", "industrial", "warehouse", "land"],
      tag: "Industrial & Tech Mixed",
      availableCount: 38,
      priceRange: "₹35 - ₹60 / sq.ft.",
      saleRange: "₹6,500 - ₹10,500 / sq.ft.",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
      desc: "Dynamic commercial & industrial zone bordering the Delhi-Meerut Expressway. Offers independent factory buildings, tech parks, BPO facilities, and warehouse setups.",
      popularBuildings: ["Block A-H Industrial Complexes", "Sector 63 Tech Enclave", "Global Business Tower"],
      metroConnectivity: "Noida Electronic City Metro Station (Blue Line)",
      roadConnectivity: "Direct access to Delhi-Meerut Expressway (NH-9) & Ghaziabad Border",
      businessAdvantages: "High industrial power sanctions, heavy vehicle loading docks, dual industrial/IT zoning, close proximity to East Delhi.",
      faqs: [
        { q: "Are heavy manufacturing setups permitted in Sector 63?", a: "Yes, Sector 63 is a designated UPSIDC industrial sector permitting manufacturing, software development, logistics, and data centers." }
      ]
    },
    {
      id: "noida-expressway",
      name: "Noida Expressway",
      slug: "noida-expressway",
      type: "Grade-A Corporate Corridor",
      category: ["office", "it-park", "shop", "land"],
      tag: "High-End Corporate",
      availableCount: 54,
      priceRange: "₹55 - ₹95 / sq.ft.",
      saleRange: "₹8,500 - ₹15,000 / sq.ft.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      desc: "The fastest growing luxury commercial highway in Delhi-NCR. Houses Fortune 500 tech campuses, Advant Navis, Assotech Cresterra, and institutional centers.",
      popularBuildings: ["Advant Navis Business Park", "Assotech Business Cresterra", "ATS Bouquet", "Oxygen Business Park"],
      metroConnectivity: "Aqua Line Metro Stations (Sector 137, 142, 143, 144)",
      roadConnectivity: "6-Lane Noida-Greater Noida Expressway, connecting directly to Yamuna Expressway & DND Flyway",
      businessAdvantages: "World-class Grade-A certified green buildings, expansive floor plates up to 50,000 sq.ft., multi-level basements, top corporate prestige.",
      faqs: [
        { q: "Why do multinational corporations prefer Noida Expressway?", a: "Noida Expressway offers modern Grade-A LEED certified campuses, massive floor plates, superior air quality, and seamless connectivity to South Delhi and Jewar Airport." }
      ]
    },
    {
      id: "film-city",
      name: "Film City, Noida (Sector 16A)",
      slug: "film-city-noida",
      type: "Media & Corporate Hub",
      category: ["office", "it-park"],
      tag: "Elite Media & Corporate",
      availableCount: 16,
      priceRange: "₹75 - ₹120 / sq.ft.",
      saleRange: "₹12,000 - ₹18,000 / sq.ft.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      desc: "Prestigious institutional district home to national news networks, broadcasting conglomerates, and premier corporate headquarters right next to the DND Flyway.",
      popularBuildings: ["FC-24 Media House", "Marwah Studios Complex", "Corporate Park 16A"],
      metroConnectivity: "Sector 16 Metro Station (Blue Line)",
      roadConnectivity: "Direct 2-minute connection to DND Flyway (5 mins to South Delhi)",
      businessAdvantages: "Unmatched location branding, 5-minute travel time to Delhi, dedicated power infrastructure, highest corporate prestige in Noida.",
      faqs: [
        { q: "How close is Film City Noida to Delhi?", a: "Film City is located right at the start of DND Flyway, reaching South Delhi (Maharani Bagh/Sarai Kale Khan) in just 5 to 7 minutes." }
      ]
    },
    {
      id: "sector-18",
      name: "Sector 18 & Wave One, Noida",
      slug: "sector-18-noida",
      type: "Commercial & Retail CBD",
      category: ["office", "shop"],
      tag: "Central Business District",
      availableCount: 26,
      priceRange: "₹70 - ₹140 / sq.ft.",
      saleRange: "₹14,000 - ₹25,000 / sq.ft.",
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=800&q=80",
      desc: "The Central Business District (CBD) of Noida. Maximum footfall, financial hub with all major national banks, Wave One commercial landmark, and luxury malls.",
      popularBuildings: ["Wave One Commercial", "Ocean Complex", "Chandi Complex", "Centerstage Mall Commercial"],
      metroConnectivity: "Sector 18 Metro Station (Blue Line)",
      roadConnectivity: "Maharaja Agrasen Marg, Atta Market Main Corridor",
      businessAdvantages: "Highest retail density, top financial and consulting firm presence, bustling food and entertainment ecosystem.",
      faqs: [
        { q: "Is retail shop space available for lease in Sector 18?", a: "Yes, premium ground floor and upper floor high-street retail units are available for immediate lease and sale." }
      ]
    },
    {
      id: "sector-132",
      name: "Sector 132 & ATS Bouquet, Noida",
      slug: "sector-132-noida",
      type: "Institutional & IT Corridor",
      category: ["office", "it-park", "shop"],
      tag: "Expressway Institutional Hub",
      availableCount: 22,
      priceRange: "₹50 - ₹80 / sq.ft.",
      saleRange: "₹8,000 - ₹13,000 / sq.ft.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
      desc: "Prominent institutional and corporate zone on Noida Expressway housing ATS Bouquet, premier international schools (DPS, Step by Step), and major IT buildings.",
      popularBuildings: ["ATS Bouquet", "Express Trade Towers 2", "Logix Techno Park"],
      metroConnectivity: "Sector 137 Metro Station (Aqua Line)",
      roadConnectivity: "Noida-Greater Noida Expressway Sector 132 Exit",
      businessAdvantages: "Architecturally stunning commercial landmarks, wide green boulevards, excellent visitor parking.",
      faqs: [
        { q: "What configurations are available in ATS Bouquet?", a: "ATS Bouquet offers Grade-A office units from 805 sq.ft. to contiguous floor plates of 25,000 sq.ft." }
      ]
    },
    {
      id: "sector-135",
      name: "Sector 135 & Assotech Cresterra, Noida",
      slug: "sector-135-noida",
      type: "Integrated Business Park Zone",
      category: ["office", "it-park", "shop"],
      tag: "Mega IT Campus",
      availableCount: 30,
      priceRange: "₹50 - ₹85 / sq.ft.",
      saleRange: "₹8,500 - ₹14,000 / sq.ft.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      desc: "Home to Assotech Business Cresterra and Genpact/Accenture campuses. Self-sustaining corporate environment with luxury serviced apartments and food courts.",
      popularBuildings: ["Assotech Business Cresterra (ABC)", "Candor TechSpace", "Uptown Square"],
      metroConnectivity: "Sector 137 / Sector 142 Metro Station",
      roadConnectivity: "Direct entry from Noida Expressway",
      businessAdvantages: "Campus-style work environment, helipad, 4-star business hotel inside, central amphitheatre and dining plaza.",
      faqs: [
        { q: "Does Assotech Cresterra have food courts and retail?", a: "Yes, it houses multi-cuisine food courts, coffee chains, executive gyms, and retail conveniences." }
      ]
    },
    {
      id: "sector-125",
      name: "Sector 125, Noida",
      slug: "sector-125-noida",
      type: "IT & Corporate Enclave",
      category: ["office", "it-park", "land"],
      tag: "Expressway Entry Point",
      availableCount: 19,
      priceRange: "₹65 - ₹95 / sq.ft.",
      saleRange: "₹10,000 - ₹16,000 / sq.ft.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      desc: "Located right at the zero point of Noida Expressway near Amity University and Okhla Bird Sanctuary. Quick 3-minute access to South Delhi.",
      popularBuildings: ["Riverfront Tower", "Amity Innovation Hub", "Tech Boulevard"],
      metroConnectivity: "Okhla Bird Sanctuary Metro Station (Magenta Line)",
      roadConnectivity: "Kalindi Kunj Bridge & Noida-Greater Noida Expressway",
      businessAdvantages: "Closest Expressway sector to South Delhi, access to young talent from premier universities, Magenta Line metro link.",
      faqs: [
        { q: "Can Delhi commuters easily access Sector 125?", a: "Yes, it is connected via Kalindi Kunj and the Magenta Line Metro, taking only 10 mins from Kalkaji and Nehru Place." }
      ]
    },
    {
      id: "sector-2",
      name: "Sector 2 & Sector 3, Noida",
      slug: "sector-2-3-noida",
      type: "Commercial & SME Hub",
      category: ["office", "industrial", "shop"],
      tag: "Close to Delhi Border",
      availableCount: 28,
      priceRange: "₹40 - ₹65 / sq.ft.",
      saleRange: "₹7,000 - ₹11,000 / sq.ft.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      desc: "Established central commercial sectors right opposite Sector 15 Metro Station. Very cost-effective for growing businesses, consultancies, and media studios.",
      popularBuildings: ["Sector 2 Commercial Plaza", "Sector 3 Tech Enclave"],
      metroConnectivity: "Sector 15 & Sector 16 Metro Stations (Blue Line)",
      roadConnectivity: "DND Flyway & Ashok Nagar / Mayur Vihar Border",
      businessAdvantages: "Lowest commute time for East & Central Delhi workforce, economical rentals, established commercial infrastructure.",
      faqs: [
        { q: "Are small office spaces (1,000 - 2,500 sq ft) available in Sector 2?", a: "Yes, many independent floors and commercial buildings offer compact, plug-and-play furnished offices." }
      ]
    },
    {
      id: "sector-1",
      name: "Sector 1, Noida",
      slug: "sector-1-noida",
      type: "Commercial & Industrial",
      category: ["office", "industrial", "warehouse"],
      tag: "Entry Point of Noida",
      availableCount: 14,
      priceRange: "₹35 - ₹55 / sq.ft.",
      saleRange: "₹6,000 - ₹9,500 / sq.ft.",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
      desc: "Immediate entry sector adjacent to New Ashok Nagar Delhi. Excellent for distribution, corporate offices, and regional service hubs.",
      popularBuildings: ["Sector 1 Commercial Complex", "Mayur Gateway Tower"],
      metroConnectivity: "New Ashok Nagar Metro Station",
      roadConnectivity: "Border road connecting directly to East Delhi",
      businessAdvantages: "Immediate Delhi border adjacency, economical operational costs.",
      faqs: [
        { q: "Is commercial warehousing permitted in Sector 1?", a: "Yes, compact storage and urban logistics setups are widely operational." }
      ]
    },
    {
      id: "indirapuram",
      name: "Indirapuram & NH-24 Hub",
      slug: "indirapuram-nh24",
      type: "Commercial & Retail Center",
      category: ["office", "shop"],
      tag: "NCR Border Commercial",
      availableCount: 18,
      priceRange: "₹45 - ₹80 / sq.ft.",
      saleRange: "₹8,000 - ₹14,000 / sq.ft.",
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=800&q=80",
      desc: "Located on the 14-lane Delhi-Meerut Expressway adjacent to Noida Sector 62. High residential catchment with modern commercial office complexes.",
      popularBuildings: ["Aditya Corporate Hub", "Windsor IT Hub", "Shipra Commercial"],
      metroConnectivity: "Noida Electronic City Metro (3 mins drive)",
      roadConnectivity: "14-Lane Delhi-Meerut Expressway (NH-9)",
      businessAdvantages: "Massive residential talent pool within 2 kms walking distance, prominent highway visibility.",
      faqs: [
        { q: "Is Indirapuram suitable for corporate branch offices?", a: "Yes, especially for companies whose workforce resides in Ghaziabad, East Delhi, and Noida." }
      ]
    },
    // Industrial & Factory Locations
    {
      id: "sector-83",
      name: "Sector 83, Noida",
      slug: "sector-83-noida",
      type: "Industrial & Manufacturing Zone",
      category: ["industrial", "warehouse", "land"],
      tag: "Metro-Connected Industrial",
      availableCount: 24,
      priceRange: "₹28 - ₹45 / sq.ft.",
      saleRange: "₹5,500 - ₹9,000 / sq.ft.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      desc: "Prime industrial hub with dedicated Sector 83 Metro station (Aqua Line). Ideal for manufacturing units, engineering workshops, and logistics hubs.",
      popularBuildings: ["NSEZ Industrial Cluster", "Sector 83 Manufacturing Enclave"],
      metroConnectivity: "Sector 83 Metro Station (Aqua Line)",
      roadConnectivity: "FNG Corridor & Noida Expressway link",
      businessAdvantages: "Direct Aqua line metro connectivity for factory staff, high tension electricity load available, wide 24m & 30m roads.",
      faqs: [
        { q: "What is the road width in Sector 83 for heavy container trailers?", a: "Sector 83 features 24-meter and 30-meter wide roads designed for 40-foot container trucks." }
      ]
    },
    {
      id: "ecotech-1-ext",
      name: "Ecotech-1 Extension, Greater Noida",
      slug: "ecotech-1-greater-noida",
      type: "Heavy Industrial & Logistics Hub",
      category: ["industrial", "warehouse", "land"],
      tag: "Mega Industrial Hub",
      availableCount: 32,
      priceRange: "₹20 - ₹35 / sq.ft.",
      saleRange: "₹3,800 - ₹6,500 / sq.ft.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      desc: "The manufacturing epicenter of NCR. Home to automobile giants, electronics manufacturers, mega logistics parks, and Jewar Airport corridor access.",
      popularBuildings: ["Ecotech Mega Industrial Park", "Greater Noida Logistics Hub"],
      metroConnectivity: "Delta 1 & Depot Metro Stations (Aqua Line)",
      roadConnectivity: "Yamuna Expressway, Eastern Peripheral Expressway (EPE), Noida Expressway",
      businessAdvantages: "Closest industrial zone to upcoming Noida International Airport (Jewar), uninterrupted industrial power, low rental and acquisition costs.",
      faqs: [
        { q: "How far is Ecotech-1 from Jewar International Airport?", a: "It is approximately 25 minutes via the 6-lane Yamuna Expressway." }
      ]
    },
    {
      id: "phase-2",
      name: "Phase-II & NSEZ, Noida",
      slug: "phase-2-noida",
      type: "Export & Industrial Zone",
      category: ["industrial", "warehouse", "office"],
      tag: "Export Zone & Industry",
      availableCount: 29,
      priceRange: "₹25 - ₹42 / sq.ft.",
      saleRange: "₹5,000 - ₹8,500 / sq.ft.",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
      desc: "Noida's oldest and most organized industrial & export processing zone (NSEZ). Ideal for garments, pharmaceuticals, electronics, and assembly plants.",
      popularBuildings: ["NSEZ Export Complex", "Phase-2 Industrial Estate"],
      metroConnectivity: "NSEZ Metro Station (Aqua Line)",
      roadConnectivity: "Dadri Main Road & Noida-Greater Noida Link",
      businessAdvantages: "Duty exemptions for NSEZ units, ready industrial labor force, dedicated fire and municipal services.",
      faqs: [
        { q: "Are custom-bonded warehousing facilities available in Phase-II / NSEZ?", a: "Yes, both domestic tariff area (DTA) and Special Economic Zone (SEZ) setups are available." }
      ]
    },
    {
      id: "sector-85",
      name: "Sector 85, Noida",
      slug: "sector-85-noida",
      type: "Industrial & Warehousing",
      category: ["industrial", "warehouse", "land"],
      tag: "Strategic Industrial",
      availableCount: 20,
      priceRange: "₹26 - ₹40 / sq.ft.",
      saleRange: "₹5,200 - ₹8,200 / sq.ft.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      desc: "Well-developed industrial sector adjacent to Sector 83 and 84. Perfect for FMCG distribution, fabrication units, and industrial research labs.",
      popularBuildings: ["Sector 85 Industrial Enclave", "NCR Cargo Hub"],
      metroConnectivity: "Sector 83 Metro Station (Aqua Line)",
      roadConnectivity: "FNG Expressway Corridor",
      businessAdvantages: "High floor load capacities, dedicated transformer setups, efficient road grid for commercial transport.",
      faqs: [
        { q: "What plot sizes are available in Sector 85 Noida?", a: "Industrial plots and built-up sheds range from 500 sq.meters up to 5,000 sq.meters." }
      ]
    }
  ],

  projects: [
    {
      id: "i-thum-sector-62",
      name: "The I-Thum Tower",
      slug: "i-thum-tower-sector-62",
      tagline: "Premier Grade-A IT Landmark & Headquarters of Srishti Estate",
      location: "Sector 62, Noida",
      locationId: "sector-62",
      propertyType: "IT / Business Park & Office Space",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1200&q=80"
      ],
      badge: "Srishti Estate HQ",
      availableSpace: "1,200 - 45,000 Sq.Ft.",
      furnishingStatus: "Furnished, Semi-Furnished & Bare Shell",
      rentSale: "Rent: ₹55 - ₹75 / sq.ft. | Sale: ₹8,500 / sq.ft.",
      overview: "The I-Thum is a landmark twin-tower commercial development in Sector 62 Noida. Spanning 5 acres with cutting-edge IT infrastructure, 3-level basement parking, central air conditioning, high-speed automated elevators, multi-cuisine food courts, and a prime location right near the Electronic City Metro Station. Srishti Estate's primary corporate office is located at Unit 1035, Tower-B, 10th Floor.",
      sizeOptions: ["1,200 Sq.Ft. (15-20 Seats)", "2,500 Sq.Ft. (30-40 Seats)", "5,000 Sq.Ft. (60-80 Seats)", "12,000 Sq.Ft. (150+ Seats)", "Contiguous Floor 25,000 Sq.Ft."],
      amenities: [
        "100% Power Backup (Dual DG Sets)",
        "3-Tier Biometric & RFID Security",
        "3-Level Basement Automated Parking",
        "Centralized Chilled Water HVAC System",
        "Multi-Cuisine Food Court & Cafes",
        "High-Speed OTIS Elevators",
        "Bank Branches & 24/7 ATMs",
        "Executive Conference Facilities",
        "Electric Vehicle (EV) Charging Stations"
      ],
      nearbyLandmarks: ["Fortis Hospital (1 km)", "Electronic City Metro Station (800m)", "Ginger Hotel (500m)", "Delhi-Meerut Expressway (1.2 km)"],
      metroConnectivity: "Electronic City Metro Station (Blue Line) - 3 mins walk",
      roadConnectivity: "NH-24 / Delhi-Meerut Expressway, Fortis Hospital Main Sector Road",
      ecosystem: "Home to 200+ technology, fintech, edtech, corporate legal, and consultancy firms.",
      mapCoordinates: { lat: 28.6122, lng: 77.3699 }
    },
    {
      id: "i-thum-heights-sector-62",
      name: "I-Thum Heights",
      slug: "i-thum-heights-sector-62",
      tagline: "Next-Generation Smart Commercial Office Towers",
      location: "Sector 62, Noida",
      locationId: "sector-62",
      propertyType: "IT / Business Park",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
      ],
      badge: "Ultra Modern",
      availableSpace: "1,500 - 30,000 Sq.Ft.",
      furnishingStatus: "Furnished & Plug-and-Play",
      rentSale: "Rent: ₹58 - ₹78 / sq.ft. | Sale: ₹8,800 / sq.ft.",
      overview: "I-Thum Heights represents the premium extension of the I-Thum corporate campus. Featuring double-glazed glass facades, smart building management systems (BMS), LEED-compliant energy efficiency, and modern collaborative breakout lounges.",
      sizeOptions: ["1,500 Sq.Ft.", "3,200 Sq.Ft.", "7,500 Sq.Ft.", "15,000 Sq.Ft."],
      amenities: ["Smart BMS System", "Double Height Grand Lobby", "High Speed Elevators", "100% Power Backup", "Terrace Garden Lounge", "EV Charging Station"],
      nearbyLandmarks: ["Electronic City Metro", "Symbiosis Institute", "Fortis Hospital"],
      metroConnectivity: "Electronic City Metro Station (Blue Line)",
      roadConnectivity: "Direct access to Delhi-Meerut Expressway",
      ecosystem: "Software export firms, AI startups, international consultants.",
      mapCoordinates: { lat: 28.6135, lng: 77.3710 }
    },
    {
      id: "klj-noida-one",
      name: "KLJ Noida One",
      slug: "klj-noida-one-sector-62",
      tagline: "Sprawling 3-Tower Commercial IT Complex",
      location: "Sector 62, Noida",
      locationId: "sector-62",
      propertyType: "IT Park & Commercial Offices",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
      ],
      badge: "High Efficiency",
      availableSpace: "1,000 - 50,000 Sq.Ft.",
      furnishingStatus: "Furnished & Bare Shell",
      rentSale: "Rent: ₹50 - ₹70 / sq.ft. | Sale: ₹7,800 / sq.ft.",
      overview: "KLJ Noida One is one of Sector 62's most established Grade-A business campuses, comprising three massive interconnected towers with expansive floor plates, lavish landscaped greens, central food court, and high space efficiency.",
      sizeOptions: ["1,000 Sq.Ft.", "2,800 Sq.Ft.", "6,000 Sq.Ft.", "20,000 Sq.Ft."],
      amenities: ["Large Floor Plates", "Landscaped Courtyard", "Multi-Tier Security", "Ample Surface & Basement Parking", "Cafes & Dining"],
      nearbyLandmarks: ["Jaypee Institute", "Fortis Hospital", "Noida Electronic City Metro"],
      metroConnectivity: "Electronic City Metro Station (5 mins)",
      roadConnectivity: "Sector 62 Main Ring Road & NH-24",
      ecosystem: "BPOs, IT consulting, e-commerce backend operations.",
      mapCoordinates: { lat: 28.6180, lng: 77.3750 }
    },
    {
      id: "assotech-business-cresterra",
      name: "Assotech Business Cresterra (ABC)",
      slug: "assotech-business-cresterra-noida",
      tagline: "Eco-Friendly Grade-A Integrated Business Hub on Noida Expressway",
      location: "Sector 135, Noida Expressway",
      locationId: "sector-135",
      propertyType: "Integrated IT & Business Park",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1200&q=80"
      ],
      badge: "Expressway Landmark",
      availableSpace: "2,000 - 75,000 Sq.Ft.",
      furnishingStatus: "Fully Furnished & Custom Warm Shell",
      rentSale: "Rent: ₹55 - ₹85 / sq.ft. | Sale: ₹9,200 / sq.ft.",
      overview: "Assotech Business Cresterra (ABC) is an upscale 14-acre self-contained corporate park on Noida Expressway. It features intelligent building systems, serviced suites, premium dining avenues, and multi-tier energy conservation.",
      sizeOptions: ["2,000 Sq.Ft.", "5,000 Sq.Ft.", "15,000 Sq.Ft.", "40,000 Sq.Ft."],
      amenities: ["Serviced Apartments On-Site", "Central Water Body & Greens", "Helipad Access", "High-End Gymnasium", "Multi-Cuisine Restaurants"],
      nearbyLandmarks: ["Genpact Campus", "Sector 137 Metro Station", "Felix Hospital"],
      metroConnectivity: "Sector 137 & Sector 142 Metro Stations (Aqua Line)",
      roadConnectivity: "Zero KM from Noida-Greater Noida Expressway",
      ecosystem: "Fortune 500 tech companies, financial services, global consultancy firms.",
      mapCoordinates: { lat: 28.5080, lng: 77.4080 }
    },
    {
      id: "advant-navis-business-park",
      name: "Advant Navis Business Park",
      slug: "advant-navis-business-park-noida",
      tagline: "Iconic Grade-A LEED Gold Certified Corporate Campus",
      location: "Sector 142, Noida Expressway",
      locationId: "noida-expressway",
      propertyType: "Grade-A IT & Business Park",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
      ],
      badge: "LEED Gold Certified",
      availableSpace: "3,000 - 60,000 Sq.Ft.",
      furnishingStatus: "Premium Furnished & Bare Shell",
      rentSale: "Rent: ₹65 - ₹95 / sq.ft. | Sale: ₹12,000 / sq.ft.",
      overview: "Advant Navis is one of the most prestigious commercial landmarks in North India. Located directly on Sector 142 Metro station, it features striking modern twin towers, top-tier international F&B brands (Starbucks, Subway, Haldiram), and superior building acoustics.",
      sizeOptions: ["3,000 Sq.Ft.", "8,500 Sq.Ft.", "22,000 Sq.Ft.", "50,000 Sq.Ft."],
      amenities: ["Direct Metro Skywalk", "LEED Gold Certified Efficiency", "World-Class Retail Arcade", "Triple Basement Automated Parking", "Helipad"],
      nearbyLandmarks: ["Sector 142 Metro Station", "FNG Interchange", "Felix Hospital"],
      metroConnectivity: "Sector 142 Metro Station directly opposite",
      roadConnectivity: "Noida-Greater Noida Expressway & FNG Expressway Junction",
      ecosystem: "Samsung, British Telecom, KPMG associates, top tech MNCs.",
      mapCoordinates: { lat: 28.5000, lng: 77.4170 }
    },
    {
      id: "wtt-sector-16",
      name: "World Trade Tower (WTT)",
      slug: "world-trade-tower-wtt-sector-16",
      tagline: "Prime Grade-A Commercial Tower at Delhi Border",
      location: "Sector 16, Noida",
      locationId: "film-city",
      propertyType: "Premium Commercial Tower",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
      ],
      badge: "Prime Border Landmark",
      availableSpace: "2,500 - 35,000 Sq.Ft.",
      furnishingStatus: "Fully Furnished Luxury Fit-outs",
      rentSale: "Rent: ₹75 - ₹110 / sq.ft. | Sale: ₹15,500 / sq.ft.",
      overview: "World Trade Tower (WTT) stands as the marquee gateway building of Noida right at the Delhi-Noida border. Featuring 34 floors of ultra-luxurious office spaces, dedicated high-speed elevators, grand arrival lobby, and instant Blue Line Metro connectivity.",
      sizeOptions: ["2,500 Sq.Ft.", "6,000 Sq.Ft.", "14,000 Sq.Ft.", "30,000 Sq.Ft."],
      amenities: ["34-Storey Modern Skyscraper", "Sector 16 Metro Station Adjacent", "Panoramic Delhi-Noida Views", "Executive Business Lounge", "Valet Parking"],
      nearbyLandmarks: ["Sector 16 Metro Station (0 min)", "Film City (1 km)", "DND Flyway (2 km)", "Radisson Blu Hotel"],
      metroConnectivity: "Sector 16 Metro Station right at doorstep",
      roadConnectivity: "DND Flyway, Captain Shashi Kant Marg",
      ecosystem: "Investment banks, venture capital funds, telecom giants, corporate leadership suites.",
      mapCoordinates: { lat: 28.5780, lng: 77.3180 }
    },
    {
      id: "stellar-it-park",
      name: "Stellar IT Park",
      slug: "stellar-it-park-sector-62",
      tagline: "Established Green IT Campus in Sector 62",
      location: "Sector 62, Noida",
      locationId: "sector-62",
      propertyType: "IT Park & Office Space",
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1200&q=80"
      ],
      badge: "High Value Campus",
      availableSpace: "1,500 - 25,000 Sq.Ft.",
      furnishingStatus: "Furnished & Plug-and-Play",
      rentSale: "Rent: ₹48 - ₹68 / sq.ft. | Sale: ₹7,500 / sq.ft.",
      overview: "Stellar IT Park offers an energy-efficient, well-maintained corporate environment with spacious floor plates, an on-site gym, cafeteria, and landscaped grounds in the heart of Sector 62.",
      sizeOptions: ["1,500 Sq.Ft.", "4,000 Sq.Ft.", "10,000 Sq.Ft."],
      amenities: ["Gym & Recreational Zone", "Central Food Court", "100% Power Backup", "Dedicated Visitor Parking"],
      nearbyLandmarks: ["Electronic City Metro", "National Institute of Biologicals"],
      metroConnectivity: "Sector 62 Metro (Blue Line)",
      roadConnectivity: "Sector 62 Institutional Ring Road",
      ecosystem: "IT services, telecom engineering, software development labs.",
      mapCoordinates: { lat: 28.6250, lng: 77.3680 }
    },
    {
      id: "the-iconic-corenthum",
      name: "The Iconic Corenthum",
      slug: "the-iconic-corenthum-sector-62",
      tagline: "Landmark Commercial Complex near Electronic City Metro",
      location: "Sector 62, Noida",
      locationId: "sector-62",
      propertyType: "IT / Commercial Office",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
      ],
      badge: "Walk to Metro",
      availableSpace: "1,000 - 32,000 Sq.Ft.",
      furnishingStatus: "Furnished, Semi-Furnished & Bare Shell",
      rentSale: "Rent: ₹52 - ₹72 / sq.ft. | Sale: ₹8,200 / sq.ft.",
      overview: "The Corenthum is recognized for its unique glass-and-steel architectural design, lush central atrium with water bodies, rooftop helipad, and unbeatable 2-minute walk from Noida Electronic City Metro Station.",
      sizeOptions: ["1,000 Sq.Ft.", "3,500 Sq.Ft.", "8,000 Sq.Ft.", "18,000 Sq.Ft."],
      amenities: ["Spectacular Central Atrium", "2-Minute Walk to Metro", "Multi-Level Basements", "Fine Dining & Cafeterias"],
      nearbyLandmarks: ["Noida Electronic City Metro (200m)", "NH-24", "Ginger Hotel"],
      metroConnectivity: "Electronic City Metro Station (200 meters)",
      roadConnectivity: "Immediate access to NH-9 / Delhi-Meerut Expressway",
      ecosystem: "Corporate headquarters, legal firms, IT export units.",
      mapCoordinates: { lat: 28.6150, lng: 77.3730 }
    },
    {
      id: "masters-capitol-avenue",
      name: "Masters Capitol Avenue",
      slug: "masters-capitol-avenue-sector-62",
      tagline: "Ultra-Premium New-Age Commercial Destination",
      location: "Sector 62, Noida",
      locationId: "sector-62",
      propertyType: "Commercial Offices & High-Street Retail",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
      ],
      badge: "New Luxury Launch",
      availableSpace: "850 - 25,000 Sq.Ft.",
      furnishingStatus: "Bare Shell & Custom Fit-outs",
      rentSale: "Rent: ₹60 - ₹85 / sq.ft. | Sale: ₹9,500 / sq.ft.",
      overview: "Masters Capitol Avenue is the newest premium commercial landmark in Sector 62, combining luxury Grade-A office spaces with an expansive open-air high-street retail boulevard and fine dining sky deck.",
      sizeOptions: ["850 Sq.Ft.", "2,200 Sq.Ft.", "5,500 Sq.Ft.", "16,000 Sq.Ft."],
      amenities: ["High-Street Retail Promenade", "Sky Deck Dining", "Automated BMS", "High Speed Capsule Lifts"],
      nearbyLandmarks: ["Sector 62 Metro Station", "Fortis Hospital", "Noida Stadium"],
      metroConnectivity: "Sector 62 Metro Station (Blue Line)",
      roadConnectivity: "NH-24 & Sector 62 Main Arterial Avenue",
      ecosystem: "Retail flagships, creative agencies, international tech offices.",
      mapCoordinates: { lat: 28.6190, lng: 77.3650 }
    }
  ],

  properties: [
    {
      id: "prop-ithum-1035-furn",
      title: "Premium Furnished Office at The I-Thum Tower-B",
      shortTitle: "Furnished Office Unit - I-Thum Tower B",
      slug: "furnished-office-ithum-tower-b-sector-62",
      buildingId: "i-thum-sector-62",
      buildingName: "The I-Thum Tower",
      location: "Sector 62, Noida",
      locationId: "sector-62",
      category: "office-spaces",
      categoryName: "Office Space",
      propertyType: "Office",
      purpose: "Rent",
      furnishing: "Furnished",
      areaSqFt: 2850,
      carpetAreaSqFt: 2150,
      priceRent: 171000,
      pricePerSqFtRent: 60,
      priceDisplayRent: "₹1,71,000 / month (₹60/sq.ft.)",
      priceSale: null,
      priceDisplaySale: null,
      workstations: 36,
      cabins: 4,
      conferenceRooms: 1,
      meetingRooms: 1,
      pantry: "Private Wet Pantry",
      washrooms: "Dedicated Executive + Common",
      floor: "10th Floor",
      totalFloors: "12 Floors",
      carParking: "3 Reserved Covered Basements",
      facing: "North-East (Vastu Compliant)",
      badge: "Verified Listing • Ready to Move",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
      ],
      features: [
        "Plug-and-play setup with 36 ergonomic modular workstations",
        "4 Director / Manager cabins with executive Italian desks",
        "12-seater boardroom with video conferencing screen",
        "Dedicated server room with dual precision AC provision",
        "Modern reception desk and guest waiting lounge",
        "100% DG power backup & centralized chilled water AC",
        "Electronic City Metro Station within 500 meters"
      ],
      description: "Exceptional fully furnished commercial office space available for immediate lease in The I-Thum Tower-B, Sector 62 Noida. Designed with top-grade acoustic partitions, ergonomic chairs, modern false ceiling with LED lighting, and abundant natural light throughout the workday. Perfect for software development firms, financial advisory, and growing startups looking for a prestigious corporate address.",
      verifiedBy: "Sanjeet Kumar (Srishti Estate)"
    },
    {
      id: "prop-advant-navis-corp-floor",
      title: "Grade-A Corporate Floor at Advant Navis Business Park",
      shortTitle: "Corporate Floor - Advant Navis",
      slug: "grade-a-office-advant-navis-noida-expressway",
      buildingId: "advant-navis-business-park",
      buildingName: "Advant Navis Business Park",
      location: "Sector 142, Noida Expressway",
      locationId: "noida-expressway",
      category: "it-parks",
      categoryName: "IT / Business Park",
      propertyType: "IT Park",
      purpose: "Rent",
      furnishing: "Furnished",
      areaSqFt: 12500,
      carpetAreaSqFt: 9800,
      priceRent: 937500,
      pricePerSqFtRent: 75,
      priceDisplayRent: "₹9,37,500 / month (₹75/sq.ft.)",
      priceSale: null,
      priceDisplaySale: null,
      workstations: 140,
      cabins: 10,
      conferenceRooms: 2,
      meetingRooms: 3,
      pantry: "Modern Cafeteria & Breakout Lounge",
      washrooms: "Luxury Dedicated Restrooms",
      floor: "8th Floor",
      totalFloors: "16 Floors",
      carParking: "12 Reserved Basements",
      facing: "Expressway Facing",
      badge: "LEED Gold Landmark",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
      ],
      features: [
        "Grade-A LEED Gold Certified corporate facility",
        "Direct skywalk to Sector 142 Aqua Line Metro Station",
        "140+ premium workstations and executive corner suites",
        "20-seater board room with integrated AV systems",
        "Dedicated cafeteria inside the unit for 50 people",
        "Uninterrupted dual 33KV power grid supply + DG backup",
        "Multi-cuisine on-site food street including Starbucks & Subway"
      ],
      description: "State-of-the-art contiguous corporate office floor in North India's premier business park, Advant Navis on Noida Expressway. Impeccable infrastructure designed to meet global Fortune 500 standards.",
      verifiedBy: "Sanjeet Kumar (Srishti Estate)"
    },
    {
      id: "prop-assotech-cresterra-5500",
      title: "Modern Plug & Play IT Office at Assotech Cresterra",
      shortTitle: "IT Office - Assotech Cresterra",
      slug: "modern-it-office-assotech-cresterra-sector-135",
      buildingId: "assotech-business-cresterra",
      buildingName: "Assotech Business Cresterra",
      location: "Sector 135, Noida Expressway",
      locationId: "sector-135",
      category: "it-parks",
      categoryName: "IT / Business Park",
      propertyType: "IT Park",
      purpose: "Rent",
      furnishing: "Furnished",
      areaSqFt: 5500,
      carpetAreaSqFt: 4200,
      priceRent: 357500,
      pricePerSqFtRent: 65,
      priceDisplayRent: "₹3,57,500 / month (₹65/sq.ft.)",
      priceSale: null,
      priceDisplaySale: null,
      workstations: 65,
      cabins: 6,
      conferenceRooms: 1,
      meetingRooms: 2,
      pantry: "Fully Equipped Pantry",
      washrooms: "Attached Male/Female Restrooms",
      floor: "5th Floor",
      totalFloors: "14 Floors",
      carParking: "5 Reserved Basements",
      facing: "Central Water Body & Garden",
      badge: "Campus Style Park",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80"
      ],
      features: [
        "65 modular workstations with CAT-6 cabling and power nodes",
        "6 Senior Partner & VP cabins with acoustic glass",
        "Large 16-seater conference room with smart TV",
        "Overlooks serene water bodies and landscaped greens",
        "On-campus business hotel, gym, and fine dining"
      ],
      description: "Furnished IT office space available in Assotech Business Cresterra (ABC), Sector 135 Noida. Superb campus-style working environment with green building efficiencies and seamless expressway connectivity.",
      verifiedBy: "Sanjeet Kumar (Srishti Estate)"
    },
    {
      id: "prop-corenthum-semi-furn-1800",
      title: "Commercial Office Suite at The Iconic Corenthum",
      shortTitle: "Office Suite - The Corenthum",
      slug: "office-suite-the-corenthum-sector-62",
      buildingId: "the-iconic-corenthum",
      buildingName: "The Iconic Corenthum",
      location: "Sector 62, Noida",
      locationId: "sector-62",
      category: "office-spaces",
      categoryName: "Office Space",
      propertyType: "Office",
      purpose: "Rent",
      furnishing: "Semi-Furnished",
      areaSqFt: 1850,
      carpetAreaSqFt: 1400,
      priceRent: 99900,
      pricePerSqFtRent: 54,
      priceDisplayRent: "₹99,900 / month (₹54/sq.ft.)",
      priceSale: null,
      priceDisplaySale: null,
      workstations: 24,
      cabins: 3,
      conferenceRooms: 1,
      meetingRooms: 0,
      pantry: "Pantry Space with plumbing",
      washrooms: "Common Floor Restrooms",
      floor: "4th Floor",
      totalFloors: "8 Floors",
      carParking: "2 Covered Stacks",
      facing: "Atrium Facing",
      badge: "2 Mins to Metro",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
      ],
      features: [
        "2 minutes walking distance from Noida Electronic City Metro",
        "Semi-furnished with flooring, false ceiling, lighting & glass cabins",
        "Low maintenance cost with high building efficiency",
        "Central atrium natural light and ventilation"
      ],
      description: "Semi-furnished office space in The Iconic Corenthum, Sector 62 Noida. Ready for fast tenant customisation with immediate metro station access.",
      verifiedBy: "Sanjeet Kumar (Srishti Estate)"
    },
    {
      id: "prop-noida-one-bare-shell-4500",
      title: "Bare-Shell Corporate Space at KLJ Noida One",
      shortTitle: "Bare Shell Unit - KLJ Noida One",
      slug: "bare-shell-office-klj-noida-one-sector-62",
      buildingId: "klj-noida-one",
      buildingName: "KLJ Noida One",
      location: "Sector 62, Noida",
      locationId: "sector-62",
      category: "office-spaces",
      categoryName: "Office Space",
      propertyType: "Office",
      purpose: "Sale",
      furnishing: "Bare Shell",
      areaSqFt: 4500,
      carpetAreaSqFt: 3400,
      priceRent: null,
      pricePerSqFtRent: null,
      priceDisplayRent: null,
      priceSale: 35100000,
      pricePerSqFtSale: 7800,
      priceDisplaySale: "₹3.51 Cr (₹7,800/sq.ft.)",
      workstations: 0,
      cabins: 0,
      conferenceRooms: 0,
      meetingRooms: 0,
      pantry: "Provisions available",
      washrooms: "Common on floor",
      floor: "6th Floor",
      totalFloors: "11 Floors",
      carParking: "4 Dedicated Basements",
      facing: "Road Facing",
      badge: "High ROI Investment",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
      ],
      features: [
        "High rental yield investment opportunity in Sector 62",
        "Clear rectangular floor plate for maximum layout flexibility",
        "Full glass facade with open views",
        "Institutional Grade-A complex with reputed tenants"
      ],
      description: "Prime bare-shell commercial office unit for sale in KLJ Noida One, Sector 62. An excellent asset for corporate self-use or high-return rental leasing to IT/ITES corporations.",
      verifiedBy: "Sanjeet Kumar (Srishti Estate)"
    },
    {
      id: "prop-wtt-sector-16-luxury-3500",
      title: "Luxury High-Floor Corporate Suite at World Trade Tower (WTT)",
      shortTitle: "Luxury Suite - WTT Sector 16",
      slug: "luxury-corporate-suite-world-trade-tower-sector-16",
      buildingId: "wtt-sector-16",
      buildingName: "World Trade Tower (WTT)",
      location: "Sector 16, Noida",
      locationId: "film-city",
      category: "office-spaces",
      categoryName: "Office Space",
      propertyType: "Office",
      purpose: "Rent",
      furnishing: "Furnished",
      areaSqFt: 3500,
      carpetAreaSqFt: 2700,
      priceRent: 315000,
      pricePerSqFtRent: 90,
      priceDisplayRent: "₹3,15,000 / month (₹90/sq.ft.)",
      priceSale: null,
      priceDisplaySale: null,
      workstations: 42,
      cabins: 4,
      conferenceRooms: 1,
      meetingRooms: 1,
      pantry: "Modern Wet Pantry",
      washrooms: "Dedicated Restrooms",
      floor: "22nd Floor",
      totalFloors: "34 Floors",
      carParking: "4 Covered Stacks",
      facing: "Delhi Skyline Facing",
      badge: "Skyline View • Border Prestige",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
      ],
      features: [
        "Panoramic views of Delhi skyline and Yamuna riverfront",
        "Direct adjacency to Sector 16 Metro Station",
        "Imported Italian marble reception and executive boardroom",
        "34-storey iconic glass tower with 18 high-speed elevators"
      ],
      description: "Ultra-luxurious furnished office suite on the 22nd floor of World Trade Tower, Sector 16 Noida. The ultimate corporate address for leadership teams desiring immediate Delhi connectivity.",
      verifiedBy: "Sanjeet Kumar (Srishti Estate)"
    },
    {
      id: "prop-warehouse-ecotech-1-25000",
      title: "Grade-A Modern Logistics Warehouse at Ecotech-1 Ext, Greater Noida",
      shortTitle: "Mega Warehouse - Ecotech 1 Ext",
      slug: "modern-logistics-warehouse-ecotech-1-greater-noida",
      buildingId: null,
      buildingName: "Ecotech Mega Logistics Park",
      location: "Ecotech-1 Extension, Greater Noida",
      locationId: "ecotech-1-ext",
      category: "warehouses",
      categoryName: "Warehouses",
      propertyType: "Warehouse",
      purpose: "Rent",
      furnishing: "Bare Shell",
      areaSqFt: 25000,
      carpetAreaSqFt: 24500,
      priceRent: 575000,
      pricePerSqFtRent: 23,
      priceDisplayRent: "₹5,75,000 / month (₹23/sq.ft.)",
      priceSale: null,
      priceDisplaySale: null,
      workstations: 0,
      cabins: 2,
      conferenceRooms: 0,
      meetingRooms: 0,
      pantry: "Staff Canteen Space",
      washrooms: "Multiple Worker & Staff Restrooms",
      floor: "Ground Floor Clear Height",
      totalFloors: "Single Level High Shed",
      carParking: "Ample Truck Parking & Turning Radius",
      facing: "East (60m Master Road)",
      badge: "Heavy Vehicle & Dock Levellers",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
      ],
      features: [
        "12-meter clear ceiling height for high-bay racking",
        "6 hydraulic dock levellers with 40-foot container turning radius",
        "FM2 compliant heavy load flooring (5 MT/sq.m.)",
        "NFPA compliant automated fire sprinkler and hydrant system",
        "Close proximity to Eastern Peripheral Expressway (EPE) and Jewar Airport"
      ],
      description: "State-of-the-art Grade-A warehousing shed in Ecotech-1 Extension Greater Noida. Suitable for 3PL logistics providers, FMCG distribution, e-commerce fulfillment, and heavy storage.",
      verifiedBy: "Sanjeet Kumar (Srishti Estate)"
    },
    {
      id: "prop-warehouse-sector-63-10000",
      title: "Commercial Storage & Industrial Shed in Sector 63 Noida",
      shortTitle: "Industrial Storage - Sector 63",
      slug: "commercial-warehouse-shed-sector-63-noida",
      buildingId: null,
      buildingName: "Sector 63 Industrial Complex",
      location: "Sector 63, Noida",
      locationId: "sector-63",
      category: "warehouses",
      categoryName: "Warehouses",
      propertyType: "Warehouse",
      purpose: "Rent",
      furnishing: "Bare Shell",
      areaSqFt: 10000,
      carpetAreaSqFt: 9200,
      priceRent: 350000,
      pricePerSqFtRent: 35,
      priceDisplayRent: "₹3,50,000 / month (₹35/sq.ft.)",
      priceSale: null,
      priceDisplaySale: null,
      workstations: 0,
      cabins: 1,
      conferenceRooms: 0,
      meetingRooms: 0,
      pantry: "Basic setup",
      washrooms: "Staff Washrooms",
      floor: "Ground Floor + Mezzanine",
      totalFloors: "G+1",
      carParking: "Commercial Loading Bay",
      facing: "North-West",
      badge: "NH-24 Border Proximity",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
      ],
      features: [
        "Dedicated 50 HP power sanction",
        "Direct access to NH-9 / Delhi-Meerut Expressway",
        "24-meter road width for smooth truck movement",
        "Built-in office mezzanine for operations management"
      ],
      description: "High utility commercial warehouse shed in Sector 63 Noida. Excellent urban logistics hub for fast delivery across Delhi, Noida, and Ghaziabad.",
      verifiedBy: "Sanjeet Kumar (Srishti Estate)"
    },
    {
      id: "prop-factory-sector-83-15000",
      title: "Approved Industrial Factory Building in Sector 83 Noida",
      shortTitle: "Industrial Factory - Sector 83",
      slug: "industrial-factory-building-sector-83-noida",
      buildingId: null,
      buildingName: "Sector 83 Industrial Complex",
      location: "Sector 83, Noida",
      locationId: "sector-83",
      category: "industrial-properties",
      categoryName: "Industrial Properties",
      propertyType: "Industrial",
      purpose: "Rent",
      furnishing: "Bare Shell",
      areaSqFt: 15000,
      carpetAreaSqFt: 13800,
      priceRent: 450000,
      pricePerSqFtRent: 30,
      priceDisplayRent: "₹4,50,000 / month (₹30/sq.ft.)",
      priceSale: null,
      priceDisplaySale: null,
      workstations: 0,
      cabins: 3,
      conferenceRooms: 0,
      meetingRooms: 0,
      pantry: "Staff Canteen",
      washrooms: "Multiple Industrial Restrooms",
      floor: "Basement + Ground + 2 Floors",
      totalFloors: "B+G+2",
      carParking: "Industrial Yard & Loading Area",
      facing: "Wide 24m Sector Road",
      badge: "150 HP Power Sanctioned",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80"
      ],
      features: [
        "UPSIDC approved industrial manufacturing building",
        "150 HP sanctioned industrial electric load with transformer",
        "Heavy goods industrial lift (2 Ton capacity)",
        "500 meters from Sector 83 Aqua Line Metro Station",
        "Pollution NOC compliant for engineering and electronics"
      ],
      description: "Complete independent industrial factory building in Sector 83 Noida. Features robust RCC construction, high ceilings, goods elevator, and heavy power connection.",
      verifiedBy: "Sanjeet Kumar (Srishti Estate)"
    },
    {
      id: "prop-factory-phase2-nsez-8000",
      title: "Built-up Industrial Unit in Phase-II / NSEZ Noida",
      shortTitle: "Industrial Unit - Phase-II",
      slug: "industrial-unit-phase-2-noida",
      buildingId: null,
      buildingName: "Phase-2 Industrial Estate",
      location: "Phase-II, Noida",
      locationId: "phase-2",
      category: "industrial-properties",
      categoryName: "Industrial Properties",
      propertyType: "Industrial",
      purpose: "Sale",
      furnishing: "Bare Shell",
      areaSqFt: 8000,
      carpetAreaSqFt: 7200,
      priceRent: null,
      pricePerSqFtRent: null,
      priceDisplayRent: null,
      priceSale: 52000000,
      pricePerSqFtSale: 6500,
      priceDisplaySale: "₹5.20 Cr (₹6,500/sq.ft.)",
      workstations: 0,
      cabins: 2,
      conferenceRooms: 0,
      meetingRooms: 0,
      pantry: "Provisions available",
      washrooms: "Industrial Standard",
      floor: "Ground + 1 Floor",
      totalFloors: "G+1",
      carParking: "Dedicated Front Yard",
      facing: "North Facing",
      badge: "Clear Title Industrial Asset",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80"
      ],
      features: [
        "Clear title industrial property in prime Phase-II",
        "Suitable for garments, electronics, precision engineering & pharma",
        "Close to NSEZ Metro station and transport corridor",
        "Excellent resale and leasing demand"
      ],
      description: "Industrial built-up property for outright purchase in Phase-II Noida. Free of encumbrances with verified documentation by Srishti Estate.",
      verifiedBy: "Sanjeet Kumar (Srishti Estate)"
    },
    {
      id: "prop-land-ecotech-greater-noida-2-acre",
      title: "2-Acre Prime Industrial / Commercial Land Parcel in Greater Noida",
      shortTitle: "2-Acre Industrial Land - Greater Noida",
      slug: "industrial-land-parcel-ecotech-greater-noida",
      buildingId: null,
      buildingName: "Ecotech Industrial Zone",
      location: "Ecotech-1 Extension, Greater Noida",
      locationId: "ecotech-1-ext",
      category: "land",
      categoryName: "Commercial & Industrial Land",
      propertyType: "Land",
      purpose: "Sale",
      furnishing: "Unfurnished",
      areaSqFt: 87120, // 2 Acres
      carpetAreaSqFt: 87120,
      priceRent: null,
      pricePerSqFtRent: null,
      priceDisplayRent: null,
      priceSale: 240000000,
      pricePerSqFtSale: 2755,
      priceDisplaySale: "₹24.0 Cr (₹12 Cr / Acre)",
      workstations: 0,
      cabins: 0,
      conferenceRooms: 0,
      meetingRooms: 0,
      pantry: "N/A",
      washrooms: "N/A",
      floor: "Plot Level",
      totalFloors: "Sanctionable FAR 2.0+",
      carParking: "Unrestricted Plot Access",
      facing: "45-Meter Wide Master Avenue",
      badge: "Jewar Airport Growth Corridor",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80"
      ],
      features: [
        "2-Acre rectangular industrial plot with clear GNIDA lease deed",
        "Direct connectivity to Yamuna Expressway & Eastern Peripheral Expressway",
        "High permissible FAR for industrial manufacturing & logistics",
        "All utility connections (water, sewer, 33KV power) available at boundary"
      ],
      description: "Prime 2-acre industrial land plot in Greater Noida's Ecotech industrial corridor. Strategically positioned to benefit from the upcoming Noida International Airport at Jewar.",
      verifiedBy: "Sanjeet Kumar (Srishti Estate)"
    },
    {
      id: "prop-retail-wave-one-sector-18",
      title: "High-Street Ground Floor Retail Shop at Wave One Sector 18",
      shortTitle: "Retail Shop - Wave One Sector 18",
      slug: "retail-shop-wave-one-sector-18-noida",
      buildingId: null,
      buildingName: "Wave One Commercial",
      location: "Sector 18, Noida",
      locationId: "sector-18",
      category: "shops",
      categoryName: "Shops & Retail",
      propertyType: "Shop",
      purpose: "Rent",
      furnishing: "Bare Shell",
      areaSqFt: 1200,
      carpetAreaSqFt: 850,
      priceRent: 192000,
      pricePerSqFtRent: 160,
      priceDisplayRent: "₹1,92,000 / month (₹160/sq.ft.)",
      priceSale: null,
      priceDisplaySale: null,
      workstations: 0,
      cabins: 0,
      conferenceRooms: 0,
      meetingRooms: 0,
      pantry: "Provisions available",
      washrooms: "Central Mall / High-Street Common",
      floor: "Ground Floor",
      totalFloors: "Commercial Plaza",
      carParking: "Valet & Mall Parking",
      facing: "High Footfall Main Corridor",
      badge: "Noida CBD • Maximum Footfall",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
      ],
      features: [
        "Ground floor high-visibility frontage in Noida Sector 18 CBD",
        "Massive footfall from metro commuters and shoppers",
        "Suitable for fashion flagships, fine dining, jewelry, or electronics",
        "100% power backup and central air conditioning"
      ],
      description: "Premium retail shop unit on the ground floor of Wave One, Sector 18 Noida. Outstanding brand visibility in Noida's most affluent shopping and commercial district.",
      verifiedBy: "Sanjeet Kumar (Srishti Estate)"
    },
    {
      id: "prop-ats-bouquet-office-1600",
      title: "Corner Office Suite at ATS Bouquet Sector 132 Noida",
      shortTitle: "Corner Office - ATS Bouquet",
      slug: "corner-office-ats-bouquet-sector-132-noida",
      buildingId: null,
      buildingName: "ATS Bouquet",
      location: "Sector 132, Noida",
      locationId: "sector-132",
      category: "office-spaces",
      categoryName: "Office Space",
      propertyType: "Office",
      purpose: "Rent",
      furnishing: "Furnished",
      areaSqFt: 1650,
      carpetAreaSqFt: 1250,
      priceRent: 107250,
      pricePerSqFtRent: 65,
      priceDisplayRent: "₹1,07,250 / month (₹65/sq.ft.)",
      priceSale: null,
      priceDisplaySale: null,
      workstations: 22,
      cabins: 3,
      conferenceRooms: 1,
      meetingRooms: 0,
      pantry: "Dry Pantry",
      washrooms: "Floor Common Executive",
      floor: "7th Floor",
      totalFloors: "14 Floors",
      carParking: "2 Dedicated Basements",
      facing: "Expressway Facing Corner",
      badge: "Art-Deco Corporate Architecture",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80"
      ],
      features: [
        "Iconic Art-Deco commercial architecture by ATS Greens",
        "Fully furnished with 22 seats, 3 manager cabins, and conference room",
        "Direct access to Noida-Greater Noida Expressway",
        "Ample visitor parking and landscaped plazas"
      ],
      description: "Sophisticated furnished corner office at ATS Bouquet, Sector 132 Noida. Premium commercial ambience tailored for consulting firms, law offices, and tech enterprises.",
      verifiedBy: "Sanjeet Kumar (Srishti Estate)"
    },
    {
      id: "prop-masters-capitol-retail-food-court",
      title: "Commercial Food Court / Restaurant Space at Masters Capitol Avenue",
      shortTitle: "Food Court Space - Masters Capitol",
      slug: "food-court-space-masters-capitol-avenue-sector-62",
      buildingId: "masters-capitol-avenue",
      buildingName: "Masters Capitol Avenue",
      location: "Sector 62, Noida",
      locationId: "sector-62",
      category: "shops",
      categoryName: "Shops & Retail",
      propertyType: "Shop",
      purpose: "Sale",
      furnishing: "Bare Shell",
      areaSqFt: 850,
      carpetAreaSqFt: 600,
      priceRent: null,
      pricePerSqFtRent: null,
      priceDisplayRent: null,
      priceSale: 11050000,
      pricePerSqFtSale: 13000,
      priceDisplaySale: "₹1.10 Cr (₹13,000/sq.ft.)",
      workstations: 0,
      cabins: 0,
      conferenceRooms: 0,
      meetingRooms: 0,
      pantry: "Commercial Kitchen Exhaust & Gas Bank Provision",
      washrooms: "Plaza Food Court Restrooms",
      floor: "2nd Floor Food Hub",
      totalFloors: "Commercial Boulevard",
      carParking: "Basement Parking",
      facing: "Open Sky Deck Atrium",
      badge: "High Rental Return Investment",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
      ],
      features: [
        "Located in Sector 62's premier new commercial lifestyle destination",
        "Dedicated exhaust shafts, grease traps, and commercial gas line",
        "Guaranteed captive footfall from adjacent IT towers with 15,000+ employees",
        "High expected rental yields of 7-9% annually"
      ],
      description: "Prime commercial food court / restaurant space for sale in Masters Capitol Avenue, Sector 62 Noida. Outstanding investment opportunity with strong corporate footfall.",
      verifiedBy: "Sanjeet Kumar (Srishti Estate)"
    },
    {
      id: "prop-ithum-bare-shell-6500",
      title: "Expansive Bare-Shell Office Floor at The I-Thum Tower-A",
      shortTitle: "Bare Shell Floor - I-Thum Tower A",
      slug: "bare-shell-office-ithum-tower-a-sector-62",
      buildingId: "i-thum-sector-62",
      buildingName: "The I-Thum Tower",
      location: "Sector 62, Noida",
      locationId: "sector-62",
      category: "office-spaces",
      categoryName: "Office Space",
      propertyType: "Office",
      purpose: "Rent",
      furnishing: "Bare Shell",
      areaSqFt: 6500,
      carpetAreaSqFt: 5000,
      priceRent: 325000,
      pricePerSqFtRent: 50,
      priceDisplayRent: "₹3,25,000 / month (₹50/sq.ft.)",
      priceSale: null,
      priceDisplaySale: null,
      workstations: 0,
      cabins: 0,
      conferenceRooms: 0,
      meetingRooms: 0,
      pantry: "Provisions available",
      washrooms: "Dedicated floor restrooms",
      floor: "5th Floor",
      totalFloors: "12 Floors",
      carParking: "6 Reserved Basements",
      facing: "NH-24 Expressway Facing",
      badge: "Custom Fitout Ready",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
      ],
      features: [
        "Large contiguous floor plate for customized corporate interior fit-out",
        "High ceiling clearance and floor-to-ceiling double glazed windows",
        "Rent-free fit-out period of 45-60 days provided",
        "On-site property management by Srishti Estate team"
      ],
      description: "6,500 sq.ft. bare-shell office unit in The I-Thum Tower-A, Sector 62 Noida. Ready for bespoke fit-outs with generous rent-free grace period.",
      verifiedBy: "Sanjeet Kumar (Srishti Estate)"
    },
    {
      id: "prop-industrial-sector-85-plot-1000m",
      title: "1,000 Sq.Mtr Industrial Plot with Boundary Wall in Sector 85 Noida",
      shortTitle: "1000m Industrial Plot - Sector 85",
      slug: "industrial-plot-sector-85-noida",
      buildingId: null,
      buildingName: "Sector 85 Industrial Enclave",
      location: "Sector 85, Noida",
      locationId: "sector-85",
      category: "land",
      categoryName: "Commercial & Industrial Land",
      propertyType: "Land",
      purpose: "Sale",
      furnishing: "Unfurnished",
      areaSqFt: 10764, // 1000 sq.m
      carpetAreaSqFt: 10764,
      priceRent: null,
      pricePerSqFtRent: null,
      priceDisplayRent: null,
      priceSale: 68000000,
      pricePerSqFtSale: 6317,
      priceDisplaySale: "₹6.80 Cr (₹68,000 / sq.mtr)",
      workstations: 0,
      cabins: 0,
      conferenceRooms: 0,
      meetingRooms: 0,
      pantry: "N/A",
      washrooms: "N/A",
      floor: "Plot Level",
      totalFloors: "Sanctionable B+G+2",
      carParking: "Direct 24m Road Access",
      facing: "East Facing",
      badge: "Clear Noida Authority Title",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80"
      ],
      features: [
        "1,000 sq.mtr industrial plot with verified Noida Authority transfer deed",
        "Direct front on 24-meter wide concrete road",
        "Permissible for light manufacturing, software exports, and warehousing",
        "Immediate possession available"
      ],
      description: "Direct-allotment industrial plot in Sector 85 Noida. Excellent rectangular dimension with full boundary wall and gate.",
      verifiedBy: "Sanjeet Kumar (Srishti Estate)"
    },
    {
      id: "prop-ithum-compact-500",
      title: "500 Sq.Ft. Compact Furnished Office with 8 Workstations at The I-Thum",
      shortTitle: "500 Sq.Ft. Office - I-Thum",
      slug: "compact-furnished-office-500-sqft-ithum-sector-62",
      buildingId: "i-thum-sector-62",
      buildingName: "The I-Thum Tower",
      location: "Sector 62, Noida",
      locationId: "sector-62",
      category: "office-spaces",
      categoryName: "Office Space",
      propertyType: "Office",
      purpose: "Rent",
      furnishing: "Furnished",
      areaSqFt: 500,
      carpetAreaSqFt: 380,
      priceRent: 35000,
      pricePerSqFtRent: 70,
      priceDisplayRent: "₹35,000 / month (₹70/sq.ft.)",
      priceSale: null,
      priceDisplaySale: null,
      workstations: 8,
      cabins: 1,
      conferenceRooms: 0,
      meetingRooms: 1,
      pantry: "Dry Pantry Provision",
      washrooms: "Common Executive Washrooms",
      floor: "7th Floor",
      totalFloors: "12 Floors",
      carParking: "1 Reserved Basement",
      facing: "Atrium Facing",
      badge: "Compact Startup Ready",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80"
      ],
      features: [
        "8 fully-cabled modular workstations with ergonomic chairs",
        "1 executive glass cabin and compact discussion area",
        "Dedicated split AC and 100% DG power backup",
        "Ideal for startups, branch offices, and boutique consultancies"
      ],
      description: "500 sq.ft. furnished plug-and-play office unit in The I-Thum Tower, Sector 62 Noida. Minimum space entry ideal for tech startups and expanding teams.",
      verifiedBy: "Sanjeet Kumar (Srishti Estate)"
    },
    {
      id: "prop-ecotech-mega-logistics-100k",
      title: "1,00,000 Sq.Ft. Grade-A Mega Logistics & Industrial Park Facility in Ecotech-1",
      shortTitle: "1,00,000 Sq.Ft. Logistics Campus",
      slug: "mega-logistics-park-100000-sqft-ecotech-1-greater-noida",
      buildingId: null,
      buildingName: "Ecotech Mega Logistics Campus",
      location: "Ecotech-1 Ext, Greater Noida",
      locationId: "ecotech-1-ext",
      category: "warehouses",
      categoryName: "Warehouses & Logistics",
      propertyType: "Warehouse",
      purpose: "Rent",
      furnishing: "Bare Shell",
      areaSqFt: 100000,
      carpetAreaSqFt: 98000,
      priceRent: 2400000,
      pricePerSqFtRent: 24,
      priceDisplayRent: "₹24,00,000 / month (₹24/sq.ft.)",
      priceSale: null,
      priceDisplaySale: null,
      workstations: 0,
      cabins: 4,
      conferenceRooms: 2,
      meetingRooms: 2,
      pantry: "Full Canteen & Kitchen Block",
      washrooms: "Multi-Stall Staff Restrooms",
      floor: "Ground Level with 12m Clear Height",
      totalFloors: "PEB Structure + G+1 Admin Block",
      carParking: "25+ Trailer Docks & 50+ Car Parks",
      facing: "4-Side Open Campus",
      badge: "Mega MNC Grade-A Hub",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
      ],
      features: [
        "1,00,000 sq.ft. PEB structure with 12-meter clear height and FM2 floor",
        "16 automated hydraulic dock levelers for 40ft container trailers",
        "NFPA compliant ESFR automated sprinkler and hydrant systems",
        "Dedicated 1000 KVA electricity substation with dual backup generators",
        "Direct access to Yamuna Expressway & Eastern Peripheral Expressway"
      ],
      description: "State-of-the-art 1,00,000 sq.ft. mega logistics and industrial distribution facility in Ecotech-1 Extension, Greater Noida. Built to international Grade-A logistics standards for 3PL, e-commerce, and heavy manufacturing MNCs.",
      verifiedBy: "Sanjeet Kumar (Srishti Estate)"
    }
  ],

  blogPosts: [
    {
      id: "best-locations-office-space-noida",
      title: "Top 7 Best Locations for Office Space in Noida: A Complete Business Guide",
      slug: "best-locations-office-space-noida",
      date: "August 12, 2026",
      author: "Sanjeet Kumar",
      category: "Market Insights",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      summary: "Explore the most strategic commercial hubs in Noida including Sector 62, Noida Expressway, Sector 16 Film City, and Sector 18 CBD to make the right location choice for your enterprise.",
      content: `
        <h3>Why Location Strategy Matters in Noida Commercial Real Estate</h3>
        <p>Choosing the right commercial office location is one of the most critical decisions for any expanding business, startup, or multinational corporation. Noida has emerged as Delhi-NCR's premier corporate hub, offering modern Grade-A infrastructure, seamless metro connectivity, and competitive commercial rentals compared to Gurgaon and Central Delhi.</p>
        
        <h3>1. Sector 62, Noida: The Crown Jewel of IT & Institutional Hubs</h3>
        <p>Sector 62 stands out as the most established IT and institutional powerhouse in Noida. Anchored by prestigious complexes like <strong>The I-Thum Tower</strong>, <strong>KLJ Noida One</strong>, and <strong>The Iconic Corenthum</strong>, this sector offers direct Blue Line Metro access, exceptional executive dining, and unbeatable connectivity via the 14-lane Delhi-Meerut Expressway.</p>
        <p>Average rentals range between <strong>₹50 to ₹75 per sq.ft.</strong> for furnished spaces, offering the best value-to-amenity ratio in NCR.</p>

        <h3>2. Noida-Greater Noida Expressway: The Fortune 500 Corporate Corridor</h3>
        <p>From Sector 125 to Sector 142, the Noida Expressway is home to state-of-the-art green campuses like <strong>Advant Navis Business Park</strong> and <strong>Assotech Business Cresterra</strong>. Large IT multinationals prefer this corridor for contiguous floor plates exceeding 30,000 sq.ft. and Aqua Line metro integration.</p>

        <h3>3. Sector 16 & Film City: Border Prestige & Media Powerhouses</h3>
        <p>Located immediately across the DND Flyway, Sector 16 and Film City (Sector 16A) offer quick 5-minute access to South Delhi. Landmarks like <strong>World Trade Tower (WTT)</strong> cater to corporate headquarters and financial institutions demanding elite brand perception.</p>

        <h3>Key Factors to Evaluate Before Finalizing Office Space:</h3>
        <ul>
          <li><strong>Metro Proximity:</strong> Ensure the facility is within 5-10 minutes walking or e-rickshaw distance from Blue or Aqua Line stations.</li>
          <li><strong>Power Backup & Infrastructure:</strong> Verified 100% dual DG backup is essential for uninterrupted IT operations.</li>
          <li><strong>Parking Capacity:</strong> Multi-tier basement parking ensures smooth visits for clients and senior management.</li>
        </ul>
      `,
      relatedLocations: ["sector-62", "noida-expressway", "film-city"],
      relatedProjects: ["i-thum-sector-62", "advant-navis-business-park", "wtt-sector-16"]
    },
    {
      id: "office-space-sector-62-noida-guide",
      title: "Complete Guide to Renting Commercial Office Space in Sector 62 Noida",
      slug: "office-space-sector-62-noida-guide",
      date: "August 05, 2026",
      author: "Sanjeet Kumar",
      category: "Leasing Advisory",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      summary: "Everything you need to know about leasing furnished, semi-furnished, or bare-shell office spaces in Sector 62 Noida, including lease terms, maintenance costs, and top building reviews.",
      content: `
        <h3>Why Sector 62 is the #1 Choice for Corporate Offices</h3>
        <p>Sector 62 in Noida is strategically positioned between Delhi, Ghaziabad, and central Noida. With Noida Electronic City Metro Station anchoring the sector and NH-24 / Delhi-Meerut Expressway running directly parallel, employee commutes are remarkably hassle-free.</p>

        <h3>Rental Rates & Space Options in Sector 62</h3>
        <p>In Sector 62, commercial spaces are generally divided into three fit-out categories:</p>
        <ul>
          <li><strong>Fully Furnished (Plug-and-Play):</strong> ₹55 - ₹75 / sq.ft. Includes workstations, manager cabins, meeting rooms, reception, and pantry.</li>
          <li><strong>Semi-Furnished:</strong> ₹48 - ₹60 / sq.ft. Includes vitrified flooring, false ceiling, LED fixtures, and basic glass partitions.</li>
          <li><strong>Bare Shell:</strong> ₹38 - ₹48 / sq.ft. Raw concrete floor plate for tailored architectural fit-outs.</li>
        </ul>

        <h3>Top Commercial Buildings in Sector 62:</h3>
        <p><strong>The I-Thum Tower:</strong> A premier twin-tower campus featuring high-efficiency floor designs, 3-level basement parking, and Srishti Estate's headquarters at Tower-B 1035.</p>
        <p><strong>KLJ Noida One:</strong> Expansive three-tower business park ideal for large teams and BPO backends.</p>
        <p><strong>The Iconic Corenthum:</strong> Unique architecture with direct 200-meter walkability from the metro.</p>
      `,
      relatedLocations: ["sector-62"],
      relatedProjects: ["i-thum-sector-62", "klj-noida-one", "the-iconic-corenthum"]
    },
    {
      id: "furnished-vs-unfurnished-office-space",
      title: "Furnished vs Bare Shell Office Space: Which is Best for Your Business?",
      slug: "furnished-vs-unfurnished-office-space",
      date: "July 28, 2026",
      author: "Sanjeet Kumar",
      category: "Cost Analysis",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
      summary: "Compare upfront capital expenditure (CapEx), fit-out timelines, flexibility, and tax depreciation benefits between plug-and-play furnished offices and bare shell spaces.",
      content: `
        <h3>Making the Right Fit-Out Choice for Your Enterprise</h3>
        <p>When leasing commercial property in Noida, one of the primary financial considerations is whether to opt for a plug-and-play furnished office or invest in a custom bare-shell fit-out.</p>

        <h3>When to Choose a Plug-and-Play Furnished Office:</h3>
        <ul>
          <li><strong>Immediate Occupancy:</strong> Move in within 48 to 72 hours without construction delays.</li>
          <li><strong>Zero CapEx:</strong> Avoid spending ₹1,200 to ₹2,200 per sq.ft. on interior contractors, furniture, and cabling.</li>
          <li><strong>Flexible Leases:</strong> Ideal for rapid-growth companies anticipating team expansion in 12-24 months.</li>
        </ul>

        <h3>When to Choose Bare Shell / Warm Shell:</h3>
        <ul>
          <li><strong>Brand Identity:</strong> Customize every partition, meeting room, and color palette according to corporate brand guidelines.</li>
          <li><strong>Long Term Cost Savings:</strong> For leases spanning 5 to 9+ years, lower monthly per-square-foot rentals offset initial fit-out investments.</li>
          <li><strong>High Headcount Density:</strong> Optimize workstation spacing for maximum floor efficiency.</li>
        </ul>
      `,
      relatedLocations: ["sector-62", "noida-expressway"],
      relatedProjects: ["i-thum-sector-62", "assotech-business-cresterra"]
    },
    {
      id: "industrial-warehouse-growth-greater-noida-jewar",
      title: "Industrial & Warehousing Boom in Greater Noida & The Jewar Airport Impact",
      slug: "industrial-warehouse-growth-greater-noida-jewar",
      date: "July 19, 2026",
      author: "Sanjeet Kumar",
      category: "Industrial Realty",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      summary: "How the upcoming Noida International Airport at Jewar and multi-modal logistics hubs in Greater Noida are driving unprecedented demand for factories and Grade-A warehouses.",
      content: `
        <h3>The Rise of Greater Noida as North India's Manufacturing Hub</h3>
        <p>The industrial landscape of Uttar Pradesh is experiencing a monumental transformation. Industrial sectors like <strong>Ecotech-1 Extension</strong>, <strong>Sector 83 Noida</strong>, and <strong>Phase-II NSEZ</strong> are drawing massive investments from international manufacturers, electronics firms, and 3PL logistics giants.</p>

        <h3>Key Catalysts Driving Industrial Value:</h3>
        <ul>
          <li><strong>Noida International Airport (Jewar):</strong> Direct cargo handling terminals that drastically reduce export shipping turnaround.</li>
          <li><strong>Eastern Peripheral Expressway (EPE):</strong> Bypasses Delhi congestion for 24/7 non-stop commercial freight trucking across Northern India.</li>
          <li><strong>Dedicated Freight Corridor (DFC):</strong> Seamless rail-cargo connection from Dadri multi-modal terminal to Western ports.</li>
        </ul>
      `,
      relatedLocations: ["ecotech-1-ext", "sector-83", "phase-2"],
      relatedProjects: []
    }
  ],

  whyChooseUs: [
    {
      title: "Local Market Expertise",
      desc: "Over 15+ years of specialized commercial real estate experience across Noida, Greater Noida, and Delhi-NCR with deep transaction intelligence.",
      icon: "award"
    },
    {
      title: "100% Verified Property Options",
      desc: "Every listing is personally inspected, verified with authority records (Noida / GNIDA), and confirmed for occupancy certificates and power loads.",
      icon: "check-circle-2"
    },
    {
      title: "Direct Brokerage & Zero Hidden Clauses",
      desc: "Led personally by authorized real estate advisor Sanjeet Kumar, guaranteeing total transparency, direct landlord negotiations, and fair lease agreements.",
      icon: "shield-check"
    },
    {
      title: "End-to-End Corporate Assistance",
      desc: "From initial site inspections, customized space planning, and commercial lease drafting to interior fit-out advisory and handover.",
      icon: "briefcase"
    },
    {
      title: "Strategic Location Advisory",
      desc: "Tailored property recommendations based on your workforce demographics, metro access requirements, and long-term budget goals.",
      icon: "compass"
    },
    {
      title: "Fast-Track Move-In Support",
      desc: "Plug-and-play corporate options ready for immediate possession within 24 to 48 hours for fast-growing businesses.",
      icon: "zap"
    }
  ],

  testimonials: [
    {
      name: "Rohan Varma",
      company: "Director, NexaTech Solutions",
      text: "Sanjeet ji from Srishti Estate helped us secure a 5,000 sq.ft. fully furnished office in I-Thum Sector 62. The entire negotiation was transparent, professional, and completed within 5 days. Highly recommended!",
      rating: 5,
      location: "The I-Thum, Sector 62"
    },
    {
      name: "Amitabh Singhal",
      company: "VP Operations, LogiXpress Supply Chain",
      text: "Finding a 25,000 sq.ft. Grade-A warehouse with high clearance in Greater Noida was seamless with Srishti Estate. Their knowledge of industrial sanctions and road access is second to none.",
      rating: 5,
      location: "Ecotech-1 Ext, Greater Noida"
    },
    {
      name: "Pooja Malhotra",
      company: "Founder, Zenith FinCorp",
      text: "We were looking for an elite address on Noida Expressway. Sanjeet Kumar showed us verified units at Advant Navis and Assotech Cresterra, getting us the best commercial terms on lease.",
      rating: 5,
      location: "Advant Navis, Noida Expressway"
    }
  ]
};

// Expose globally for both browser script tags and module loaders
if (typeof window !== "undefined") {
  window.SRISHTI_DATA = SRISHTI_DATA;
}
