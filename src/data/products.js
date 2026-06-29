export const products = [
  // ═══════════════════════════════════════════════════════════════
  // SCIENTIFIC INSTRUMENTS — SI-001 to SI-020 (20 products)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "SI-001",
    name: "Digital Analytical Balance",
    category: "Scientific Instruments",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/scale,laboratory?lock=1",
    description: "Engineered for uncompromising accuracy, this digital analytical balance features electromagnetic force compensation. Ideal for high-stakes quantitative analysis in clinical and pharmaceutical environments.",
    specifications: [
      { key: "Capacity", value: "220g" },
      { key: "Readability", value: "0.1mg" },
      { key: "Calibration", value: "Internal Motorized" },
      { key: "Interface", value: "RS232 / USB" }
    ]
  },
  {
    id: "SI-002",
    name: "UV-VIS Spectrophotometer",
    category: "Scientific Instruments",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,instrument?lock=2",
    description: "A high-performance dual-beam spectrophotometer designed for precise photometric measurements. Features automated wavelength calibration and a robust xenon lamp for extended operational longevity.",
    specifications: [
      { key: "Wavelength Range", value: "190-1100nm" },
      { key: "Bandwidth", value: "1.0nm" },
      { key: "Photometric Accuracy", value: "±0.3% T" },
      { key: "Detector", value: "Silicon Photodiode" }
    ]
  },
  {
    id: "SI-003",
    name: "High-Speed Benchtop Centrifuge",
    category: "Scientific Instruments",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/centrifuge?lock=3",
    description: "Compact and highly efficient, this benchtop centrifuge delivers rapid separation of complex biological samples. Built with a brushless DC motor for zero-maintenance, whisper-quiet operation.",
    specifications: [
      { key: "Max Speed", value: "15,000 RPM" },
      { key: "Max RCF", value: "21,380 x g" },
      { key: "Rotor Capacity", value: "24 x 1.5/2.0mL" },
      { key: "Cooling", value: "Ambient Air-Flow" }
    ]
  },
  {
    id: "SI-004",
    name: "Vertical Pressure Steam Autoclave",
    category: "Scientific Instruments",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=4",
    description: "A fully automated, microcomputer-controlled sterilization unit. Provides intense, saturated steam pressure to guarantee complete eradication of clinical biohazards and laboratory contaminants.",
    specifications: [
      { key: "Chamber Volume", value: "50L" },
      { key: "Max Temp", value: "134°C" },
      { key: "Working Pressure", value: "0.22 MPa" },
      { key: "Material", value: "SUS304 Stainless" }
    ]
  },
  {
    id: "SI-005",
    name: "Digital pH/Ion Meter",
    category: "Scientific Instruments",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,instrument?lock=5",
    description: "Advanced electrochemical measurement system providing rapid, stable pH and ion concentration readings. Features intelligent endpoint algorithms and multipoint automatic calibration.",
    specifications: [
      { key: "pH Range", value: "-2.000 to 20.000" },
      { key: "Resolution", value: "0.001 pH" },
      { key: "Temp Comp", value: "Automatic (ATC)" },
      { key: "Data Log", value: "Up to 500 sets" }
    ]
  },
  {
    id: "SI-006",
    name: "Magnetic Hotplate Stirrer",
    category: "Scientific Instruments",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=6",
    description: "A heavy-duty ceramic-coated hotplate providing uniform thermal distribution and powerful magnetic agitation. Essential for rapid chemical dissolution and sustained temperature-controlled synthesis.",
    specifications: [
      { key: "Max Temp", value: "280°C" },
      { key: "Speed Range", value: "100 - 1500 RPM" },
      { key: "Plate Size", value: "135mm Diameter" },
      { key: "Safety", value: "Overheat Protection" }
    ]
  },
  {
    id: "SI-007",
    name: "CO2 Incubator",
    category: "Scientific Instruments",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,equipment?lock=7",
    description: "Engineered for optimal cell culture environments. This air-jacketed incubator maintains precise temperature and CO2 parameters while utilizing HEPA filtration to eliminate airborne particulates.",
    specifications: [
      { key: "Volume", value: "180L" },
      { key: "CO2 Sensor", value: "Infrared (IR)" },
      { key: "Jacket Type", value: "Air-Jacketed" },
      { key: "Sterilization", value: "90°C Moist Heat" }
    ]
  },
  {
    id: "SI-008",
    name: "Microplate Reader",
    category: "Scientific Instruments",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=8",
    description: "A versatile absorbance microplate reader designed for high-throughput screening. Delivers rapid spectral scanning and robust endpoint analysis for ELISA, protein, and nucleic acid assays.",
    specifications: [
      { key: "Wavelength", value: "340-750nm" },
      { key: "Plate Type", value: "96-well standard" },
      { key: "Read Time", value: "8 seconds / plate" },
      { key: "Light Source", value: "Tungsten Halogen" }
    ]
  },
  {
    id: "SI-009",
    name: "Ultrasonic Cleaning Bath",
    category: "Scientific Instruments",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,equipment?lock=9",
    description: "Industrial-grade ultrasonic cleaner utilizing high-frequency cavitation to strip contaminants from intricate glassware and surgical instruments without causing structural degradation.",
    specifications: [
      { key: "Capacity", value: "10L" },
      { key: "Frequency", value: "40kHz" },
      { key: "Heating", value: "Up to 80°C" },
      { key: "Timer", value: "1-99 Minutes" }
    ]
  },
  {
    id: "SI-010",
    name: "Forced Air Drying Oven",
    category: "Scientific Instruments",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,equipment?lock=10",
    description: "Engineered for rapid moisture extraction and thermal curing. The forced convection system ensures zero temperature gradients, providing absolute consistency across all internal shelving.",
    specifications: [
      { key: "Temp Range", value: "RT+10 to 300°C" },
      { key: "Fluctuation", value: "±1.0°C" },
      { key: "Chamber", value: "Galvanized Steel" },
      { key: "Controller", value: "PID Microprocessor" }
    ]
  },
  {
    id: "SI-011",
    name: "Rotary Evaporator",
    category: "Scientific Instruments",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=11",
    description: "High-efficiency rotary evaporation system for rapid solvent removal under vacuum. Features a motorized lift, digital temperature display, and integrated vacuum controller.",
    specifications: [
      { key: "Rotation", value: "20-200 RPM" },
      { key: "Bath Temp", value: "RT to 180°C" },
      { key: "Flask", value: "1L Standard" },
      { key: "Condenser", value: "Vertical Coil" }
    ]
  },
  {
    id: "SI-012",
    name: "Vortex Mixer",
    category: "Scientific Instruments",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=12",
    description: "Compact touch-and-go vortex mixer for rapid sample homogenization. Variable speed control ensures consistent mixing for tubes, vials, and small flasks.",
    specifications: [
      { key: "Speed", value: "0-3000 RPM" },
      { key: "Mode", value: "Touch / Continuous" },
      { key: "Cup Head", value: "Standard 51mm" },
      { key: "Motor", value: "Brushless DC" }
    ]
  },
  {
    id: "SI-013",
    name: "Orbital Shaker",
    category: "Scientific Instruments",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=13",
    description: "Digital orbital shaker platform providing uniform circular agitation for cell culture flasks, Erlenmeyer flasks, and microplates. Timer and speed programmable.",
    specifications: [
      { key: "Speed", value: "20-500 RPM" },
      { key: "Orbit", value: "20mm Circular" },
      { key: "Platform", value: "300x300mm" },
      { key: "Timer", value: "1-9999 min" }
    ]
  },
  {
    id: "SI-014",
    name: "Conductivity Meter",
    category: "Scientific Instruments",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,instrument?lock=14",
    description: "Benchtop conductivity meter with automatic temperature compensation. Covers a wide range from ultra-pure water to highly concentrated saline solutions.",
    specifications: [
      { key: "Range", value: "0-200 mS/cm" },
      { key: "Accuracy", value: "±0.5% FS" },
      { key: "Temp Comp", value: "Automatic (ATC)" },
      { key: "Electrodes", value: "4-Ring Platinum" }
    ]
  },
  {
    id: "SI-015",
    name: "Gel Electrophoresis System",
    category: "Scientific Instruments",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=15",
    description: "Complete horizontal gel electrophoresis system for DNA, RNA, and protein separation. Includes casting tray, combs, and a 300V programmable power supply.",
    specifications: [
      { key: "Gel Size", value: "150x100mm" },
      { key: "Voltage", value: "10-300V DC" },
      { key: "Samples", value: "Up to 40 Wells" },
      { key: "Safety", value: "Lid Interlock" }
    ]
  },
  {
    id: "SI-016",
    name: "Digital Thermostatic Water Bath",
    category: "Scientific Instruments",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,equipment?lock=16",
    description: "Precision-controlled stainless steel water bath with digital PID temperature regulation. Ideal for incubation, thawing, and thermostatic reactions.",
    specifications: [
      { key: "Capacity", value: "12L" },
      { key: "Temp Range", value: "RT+5 to 100°C" },
      { key: "Stability", value: "±0.1°C" },
      { key: "Openings", value: "2-Hole Ring Cover" }
    ]
  },
  {
    id: "SI-017",
    name: "Automatic Potentiometric Titrator",
    category: "Scientific Instruments",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,instrument?lock=17",
    description: "Fully automated potentiometric titrator with motorized burette for high-precision acid-base, redox, and complexometric titrations.",
    specifications: [
      { key: "Burette", value: "20mL / 0.01mL" },
      { key: "Precision", value: "±0.01mL" },
      { key: "Endpoints", value: "Automatic Detection" },
      { key: "Methods", value: "50 Storable" }
    ]
  },
  {
    id: "SI-018",
    name: "Flame Photometer",
    category: "Scientific Instruments",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,instrument?lock=18",
    description: "Clinical and analytical flame photometer for rapid detection of alkali and alkaline earth metals. Features simultaneous multi-channel measurement capability.",
    specifications: [
      { key: "Elements", value: "K, Na, Li, Ca, Ba" },
      { key: "Fuel", value: "LPG / Propane" },
      { key: "Linearity", value: "≤2%" },
      { key: "Display", value: "Digital LCD" }
    ]
  },
  {
    id: "SI-019",
    name: "Benchtop Refractometer",
    category: "Scientific Instruments",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,instrument?lock=19",
    description: "High-precision digital benchtop refractometer for Brix, refractive index, and concentration measurements in food, beverage, and pharmaceutical industries.",
    specifications: [
      { key: "Brix Range", value: "0-95%" },
      { key: "RI Range", value: "1.3000-1.7000" },
      { key: "Resolution", value: "0.1% Brix" },
      { key: "Temp Control", value: "Peltier" }
    ]
  },
  {
    id: "SI-020",
    name: "Melting Point Apparatus",
    category: "Scientific Instruments",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=20",
    description: "Visual melting point determination system with precision-controlled heating block. Enables observation of melting behavior through an integrated optical system.",
    specifications: [
      { key: "Temp Range", value: "RT to 300°C" },
      { key: "Heating Rate", value: "0.5-10°C/min" },
      { key: "Samples", value: "3 Simultaneous" },
      { key: "Optics", value: "Backlit Observation" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // LABORATORY CHEMICALS — LC-001 to LC-020 (20 products)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "LC-001",
    name: "Hydrochloric Acid 37%",
    category: "Laboratory Chemicals",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/chemical,bottle?lock=21",
    description: "High-purity Analytical Reagent (AR) grade hydrochloric acid. Manufactured under strict ISO standards, ensuring minimal trace metal contamination for sensitive titrations and digestions.",
    specifications: [
      { key: "CAS Number", value: "7647-01-0" },
      { key: "Grade", value: "AR / ACS" },
      { key: "Appearance", value: "Clear Liquid" },
      { key: "Packaging", value: "2.5L Glass Winch" }
    ]
  },
  {
    id: "LC-002",
    name: "Acetone AR Grade",
    category: "Laboratory Chemicals",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=22",
    description: "Premium analytical grade solvent featuring exceptional evaporation rates and ultra-low moisture content. Highly recommended for HPLC preparative work and critical glassware sterilization.",
    specifications: [
      { key: "CAS Number", value: "67-64-1" },
      { key: "Purity", value: "≥99.5%" },
      { key: "Water Content", value: "≤0.2%" },
      { key: "Residue", value: "≤0.001%" }
    ]
  },
  {
    id: "LC-003",
    name: "Sodium Hydroxide Pellets",
    category: "Laboratory Chemicals",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/chemical,bottle?lock=23",
    description: "Hygroscopic, ultra-pure caustic soda pellets designed for exact molar solution preparation. Extensively utilized in neutralization reactions, alkalimetry, and organic synthesis protocols.",
    specifications: [
      { key: "CAS Number", value: "1310-73-2" },
      { key: "Form", value: "White Pellets" },
      { key: "Assay", value: "≥98.0%" },
      { key: "Carbonate", value: "≤1.0%" }
    ]
  },
  {
    id: "LC-004",
    name: "Methanol HPLC Grade",
    category: "Laboratory Chemicals",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=24",
    description: "Spectrophotometrically graded methanol guaranteed for low UV absorbance. Subjected to sub-micron filtration to protect high-pressure liquid chromatography columns and detectors.",
    specifications: [
      { key: "CAS Number", value: "67-56-1" },
      { key: "Grade", value: "HPLC / LC-MS" },
      { key: "UV Absorbance", value: "≤0.01 at 254nm" },
      { key: "Filtration", value: "0.2 μm Filtered" }
    ]
  },
  {
    id: "LC-005",
    name: "Sulfuric Acid 98%",
    category: "Laboratory Chemicals",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/chemical,bottle?lock=25",
    description: "Concentrated, heavy-density sulfuric acid. An indispensable, highly reactive dehydrating agent and catalyst used across industrial metallurgy, fertilizer synthesis, and academic research.",
    specifications: [
      { key: "CAS Number", value: "7664-93-9" },
      { key: "Concentration", value: "95.0 - 98.0%" },
      { key: "Density", value: "1.84 g/cm³" },
      { key: "Chloride", value: "≤0.0001%" }
    ]
  },
  {
    id: "LC-006",
    name: "Ethanol Absolute 99.9%",
    category: "Laboratory Chemicals",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=26",
    description: "Anhydrous ethyl alcohol completely devoid of denaturants. Required for sensitive molecular biology applications, DNA precipitation, and precision pharmaceutical extraction.",
    specifications: [
      { key: "CAS Number", value: "64-17-5" },
      { key: "Purity", value: "99.9% (Anhydrous)" },
      { key: "Grade", value: "Molecular Biology" },
      { key: "Water Content", value: "≤0.1%" }
    ]
  },
  {
    id: "LC-007",
    name: "Potassium Permanganate",
    category: "Laboratory Chemicals",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/chemical,bottle?lock=27",
    description: "A potent, dark-purple oxidizing agent. Primarily utilized in quantitative volumetric analysis, redox titrations, and advanced water purification feasibility studies.",
    specifications: [
      { key: "CAS Number", value: "7722-64-7" },
      { key: "Form", value: "Crystalline Powder" },
      { key: "Assay", value: "≥99.0%" },
      { key: "Insolubles", value: "≤0.2%" }
    ]
  },
  {
    id: "LC-008",
    name: "Silver Nitrate",
    category: "Laboratory Chemicals",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=28",
    description: "Light-sensitive, high-purity crystalline silver nitrate. A critical reagent in halide extraction, argentometry, and the synthesis of specialized photographic and medical compounds.",
    specifications: [
      { key: "CAS Number", value: "7761-88-8" },
      { key: "Purity", value: "≥99.8%" },
      { key: "Free Acid", value: "Passes Test" },
      { key: "Storage", value: "Light-resistant" }
    ]
  },
  {
    id: "LC-009",
    name: "Chloroform AR Grade",
    category: "Laboratory Chemicals",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=29",
    description: "Stabilized analytical chloroform utilized for nucleic acid purification and heavy organic phase extractions. Features a distinct, heavy density for rapid aqueous separation.",
    specifications: [
      { key: "CAS Number", value: "67-66-3" },
      { key: "Stabilizer", value: "Amylene or Ethanol" },
      { key: "Density", value: "1.48 g/cm³" },
      { key: "Assay", value: "≥99.0 - 99.4%" }
    ]
  },
  {
    id: "LC-010",
    name: "Ammonium Hydroxide 25%",
    category: "Laboratory Chemicals",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/chemical,bottle?lock=30",
    description: "Volatile aqueous ammonia solution manufactured for precise buffering and complexometric titrations. Requires ventilated handling due to rapid off-gassing at ambient temperatures.",
    specifications: [
      { key: "CAS Number", value: "1336-21-6" },
      { key: "Concentration", value: "25% as NH3" },
      { key: "Appearance", value: "Colorless Liquid" },
      { key: "Residue", value: "≤0.002%" }
    ]
  },
  {
    id: "LC-011",
    name: "Dichloromethane",
    category: "Laboratory Chemicals",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=31",
    description: "High-purity dichloromethane (methylene chloride) for chromatographic separations and organic extractions. Stabilized with amylene for extended shelf life.",
    specifications: [
      { key: "CAS Number", value: "75-09-2" },
      { key: "Purity", value: "≥99.8%" },
      { key: "Density", value: "1.33 g/cm³" },
      { key: "Stabilizer", value: "Amylene (50 ppm)" }
    ]
  },
  {
    id: "LC-012",
    name: "Copper(II) Sulfate Pentahydrate",
    category: "Laboratory Chemicals",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=32",
    description: "Bright blue crystalline copper sulfate for analytical reagent use. Commonly employed in biuret tests, Fehling's solution preparation, and electroplating studies.",
    specifications: [
      { key: "CAS Number", value: "7758-99-8" },
      { key: "Assay", value: "≥99.0%" },
      { key: "Form", value: "Blue Crystals" },
      { key: "Iron (Fe)", value: "≤0.003%" }
    ]
  },
  {
    id: "LC-013",
    name: "Phenolphthalein Indicator",
    category: "Laboratory Chemicals",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=33",
    description: "Classic acid-base indicator powder for pH titrations. Transitions from colorless to vivid magenta pink in the pH range 8.2 to 10.0.",
    specifications: [
      { key: "CAS Number", value: "77-09-8" },
      { key: "Transition", value: "pH 8.2-10.0" },
      { key: "Form", value: "White Powder" },
      { key: "Grade", value: "Indicator Grade" }
    ]
  },
  {
    id: "LC-014",
    name: "Sodium Chloride AR Grade",
    category: "Laboratory Chemicals",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/chemical,bottle?lock=34",
    description: "Ultra-pure analytical reagent grade sodium chloride. Essential for saline solution preparation, conductivity calibration, and Kjeldahl nitrogen determination.",
    specifications: [
      { key: "CAS Number", value: "7647-14-5" },
      { key: "Assay", value: "≥99.5%" },
      { key: "Heavy Metals", value: "≤5 ppm" },
      { key: "pH (5% soln)", value: "5.0-8.0" }
    ]
  },
  {
    id: "LC-015",
    name: "Diethyl Ether",
    category: "Laboratory Chemicals",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=35",
    description: "Low-boiling, high-purity diethyl ether for liquid-liquid extractions. Stabilized with BHT to inhibit peroxide formation during long-term storage.",
    specifications: [
      { key: "CAS Number", value: "60-29-7" },
      { key: "Purity", value: "≥99.5%" },
      { key: "Boiling Point", value: "34.6°C" },
      { key: "Stabilizer", value: "BHT (≤1 ppm)" }
    ]
  },
  {
    id: "LC-016",
    name: "Nitric Acid 69%",
    category: "Laboratory Chemicals",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/chemical,bottle?lock=36",
    description: "Concentrated trace-metal grade nitric acid for heavy metal digestions and ICP-OES sample preparation. Ultra-low metallic impurities.",
    specifications: [
      { key: "CAS Number", value: "7697-37-2" },
      { key: "Concentration", value: "69-70%" },
      { key: "Density", value: "1.42 g/cm³" },
      { key: "Fe Content", value: "≤0.2 ppm" }
    ]
  },
  {
    id: "LC-017",
    name: "Potassium Hydroxide Pellets",
    category: "Laboratory Chemicals",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/chemical,bottle?lock=37",
    description: "Hygroscopic white pellets for the preparation of standardized potassium hydroxide solutions. Widely used in saponification value determinations.",
    specifications: [
      { key: "CAS Number", value: "1310-58-3" },
      { key: "Assay", value: "≥85.0%" },
      { key: "Form", value: "White Pellets" },
      { key: "Carbonate", value: "≤2.0%" }
    ]
  },
  {
    id: "LC-018",
    name: "Magnesium Sulfate Anhydrous",
    category: "Laboratory Chemicals",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=38",
    description: "Free-flowing anhydrous powder used as a powerful drying agent for organic solvents. High absorption capacity removes trace moisture effectively.",
    specifications: [
      { key: "CAS Number", value: "7487-88-9" },
      { key: "Assay", value: "≥99.5%" },
      { key: "Form", value: "White Powder" },
      { key: "Water", value: "≤1.0%" }
    ]
  },
  {
    id: "LC-019",
    name: "Bromothymol Blue",
    category: "Laboratory Chemicals",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=39",
    description: "Versatile pH indicator dye transitioning from yellow to blue in the range pH 6.0 to 7.6. Ideal for acid-base titrations and biological pH monitoring.",
    specifications: [
      { key: "CAS Number", value: "76-59-5" },
      { key: "Transition", value: "pH 6.0-7.6" },
      { key: "Form", value: "Dark Green Powder" },
      { key: "Solubility", value: "Ethanol Soluble" }
    ]
  },
  {
    id: "LC-020",
    name: "Toluene AR Grade",
    category: "Laboratory Chemicals",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=40",
    description: "Analytical reagent grade toluene with low water content. Utilized as a non-polar solvent in organic synthesis, extraction, and Karl Fischer titrations.",
    specifications: [
      { key: "CAS Number", value: "108-88-3" },
      { key: "Purity", value: "≥99.5%" },
      { key: "Density", value: "0.87 g/cm³" },
      { key: "Water", value: "≤0.03%" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // GLASSWARE — GW-001 to GW-020 (20 products)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "GW-001",
    name: "Volumetric Flask, Class A",
    category: "Glassware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/glassware,laboratory?lock=41",
    description: "Class A volumetric flask manufactured from low-expansion borosilicate glass. Calibrated 'To Contain' (TC) for precise dilution and standard solution preparation.",
    specifications: [
      { key: "Capacity", value: "1000mL" },
      { key: "Tolerance", value: "±0.30 mL" },
      { key: "Stopper Size", value: "Standard Taper #22" },
      { key: "Material", value: "Borosilicate 3.3" }
    ]
  },
  {
    id: "GW-002",
    name: "Graduated Cylinder, Hex Base",
    category: "Glassware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/glassware,laboratory?lock=42",
    description: "Heavy-duty borosilicate measuring cylinder with a reinforced hexagonal base to prevent rolling. Features high-contrast blue enamel graduations for exact volume reading.",
    specifications: [
      { key: "Capacity", value: "250mL" },
      { key: "Graduation Interval", value: "2.0mL" },
      { key: "Base Style", value: "Hexagonal Glass" },
      { key: "Standard", value: "ASTM E1272" }
    ]
  },
  {
    id: "GW-003",
    name: "Burette with PTFE Stopcock",
    category: "Glassware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=43",
    description: "Precision dispensing burette equipped with a self-lubricating Polytetrafluoroethylene (PTFE) stopcock. Engineered to eliminate freezing and ensure smooth, drop-by-drop titration.",
    specifications: [
      { key: "Capacity", value: "50mL" },
      { key: "Subdivision", value: "0.10mL" },
      { key: "Stopcock", value: "2mm Bore PTFE" },
      { key: "Accuracy Class", value: "Class AS" }
    ]
  },
  {
    id: "GW-004",
    name: "Erlenmeyer Flask, Heavy Duty",
    category: "Glassware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/glassware,laboratory?lock=44",
    description: "Wide-mouth conical flask designed with reinforced rims to reduce chipping. Ideal for aggressive mixing, heating applications, and aerobic liquid cultures.",
    specifications: [
      { key: "Capacity", value: "500mL" },
      { key: "Neck Style", value: "Wide Mouth" },
      { key: "Graduation Range", value: "100-500mL" },
      { key: "Thermal Shock", value: "Up to 160°C" }
    ]
  },
  {
    id: "GW-005",
    name: "Soxhlet Extraction Apparatus",
    category: "Glassware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=45",
    description: "Complete continuous solid-liquid extraction system. Includes a flat-bottom boiling flask, the central Soxhlet extractor, and a highly efficient Allihn reflux condenser.",
    specifications: [
      { key: "Extractor Capacity", value: "250mL" },
      { key: "Joint (Top)", value: "45/40 ST" },
      { key: "Joint (Bottom)", value: "24/40 ST" },
      { key: "Glass Type", value: "Borosilicate" }
    ]
  },
  {
    id: "GW-006",
    name: "Liebig Condenser",
    category: "Glassware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=46",
    description: "Straight-tube water-jacketed condenser. An essential component for standard distillation assemblies, offering reliable cooling efficiency for liquids with boiling points up to 150°C.",
    specifications: [
      { key: "Jacket Length", value: "400mm" },
      { key: "Joint Size", value: "24/40" },
      { key: "Hose Connections", value: "10mm OD Serrated" },
      { key: "Application", value: "Downward Distillation" }
    ]
  },
  {
    id: "GW-007",
    name: "Round Bottom Boiling Flask",
    category: "Glassware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/glassware,laboratory?lock=47",
    description: "Single-neck round bottom flask optimized for uniform heat distribution. Thick-walled construction permits safe operation under rigorous vacuum distillation environments.",
    specifications: [
      { key: "Capacity", value: "1000mL" },
      { key: "Joint Type", value: "Standard Taper 24/40" },
      { key: "Wall Thickness", value: "Uniform Heavy" },
      { key: "Use Case", value: "Reflux & Distillation" }
    ]
  },
  {
    id: "GW-008",
    name: "Low Form Griffin Beaker",
    category: "Glassware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/glassware,laboratory?lock=48",
    description: "The quintessential laboratory vessel. Features a slightly flared beaded rim, an easy-pour spout, and double-scale graduations for rapid volume approximation.",
    specifications: [
      { key: "Capacity", value: "600mL" },
      { key: "Graduation Range", value: "50-500mL" },
      { key: "Spout Style", value: "Drip-Free" },
      { key: "Material", value: "Type 1 Class A Glass" }
    ]
  },
  {
    id: "GW-009",
    name: "Pear-Shaped Separatory Funnel",
    category: "Glassware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=49",
    description: "Designed for flawless liquid-liquid phase separations. The pear-shaped geometry maximizes the interface area, while the PTFE stopcock ensures zero leakage during vigorous shaking.",
    specifications: [
      { key: "Capacity", value: "500mL" },
      { key: "Stopcock", value: "PTFE, 4mm Bore" },
      { key: "Stopper", value: "Polyethylene #27" },
      { key: "Stem", value: "Short, Angled" }
    ]
  },
  {
    id: "GW-010",
    name: "Reusable Glass Petri Dish",
    category: "Glassware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/glassware,laboratory?lock=50",
    description: "Autoclavable, high-clarity borosilicate petri dish. Engineered to remain optically flat, preventing distortion during high-magnification colony counting and tissue culture examination.",
    specifications: [
      { key: "Dimensions", value: "100mm x 15mm" },
      { key: "Sterilization", value: "Autoclavable to 160°C" },
      { key: "Clarity", value: "Distortion-Free" },
      { key: "Lid Fit", value: "Loose (Aerobic)" }
    ]
  },
  {
    id: "GW-011",
    name: "Volumetric Pipette, Class A",
    category: "Glassware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/pipette?lock=51",
    description: "Class A volumetric transfer pipette calibrated 'To Deliver' (TD) for maximum accuracy. Features a single graduation mark and a long drainage tip.",
    specifications: [
      { key: "Capacity", value: "25mL" },
      { key: "Tolerance", value: "±0.03 mL" },
      { key: "Standard", value: "ASTM E969" },
      { key: "Drainage", value: "Full Blow-Out" }
    ]
  },
  {
    id: "GW-012",
    name: "Graham Condenser",
    category: "Glassware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=52",
    description: "Coiled inner-tube condenser providing a significantly extended cooling path. Superior to Liebig condensers for refluxing high-boiling-point solvents.",
    specifications: [
      { key: "Jacket Length", value: "300mm" },
      { key: "Coil Turns", value: "5 Internal" },
      { key: "Joint Size", value: "24/40" },
      { key: "Application", value: "Reflux" }
    ]
  },
  {
    id: "GW-013",
    name: "Filtering Flask with Side Arm",
    category: "Glassware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/glassware,laboratory?lock=53",
    description: "Heavy-walled borosilicate suction flask with an integrated side arm. Engineered to withstand the pressure differential generated during vacuum filtration.",
    specifications: [
      { key: "Capacity", value: "1000mL" },
      { key: "Side Arm", value: "10mm OD" },
      { key: "Wall", value: "Extra-Thick Boro" },
      { key: "Vacuum Safe", value: "Full Rated" }
    ]
  },
  {
    id: "GW-014",
    name: "Desiccator with Porcelain Plate",
    category: "Glassware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=54",
    description: "Vacuum-rated glass desiccator with a ground-glass flange and a fitted porcelain plate. Maintains an ultra-dry environment for moisture-sensitive samples.",
    specifications: [
      { key: "Inner Diameter", value: "250mm" },
      { key: "Stopcock", value: "PTFE Vacuum" },
      { key: "Plate", value: "Perforated Porcelain" },
      { key: "Seal", value: "Grease-Free Ground" }
    ]
  },
  {
    id: "GW-015",
    name: "Reagent Bottle, Amber Glass",
    category: "Glassware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/glassware,laboratory?lock=55",
    description: "Light-protective amber glass storage bottle with a narrow mouth. Essential for preserving the integrity of light-sensitive reagents and standards.",
    specifications: [
      { key: "Capacity", value: "250mL" },
      { key: "Mouth", value: "Narrow (NS 19)" },
      { key: "Cap", value: "PTFE-Lined Screw" },
      { key: "Protection", value: "UV Filtered" }
    ]
  },
  {
    id: "GW-016",
    name: "Watch Glass",
    category: "Glassware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/glassware,laboratory?lock=56",
    description: "Concave circular borosilicate watch glass used as an evaporation surface, a beaker cover, or a platform for holding samples during weighing.",
    specifications: [
      { key: "Diameter", value: "120mm" },
      { key: "Profile", value: "Shallow Concave" },
      { key: "Edge", value: "Fire-Polished" },
      { key: "Material", value: "Borosilicate 3.3" }
    ]
  },
  {
    id: "GW-017",
    name: "Glass Funnel, 60 Degree",
    category: "Glassware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/glassware,laboratory?lock=57",
    description: "Long-stem analytical funnel with a 60-degree cone angle. Optimized for rapid gravity filtration and precise quantitative liquid transfer.",
    specifications: [
      { key: "Top Diameter", value: "100mm" },
      { key: "Stem Length", value: "150mm" },
      { key: "Cone Angle", value: "60°" },
      { key: "Stem Bore", value: "8mm" }
    ]
  },
  {
    id: "GW-018",
    name: "Test Tube, Rimless",
    category: "Glassware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/pipette?lock=58",
    description: "Standard rimless borosilicate test tube designed for direct flame heating. Uniform wall thickness provides excellent thermal shock resistance.",
    specifications: [
      { key: "Dimensions", value: "25 x 150mm" },
      { key: "Rim", value: "Rimless (Plain)" },
      { key: "Wall", value: "Uniform Medium" },
      { key: "Pack", value: "Box of 72" }
    ]
  },
  {
    id: "GW-019",
    name: "Distilling Column, Vigreux",
    category: "Glassware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=59",
    description: "Indented fractionation column providing high theoretical plate counts for efficient separation of close-boiling liquids in fractional distillation.",
    specifications: [
      { key: "Length", value: "300mm" },
      { key: "Joints", value: "24/40 Top & Bottom" },
      { key: "Indentations", value: "Paired Finger" },
      { key: "Plates", value: "~3 Theoretical" }
    ]
  },
  {
    id: "GW-020",
    name: "Crucible Adapter Set",
    category: "Glassware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=60",
    description: "Set of precision-molded neoprene filtration adapters. Enables the use of various-sized Gooch crucibles with standard filtering flask assemblies.",
    specifications: [
      { key: "Set Contents", value: "7 Sizes" },
      { key: "Material", value: "Chemical-Resistant Neoprene" },
      { key: "Compatibility", value: "Standard Flasks" },
      { key: "Range", value: "20mm to 45mm ID" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // PORCELAIN WARE — PW-001 to PW-020 (20 products)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "PW-001",
    name: "Büchner Filter Funnel",
    category: "Porcelain Ware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=61",
    description: "Heavy-duty glazed porcelain vacuum filtration funnel. Features a perfectly flat, perforated filter plate to prevent filter paper tearing under extreme negative pressure.",
    specifications: [
      { key: "Plate Diameter", value: "110mm" },
      { key: "Filter Paper Size", value: "11cm" },
      { key: "Glaze", value: "Full (Except Rim)" },
      { key: "Stem Type", value: "Straight" }
    ]
  },
  {
    id: "PW-002",
    name: "High Form Crucible with Cover",
    category: "Porcelain Ware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=62",
    description: "Thermal-shock resistant porcelain crucible engineered for extreme temperature ignitions and ashing procedures. Includes a precise-fitting cover to prevent sample loss during combustion.",
    specifications: [
      { key: "Capacity", value: "50mL" },
      { key: "Max Temperature", value: "1150°C" },
      { key: "Profile", value: "High Form" },
      { key: "Glaze Status", value: "Glazed inside/out" }
    ]
  },
  {
    id: "PW-003",
    name: "Laboratory Mortar and Pestle",
    category: "Porcelain Ware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=63",
    description: "Industrial-grade porcelain mortar set with an unglazed interior grinding surface. Essential for the deep pulverization and homogenization of hardened chemical compounds.",
    specifications: [
      { key: "Inner Diameter", value: "150mm" },
      { key: "Grinding Surface", value: "Unglazed Porcelain" },
      { key: "Spout", value: "Integrated Pouring" },
      { key: "Pestle Length", value: "165mm Oversized" }
    ]
  },
  {
    id: "PW-004",
    name: "Round Bottom Evaporating Dish",
    category: "Porcelain Ware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=64",
    description: "Shallow, round-bottom porcelain dish designed to maximize surface area for the rapid evaporation of excess solvents. Highly resistant to concentrated acids and bases.",
    specifications: [
      { key: "Capacity", value: "125mL" },
      { key: "Diameter", value: "90mm" },
      { key: "Max Temp", value: "1050°C" },
      { key: "Feature", value: "Integrated Pour Spout" }
    ]
  },
  {
    id: "PW-005",
    name: "Gooch Filter Crucible",
    category: "Porcelain Ware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=65",
    description: "Specialized porcelain crucible featuring a perforated bottom. Primarily utilized for the gravimetric determination of precipitates when coupled with glass microfiber filters.",
    specifications: [
      { key: "Capacity", value: "30mL" },
      { key: "Base Type", value: "Perforated" },
      { key: "Pore Size", value: "Standard 1mm" },
      { key: "Application", value: "Gravimetric Analysis" }
    ]
  },
  {
    id: "PW-006",
    name: "Combustion Boat",
    category: "Porcelain Ware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=66",
    description: "Unglazed, heavy-duty porcelain boat engineered to withstand the extreme thermal environments of tube furnaces during carbon and sulfur determination protocols.",
    specifications: [
      { key: "Dimensions", value: "90mm x 15mm" },
      { key: "Finish", value: "Unglazed (Matte)" },
      { key: "Thermal Limit", value: "1350°C" },
      { key: "Profile", value: "Low Rectangular" }
    ]
  },
  {
    id: "PW-007",
    name: "12-Well Spotting Plate",
    category: "Porcelain Ware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=67",
    description: "Brilliant white glazed porcelain plate featuring 12 deep depressions. Provides the perfect high-contrast background for observing colorimetric micro-reactions and indicator tests.",
    specifications: [
      { key: "Configuration", value: "3 x 4 Array" },
      { key: "Well Depth", value: "5mm" },
      { key: "Surface", value: "Highly Glazed White" },
      { key: "Chemical Resistance", value: "Acid/Alkali Proof" }
    ]
  },
  {
    id: "PW-008",
    name: "Hirsch Filtration Funnel",
    category: "Porcelain Ware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=68",
    description: "Conical porcelain funnel equipped with a fixed perforated plate. Designed specifically for the rapid vacuum filtration of small-volume, high-value crystalline precipitates.",
    specifications: [
      { key: "Top Diameter", value: "40mm" },
      { key: "Plate Diameter", value: "15mm" },
      { key: "Filter Compatibility", value: "10-15mm Discs" },
      { key: "Profile", value: "Steep Conical" }
    ]
  },
  {
    id: "PW-009",
    name: "Double-Ended Porcelain Spatula",
    category: "Porcelain Ware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=69",
    description: "Fully glazed, non-reactive porcelain spatula. Ideal for the transfer and manipulation of highly corrosive chemicals that would otherwise degrade standard metallic instruments.",
    specifications: [
      { key: "Length", value: "200mm" },
      { key: "End Types", value: "Flat / Spoon" },
      { key: "Reactivity", value: "Inert" },
      { key: "Cleaning", value: "Autoclavable" }
    ]
  },
  {
    id: "PW-010",
    name: "Handled Heating Casserole",
    category: "Porcelain Ware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=70",
    description: "Thick-walled porcelain casserole featuring a robust, integrated handle. Engineered for the safe, direct heating and manipulation of aggressive acid digestions on open flame.",
    specifications: [
      { key: "Capacity", value: "140mL" },
      { key: "Handle", value: "Integrated Porcelain" },
      { key: "Spout", value: "Directional Pouring" },
      { key: "Glaze", value: "Interior/Exterior Glazed" }
    ]
  },
  {
    id: "PW-011",
    name: "Replacement Porcelain Pestle",
    category: "Porcelain Ware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=71",
    description: "Oversized replacement porcelain grinding tool. Features an ergonomically balanced handle and a heavy, raw unglazed head optimized for crushing coarse chemical particles.",
    specifications: [
      { key: "Compatibility", value: "Fits 150mm Standard Mortar" },
      { key: "Grinding Texture", value: "Coarse Matte Porcelain" },
      { key: "Handle Style", value: "Fully Glazed Top Section" },
      { key: "Hardness", value: "Mohs Scale 7 Certified" }
    ]
  },
  {
    id: "PW-012",
    name: "Unglazed Low-Form Crucible",
    category: "Porcelain Ware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=72",
    description: "Low-form high-purity alumina-porcelain crucible. Left completely unglazed to eliminate any chemical interaction or melting anomalies during extreme temperature processing.",
    specifications: [
      { key: "Capacity", value: "25mL" },
      { key: "Form Profile", value: "Low-Form Squat Base" },
      { key: "Thermal Limit", value: "1200°C Extended" },
      { key: "Finish", value: "100% Raw Matte Unglazed" }
    ]
  },
  {
    id: "PW-013",
    name: "Perforated Desiccator Plate",
    category: "Porcelain Ware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=73",
    description: "Circular glazed porcelain plate featuring multiple perforations and a central finger hole. Designed to support crucibles cleanly above chemical desiccant beds.",
    specifications: [
      { key: "Diameter", value: "190mm Grid" },
      { key: "Glaze Finish", value: "One Side Highly Glazed" },
      { key: "Perforations", value: "Uniform 5mm Passages" },
      { key: "Fitment", value: "Standard 250mm Desiccators" }
    ]
  },
  {
    id: "PW-014",
    name: "Industrial Büchner Funnel",
    category: "Porcelain Ware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=74",
    description: "Large-scale porcelain vacuum filtration unit designed for heavy chemical processing. Thick walls isolate the internal atmosphere to support large volume extractions.",
    specifications: [
      { key: "Plate Diameter", value: "200mm Large" },
      { key: "Wall Thickness", value: "12mm Structural Rim" },
      { key: "Puncture Limit", value: "High Vacuum Resistant" },
      { key: "Chemical Limit", value: "Inert to Aqua Regia" }
    ]
  },
  {
    id: "PW-015",
    name: "High-Form Crucible Lid",
    category: "Porcelain Ware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=75",
    description: "Glazed porcelain replacement lid featuring an oversized ring handle. Loose-fitting profile enables gases to escape safely while blocking particulate contaminants.",
    specifications: [
      { key: "Fit Profile", value: "Matches 50mL High-Form Crucibles" },
      { key: "Handle Shape", value: "Integrated Vertical Ring" },
      { key: "Max Temp", value: "1150°C Stable" },
      { key: "Finish", value: "Glazed Top/Flange" }
    ]
  },
  {
    id: "PW-016",
    name: "Flat-Bottom Evaporating Dish",
    category: "Porcelain Ware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=76",
    description: "Shallow flat-bottom porcelain dish optimized for stable integration onto water baths and wire hotplate setups. Highly chemical resistant glaze prevents scaling.",
    specifications: [
      { key: "Outer Diameter", value: "90mm Flat Rim" },
      { key: "Bottom Geometry", value: "Flat Precision Ground" },
      { key: "Thermal Rating", value: "Safe for Open Flame" },
      { key: "Pouring Edge", value: "Sharp Anti-Drip Spout" }
    ]
  },
  {
    id: "PW-017",
    name: "Refractory Combustion Tube",
    category: "Porcelain Ware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/pipette?lock=77",
    description: "Heavy-wall unglazed porcelain tube intended for chemical combustion experiments inside horizontal element furnaces. Zero gas-permeability at maximum load.",
    specifications: [
      { key: "Dimensions", value: "500mm Length x 25mm OD" },
      { key: "Material Grade", value: "Alumina-Silicate Refractory" },
      { key: "Porosity", value: "0% Imperial Gas-Tight" },
      { key: "Max Threshold", value: "1400°C Peak Load" }
    ]
  },
  {
    id: "PW-018",
    name: "Porous Ceramic Filter Disc",
    category: "Porcelain Ware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=78",
    description: "Sintered porous ceramic disc built for chemical clarification and purification processes. Easily handles aggressive solvents that destroy plastic grids.",
    specifications: [
      { key: "Diameter", value: "60mm Discs" },
      { key: "Porosity Grade", value: "Medium Pores (15-40 microns)" },
      { key: "Composition", value: "Acid-Grade Sintered Alumina" },
      { key: "Reusability", value: "Acid-Washable & Autoclavable" }
    ]
  },
  {
    id: "PW-019",
    name: "Rectangular Incinerating Tray",
    category: "Porcelain Ware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=79",
    description: "Shallow rectangular unglazed tray engineered for ash analysis and high-temperature waste incineration in testing and metallurgical evaluation facilities.",
    specifications: [
      { key: "Dimensions", value: "100mm x 60mm x 15mm" },
      { key: "Shape", value: "Low-Profile Rectangular" },
      { key: "Finish", value: "Raw Unglazed Refractory" },
      { key: "Resistance", value: "Halogen and Slag Inert" }
    ]
  },
  {
    id: "PW-020",
    name: "Ball Mill Jar",
    category: "Porcelain Ware",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=80",
    description: "Heavy-duty alumina-reinforced porcelain ball mill grinding jar. Designed for fine powder preparation and mechanical alloying in planetary ball mills.",
    specifications: [
      { key: "Capacity", value: "1000mL" },
      { key: "Material", value: "Alumina-Reinforced Porcelain" },
      { key: "Lid Seal", value: "Gasketed Clamp" },
      { key: "Max Speed", value: "Compatible to 400 RPM" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // LABORATORY ACCESSORIES — LA-001 to LA-020 (20 products)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "LA-001",
    name: "Digital Pipette Pump",
    category: "Laboratory Accessories",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/pipette?lock=81",
    description: "Precision-engineered mechanical pipette pump designed for comfortable, one-handed operation. Compatible with a vast range of glass and plastic pipettes.",
    specifications: [
      { key: "Volume Range", value: "0.1 to 100mL" },
      { key: "Operation", value: "Thumb-wheel / Plunger" },
      { key: "Material", value: "Acid-Resistant ABS" },
      { key: "Sterilization", value: "Chemical Disinfectable" }
    ]
  },
  {
    id: "LA-002",
    name: "Stainless Steel Micro Spatula",
    category: "Laboratory Accessories",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=82",
    description: "High-grade 304 stainless steel spatula featuring a flat end and a V-spoon end. Ideal for the clean extraction and weighing of chemical powders.",
    specifications: [
      { key: "Length", value: "150mm" },
      { key: "Material", value: "304 Stainless Steel" },
      { key: "Design", value: "Double-Ended" },
      { key: "Corrosion", value: "Rust-Resistant" }
    ]
  },
  {
    id: "LA-003",
    name: "Z-Shape Test Tube Rack",
    category: "Laboratory Accessories",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/pipette?lock=83",
    description: "Space-saving, heavy-duty stainless steel rack. The innovative Z-shaped design offers maximum stability and clear viewing of tube contents during incubation.",
    specifications: [
      { key: "Capacity", value: "40 Wells" },
      { key: "Well Diameter", value: "20mm" },
      { key: "Material", value: "Autoclavable Stainless" },
      { key: "Profile", value: "Z-Design / Stackable" }
    ]
  },
  {
    id: "LA-004",
    name: "Heavy-Duty Bosshead Clamp",
    category: "Laboratory Accessories",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=84",
    description: "Die-cast aluminium bosshead designed for the secure attachment of support rods and hardware. Features oversized, easy-grip knobs for secure tightening.",
    specifications: [
      { key: "Material", value: "Die-Cast Aluminium" },
      { key: "Rod Limit", value: "Up to 16mm" },
      { key: "Hardware", value: "T-Handle Lock" },
      { key: "Durability", value: "Corrosion-Resistant Coat" }
    ]
  },
  {
    id: "LA-005",
    name: "360° Three-Finger Clamp",
    category: "Laboratory Accessories",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=85",
    description: "Versatile laboratory clamp featuring rubberized, multi-position fingers. Enables the precise positioning of condensers, flasks, and glass tubes at any angle.",
    specifications: [
      { key: "Finger Style", value: "Three-Finger, PVC Coated" },
      { key: "Swivel", value: "360-Degree Rotation" },
      { key: "Clamp Range", value: "10-50mm" },
      { key: "Material", value: "Zinc-Alloy / PVC" }
    ]
  },
  {
    id: "LA-006",
    name: "Solid Rubber Stopper Set",
    category: "Laboratory Accessories",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=86",
    description: "Comprehensive set of solid laboratory-grade rubber stoppers. Essential for the airtight sealing of test tubes, flasks, and reagent bottles.",
    specifications: [
      { key: "Sizes", value: "#00 through #10" },
      { key: "Composition", value: "Natural Chemical-Resistant Rubber" },
      { key: "Style", value: "Solid" },
      { key: "Durability", value: "Repeated Autoclavable" }
    ]
  },
  {
    id: "LA-007",
    name: "Universal Cast Iron Stand Base",
    category: "Laboratory Accessories",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=87",
    description: "Heavy-duty cast iron base for maximum support rod stability. The low-profile design fits seamlessly into cramped fume hood workspaces.",
    specifications: [
      { key: "Material", value: "Heavy-Duty Cast Iron" },
      { key: "Dimensions", value: "200mm x 125mm" },
      { key: "Coating", value: "Corrosion-Resistant Enamel" },
      { key: "Weight", value: "Balanced Industrial Mass" }
    ]
  },
  {
    id: "LA-008",
    name: "Support Rod, Stainless Steel",
    category: "Laboratory Accessories",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=88",
    description: "Precision-machined stainless steel support rod. Compatible with all standard base stands and universal clamping systems.",
    specifications: [
      { key: "Length", value: "600mm" },
      { key: "Material", value: "304 Stainless Steel" },
      { key: "Finish", value: "Polished Industrial" },
      { key: "Stability", value: "Non-Warping" }
    ]
  },
  {
    id: "LA-009",
    name: "Bulb-Type Pipette Filler",
    category: "Laboratory Accessories",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/pipette?lock=89",
    description: "Three-valve pipette bulb filler. Provides intuitive control over aspiration, liquid dispensing, and air expulsion for safe, accurate liquid measurements.",
    specifications: [
      { key: "Type", value: "Three-Valve Natural Rubber" },
      { key: "Safety", value: "Anti-Aspiration Ball" },
      { key: "Ease of Use", value: "Single-Hand Operation" },
      { key: "Compatibility", value: "All Graduated Pipettes" }
    ]
  },
  {
    id: "LA-010",
    name: "PTFE Magnetic Stir Bar Set",
    category: "Laboratory Accessories",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=90",
    description: "Versatile set of 7 high-performance magnetic stir bars. Fully encapsulated in chemically inert PTFE (Teflon) to prevent cross-contamination in aggressive reactions.",
    specifications: [
      { key: "Kit Contents", value: "7-Piece Assortment" },
      { key: "Coating", value: "Inert Virgin PTFE" },
      { key: "Features", value: "Pivot Ring for Stability" },
      { key: "Temperature", value: "Up to 250°C" }
    ]
  },
  {
    id: "LA-011",
    name: "Crucible Tongs, Stainless Steel",
    category: "Laboratory Accessories",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=91",
    description: "Robust crucible tongs manufactured from heavy-duty stainless steel. Featuring a curved, serrated jaw design for the secure and safe handling of hot porcelain crucibles.",
    specifications: [
      { key: "Length", value: "250mm" },
      { key: "Material", value: "304 Stainless Steel" },
      { key: "Design", value: "Serrated Curved Jaws" },
      { key: "Durability", value: "Heat-Resistant Joint" }
    ]
  },
  {
    id: "LA-012",
    name: "Double Burette Clamp",
    category: "Laboratory Accessories",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=92",
    description: "Spring-loaded double burette clamp featuring adjustable plastic-coated jaws to provide a non-scratch grip. Holds two burettes side-by-side for comparative titration.",
    specifications: [
      { key: "Capacity", value: "Dual Burette" },
      { key: "Mechanism", value: "Spring-Loaded Grip" },
      { key: "Jaw Coating", value: "Acid-Resistant PVC" },
      { key: "Mounting", value: "Standard Support Rod" }
    ]
  },
  {
    id: "LA-013",
    name: "Beaker Tongs",
    category: "Laboratory Accessories",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/glassware,laboratory?lock=93",
    description: "Large, plastic-coated beaker tongs designed to securely handle hot glassware up to 1500mL capacity. The angled jaw provides ergonomic control.",
    specifications: [
      { key: "Length", value: "300mm" },
      { key: "Coating", value: "Chemical-Resistant Plastic" },
      { key: "Grip Range", value: "Up to 1500mL Beakers" },
      { key: "Material", value: "Chrome-Plated Steel" }
    ]
  },
  {
    id: "LA-014",
    name: "Silicone Laboratory Tubing",
    category: "Laboratory Accessories",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=94",
    description: "High-flexibility, platinum-cured silicone tubing. Essential for gas and liquid transfer in peristaltic pumps and vacuum assemblies where heat stability is critical.",
    specifications: [
      { key: "Dimensions", value: "8mm ID x 12mm OD" },
      { key: "Length", value: "5 Meter Roll" },
      { key: "Temperature", value: "-50°C to 200°C" },
      { key: "Grade", value: "Ultra-Flexible" }
    ]
  },
  {
    id: "LA-015",
    name: "Nylon Bristle Test Tube Brush",
    category: "Laboratory Accessories",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/pipette?lock=95",
    description: "Deep-cleaning brush featuring tough nylon bristles on a flexible twisted-wire handle. Designed to clean the bottom and sidewalls of narrow glass vessels.",
    specifications: [
      { key: "Bristle Type", value: "Rigid Nylon" },
      { key: "Total Length", value: "200mm" },
      { key: "Handle", value: "Stainless Twisted-Wire" },
      { key: "Durability", value: "Chemical Resistant" }
    ]
  },
  {
    id: "LA-016",
    name: "Narrow-Mouth Wash Bottle",
    category: "Laboratory Accessories",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=96",
    description: "LDPE wash bottle featuring a precision-flow nozzle for accurate dispensing of solvents or distilled water. Includes a leak-proof screw cap.",
    specifications: [
      { key: "Capacity", value: "500mL" },
      { key: "Material", value: "Low-Density Polyethylene" },
      { key: "Design", value: "Narrow-Mouth / Fixed Nozzle" },
      { key: "Flow Control", value: "Squeeze-Actuated" }
    ]
  },
  {
    id: "LA-017",
    name: "Iron Support Ring with Bosshead",
    category: "Laboratory Accessories",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=97",
    description: "Support ring with an integrated bosshead for easy attachment to stand rods. Ideal for supporting funnels and evaporating dishes over burners.",
    specifications: [
      { key: "Ring Diameter", value: "100mm" },
      { key: "Material", value: "Powder-Coated Iron" },
      { key: "Attachment", value: "Integrated Bosshead" },
      { key: "Rigidity", value: "Non-Deforming Under Load" }
    ]
  },
  {
    id: "LA-018",
    name: "Ceramic-Centered Wire Gauze",
    category: "Laboratory Accessories",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=98",
    description: "Galvanized wire gauze with a reinforced ceramic center. Distributes heat evenly from a burner, preventing direct flame contact with glass containers.",
    specifications: [
      { key: "Dimensions", value: "150mm x 150mm" },
      { key: "Center", value: "Asbestos-Free Ceramic" },
      { key: "Frame", value: "Galvanized Steel Mesh" },
      { key: "Heat Rating", value: "High-Temp Compatible" }
    ]
  },
  {
    id: "LA-019",
    name: "Adjustable Bunsen Burner",
    category: "Laboratory Accessories",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=99",
    description: "Classic gas burner with a precision air-intake regulator. Allows for smooth adjustment of flame temperature from a gentle yellow to a roaring blue flame.",
    specifications: [
      { key: "Fuel", value: "Natural Gas" },
      { key: "Control", value: "Air-Flow Intake Sleeve" },
      { key: "Construction", value: "Heavy Brass/Zinc" },
      { key: "Stability", value: "Wide Weighted Base" }
    ]
  },
  {
    id: "LA-020",
    name: "Tripod Stand",
    category: "Laboratory Accessories",
    price: "Check with Procurement",
    image: "https://loremflickr.com/800/800/laboratory,science?lock=100",
    description: "Zinc-plated tripod stand designed to hold vessels above Bunsen burners. Provides a stable, permanent platform for chemical heating applications.",
    specifications: [
      { key: "Height", value: "150mm" },
      { key: "Finish", value: "Zinc-Plated Steel" },
      { key: "Structure", value: "Three-Leg Rigid Design" },
      { key: "Compatibility", value: "Fits Standard Gauze" }
    ]
  }
]