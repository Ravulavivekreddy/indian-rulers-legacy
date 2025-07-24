import { Kingdom } from '../types';

import qutbAibakImg from '../../assets/Qutb-ud-din Aibak.jpg';
import iltutmishImg from '../../assets/Iltutmish.jpg';
import raziaSultanaImg from '../../assets/Razia Sultana.jpg';
import balbanImg from '../../assets/Ghiyas ud din Balban.jpg';
import alauddinKhaljiImg from '../../assets/Alauddin Khalji.jpg';
import muhammadTughluqImg from '../../assets/Muhammad bin Tughluq.jpg';
import firozTughlaqImg from '../../assets/Firoz Shah Tughlaq.jpg';
import ibrahimLodiImg from '../../assets/Ibrahim Lodi.jpg';
import alaiDarwazaImg from '../../assets/Delhi Sultanate.jpg';
// Removed import for missing Tughlaqabad Fort image
// import tughlaqabadFortImg from '../../assets/Tughlaqabad Fort.jpg';

import raoSihaImg from '../../assets/Rao Siha.jpg';
import raoJodhaImg from '../../assets/Rao Jodha.jpg';
import raoMaldeoImg from '../../assets/Rao Maldeo.jpg';
import jaswantSinghImg from '../../assets/Maharaja Jaswant Singh.jpg';
import ajitSinghImg from '../../assets/Maharaja Ajit Singh.jpg';
import manSinghImg from '../../assets/Maharaja Man Singh.jpg';

import marwarEmpireImg from '../../assets/Marwar.jpg';

import ranaHammirImg from '../../assets/Rana Hammir.jpg';
import ranaKumbhaImg from '../../assets/Rana Kumbha.jpg';
import ranaSangaImg from '../../assets/Sanga.jpg';
import maharanaPratapImg from '../../assets/Maharana Pratap.jpg';
import ranaAmarSinghIImg from '../../assets/Rana Amar Singh I.jpg';
import maharanaRajSinghIImg from '../../assets/Maharana Raj Singh I.jpg';

import akbarImg from '../../assets/akbar.jpg';
import baburImg from '../../assets/Babur.jpg';
import humayunImg from '../../assets/Humayun.jpg';
import jahangirImg from '../../assets/Jahangir.jpg';
import shahJahanImg from '../../assets/Shah Jahan.jpg';
import aurangzebImg from '../../assets/Aurangzeb.jpg';
import bahadurShahIImg from '../../assets/Bahadur Shah I.jpg';
import bahadurShahIIImg from '../../assets/Bahadur Shah II.jpg';

import shivajiImg from '../../assets/shivaji.jpg';
import sambhajiImg from '../../assets/Sambhaji.jpg';
import rajaramImg from '../../assets/Rajaram.jpg';
import shahuImg from '../../assets/Shahu.jpg';
import bajiRaoIImg from '../../assets/Baji Rao I.jpg';
import balajiBajiRaoImg from '../../assets/Balaji Baji Rao.jpg';
import madhavraoIImg from '../../assets/Madhavrao I.jpg';

import hariharaIImg from '../../assets/Harihara I.jpg';
import bukkaRayaIImg from '../../assets/Bukka Raya I.jpg';
import hariharaIIImg from '../../assets/Harihara II.jpg';
import devaRayaIImg from '../../assets/Deva Raya I.jpg';
import devaRayaIIImg from '../../assets/Deva Raya I.jpg';
import achyutaDevaRayaImg from '../../assets/Achyuta Deva Raya.jpg';
import ramaRayaImg from '../../assets/Rama Raya.jpg';
import krishnadevarayaImg from '../../assets/krishnadevaraya.jpg';

import alauddinBahmanShahImg from '../../assets/Alauddin Bahman Shah.jpg';
import muhammadShahIImg from '../../assets/Muhammad Shah I.jpg';
import mujahidShahImg from '../../assets/Mujahid Shah.jpg';
import firozShahBahmaniImg from '../../assets/Firoz Shah Bahmani.jpg';
import ahmadShahIImg from '../../assets/Ahmad Shah I.jpg';
import mahmudGawanImg from '../../assets/Mahmud Gawan.jpg';

import sukaphaImg from '../../assets/Sukaphaa.jpg';
      import subinphaImg from '../../assets/Subinpha.jpg';
import sukangphaImg from '../../assets/Sukangpha.jpg';
import pratapSinghaImg from '../../assets/Purandar Singha.jpg';
import chakradhwajSinghaImg from '../../assets/Chakradhwaj Singha.jpg';
import rudraSinghaImg from '../../assets/Rudra Singha.jpg';
import purandarSinghaImg from '../../assets/Purandar Singha.jpg';

export const medievalKingdoms: Kingdom[] = [
  {
    id: "delhi_sultanate",
    name: "Delhi Sultanate",
    dynasty: "Multiple",
    startYear: 1206,
    endYear: 1526,
    period: "Medieval",
    capital: "Delhi",
    achievements: [
      "Established one of the largest Muslim empires in India, unifying vast territories under a centralized administration.",
      "Introduced Persian culture, language, and architectural styles, influencing Indian art and culture profoundly.",
      "Developed sophisticated administrative and military systems, including the iqta system for land revenue.",
      "Promoted trade, urbanization, and the growth of cities like Delhi as cultural and economic hubs.",
      "Patronized arts, literature, and religious institutions, fostering a rich cultural milieu.",
      "Built iconic architectural marvels such as the Qutub Minar and Alai Darwaza.",
      "Implemented market reforms and military expansions under rulers like Alauddin Khalji.",
      "Established a strong centralized bureaucracy and legal system based on Sharia law.",
      "Promoted Persian art, literature, and education, influencing Indian culture.",
      "Developed Indo-Islamic architecture blending Persian and Indian styles.",
      "Introduced new agricultural techniques and irrigation systems."
    ],
    majorWars: [
      "Battle of Tarain (1191 and 1192) - Marked the beginning of Muslim rule in India with victories over Prithviraj Chauhan.",
      "Conquest of Northern India - Expansion under various sultans consolidating control over Rajput and other kingdoms.",
      "Conflicts with Rajput kingdoms - Numerous battles asserting dominance over northern India.",
      "Resistance against Mongol invasions - Successfully repelled multiple Mongol incursions, securing the empire's frontiers.",
      "Battle of Panipat (1526) - The decisive battle marking the end of the Delhi Sultanate and the rise of the Mughal Empire."
    ],

    rulers: [
      { name: "Qutb-ud-din Aibak", reignStart: 1206, reignEnd: 1210, notable: "Founder, built Qutub Minar", image: qutbAibakImg, achievements: [
        "Founded the Delhi Sultanate and established Delhi as the capital.",
        "Constructed the iconic Qutub Minar, a symbol of Islamic architecture in India.",
        "Laid the foundation for a centralized administrative framework."
      ], militaryVictories: [
        "Conquered Delhi and surrounding regions.",
        "Defeated Rajput forces in key battles."
      ] },
      { name: "Iltutmish", reignStart: 1211, reignEnd: 1236, notable: "Consolidated Sultanate", image: iltutmishImg, achievements: [
        "Consolidated and expanded the Sultanate's territories.",
        "Introduced the iqta system for land revenue management.",
        "Strengthened the administrative and military structures."
      ], militaryVictories: [
        "Defeated rival claimants to the throne.",
        "Repelled Mongol invasions successfully."
      ] },
      { name: "Razia Sultana", reignStart: 1236, reignEnd: 1240, notable: "First female ruler of Delhi", image: raziaSultanaImg, achievements: [
        "First and only female Sultan of Delhi.",
        "Promoted justice and administrative reforms."
      ], militaryVictories: [
        "Maintained control over the Sultanate amidst internal rebellions.",
        "Fought and suppressed internal uprisings."
      ] },
      { name: "Ghiyas ud din Balban", reignStart: 1266, reignEnd: 1287, notable: "Strengthened royal authority", image: balbanImg, achievements: [
        "Centralized power and reinforced royal authority.",
        "Strengthened military and administrative systems."
      ], militaryVictories: [
        "Suppressed rebellions and dissent.",
        "Defended the Sultanate against Mongol invasions."
      ] },
      { name: "Alauddin Khalji", reignStart: 1296, reignEnd: 1316, notable: "Market reforms, South expansion", image: alauddinKhaljiImg, achievements: [
        "Implemented market reforms to control prices and supply.",
        "Expanded the empire into South India.",
        "Built a strong and disciplined army."
      ], militaryVictories: [
        "Defeated Rajput kingdoms including Chittor and Ranthambore.",
        "Conquered Deccan Sultanates and expanded territorial control."
      ] },
      { name: "Muhammad bin Tughluq", reignStart: 1325, reignEnd: 1351, notable: "Capital shift to Daulatabad", image: muhammadTughluqImg, achievements: [
        "Attempted ambitious administrative reforms including capital shift.",
        "Faced challenges and rebellions due to unpopular policies."
      ], militaryVictories: [
        "Achieved initial military successes.",
        "Faced rebellions and loss of territories later."
      ] },
      { name: "Firoz Shah Tughlaq", reignStart: 1351, reignEnd: 1388, notable: "Administrative reforms", image: firozTughlaqImg, achievements: [
        "Built canals, rest houses, and mosques.",
        "Promoted education and religious tolerance."
      ], militaryVictories: [
        "Maintained relative stability and defended against invasions."
      ] },
      { name: "Ibrahim Lodi", reignStart: 1517, reignEnd: 1526, notable: "Last Delhi Sultan", image: ibrahimLodiImg, achievements: [
        "Last ruler of the Delhi Sultanate.",
        "Faced growing threat from the emerging Mughal Empire."
      ], militaryVictories: [
        "Fought the Battle of Panipat (1526) but was defeated."
      ] }
    ],
    territory: { lat: 28.6, lng: 77.2, x: 300, y: 320 },
    color: "heritage-saffron",
    importance: "major",
    stateColor: "#FF6347",
    architecturalMarvels: [
      {
        name: "Qutub Minar",
        image: qutbAibakImg,
        description: "A UNESCO World Heritage Site and the tallest brick minaret in the world, built by Qutb-ud-din Aibak. It is an iconic example of Indo-Islamic architecture with intricate carvings and inscriptions."
      },
      {
        name: "Alai Darwaza",
        image: alaiDarwazaImg,
        description: "The Alai Darwaza is a gateway built by Alauddin Khalji in the Qutub complex, known for its Islamic architectural features including pointed arches and intricate lattice work."
      },
      {
        name: "Qutb Complex",
        image: qutbAibakImg,
        description: "A complex of monuments and buildings at Mehrauli in Delhi, including the Qutub Minar and other significant structures from the Delhi Sultanate period."
      },
      {
        name: "Tughlaqabad Fort",
        image: "", // Image missing, can be added if provided
        description: "A massive fort built by Ghiyas ud din Tughlaq, representing the military architecture of the Delhi Sultanate period."
      }
    ]
  },
  {
  id: "mughal",
  name: "Mughal Empire",
  dynasty: "Mughal",
  startYear: 1526,
  endYear: 1857,
  period: "Medieval",
  capital: "Agra/Delhi",
  achievements: [
    "Established one of the largest empires in Indian history",
    "Promoted religious tolerance and cultural synthesis",
    "Built iconic architectural marvels like the Taj Mahal and Red Fort",
    "Developed efficient administrative and military systems",
    "Patronized arts, literature, and education",
    "Introduced Persianate culture in the Indian subcontinent"
  ],
  majorWars: [
    "First Battle of Panipat (1526)",
    "Battle of Khanwa (1527)",
    "Siege of Chittor (1567–1568)",
    "Deccan campaigns under Akbar, Shah Jahan, and Aurangzeb",
    "Battle of Samugarh (1658)",
    "Battle of Karnal (1739)",
    "Indian Rebellion of 1857"
  ],
    rulers: [
      {
        name: "Babur",
        reignStart: 1526,
        reignEnd: 1530,
        notable: "Founder, won Battle of Panipat",
        image: baburImg,
        achievements: [
          "Founded the Mughal Empire in India",
          "Authored Baburnama, an autobiography",
          "Introduced Central Asian culture and gardens to India"
        ],
        militaryVictories: [
          "First Battle of Panipat (1526)",
          "Battle of Khanwa (1527)",
          "Battle of Ghaghra (1529)"
        ]
      },
      {
        name: "Humayun",
        reignStart: 1530,
        reignEnd: 1540,
        notable: "Lost and regained empire",
        image: humayunImg,
        achievements: [
          "Survived exile and regained throne with Persian help",
          "Laid foundation for Mughal resurgence",
          "Established cordial ties with the Safavid dynasty"
        ],
        militaryVictories: [
          "Recapture of Delhi and Agra in 1555",
          "Defeated Afghan Sur forces with Persian support"
        ]
      },
      {
        name: "Akbar",
        reignStart: 1556,
        reignEnd: 1605,
        notable: "Religious tolerance, cultural synthesis",
        image: akbarImg,
        achievements: [
          "Established Din-i Ilahi and abolished jizya tax",
          "Promoted religious dialogue in Ibadat Khana",
          "Implemented mansabdari and revenue reforms",
          "Patronized arts, architecture (Fatehpur Sikri), and literature"
        ],
        militaryVictories: [
          "Conquest of Rajputana (e.g., Chittor, Ranthambore)",
          "Annexation of Gujarat, Bengal, and Kashmir",
          "Victory in the Second Battle of Panipat (1556)"
        ]
      },
      {
        name: "Jahangir",
        reignStart: 1605,
        reignEnd: 1627,
        notable: "Patron of arts, married Nur Jahan",
        image: jahangirImg,
        achievements: [
          "Consolidated empire and maintained internal stability",
          "Promoted Mughal miniature paintings",
          "Increased trade relations with the British East India Company"
        ],
        militaryVictories: [
          "Suppressed rebellions in Mewar and Deccan",
          "Expanded empire into parts of Northeast India"
        ]
      },
      {
        name: "Shah Jahan",
        reignStart: 1628,
        reignEnd: 1658,
        notable: "Taj Mahal builder, golden age",
        image: shahJahanImg,
        achievements: [
          "Built Taj Mahal, Red Fort, and Jama Masjid",
          "Strengthened central administration",
          "Patronized Persian art and culture"
        ],
        militaryVictories: [
          "Campaigns in the Deccan and Balkh",
          "Suppressed rebellions in Central India"
        ]
      },
      {
        name: "Aurangzeb",
        reignStart: 1658,
        reignEnd: 1707,
        notable: "Last great emperor, expanded to Deccan",
        image: aurangzebImg,
        achievements: [
          "Expanded empire to its greatest territorial extent",
          "Imposed stricter Islamic laws",
          "Built Bibi Ka Maqbara"
        ],
        militaryVictories: [
          "Annexation of Bijapur and Golconda",
          "Long campaigns against Marathas and Sikhs",
          "Suppression of multiple internal revolts"
        ]
      },
      {
        name: "Bahadur Shah I",
        reignStart: 1707,
        reignEnd: 1712,
        notable: "Faced Sikh and Maratha revolts",
        image: bahadurShahIImg,
        achievements: [
          "Attempted reconciliation with Rajputs and Sikhs",
          "Maintained temporary control over empire after Aurangzeb"
        ],
        militaryVictories: [
          "Fought against Sikh uprising",
          "Suppressed Rajput rebellions"
        ]
      },
      {
        name: "Bahadur Shah II",
        reignStart: 1837,
        reignEnd: 1857,
        notable: "Last Mughal emperor, 1857 revolt",
        image: bahadurShahIIImg,
        achievements: [
          "Symbolic leader during 1857 revolt",
          "Last Mughal emperor"
        ],
        militaryVictories: [
          "None"
        ]
      }
    ],
    territory: { lat: 27.2, lng: 78.0, x: 310, y: 340 },
    color: "heritage-saffron",
    importance: "major",
    stateColor: "#DC143C",
    architecturalMarvels: [
      {
        name: "Taj Mahal",
        image: "",
        description: "An iconic white marble mausoleum built by Shah Jahan in Agra, symbolizing Mughal architectural excellence."
      },
      {
        name: "Red Fort",
        image: "",
        description: "A historic fort in Delhi that served as the main residence of Mughal emperors."
      }
    ]
  },
  {
    id: "maratha",
    name: "Maratha Empire",
    dynasty: "Maratha",
    startYear: 1674,
    endYear: 1818,
    period: "Medieval",
    capital: "Raigad/Pune",
    rulers: [
      { name: "Shivaji", reignStart: 1674, reignEnd: 1680, notable: "Founder, guerrilla warfare expert",image: shivajiImg },
      { name: "Sambhaji", reignStart: 1681, reignEnd: 1689, notable: "Fought against Mughals",image: sambhajiImg },
      { name: "Rajaram", reignStart: 1689, reignEnd: 1700, notable: "Continued resistance",image: rajaramImg },
      { name: "Shahu", reignStart: 1708, reignEnd: 1749, notable: "Appointed Peshwas",image: shahuImg },
      { name: "Baji Rao I", reignStart: 1720, reignEnd: 1740, notable: "Greatest Peshwa, rapid expansion",image: bajiRaoIImg },
      { name: "Balaji Baji Rao", reignStart: 1740, reignEnd: 1761, notable: "Lost Third Battle of Panipat",image: balajiBajiRaoImg },
      { name: "Madhavrao I", reignStart: 1761, reignEnd: 1772, notable: "Restored Maratha power",image: madhavraoIImg },
    ],
    territory: { lat: 18.5, lng: 73.9, x: 250, y: 550 },
    color: "heritage-saffron",
    importance: "major",
    stateColor: "#FF4500"
  },
  {
    id: "vijayanagara",
    name: "Vijayanagara Empire",
    dynasty: "Sangama",
    startYear: 1336,
    endYear: 1646,
    period: "Medieval",
    capital: "Vijayanagara (Hampi)",
    rulers: [
      { name: "Harihara I", reignStart: 1336, reignEnd: 1356, notable: "Co-founder with Bukka I", image: hariharaIImg, achievements: [
        "Co-founded Vijayanagara Empire",
        "Established strong administration",
        "Expanded territories"
      ] },
      { name: "Bukka Raya I", reignStart: 1356, reignEnd: 1377, notable: "Co-founder, expanded empire", image: bukkaRayaIImg, achievements: [
        "Co-founded Vijayanagara Empire",
        "Expanded empire significantly",
        "Strengthened military"
      ] },
      { name: "Harihara II", reignStart: 1377, reignEnd: 1404, notable: "Consolidated southern territories", image: hariharaIIImg, achievements: [
        "Consolidated southern territories",
        "Promoted trade and culture",
        "Strengthened administration"
      ] },
      { name: "Deva Raya I", reignStart: 1406, reignEnd: 1422, notable: "Built irrigation systems", image: devaRayaIImg, achievements: [
        "Built extensive irrigation systems",
        "Improved agriculture",
        "Expanded empire"
      ] },
      { name: "Deva Raya II", reignStart: 1424, reignEnd: 1446, notable: "Military innovations", image: devaRayaIIImg, achievements: [
        "Introduced military innovations",
        "Expanded empire",
        "Patronized arts and literature"
      ] },
      { name: "Krishnadevaraya", reignStart: 1509, reignEnd: 1529, notable: "Greatest ruler, golden age", image: krishnadevarayaImg, achievements: [
        "Led Vijayanagara to its golden age",
        "Expanded empire to greatest extent",
        "Patronized arts, literature, and architecture"
      ] },
      { name: "Achyuta Deva Raya", reignStart: 1529, reignEnd: 1542, notable: "Brother of Krishnadevaraya", image: achyutaDevaRayaImg, achievements: [
        "Maintained empire's stability",
        "Supported cultural activities"
      ] },
      { name: "Rama Raya", reignStart: 1542, reignEnd: 1565, notable: "Last effective ruler", image: ramaRayaImg, achievements: [
        "Last effective ruler of Vijayanagara",
        "Fought against Deccan Sultanates"
      ] }
    ],
    territory: { lat: 15.3, lng: 76.5, x: 280, y: 620 },
    color: "heritage-saffron",
    importance: "major",
    stateColor: "#B22222"
  },
  {
    id: "bahmani",
    name: "Bahmani Sultanate",
    dynasty: "Bahmani",
    startYear: 1347,
    endYear: 1527,
    period: "Medieval",
    capital: "Gulbarga",
    rulers: [
      { name: "Alauddin Bahman Shah", reignStart: 1347, reignEnd: 1358, notable: "Founder of Bahmani Sultanate",image: alauddinBahmanShahImg},
      { name: "Muhammad Shah I", reignStart: 1358, reignEnd: 1375, notable: "Expanded territories", image: muhammadShahIImg},
      { name: "Mujahid Shah", reignStart: 1375, reignEnd: 1378, notable: "Brief reign",image: mujahidShahImg},
      { name: "Firoz Shah Bahmani", reignStart: 1397, reignEnd: 1422, notable: "Cultural patron",image: firozShahBahmaniImg},
      { name: "Ahmad Shah I", reignStart: 1422, reignEnd: 1436, notable: "Moved capital to Bidar",image: ahmadShahIImg},
      { name: "Mahmud Gawan", reignStart: 1461, reignEnd: 1481, notable: "Prime Minister, effective ruler",image: mahmudGawanImg},
    ],
    territory: { lat: 17.3, lng: 76.8, x: 290, y: 580 },
    color: "heritage-saffron",
    importance: "medium",
    stateColor: "#8B0000"
  },
  {
    id: "marwar",
    name: "Marwar (Jodhpur)",
    dynasty: "Rathore",
    startYear: 1226,
    endYear: 1949,
    period: "Medieval",
    capital: "Jodhpur",
    achievements: [
      "Established a powerful Rajput kingdom in Rajasthan",
      "Maintained independence against Mughal and British forces",
      "Promoted Rajput culture and traditions",
      "Built impressive forts and palaces",
      "Played a key role in regional politics"
    ],
    majorWars: [
      "Battles against Mughals and other Rajput clans",
      "Resistance against Mughal expansion",
      "Participation in the Indian Rebellion of 1857",
      "Conflicts with Maratha Empire"
    ],
    rulers: [
      { name: "Rao Siha", reignStart: 1226, reignEnd: 1273, notable: "Founder of Rathore dynasty in Marwar", image: raoSihaImg },
{ name: "Rao Jodha", reignStart: 1438, reignEnd: 1489, notable: "Founder of Jodhpur city", image: raoJodhaImg },
{ name: "Rao Maldeo Rathore", reignStart: 1532, reignEnd: 1562, notable: "Powerful Rathore ruler; resisted Sher Shah Suri", image: raoMaldeoImg },
{ name: "Maharaja Jaswant Singh I", reignStart: 1638, reignEnd: 1678, notable: "Mughal governor of Gujarat and Kabul", image: jaswantSinghImg },
{ name: "Maharaja Ajit Singh", reignStart: 1679, reignEnd: 1724, notable: "Reclaimed throne after Aurangzeb's death", image: ajitSinghImg },
{ name: "Maharaja Man Singh", reignStart: 1803, reignEnd: 1843, notable: "Modernizer of Marwar; allied with British", image: manSinghImg }

    ],
    territory: { lat: 26.3, lng: 73.0, x: 200, y: 420 },
    color: "heritage-saffron",
    importance: "medium",
    stateColor: "#CD5C5C",
    architecturalMarvels: [
      {
        name: "Mehrangarh Fort",
        image: "Mehrangarh Fort.jpg",
        description: "A massive fort in Jodhpur, known for its impressive architecture and historical significance."
      }
    ]
  },
  {
  id: "mewar",
  name: "Mewar (Udaipur)",
  dynasty: "Sisodia",
  startYear: 1326,
  endYear: 1949,
  period: "Medieval",
  capital: "Chittorgarh/Udaipur",
  militaryCampaigns: [
    "Battle of Haldighati (1576) - Maharana Pratap's resistance against Mughal Emperor Akbar.",
    "Siege of Chittorgarh (1567-1568) - Mughal siege led by Akbar against the fort of Chittorgarh.",
    "Battle of Dewair (1606) - Rana Amar Singh I's victory over Mughal forces.",
    "Conflicts with the Mughal Empire during the reigns of Rana Raj Singh I and his successors.",
    "Battle of Khanwa (1527) - Rana Sanga's coalition against Babur's Mughal forces.",
    "Battle of Gagron (1519) - Rana Sanga's victory over the Malwa Sultanate.",
    "Battle of Rumal (1544) - Conflict with Sher Shah Suri's forces.",
    "Multiple skirmishes and defensive campaigns to protect Mewar's sovereignty."
  ],
  rulers: [
    { 
      name: "Rana Hammir", 
      reignStart: 1326, 
      reignEnd: 1364, 
      notable: "Restored Mewar after Muslim conquest", 
      image: ranaHammirImg,
      achievements: [
        "Re-established the independence of Mewar from Delhi Sultanate rule.",
        "Laid the foundation for Sisodia rule in Mewar.",
        "Strengthened administrative systems and reinforced regional control."
      ],
      militaryVictories: [
        "Defeated the Tughlaq forces to reclaim Chittorgarh.",
        "Consolidated Mewar's territory through campaigns against neighboring rulers."
      ]
    },
    { 
      name: "Rana Kumbha", 
      reignStart: 1433, 
      reignEnd: 1468, 
      notable: "Built Kumbhalgarh Fort", 
      image: ranaKumbhaImg,
      achievements: [
        "Constructed the majestic Kumbhalgarh Fort.",
        "Promoted art, music, and literature; known as a patron of learning.",
        "Expanded and fortified Mewar’s territory and infrastructure."
      ],
      militaryVictories: [
        "Defeated Sultan of Malwa and Gujarat in multiple battles.",
        "Successfully defended Mewar from multiple invasions."
      ]
    },
    { 
      name: "Maharana Pratap", 
      reignStart: 1572, 
      reignEnd: 1597, 
      notable: "Resisted Akbar, Battle of Haldighati", 
      image: maharanaPratapImg,
      achievements: [
        "Symbol of Rajput valor and independence; refused to submit to Akbar.",
        "Reorganized guerrilla resistance and preserved core Mewar territory.",
        "Established temporary capital in Gogunda and used mountainous terrain to strategic advantage."
      ],
      militaryVictories: [
        "Fought valiantly at the Battle of Haldighati (1576) against Mughal army.",
        "Recaptured much of Mewar during his reign through sustained resistance."
      ]
    },
    { 
      name: "Rana Amar Singh I", 
      reignStart: 1597, 
      reignEnd: 1620, 
      notable: "Made peace with Mughals", 
      image: ranaAmarSinghIImg,
      achievements: [
        "Ended decades-long hostilities by signing a treaty with Emperor Jahangir.",
        "Preserved autonomy and honor of Mewar while avoiding further destruction.",
        "Focused on rebuilding war-torn territories."
      ],
      militaryVictories: [
        "Defeated Mughal forces in the Battle of Dewair (1606).",
        "Defended Mewar's borders effectively before the peace treaty."
      ]
    },
    { 
      name: "Maharana Raj Singh I", 
      reignStart: 1652, 
      reignEnd: 1680, 
      notable: "Fought against Aurangzeb", 
      image: maharanaRajSinghIImg,
      achievements: [
        "Staunchly opposed Mughal Emperor Aurangzeb’s religious policies.",
        "Sheltered Hindu refugees, including temple priests and princesses.",
        "Commissioned temples and reinforced Mewar’s cultural identity."
      ],
      militaryVictories: [
        "Resisted Mughal invasions under Aurangzeb.",
        "Led defensive and offensive campaigns to secure Mewar’s autonomy."
      ]
    }
  ],
  territory: { lat: 24.6, lng: 73.7, x: 210, y: 450 },
  color: "heritage-saffron",
  importance: "medium",
  stateColor: "#800080"
},
  {
    id: "ahom",
    name: "Ahom Kingdom",
    dynasty: "Ahom",
    startYear: 1228,
    endYear: 1826,
    period: "Medieval",
    capital: "Sivasagar",
    rulers: [
      { 
  name: "Sukapha", 
  reignStart: 1228, 
  reignEnd: 1268, 
  notable: "Founder of the Ahom kingdom, migrated from Mong Mao (modern-day Myanmar) and established a new dynasty in Assam.", 
  image: sukaphaImg,
  achievements: [
    "Established the Ahom kingdom in Assam, laying foundations for nearly 600 years of rule.",
    "Introduced wet rice cultivation techniques and advanced administrative systems.",
    "Fostered harmony between indigenous tribes and migrants."
  ],
  militaryVictories: [
    "Consolidated power by defeating local tribes resisting his rule.",
    "Defended early territories from Burmese incursions."
  ]
},
{ 
  name: "Subinpha", 
  reignStart: 1281, 
  reignEnd: 1293, 
  notable: "Expanded the territory of the Ahom kingdom and strengthened the kingdom's control.", 
  
  achievements: [
    "Extended Ahom influence eastward and westward through diplomatic alliances and conquests.",
    "Improved the kingdom’s administrative efficiency and military organization."
  ],
  militaryVictories: [
    "Successfully subdued several rebellious local chieftains.",
    "Maintained peace and stability during his reign."
  ]
},
{ 
  name: "Sukangpha", 
  reignStart: 1552, 
  reignEnd: 1603, 
  notable: "Led successful resistance against Mughal incursions in Assam.", 
  image: sukangphaImg,
  achievements: [
    "Strengthened Ahom military infrastructure in response to external threats.",
    "Enhanced fortifications and promoted unity among the Ahom nobility."
  ],
  militaryVictories: [
    "Repulsed early Mughal attempts to penetrate Ahom territory.",
    "Maintained independence despite growing Mughal pressure."
  ]
},
{ 
  name: "Pratap Singha", 
  reignStart: 1603, 
  reignEnd: 1641, 
  notable: "Successfully repelled Mughal invasions and expanded Ahom influence.", 
  image: pratapSinghaImg,
  achievements: [
    "Established new administrative divisions to consolidate power.",
    "Promoted culture, infrastructure development, and economic growth."
  ],
  militaryVictories: [
    "Victory over Mughal forces in multiple battles securing Ahom sovereignty.",
    "Expanded Ahom control into Kamrup and other neighboring regions."
  ]
},
{ 
  name: "Chakradhwaj Singha", 
  reignStart: 1663, 
  reignEnd: 1669, 
  notable: "Ruled during the time of the famous general Lachit Borphukan, played a crucial role in Ahom's military campaigns.", 
  image: chakradhwajSinghaImg,
  achievements: [
    "Supported Lachit Borphukan’s campaigns against Mughal forces.",
    "Reinforced Ahom military and administrative systems."
  ],
  militaryVictories: [
    "Key figure during the Battle of Saraighat (1671) though after his reign, set the stage for the resistance.",
    "Ensured stability in the kingdom during turbulent times."
  ]
},
{ 
  name: "Rudra Singha", 
  reignStart: 1696, 
  reignEnd: 1714, 
  notable: "Presided over the golden age of the Ahom kingdom with cultural and military achievements.", 
  image: rudraSinghaImg,
  achievements: [
    "Expanded Ahom kingdom’s territory significantly.",
    "Patronized arts, culture, and religion; established many temples and public works.",
    "Strengthened diplomatic ties with neighboring states."
  ],
  militaryVictories: [
    "Consolidated control over regions previously contested by Mughals and other neighbors.",
    "Launched successful campaigns to reclaim lost territories."
  ]
},
{ 
  name: "Purandar Singha", 
  reignStart: 1818, 
  reignEnd: 1819, 
  notable: "Last independent Ahom king before British annexation.", 
  image: purandarSinghaImg,
  achievements: [
    "Attempted to restore Ahom sovereignty amidst rising British power.",
    "Struggled to maintain control over fragmented kingdom."
  ],
  militaryVictories: [
    "Limited successes defending kingdom against British advances.",
    "Final military resistance before British annexation of Assam."
  ]
},

    ],
    territory: { lat: 26.9, lng: 94.6, x: 520, y: 380 },
    color: "heritage-saffron",
    importance: "medium",
    stateColor: "#228B22"
  }
];
