const productData = [
  {
    id: 1,
    title: "Portable Car Lifts",
    desc: "Reliable and efficient portable lifting solutions for workshops.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product1.png",
    category: "Vehicle Lifting Solutions"
  },
  {
    id: 2,
    title: "Scissor Lifts",
    desc: "Stable and compact scissor lifting systems for workshops.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product2.png",
    category: "Vehicle Lifting Solutions"
  },
  {
    id: 3,
    title: "Alignment Lifts",
    desc: "Accurate alignment lifting systems for workshop operations.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product3.png",
    category: "Vehicle Lifting Solutions"
  },
  {
    id: 4,
    title: "Mobile Column Lifts",
    desc: "Flexible and mobile lifting systems for large vehicles.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product4.png",
    category: "Vehicle Lifting Solutions"
  },
  {
    id: 5,
    title: "Wheel Balancer",
    desc: "Precise wheel balancing solutions for workshop use.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product5.png",
    category: "Tire & Wheel Services"
  },
  {
    id: 6,
    title: "Tire Inflators",
    desc: "Reliable and efficient tire inflation systems for workshops.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product6.png",
    category: "Tire & Wheel Services"
  },
  {
    id: 7,
    title: "Rim Straightening Machines",
    desc: "Accurate rim repair systems for workshop applications.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product7.png",
    category: "Tire & Wheel Services"
  },
  {
    id: 8,
    title: "Nitrogen Tire Inflators",
    desc: "Advanced nitrogen inflation systems for tire performance.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product8.png",
    category: "Tire & Wheel Services"
  },
  {
    id: 9,
    title: "Automatic Car Wash",
    desc: "Advanced automated washing systems for vehicle cleaning.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product9.png",
    category: "Car Wash & Cleaning Systems"
  },
  {
    id: 10,
    title: "Pressure Washers",
    desc: "High-pressure cleaning systems for tough workshop tasks.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product10.png",
    category: "Car Wash & Cleaning Systems"
  },
  {
    id: 11,
    title: "Vacuum Systems",
    desc: "Reliable and efficient vacuum cleaning systems for workshops.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product11.png",
    category: "Car Wash & Cleaning Systems"
  },
  {
    id: 12,
    title: "Foam Sprayers",
    desc: "Effective foam spraying systems for vehicle cleaning.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product12.png",
    category: "Car Wash & Cleaning Systems"
  },
  {
    id: 13,
    title: "Hydraulic Presses",
    desc: "Powerful pressing solutions for modern workshop tasks.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product13.png",
    category: "Hydraulic & Pneumatic Tools"
  },
  {
    id: 14,
    title: "Hydraulic Jacks",
    desc: "Durable lifting support tools for workshop operations.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product14.png",
    category: "Hydraulic & Pneumatic Tools"
  },
  {
    id: 15,
    title: "Pneumatic Impact Wrenches",
    desc: "Reliable and efficient pneumatic fastening tools for workshops.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product15.png",
    category: "Hydraulic & Pneumatic Tools"
  },
  {
    id: 16,
    title: "Pneumatic Impact Wrenches",
    desc: "High-torque pneumatic fastening tools for workshops.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product16.png",
    category: "Hydraulic & Pneumatic Tools"
  },
  {
    id: 17,
    title: "Spray Guns",
    desc: "Smooth and accurate paint spraying tools for workshops.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product17.png",
    category: "Body Repair & Paint Solutions"
  },
  {
    id: 18,
    title: "Infrared Curing Lamps",
    desc: "Fast and uniform paint curing systems for workshops.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product18.png",
    category: "Body Repair & Paint Solutions"
  },
  {
    id: 19,
    title: "Dent Pullers",
    desc: "Effective and easy dent repair tools for workshops.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product19.png",
    category: "Body Repair & Paint Solutions"
  },
  {
    id: 20,
    title: "Sanding Machines",
    desc: "Powerful and precise sanding solutions for workshops.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product20.png",
    category: "Body Repair & Paint Solutions"
  },
  {
    id: 21,
    title: "Air Dryers",
    desc: "Efficient air drying systems for clean workshop operations.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product21.png",
    category: "Air, Oil and Water Management System"
  },
  {
    id: 22,
    title: "Lubrication Pumps",
    desc: "Smooth and consistent lubrication systems for workshop use.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product22.png",
    category: "Air, Oil and Water Management System"
  },
  {
    id: 23,
    title: "Oil Dispensing Systems",
    desc: "Reliable and efficient oil dispensing systems for workshops.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product23.png",
    category: "Air, Oil and Water Management System"
  },
  {
    id: 24,
    title: "Fluid Extractors",
    desc: "High-performance fluid extraction systems for workshops.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product24.png",
    category: "Air, Oil and Water Management System"
  },
  {
    id: 25,
    title: "Battery Testers",
    desc: "Reliable and efficient battery testing tools for workshops.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product25.png",
    category: "Diagnostic & Testing Equipment"
  },
  {
    id: 26,
    title: "Smoke Leak Detectors",
    desc: "Advanced leak detection tools for efficient diagnostics.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product26.png",
    category: "Diagnostic & Testing Equipment"
  },
  {
    id: 27,
    title: "Compression Testers",
    desc: "Precise engine testing tools for modern workshop diagnostics.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product27.png",
    category: "Diagnostic & Testing Equipment"
  },
  {
    id: 28,
    title: "Fuel Pressure Testers",
    desc: "Accurate and reliable fuel testing tools for workshops.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product28.png",
    category: "Diagnostic & Testing Equipment"
  },
  {
    id: 29,
    title: "Pallet Racks",
    desc: "Strong and space-saving pallet storage systems for warehouses.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product29.png",
    category: "Safety and Storage (Warehousing) Solutions"
  },
  {
    id: 30,
    title: "Industrial Shelving Units",
    desc: "Heavy-duty shelving solutions for warehouse storage needs.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product30.png",
    category: "Safety and Storage (Warehousing) Solutions"
  },
  {
    id: 31,
    title: "Conveyor Systems",
    desc: "Automated and seamless material flow systems for industries.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product31.png",
    category: "Safety and Storage (Warehousing) Solutions"
  },
  {
    id: 32,
    title: "Material Handling Carts",
    desc: "Reliable and efficient transport solutions for warehouse use.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product32.png",
    category: "Safety and Storage (Warehousing) Solutions"
  },
  {
    id: 33,
    title: "Wheel Alignment Racks",
    desc: "Accurate and stable alignment support systems for workshops.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product33.png",
    category: "General Workshop Tools"
  },
  {
    id: 34,
    title: "Tool Cabinets",
    desc: "Secure and organized storage solutions for modern workshops.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product34.png",
    category: "General Workshop Tools"
  },
  {
    id: 35,
    title: "Creepers (Mechanic's Dollies)",
    desc: "Smooth and durable mobility solutions for workshop tasks.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product35.png",
    category: "General Workshop Tools"
  },
  {
    id: 36,
    title: "Socket and Wrench Sets",
    desc: "Reliable and efficient hand tool sets for modern workshops.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product36.png",
    category: "General Workshop Tools"
  },
  {
    id: 37,
    title: "Coolant Flush Machines",
    desc: "Durable and effective coolant flushing systems for workshops.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product37.png",
    category: "Servicing Equipment & Maintenance"
  },
  {
    id: 38,
    title: "Brake Fluid Exchangers",
    desc: "High-performance fluid exchange systems for workshop use.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product38.png",
    category: "Servicing Equipment & Maintenance"
  },
  {
    id: 39,
    title: "Fuel Injector Cleaners",
    desc: "Advanced and precise injector cleaning solutions for workshops.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product39.png",
    category: "Servicing Equipment & Maintenance"
  },
  {
    id: 40,
    title: "Oil Change Systems",
    desc: "Reliable and efficient oil change systems for modern workshops.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product40.png",
    category: "Servicing Equipment & Maintenance"
  },
  {
    id: 41,
    title: "Parking Lifts",
    desc: "Advanced lifting solutions designed to maximize parking space in limited areas.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product41.png",
    category: "Vehicle Lifting Solutions"
  },
  {
    id: 42,
    title: "Two-Post Lifts",
    desc: "Efficient lifting systems offering full vehicle access for maintenance and repair work.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product42.png",
    category: "Vehicle Lifting Solutions"
  },
  {
    id: 43,
    title: "Four-Post Lifts",
    desc: "Heavy-duty lifts providing maximum stability for vehicle servicing and storage.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product43.png?v=2",
    category: "Vehicle Lifting Solutions"
  },
  {
    id: 44,
    title: "Low-Rise Lifts",
    desc: "Space-saving lifting solutions designed for fast and efficient vehicle access.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product44.png",
    category: "Vehicle Lifting Solutions"
  },
  {
    id: 45,
    title: "Mid-Rise Lifts",
    desc: "Compact and versatile lifting systems ideal for quick service and maintenance tasks.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product45.png",
    category: "Vehicle Lifting Solutions"
  },
  {
    id: 46,
    title: "In-Ground Lifts",
    desc: "Space-efficient in-ground lifting systems for seamless workshop operations.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product46.png",
    category: "Vehicle Lifting Solutions"
  },
  {
    id: 47,
    title: "Motorcycle Lifts",
    desc: "Compact and reliable lifting systems tailored for motorcycle maintenance tasks.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product47.png",
    category: "Vehicle Lifting Solutions"
  },
  {
    id: 48,
    title: "Heavy-Duty Truck Lifts",
    desc: "Robust and powerful lifting systems designed for heavy-duty truck servicing.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product48.png",
    category: "Vehicle Lifting Solutions"
  },
  {
    id: 49,
    title: "Portable Car Hoists",
    desc: "Flexible and efficient lifting systems for easy vehicle mobility and servicing.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product49.png",
    category: "Vehicle Lifting Solutions"
  },
  {
    id: 50,
    title: "Wheel Balancer",
    desc: "Accurate and efficient wheel balancing systems for smooth vehicle performance.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product50.png",
    category: "Vehicle Lifting Solutions"
  },
  {
    id: 51,
    title: "Tire Changers",
    desc: "Efficient machines for quick and safe tire removal and installation processes.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product51.png",
    category: "Tire & Wheel Services"
  },
  {
    id: 52,
    title: "Bead Breakers",
    desc: "Strong tools designed to safely separate tire beads from rims during servicing.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product52.png",
    category: "Tire & Wheel Services"
  },
  {
    id: 53,
    title: "Pressure Monitoring Systems",
    desc: "Accurate systems for real-time tire pressure tracking and maintenance.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product53.png",
    category: "Tire & Wheel Services"
  },
  {
    id: 54,
    title: "Tire Mounting Machines",
    desc: "Advanced equipment for safe and efficient tire installation on wheels.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product54.png",
    category: "Tire & Wheel Services"
  },
  {
    id: 55,
    title: "Tire Buffing Machines",
    desc: "Precision machines for preparing and smoothing tire surfaces efficiently.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product55.png",
    category: "Tire & Wheel Services"
  },
  {
    id: 56,
    title: "Pneumatic Impact Wrenches",
    desc: "High-power air tools for fast and reliable tightening and loosening of bolts.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product56.png",
    category: "Tire & Wheel Services"
  },
  {
    id: 57,
    title: "Wheel Lift Systems",
    desc: "Efficient lifting systems for safe handling and positioning of vehicle wheels.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product57.png",
    category: "Tire & Wheel Services"
  },
  {
    id: 58,
    title: "Tire Storage Racks",
    desc: "Heavy-duty racks designed for organized and space-efficient tire storage solutions.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product58.png",
    category: "Tire & Wheel Services"
  },
  {
    id: 59,
    title: "Water Recycling Systems",
    desc: "Eco-friendly systems designed to recycle and reuse water efficiently in car wash setups.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product59.png",
    category: "Car Wash & Cleaning Systems"
  },
  {
    id: 60,
    title: "Car Wash Brushes",
    desc: "Durable cleaning brushes designed for thorough and scratch-free vehicle washing.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product60.png",
    category: "Car Wash & Cleaning Systems"
  },
  {
    id: 61,
    title: "Drying Systems",
    desc: "Efficient air drying systems for quick and spotless vehicle finishing.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product61.png",
    category: "Car Wash & Cleaning Systems"
  },
  {
    id: 62,
    title: "Underbody Wash Systems",
    desc: "Effective systems for cleaning hard-to-reach vehicle underbody areas.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product62.png",
    category: "Car Wash & Cleaning Systems"
  },
  {
    id: 63,
    title: "Steam Cleaners",
    desc: "High-pressure steam systems for deep and eco-friendly vehicle cleaning.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product63.png",
    category: "Car Wash & Cleaning Systems"
  },
  {
    id: 64,
    title: "Wheel Wash",
    desc: "Specialized cleaning systems designed for thorough wheel and rim washing.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product64.png",
    category: "Car Wash & Cleaning Systems"
  },
  {
    id: 65,
    title: "Touchless Car Wash",
    desc: "Advanced wash systems that clean vehicles without physical contact.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product65.png",
    category: "Car Wash & Cleaning Systems"
  },
  {
    id: 66,
    title: "Conveyor Car Wash",
    desc: "High-efficiency conveyor systems for continuous automated vehicle washing.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product66.png",
    category: "Car Wash & Cleaning Systems"
  },
  {
    id: 67,
    title: "Water Softening Units",
    desc: "Advanced systems for removing hardness and improving water quality in wash setups.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product67.png",
    category: "Car Wash & Cleaning Systems"
  },
  {
    id: 68,
    title: "Portable Car Washs",
    desc: "Compact and mobile washing units for flexible vehicle cleaning anywhere.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product68.png",
    category: "Car Wash & Cleaning Systems"
  },
  {
    id: 69,
    title: "Self-Serve Car Wash",
    desc: "Automated self-service systems for convenient and user-controlled vehicle washing.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product69.png",
    category: "Car Wash & Cleaning Systems"
  },
  {
    id: 70,
    title: "Chemical Mix and Dispensing",
    desc: "Precision systems for mixing and dispensing cleaning chemicals efficiently.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product70.png",
    category: "Car Wash & Cleaning Systems"
  },
  {
    id: 71,
    title: "Spot-Free Rinse Systems",
    desc: "Advanced rinsing systems that ensure clean, spot-free vehicle finishing.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product71.png",
    category: "Car Wash & Cleaning Systems"
  },
  {
    id: 72,
    title: "Pneumatic Drills",
    desc: "High-speed air drills for efficient drilling in industrial materials.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product72.png",
    category: "Hydraulic & Pneumatic Tools"
  },
  {
    id: 73,
    title: "Hydraulic Pipe Benders",
    desc: "Strong hydraulic tools for precise bending of metal pipes and tubes.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product73.png",
    category: "Hydraulic & Pneumatic Tools"
  },
  {
    id: 74,
    title: "Pneumatic Nail Guns",
    desc: "Fast and efficient air tools for driving nails in industrial applications.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product74.png",
    category: "Hydraulic & Pneumatic Tools"
  },
  {
    id: 75,
    title: "Air Compressors",
    desc: "Reliable compressed air systems for powering pneumatic workshop tools.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product75.png",
    category: "Hydraulic & Pneumatic Tools"
  },
  {
    id: 76,
    title: "Hydraulic Torque Wrenches",
    desc: "Precision tools for controlled tightening of high-torque fasteners.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product76.png",
    category: "Hydraulic & Pneumatic Tools"
  },
  {
    id: 77,
    title: "Pneumatic Grinders",
    desc: "High-speed grinding tools for cutting, shaping, and polishing metal surfaces.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product77.png",
    category: "Hydraulic & Pneumatic Tools"
  },
  {
    id: 78,
    title: "Hydraulic Crimping Tools",
    desc: "Powerful tools for secure and accurate cable and connector crimping.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product78.png",
    category: "Hydraulic & Pneumatic Tools"
  },
  {
    id: 79,
    title: "Pneumatic Sanders",
    desc: "Precision air-powered sanders for smooth surface finishing work.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product79.png",
    category: "Hydraulic & Pneumatic Tools"
  },
  {
    id: 80,
    title: "Hydraulic Lifting Tables",
    desc: "Sturdy lifting tables designed for safe and adjustable load handling.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product80.png",
    category: "Hydraulic & Pneumatic Tools"
  },
  {
    id: 81,
    title: "Pneumatic Rivet Guns",
    desc: "High-speed air tools for efficient and secure rivet installation.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product81.png",
    category: "Hydraulic & Pneumatic Tools"
  },
  {
    id: 82,
    title: "Hydraulic Power Units",
    desc: "Reliable hydraulic systems for powering industrial repair equipment.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product82.png",
    category: "Hydraulic & Pneumatic Tools"
  },
  {
    id: 83,
    title: "Paint Mixing Systems",
    desc: "Accurate systems for blending and preparing automotive paint colors.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product83.png",
    category: "Body Repair & Paint Solutions"
  },
  {
    id: 84,
    title: "Collision Repair Benches",
    desc: "Precision benches for structural alignment and collision damage repair.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product84.png",
    category: "Body Repair & Paint Solutions"
  },
  {
    id: 85,
    title: "Paint Booths",
    desc: "Controlled environments for high-quality and dust-free vehicle painting.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product85.png",
    category: "Body Repair & Paint Solutions"
  },
  {
    id: 86,
    title: "Heat Guns",
    desc: "Versatile tools for controlled heating in paint and repair applications.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product86.png",
    category: "Body Repair & Paint Solutions"
  },
  {
    id: 87,
    title: "Panel Beating Machines",
    desc: "Heavy-duty machines for repairing and reshaping damaged vehicle panels.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product87.png",
    category: "Body Repair & Paint Solutions"
  },
  {
    id: 88,
    title: "Paint Stripping Tools",
    desc: "Specialized tools for removing old paint layers safely and effectively.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product88.png",
    category: "Body Repair & Paint Solutions"
  },
  {
    id: 89,
    title: "Dust Extraction Systems",
    desc: "Efficient systems for removing dust and maintaining a clean working environment.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product89.png",
    category: "Body Repair & Paint Solutions"
  },
  {
    id: 90,
    title: "Buffing Machines",
    desc: "High-performance machines for polishing and restoring vehicle surface shine.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product90.png",
    category: "Body Repair & Paint Solutions"
  },
  {
    id: 91,
    title: "Polishing Machines",
    desc: "High-performance machines for restoring shine and finishing vehicle surfaces.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product91.png",
    category: "Body Repair & Paint Solutions"
  },
  {
    id: 92,
    title: "Spot Welders",
    desc: "Industrial welding machines for strong and precise metal joining.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product92.png",
    category: "Body Repair & Paint Solutions"
  },
  {
    id: 93,
    title: "Body Filler Applicators",
    desc: "Precision tools for applying and shaping body filler smoothly.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product93.png",
    category: "Body Repair & Paint Solutions"
  },
  {
    id: 94,
    title: "Paint Thickness Gauges",
    desc: "Accurate tools for measuring paint layer thickness on vehicle surfaces.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product94.png",
    category: "Body Repair & Paint Solutions"
  },
  {
    id: 95,
    title: "Paint Drying Systems",
    desc: "Fast and efficient systems for curing and drying automotive paint.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product95.png",
    category: "Body Repair & Paint Solutions"
  },
  {
    id: 96,
    title: "Compressed Air Filters",
    desc: "Filtration systems for ensuring clean and dry compressed air supply.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product96.png",
    category: "Air, Oil and Water Management System"
  },
  {
    id: 97,
    title: "Air Regulators",
    desc: "Precision devices for controlling air pressure in workshop systems.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product97.png",
    category: "Air, Oil and Water Management System"
  },
  {
    id: 98,
    title: "Fuel Transfer Pumps",
    desc: "Efficient pumps for safe and fast fuel transfer operations.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product98.png",
    category: "Air, Oil and Water Management System"
  },
  {
    id: 99,
    title: "Automatic Drain Valves",
    desc: "Smart valves for automatic removal of condensation from air systems.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product99.png",
    category: "Air, Oil and Water Management System"
  },
  {
    id: 100,
    title: "Oil Filtration Systems",
    desc: "Advanced systems for removing impurities and extending oil life.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product100.png",
    category: "Air, Oil and Water Management System"
  },
  {
    id: 101,
    title: "Grease Pumps",
    desc: "Durable pumps designed for efficient grease distribution in machinery.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product101.png",
    category: "Air, Oil and Water Management System"
  },
  {
    id: 102,
    title: "Hydraulic Oil Coolers",
    desc: "Efficient cooling systems for maintaining optimal hydraulic oil temperature.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product102.png",
    category: "Air, Oil and Water Management System"
  },
  {
    id: 103,
    title: "Refrigerated Air Dryers",
    desc: "Reliable systems for cooling and drying compressed air effectively.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product103.png",
    category: "Air, Oil and Water Management System"
  },
  {
    id: 104,
    title: "Vacuum Pumps",
    desc: "Powerful pumps for creating vacuum pressure in automotive applications.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product104.png",
    category: "Air, Oil and Water Management System"
  },
  {
    id: 105,
    title: "Desiccant Air Dryers",
    desc: "High-efficiency dryers for removing moisture from compressed air systems.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product105.png",
    category: "Air, Oil and Water Management System"
  },
  {
    id: 106,
    title: "Metered Oil Control Valves",
    desc: "Precision valves for accurate oil dispensing and flow control.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product106.png",
    category: "Air, Oil and Water Management System"
  },
  {
    id: 107,
    title: "Fluid Monitoring Systems",
    desc: "Smart systems for tracking and controlling fluid usage in workshops.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product107.png",
    category: "Air, Oil and Water Management System"
  },
  {
    id: 108,
    title: "Hose Reels for Air and Fluid",
    desc: "Durable hose management systems for organized workshop fluid distribution.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product108.png",
    category: "Air, Oil and Water Management System"
  },
  {
    id: 109,
    title: "Bulk Oil Storage Systems",
    desc: "Large-capacity storage solutions for safe and organized oil handling.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product109.png",
    category: "Air, Oil and Water Management System"
  },
  {
    id: 110,
    title: "Coolant Dispensing Systems",
    desc: "Efficient systems for controlled coolant transfer and vehicle maintenance.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product110.png",
    category: "Air, Oil and Water Management System"
  },
  {
    id: 111,
    title: "Ignition Testers",
    desc: "Diagnostic devices for checking ignition system performance and faults.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product111.png",
    category: "Diagnostic & Testing Equipment"
  },
  {
    id: 112,
    title: "Brake Fluid Testers",
    desc: "Precision tools for assessing brake fluid quality and safety levels.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product112.png",
    category: "Diagnostic & Testing Equipment"
  },
  {
    id: 113,
    title: "Multimeters",
    desc: "Versatile tools for measuring voltage, current, and resistance in vehicles.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product113.png",
    category: "Diagnostic & Testing Equipment"
  },
  {
    id: 114,
    title: "Engine Analyzers",
    desc: "Comprehensive systems for diagnosing engine performance and faults.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product114.png",
    category: "Diagnostic & Testing Equipment"
  },
  {
    id: 115,
    title: "Thermal Imaging Cameras",
    desc: "Advanced imaging tools for detecting heat patterns and hidden electrical issues.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product115.png",
    category: "Diagnostic & Testing Equipment"
  },
  {
    id: 116,
    title: "Voltage Testers",
    desc: "Accurate devices for measuring electrical voltage in automotive systems.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product116.png",
    category: "Diagnostic & Testing Equipment"
  },
  {
    id: 117,
    title: "Alternator Test Benches",
    desc: "Reliable systems for testing alternator performance and electrical output.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product117.png",
    category: "Diagnostic & Testing Equipment"
  },
  {
    id: 118,
    title: "Headlight Alignment Testers",
    desc: "Precision equipment for checking and adjusting vehicle headlight alignment.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product118.png",
    category: "Diagnostic & Testing Equipment"
  },
  {
    id: 119,
    title: "OBD Scanners Emission Testers",
    desc: "Efficient tools for reading vehicle diagnostics and monitoring emission.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product119.png",
    category: "Diagnostic & Testing Equipment"
  },
  {
    id: 120,
    title: "Oscilloscopes for Automotive Diagnostics",
    desc: "Advanced diagnostic tools for analyzing vehicle electrical signals.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product120.png",
    category: "Diagnostic & Testing Equipment"
  },
  {
    id: 121,
    title: "Transmission Fluid Pressure Testers",
    desc: "Precision tools for measuring transmission fluid pressure in automotive systems.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product121.png",
    category: "Diagnostic & Testing Equipment"
  },
  {
    id: 122,
    title: "Data Loggers for Vehicle Performance",
    desc: "Advanced devices for recording and analyzing vehicle performance",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product122.png",
    category: "Diagnostic & Testing Equipment"
  },
  {
    id: 123,
    title: "Loading Dock Equipment",
    desc: "Equipment designed to streamline safe loading and unloading of goods in warehouses.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product123.png",
    category: "Safety and Storage (Warehousing) Solutions"
  },
  {
    id: 124,
    title: "Safety Barriers and Guardrails",
    desc: "Protective barriers designed to improve workplace safety and prevent accidents.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product124.png",
    category: "Safety and Storage (Warehousing) Solutions"
  },
  {
    id: 125,
    title: "Warehouse Ventilation Systems",
    desc: "Air circulation systems designed to maintain safe and comfortable.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product125.png",
    category: "Safety and Storage (Warehousing) Solutions"
  },
  {
    id: 126,
    title: "Lockable Storage Cabinets",
    desc: "Secure storage units designed to protect tools, chemicals, and valuable equipment.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product126.png",
    category: "Safety and Storage (Warehousing) Solutions"
  },
  {
    id: 127,
    title: "Ladders and Access Platforms",
    desc: "Safe and stable access solutions for elevated work and warehouse",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product127.png",
    category: "Safety and Storage (Warehousing) Solutions"
  },
  {
    id: 128,
    title: "Forklifts",
    desc: "Heavy-duty lifting vehicles for efficient material handling and warehouse operations.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product128.png",
    category: "Safety and Storage (Warehousing) Solutions"
  },
  {
    id: 129,
    title: "Warehouse Signage and Labels",
    desc: "Clear labeling and signage solutions for improving warehouse safety.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product129.png",
    category: "Safety and Storage (Warehousing) Solutions"
  },
  {
    id: 130,
    title: "Spill Containment Pallets",
    desc: "Containment systems designed to safely collect and control hazardous liquid spills.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product130.png",
    category: "Safety and Storage (Warehousing) Solutions"
  },
  {
    id: 131,
    title: "Protective Equipment Stations",
    desc: "Centralized storage units for quick access to personal protective equipment.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product131.png",
    category: "Safety and Storage (Warehousing) Solutions"
  },
  {
    id: 132,
    title: "Emergency Eyewash Stations",
    desc: "Safety equipment for immediate eye rinsing in case of chemical or hazardous exposure.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product132.png",
    category: "Safety and Storage (Warehousing) Solutions"
  },
  {
    id: 133,
    title: "Workbenches",
    desc: "Sturdy and reliable work surfaces designed for assembly, repair, and fabrication tasks.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product133.png",
    category: "General Workshop Tools"
  },
  {
    id: 134,
    title: "Vices and Clamps",
    desc: "Secure holding tools for stabilizing materials during cutting, welding, or assembly work.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product134.png",
    category: "General Workshop Tools"
  },
  {
    id: 135,
    title: "Rolling Stools",
    desc: "Ergonomic seating solutions designed for comfort and mobility during workshop tasks.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product135.png",
    category: "General Workshop Tools"
  },
  {
    id: 136,
    title: "Tool Trolleys",
    desc: "Mobile storage units for organized and easy transport of tools in workshop environments.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product136.png",
    category: "General Workshop Tools"
  },
  {
    id: 137,
    title: "Air Compressors",
    desc: "Reliable compressed air systems for powering pneumatic tools and workshop operations.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product137.png",
    category: "General Workshop Tools"
  },
  {
    id: 138,
    title: "Parts Washers",
    desc: "Efficient cleaning systems designed to remove grease, oil, and contaminants.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product138.png",
    category: "General Workshop Tools"
  },
  {
    id: 139,
    title: "Bench Grinders",
    desc: "Durable grinding machines for sharpening, shaping, and polishing metal tools and components.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product139.png",
    category: "General Workshop Tools"
  },
  {
    id: 140,
    title: "Torque Multipliers",
    desc: "High-performance tools for increasing torque output with minimal effort in heavy-duty applications.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product140.png",
    category: "General Workshop Tools"
  },
  {
    id: 141,
    title: "Welding Tables",
    desc: "Heavy-duty work surfaces designed for safe and stable welding and fabrication tasks.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product141.png",
    category: "General Workshop Tools"
  },
  {
    id: 142,
    title: "Handheld Power Tools",
    desc: "Portable electric tools designed for drilling, cutting, grinding, and assembly tasks.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product142.png",
    category: "General Workshop Tools"
  },
  {
    id: 143,
    title: "Cutting Tools (Snips, Shears)",
    desc: "Hand tools designed for precise cutting of metal sheets and workshop materials.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product143.png",
    category: "General Workshop Tools"
  },
  {
    id: 144,
    title: "Measuring Tools (Calipers, Micrometers)",
    desc: "Precision instruments for accurate measurement in mechanical.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product144.png",
    category: "General Workshop Tools"
  },
  {
    id: 145,
    title: "Safety Cabinets for Flammable Materials",
    desc: "Secure storage cabinets designed for safe handling of flammable liquids.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product145.png",
    category: "General Workshop Tools"
  },
  {
    id: 146,
    title: "Magnetic Tool Holders",
    desc: "Wall-mounted magnetic holders for easy access and organization of workshop tools.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product146.png",
    category: "General Workshop Tools"
  },
  {
    id: 147,
    title: "Vacuum Bleeders",
    desc: "Convenient storage solutions for organizing and securely holding metal tools.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product147.png",
    category: "Servicing Equipment & Maintenance"
  },
  {
    id: 148,
    title: "Tire Changing Machines",
    desc: "Heavy-duty machines for quick and safe mounting and demounting of vehicle tires.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product148.png",
    category: "Servicing Equipment & Maintenance"
  },
  {
    id: 149,
    title: "Engine Decarbonizing Machines",
    desc: "Equipment designed to remove carbon deposits and improve engine efficiency.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product149.png",
    category: "Servicing Equipment & Maintenance"
  },
  {
    id: 150,
    title: "Radiator Pressure Testers",
    desc: "Tools for testing radiator system integrity and detecting cooling system leaks.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product150.png",
    category: "Servicing Equipment & Maintenance"
  },
  {
    id: 151,
    title: "Pressure Monitoring Systems",
    desc: "Systems designed to accurately monitor pressure in automotive systems.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product151.png",
    category: "Servicing Equipment & Maintenance"
  },
  {
    id: 152,
    title: "Diagnostic Smoke Machines",
    desc: "Leak detection systems using smoke technology to identify air system issues.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product152.png",
    category: "Servicing Equipment & Maintenance"
  },
  {
    id: 153,
    title: "Carburetor Cleaning Machines",
    desc: "Precision cleaning systems for removing deposits carburetor performance.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product153.png",
    category: "Servicing Equipment & Maintenance"
  },
  {
    id: 154,
    title: "AC Recovery and Recharge Machines",
    desc: "Automated systems for recovering vehicle air conditioning refrigerants.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product154.png",
    category: "Servicing Equipment & Maintenance"
  },
  {
    id: 155,
    title: "Battery Chargers and Maintainers",
    desc: "Reliable devices for charging and extending automotive battery life.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product155.png",
    category: "Servicing Equipment & Maintenance"
  },
  {
    id: 156,
    title: "Spark Plug Cleaners",
    desc: "Specialized tools for cleaning and restoring spark plug performance and efficiency.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product156.png",
    category: "Servicing Equipment & Maintenance"
  },
  {
    id: 157,
    title: "Tire Storage Racks",
    desc: "Durable storage systems designed to safely organize and store tires in workshops.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product157.png",
    category: "Servicing Equipment & Maintenance"
  },
  {
    id: 158,
    title: "Transmission Fluid Exchange Machines",
    desc: "Advanced machines for efficient replacement of transmission fluid systems.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product158.png",
    category: "Servicing Equipment & Maintenance"
  },
  {
    id: 159,
    title: "Exhaust Extraction Systems",
    desc: "Ventilation systems designed to safely remove harmful exhaust gases.",
    imgUrl: "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/product159.png",
    category: "Servicing Equipment & Maintenance"
  }
]
export default productData;
