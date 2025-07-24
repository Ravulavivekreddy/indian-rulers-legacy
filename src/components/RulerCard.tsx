import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Crown, ChevronDown, ChevronUp, Trophy, Scroll } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

import vijayalayaCholaImg from '@/assets/vijayalaya chola.jpg';
import adityaIImg from '@/assets/aditya I.jpg';
import parantakaIImg from '@/assets/parabtaka_I.jpg';
import rajarajaCholaIImg from '@/assets/rajaraja chola 1.jpg';
import rajendraCholaIImg from '@/assets/rajendra chola I.jpg';
import rajadhirajaCholaImg from '@/assets/rajadhiraja chola.jpg';
import kulothungaCholaIImg from '@/assets/kulothunga chola I.jpg';

// sikh images
import sikhEmpireImg from '@/assets/Sikh Empire.jpg';
import maharajaRanjitSinghImg from '@/assets/Maharaja Ranjit Singh.jpg';
import kharakSinghImg from '@/assets/Kharak Singh.jpg';
import nauNihalSinghImg from '@/assets/Nau Nihal Singh.jpg';
import sherSinghImg from '@/assets/Sher Singh.jpg';
import duleepSinghImg from '@/assets/Duleep Singh.jpg';
//gupta images
import chandraguptaIImg from '@/assets/chandragupta I.jpg';
import samudraguptaImg from '@/assets/samudraguptha.jpg';
import chandraptugaIIImg from '@/assets/chandragupta.jpg';
import skandaguptaImg from '@/assets/skandaguptha.jpg';
import kumaraguptaImg from '@/assets/kumaragupta.jpg';
import vishnuguptaImg from '@/assets/Vishnugupta.jpg';
import puruguptaImg from '@/assets/purugupta.jpg';
import ghatotkachaImg from '@/assets/Ghatotkacha.jpg';
import narasimhaguptaImg from '@/assets/narasimhaguptha.jpg';


//pallava images
import simhavishnuKingImg from '@/assets/simhavishnu.jpg'
import mahendravarmanKingImg from '@/assets/mahendravarman.jpg';
import narasimhavarmanKingImg from '@/assets/narasimhavarman.jpg';
import mahendravarmaIIKingImg from '@/assets/mahendravarma_II.jpg';
import narasimhavarmaIIKingImg from '@/assets/narasimhavarma II.jpg';
import parabtakaIKingImg from '@/assets/Parantaka I.jpg';

// Delhi Sultanate Images
import qutbAibakImg from '@/assets/Qutb-ud-din Aibak.jpg';
import iltutmishImg from '@/assets/Iltutmish.jpg';
import raziaSultanaImg from '@/assets/Razia Sultana.jpg';
import balbanImg from '@/assets/Ghiyas ud din Balban.jpg';
import alauddinKhaljiImg from '@/assets/Alauddin Khalji.jpg';
import muhammadTughluqImg from '@/assets/Muhammad bin Tughluq.jpg';
import firozTughlaqImg from '@/assets/Firoz Shah Tughlaq.jpg';
import ibrahimLodiImg from '@/assets/Ibrahim Lodi.jpg';

// Marwar Images
import raoSihaImg from '@/assets/Rao Siha.jpg';
import raoJodhaImg from '@/assets/Rao Jodha.jpg';
import raoMaldeoImg from '@/assets/Rao Maldeo.jpg';
import jaswantSinghImg from '@/assets/Maharaja Jaswant Singh.jpg';
import ajitSinghImg from '@/assets/Maharaja Ajit Singh.jpg';
import manSinghImg from '@/assets/Maharaja Man Singh.jpg';
import marwarEmpireImg from '@/assets/Marwar.jpg';

// Mewar Images
import ranaHammirImg from '@/assets/Rana Hammir.jpg';
import ranaKumbhaImg from '@/assets/Rana Kumbha.jpg';
import ranaSangaImg from '@/assets/Rana Sanga.jpg';
import maharanaPratapImg from '@/assets/Maharana Pratap.jpg';
import ranaAmarSinghIImg from '@/assets/Rana Amar Singh I.jpg';
import maharanaRajSinghIImg from '@/assets/Maharana Raj Singh I.jpg';

// mysore Kingdom
import tipuSultanImg from '@/assets/Tipu Sultan.jpg';
import hyderAliImg from '@/assets/Hyder Ali.jpg';

  // Mughal Images
  import baburImg from '@/assets/Babur.jpg';
  import humayunImg from '@/assets/Humayun.jpg';
  import jahangirImg from '@/assets/Jahangir.jpg';
  import shahJahanImg from '@/assets/Shah Jahan.jpg';
  import aurangzebImg from '@/assets/Aurangzeb.jpg';
  import bahadurShahIImg from '@/assets/Bahadur Shah I.jpg';
  import bahadurShahIIImg from '@/assets/Bahadur Shah II.jpg';
  import akbarImg from '@/assets/Akbar.jpg';

// Maratha Images
import shivajiImg from '@/assets/shivaji.jpg';
import sambhajiImg from '@/assets/Sambhaji.jpg';
import rajaramImg from '@/assets/Rajaram.jpg';
import shahuImg from '@/assets/Shahu.jpg';
import bajiRaoIImg from '@/assets/Baji Rao I.jpg';
import balajiBajiRaoImg from '@/assets/Balaji Baji Rao.jpg';
import madhavraoIImg from '@/assets/Madhavrao I.jpg';

// Vijayanagara Images
import hariharaIImg from '@/assets/Harihara I.jpg';
import bukkaRayaIImg from '@/assets/Bukka Raya I.jpg';
import hariharaIIImg from '@/assets/Harihara II.jpg';
import devaRayaIImg from '@/assets/Deva Raya I.jpg';
/* Removed import of missing asset */
// import devaRayaIIImg from '@/assets/Deva Raya II.jpg';
import achyutaDevaRayaImg from '@/assets/Achyuta Deva Raya.jpg';
import ramaRayaImg from '@/assets/Rama Raya.jpg';
import krishnadevarayaImg from '@/assets/krishnadevaraya.jpg';

// Bahmani Images
import alauddinBahmanShahImg from '@/assets/Alauddin Bahman Shah.jpg';
import muhammadShahIImg from '@/assets/Muhammad Shah I.jpg';
import mujahidShahImg from '@/assets/Mujahid Shah.jpg';
import firozShahBahmaniImg from '@/assets/Firoz Shah Bahmani.jpg';
import ahmadShahIImg from '@/assets/Ahmad Shah I.jpg';
import mahmudGawanImg from '@/assets/Mahmud Gawan.jpg';

// Ahom Images
import sukaphaImg from '@/assets/Sukaphaa.jpg';
import subinphaImg from '@/assets/Subinpha.jpeg';
import sukangphaImg from '@/assets/Sukangpha.jpg';
import pratapSinghaImg from '@/assets/Purandar Singha.jpg';
import chakradhwajSinghaImg from '@/assets/Chakradhwaj Singha.jpg';
import rudraSinghaImg from '@/assets/Rudra Singha.jpg';
import purandarSinghaImg from '@/assets/Purandar Singha.jpg';

interface Ruler {
  name: string;
  reignStart: number;
  reignEnd: number;
  notable: string;
  image?: string;
  achievements: string[];
  militaryVictories: string[];
  culturalContributions?: string[];
}

interface RulerCardProps {
  ruler: Ruler;
  kingdomName: string;
}

const getRulerDetails = (rulerName: string, kingdomName: string): Ruler => {
  const rulers = {
    // Delhi Sultanate
    "Qutb-ud-din Aibak": {
      name: "Qutb-ud-din Aibak",
      reignStart: 1206,
      reignEnd: 1210,
      notable: "Founder, built Qutub Minar",
      image: qutbAibakImg,
      achievements: [
        "Founded the Delhi Sultanate",
        "Constructed Qutub Minar",
        "Established administrative framework"
      ],
      militaryVictories: [
        "Conquered Delhi and surrounding regions",
        "Defeated Rajput forces"
      ]
    },
    "Iltutmish": {
      name: "Iltutmish",
      reignStart: 1211,
      reignEnd: 1236,
      notable: "Consolidated Sultanate",
      image: iltutmishImg,
      achievements: [
        "Consolidated and expanded the Sultanate",
        "Introduced Iqta system",
        "Strengthened administration"
      ],
      militaryVictories: [
        "Defeated rival claimants",
        "Repelled Mongol invasions"
      ]
    },
    "Vijayalaya Chola": {
      name: "Vijayalaya Chola",
      reignStart: 848,
      reignEnd: 871,
      notable: "Founder of imperial Cholas",
      image: vijayalayaCholaImg,
      achievements: [
        "Founded the imperial Chola dynasty",
        "Established Thanjavur as the capital",
        "Laid the foundation for Chola naval power"
      ],
      militaryVictories: [
        "Conquered Tanjore region",
        "Defeated the Pallavas"
      ]
    },
    "Aditya I": {
      name: "Aditya I",
      reignStart: 871,
      reignEnd: 907,
      notable: "Defeated Pallavas",
      image: adityaIImg,
      achievements: [
        "Expanded Chola territories",
        "Defeated Pallavas",
        "Strengthened Chola administration"
      ],
      militaryVictories: [
        "Victory over Pallavas",
        "Conquest of neighboring regions"
      ]
    },
    "Parantaka I": {
      name: "Parantaka I",
      reignStart: 907,
      reignEnd: 955,
      notable: "Extended empire to Lanka",
      image: parantakaIImg,
      achievements: [
        "Extended Chola Empire to Sri Lanka",
        "Strengthened naval power",
        "Promoted trade and commerce"
      ],
      militaryVictories: [
        "Conquest of Sri Lanka",
        "Defeated Pandyas and Cheras"
      ]
    },
    "Rajaraja Chola I": {
      name: "Rajaraja Chola I",
      reignStart: 985,
      reignEnd: 1014,
      notable: "Naval expansion and temple builder",
      image: rajarajaCholaIImg,
      achievements: [
        "Expanded Chola Empire to its greatest extent",
        "Built the Brihadeeswarar Temple",
        "Established strong naval power",
        "Conquered Sri Lanka and Maldives",
        "Promoted Tamil literature and arts"
      ],
      militaryVictories: [
        "Conquest of Sri Lanka",
        "Victory over Pandyas and Cheras",
        "Naval expeditions to Maldives",
        "Successful campaigns in Karnataka"
      ]
    },
    "Rajendra Chola I": {
      name: "Rajendra Chola I",
      reignStart: 1014,
      reignEnd: 1044,
      notable: "Southeast Asia conquest",
      image: rajendraCholaIImg,
      achievements: [
        "Conquered Southeast Asian territories",
        "Built Gangaikonda Cholapuram",
        "Established trade relations with China",
        "Extended empire to Bengal and Ganges",
        "Created powerful naval fleet"
      ],
      militaryVictories: [
        "Conquest of Bengal and Ganges region",
        "Naval expeditions to Southeast Asia",
        "Victory over Srivijaya Empire",
        "Successful campaigns in Kalinga"
      ]
    },
    "Rajadhiraja Chola": {
      name: "Rajadhiraja Chola",
      reignStart: 1044,
      reignEnd: 1054,
      notable: "Defeated Chalukyas",
      image: rajadhirajaCholaImg,
      achievements: [
        "Defeated Chalukyas",
        "Expanded Chola territories",
        "Strengthened military"
      ],
      militaryVictories: [
        "Victory over Chalukyas",
        "Successful military campaigns"
      ]
    },
    "Kulothunga Chola I": {
      name: "Kulothunga Chola I",
      reignStart: 1070,
      reignEnd: 1120,
      notable: "Restored Chola power",
      image: kulothungaCholaIImg,
      achievements: [
        "Restored Chola power",
        "Reformed administration",
        "Promoted arts and culture"
      ],
      militaryVictories: [
        "Defeated Western Chalukyas",
        "Maintained empire stability"
      ]
    },
    "Razia Sultana": {
      name: "Razia Sultana",
      reignStart: 1236,
      reignEnd: 1240,
      notable: "First female ruler of Delhi",
      image: raziaSultanaImg,
      achievements: [
        "First and only female Sultan of Delhi",
        "Promoted justice and administration reforms"
      ],
      militaryVictories: [
        "Maintained control over Sultanate",
        "Fought internal rebellions"
      ]
    },
    "Ghiyas ud din Balban": {
      name: "Ghiyas ud din Balban",
      reignStart: 1266,
      reignEnd: 1287,
      notable: "Strengthened royal authority",
      image: balbanImg,
      achievements: [
        "Centralized power",
        "Strengthened military and administration"
      ],
      militaryVictories: [
        "Suppressed rebellions",
        "Defended against Mongol invasions"
      ]
    },
    "Alauddin Khalji": {
      name: "Alauddin Khalji",
      reignStart: 1296,
      reignEnd: 1316,
      notable: "Market reforms, South expansion",
      image: alauddinKhaljiImg,
      achievements: [
        "Implemented market reforms",
        "Expanded empire to South India",
        "Strengthened army"
      ],
      militaryVictories: [
        "Defeated Rajput kingdoms",
        "Conquered Deccan Sultanates"
      ]
    },
    "Muhammad bin Tughluq": {
      name: "Muhammad bin Tughluq",
      reignStart: 1325,
      reignEnd: 1351,
      notable: "Capital shift to Daulatabad",
      image: muhammadTughluqImg,
      achievements: [
        "Attempted administrative reforms",
        "Shifted capital to Daulatabad"
      ],
      militaryVictories: [
        "Initial military successes",
        "Faced rebellions later"
      ]
    },
    "Firoz Shah Tughlaq": {
      name: "Firoz Shah Tughlaq",
      reignStart: 1351,
      reignEnd: 1388,
      notable: "Administrative reforms",
      image: firozTughlaqImg,
      achievements: [
        "Built canals and infrastructure",
        "Promoted education and religion"
      ],
      militaryVictories: [
        "Maintained empire stability",
        "Defended against invasions"
      ]
    },
    "Ibrahim Lodi": {
      name: "Ibrahim Lodi",
      reignStart: 1517,
      reignEnd: 1526,
      notable: "Last Delhi Sultan",
      image: ibrahimLodiImg,
      achievements: [
        "Last ruler of Delhi Sultanate",
        "Faced growing Mughal threat"
      ],
      militaryVictories: [
        "Fought Battle of Panipat",
        "Defended Sultanate"
      ]
    },
    // Gupta Empire
"Chandragupta I": {
  name: "Chandragupta I",
  reignStart: 320,
  reignEnd: 335,
  notable: "Founder of Gupta Empire",
  image: chandraguptaIImg,
  achievements: [
    "Established the Gupta dynasty, marking the start of Classical India.",
    "Forged strategic marriage alliances to strengthen his power.",
    "Laid foundation for a long-lasting empire known for prosperity and culture."
  ],
  militaryVictories: [
    "Extended control over Magadha and surrounding regions.",
    "Unified several northern Indian territories under Gupta rule."
  ]
},
"Samudragupta": {
  name: "Samudragupta",
  reignStart: 335,
  reignEnd: 375,
  notable: "Great conqueror and patron of arts",
  image: samudraguptaImg,
  achievements: [
    "Known as the ‘Napoleon of India’ due to extensive military campaigns.",
    "Issued gold coins depicting him playing the veena.",
    "Patronized poets and scholars; promoted Sanskrit literature."
  ],
  militaryVictories: [
    "Conquered large parts of northern and central India.",
    "Defeated multiple frontier kingdoms and tribal republics."
  ]
},
"Chandragupta II": {
  name: "Chandragupta II",
  reignStart: 375,
  reignEnd: 415,
  notable: "Golden Age ruler, defeated Shakas",
  image: chandraptugaIIImg,
  achievements: [
    "Presided over the Gupta Golden Age of art, science, and literature.",
    "Built diplomatic ties with foreign kingdoms like the Sassanids.",
    "Associated with the legendary court of 'Navaratnas' (Nine Gems), including Kalidasa."
  ],
  militaryVictories: [
    "Defeated the Shaka rulers in western India.",
    "Expanded the empire to western coasts including Gujarat."
  ]
},
"Kumaragupta I": {
  name: "Kumaragupta I",
  reignStart: 415,
  reignEnd: 455,
  notable: "Founded Nalanda University",
  image: kumaraguptaImg,
  achievements: [
    "Founded the famous Nalanda University, a global center for Buddhist learning.",
    "Maintained peace and prosperity throughout his reign.",
    "Issued coins showing various deities and royal emblems."
  ],
  militaryVictories: [
    "Protected the empire from minor frontier threats.",
    "Maintained territorial integrity through strategic governance."
  ]
},
"Skandagupta": {
  name: "Skandagupta",
  reignStart: 455,
  reignEnd: 467,
  notable: "Defeated Huna invasions",
  image: skandaguptaImg,
  achievements: [
    "Defended India from the Huna (Hephthalite) invasions.",
    "Maintained economic stability during external threats.",
    "Continued cultural patronage despite wartime challenges."
  ],
  militaryVictories: [
    "Successfully repelled Huna invasions in northwest India.",
    "Preserved the Gupta legacy during a turbulent period."
  ]
},
"Purugupta": {
  name: "Purugupta",
  reignStart: 467,
  reignEnd: 473,
  notable: "Later Gupta ruler",
  image: puruguptaImg,
  achievements: [
    "Continued the Gupta line during its gradual decline.",
    "Focused on sustaining internal administration and order."
  ],
  militaryVictories: [
    "Maintained defense against residual Huna threats."
  ]
},
"Narasimhagupta": {
  name: "Narasimhagupta",
  reignStart: 473,
  reignEnd: 476,
  notable: "Faced Huna invasions",
  image: narasimhaguptaImg,
  achievements: [
    "Faced increasing pressure from Hunas and internal strife.",
    "Struggled to maintain cohesion of the weakening empire."
  ],
  militaryVictories: [
    "Attempted resistance against Huna advances into Gupta territories."
  ]
},

    // Marwar (Jodhpur) Kingdom
"Rao Siha": {
  name: "Rao Siha",
  reignStart: 1226,
  reignEnd: 1273,
  notable: "Founder of Rathore dynasty in Marwar",
  image: raoSihaImg,
  achievements: [
    "Established the Rathore dynasty in Marwar.",
    "Laid the foundation for future Rajput resistance in western India.",
    "Strengthened Rajput identity and loyalty in the region."
  ],
  militaryVictories: [
    "Fought regional chieftains to consolidate Rathore power.",
    "Secured territory around Pali and Marwar."
  ]
},
"Rao Jodha": {
  name: "Rao Jodha",
  reignStart: 1438,
  reignEnd: 1489,
  notable: "Founder of Jodhpur city",
  image: raoJodhaImg,
  achievements: [
    "Founded the city of Jodhpur in 1459.",
    "Built the formidable Mehrangarh Fort.",
    "Expanded Marwar’s influence across western Rajasthan."
  ],
  militaryVictories: [
    "Conquered Mandore and other territories from local rivals.",
    "Consolidated Rathore control in the region."
  ]
},
"Rao Maldeo Rathore": {
  name: "Rao Maldeo Rathore",
  reignStart: 1532,
  reignEnd: 1562,
  notable: "Powerful Rathore ruler; resisted Sher Shah Suri",
  image: raoMaldeoImg,
  achievements: [
    "Expanded Marwar’s boundaries to their greatest extent.",
    "Known for able governance and military acumen.",
    "Earned respect even from adversaries like Sher Shah Suri."
  ],
  militaryVictories: [
    "Defeated Afghan and Rajput rivals in several campaigns.",
    "Engaged Sher Shah Suri at the Battle of Sammel (1544)."
  ]
},
"Maharaja Jaswant Singh I": {
  name: "Maharaja Jaswant Singh I",
  reignStart: 1638,
  reignEnd: 1678,
  notable: "Mughal governor of Gujarat and Kabul",
  image: jaswantSinghImg,
  achievements: [
    "Served the Mughal Empire with distinction under Shah Jahan and Aurangzeb.",
    "Governed key provinces like Kabul and Gujarat.",
    "Promoted architecture and administration in Marwar."
  ],
  militaryVictories: [
    "Led campaigns against Afghans and other northern threats.",
    "Maintained loyalty to Mughals while protecting Marwar’s interests."
  ]
},
"Maharaja Ajit Singh": {
  name: "Maharaja Ajit Singh",
  reignStart: 1679,
  reignEnd: 1724,
  notable: "Reclaimed throne after Aurangzeb's death",
  image: ajitSinghImg,
  achievements: [
    "Fought a long battle to reclaim the Marwar throne after Aurangzeb's annexation.",
    "Restored Rathore sovereignty and independence.",
    "Influential in Mughal court politics post-Aurangzeb."
  ],
  militaryVictories: [
    "Led a resistance against Mughal occupation of Marwar.",
    "Re-established Rathore control and defeated rivals with Rajput alliances."
  ]
},
"Maharaja Man Singh": {
  name: "Maharaja Man Singh",
  reignStart: 1803,
  reignEnd: 1843,
  notable: "Modernizer of Marwar; allied with British",
  image: manSinghImg,
  achievements: [
    "Implemented administrative and fiscal reforms.",
    "Strengthened ties with the British East India Company.",
    "Encouraged urban planning and public works in Jodhpur."
  ],
  militaryVictories: [
    "Maintained stability and internal peace during British expansion.",
    "Defended Marwar from local uprisings and external threats."
  ]
},// Pallava Kingdom
"Simhavishnu": {
  name: "Simhavishnu",
  reignStart: 575,
  reignEnd: 600,
  notable: "Established Pallava power",
  image: simhavishnuKingImg,
  achievements: [
    "Laid the foundation of Pallava supremacy in South India.",
    "Revived the dynasty after Kalabhra interregnum.",
    "Promoted early Tamil culture and governance."
  ],
  militaryVictories: [
    "Defeated Kalabhras",
    "Expanded Pallava territory into Tamil Nadu"
  ]
},
"Mahendravarman I": {
  name: "Mahendravarman I",
  reignStart: 600,
  reignEnd: 630,
  notable: "Patron of arts and architecture",
  image: mahendravarmanKingImg,
  achievements: [
    "Introduced rock-cut architecture in South India.",
    "Wrote plays like Mattavilasa Prahasana.",
    "Strengthened internal administration and cultural patronage."
  ],
  militaryVictories: [
    "Defended against Chalukya invasions",
    "Maintained Pallava sovereignty through strategic diplomacy"
  ]
},
"Narasimhavarman I": {
  name: "Narasimhavarman I",
  reignStart: 630,
  reignEnd: 668,
  notable: "Defeated Chalukyas, built Mamallapuram",
  image: narasimhavarmanKingImg,
  achievements: [
    "Led Pallavas to victory against Pulakesin II at Vatapi.",
    "Commissioned the construction of Mamallapuram monuments.",
    "Earned the title ‘Vatapikonda’ (conqueror of Vatapi)."
  ],
  militaryVictories: [
    "Victory over Chalukyas at Vatapi",
    "Established Mamallapuram as a cultural center"
  ]
},
"Mahendravarman II": {
  name: "Mahendravarman II",
  reignStart: 668,
  reignEnd: 672,
  notable: "Brief reign",
  image: mahendravarmaIIKingImg,
  achievements: [
    "Maintained continuity of Pallava rule after Narasimhavarman I.",
    "Oversaw administration during turbulent times."
  ],
  militaryVictories: []
},
"Paramesvaravarman I": {
  name: "Paramesvaravarman I",
  reignStart: 672,
  reignEnd: 700,
  notable: "Continued conflicts with Chalukyas",
  image: parabtakaIKingImg,
  achievements: [
    "Preserved Pallava autonomy against Chalukyan aggression.",
    "Maintained administrative and cultural activities."
  ],
  militaryVictories: [
    "Defended Pallava territories",
    "Maintained stability despite external threats"
  ]
},
"Narasimhavarman II": {
  name: "Narasimhavarman II",
  reignStart: 700,
  reignEnd: 728,
  notable: "Built Kailasanatha temple",
  image: narasimhavarmaIIKingImg,
  achievements: [
    "Commissioned the magnificent Kailasanatha temple at Kanchipuram.",
    "Encouraged temple architecture and Shaivism.",
    "Strengthened diplomatic and trade relations."
  ],
  militaryVictories: [
    "Consolidated Pallava power",
    "Protected kingdom from northern invasions"
  ]
}
,

    

    // Mughal Empire
    "Babur": {
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
    "Humayun": {
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
    "Akbar": {
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
    "Jahangir": {
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
    "Shah Jahan": {
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
    "Aurangzeb": {
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
    "Bahadur Shah I": {
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
    "Bahadur Shah II": {
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
    },

    // Maratha Empire
    "Shivaji": {
      name: "Shivaji",
      reignStart: 1674,
      reignEnd: 1680,
      notable: "Founder, guerrilla warfare expert",
      image: shivajiImg,
      achievements: [
        "Founded the Maratha Empire",
        "Established a strong naval force",
        "Created guerrilla warfare tactics",
        "Promoted religious tolerance",
        "Established efficient revenue system"
      ],
      militaryVictories: [
        "Battle of Pratapgad (1659)",
        "Capture of Torna Fort (1646)",
        "Battle of Kolhapur (1659)",
        "Multiple victories against Mughals"
      ]
    },
    "Sambhaji": {
      name: "Sambhaji",
      reignStart: 1681,
      reignEnd: 1689,
      notable: "Fought against Mughals",
      image: sambhajiImg,
      achievements: [
        "Defended Maratha independence against Mughals",
        "Continued father's policies",
        "Maintained strong military"
      ],
      militaryVictories: [
        "Resisted Aurangzeb's Deccan campaigns",
        "Fought prolonged war against Mughals"
      ]
    },
    "Rajaram": {
      name: "Rajaram",
      reignStart: 1689,
      reignEnd: 1700,
      notable: "Continued resistance",
      image: rajaramImg,
      achievements: [
        "Maintained Maratha resistance",
        "Established mobile government",
        "Kept Mughals engaged in Deccan wars"
      ],
      militaryVictories: [
        "Conducted guerrilla warfare",
        "Defended fortresses against Mughals"
      ]
    },
    "Shahu": {
      name: "Shahu",
      reignStart: 1708,
      reignEnd: 1749,
      notable: "Appointed Peshwas",
      image: shahuImg,
      achievements: [
        "Established Peshwa system",
        "Brought stability after Mughal-Maratha wars",
        "Expanded territory through diplomacy"
      ],
      militaryVictories: [
        "Consolidated Maratha gains",
        "Expanded influence in North India"
      ]
    },
    "Baji Rao I": {
      name: "Baji Rao I",
      reignStart: 1720,
      reignEnd: 1740,
      notable: "Greatest Peshwa, rapid expansion",
      image: bajiRaoIImg,
      achievements: [
        "Expanded Maratha power to zenith",
        "Brilliant military strategist",
        "Established Maratha supremacy in India"
      ],
      militaryVictories: [
        "Battle of Palkhed (1728)",
        "Capture of Malwa and Gujarat",
        "Successful campaigns against Mughals and Nizam"
      ]
    },
    "Balaji Baji Rao": {
      name: "Balaji Baji Rao",
      reignStart: 1740,
      reignEnd: 1761,
      notable: "Lost Third Battle of Panipat",
      image: balajiBajiRaoImg,
      achievements: [
        "Maintained vast Maratha territories",
        "Developed administration",
        "Patronized arts"
      ],
      militaryVictories: [
        "Initial territorial gains",
        "Defeated in Third Battle of Panipat (1761)"
      ]
    },
    "Madhavrao I": {
      name: "Madhavrao I",
      reignStart: 1761,
      reignEnd: 1772,
      notable: "Restored Maratha power",
      image: madhavraoIImg,
      achievements: [
        "Reclaimed lost territories",
        "Reestablished Maratha dominance",
        "Administrative reforms"
      ],
      militaryVictories: [
        "Recaptured Delhi",
        "Defeated Nizam of Hyderabad"
      ]
    },
    // Mewar Kingdom
"Rana Hammir": {
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
"Rana Kumbha": {
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
"Maharana Pratap": {
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
"Rana Amar Singh I": {
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
"Maharana Raj Singh I": {
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
},
 // Vijayanagara Empire
    "Harihara I": {
      name: "Harihara I",
      reignStart: 1336,
      reignEnd: 1356,
      notable: "Co-founder with Bukka I",
      image: hariharaIImg,
      achievements: [
      "Co-founded Vijayanagara Empire",
      "Established strong administration",
      "Expanded territories"
      ],
      militaryVictories: [
      "Defeated Hoysalas",
      "Expanded kingdom boundaries"
      ]
    },
    "Bukka Raya I": {
      name: "Bukka Raya I",
      reignStart: 1356,
      reignEnd: 1377,
      notable: "Co-founder, expanded empire",
      image: bukkaRayaIImg,
      achievements: [
      "Consolidated Vijayanagara power",
      "Established capital at Hampi",
      "Strengthened military"
      ],
      militaryVictories: [
      "Defeated Bahmani Sultanate",
      "Expanded southward"
      ]
    },
    "Deva Raya I": {
      name: "Deva Raya I",
      reignStart: 1406,
      reignEnd: 1422,
      notable: "Built irrigation systems",
      image: devaRayaIImg,
      achievements: [
      "Built extensive irrigation systems",
      "Improved agriculture",
      "Expanded empire"
      ],
      militaryVictories: [
      "Defeated Gajapatis",
      "Expanded eastern territories"
      ]
    },
    "Deva Raya II": {
      name: "Deva Raya II",
      reignStart: 1424,
      reignEnd: 1446,
      notable: "Military innovations",
      // image: devaRayaIIImg, // Removed due to missing asset
      achievements: [
        "Introduced military innovations",
        "Expanded empire",
        "Patronized arts and literature"
      ],
      militaryVictories: [
        "Successfully fought Bahmanis",
        "Maintained strong borders"
      ]
    },
    "Krishnadevaraya": {
      name: "Krishnadevaraya",
      reignStart: 1509,
      reignEnd: 1529,
      notable: "Greatest ruler, golden age",
      image: krishnadevarayaImg,
      achievements: [
        "Led Vijayanagara to its golden age",
        "Expanded empire to greatest extent",
        "Patronized arts, literature, and architecture"
      ],
      militaryVictories: [
        "Battle of Raichur (1520)",
        "Conquest of Udayagiri (1514)",
        "Victories over Gajapati rulers"
      ]
    },
    "Achyuta Deva Raya": {
      name: "Achyuta Deva Raya",
      reignStart: 1529,
      reignEnd: 1542,
      notable: "Brother of Krishnadevaraya",
      image: achyutaDevaRayaImg,
      achievements: [
        "Maintained empire's stability",
        "Supported cultural activities"
      ],
      militaryVictories: [
        "Defended against Deccan Sultans",
        "Maintained territorial integrity"
      ]
    },
    "Rama Raya": {
      name: "Rama Raya",
      reignStart: 1542,
      reignEnd: 1565,
      notable: "Last effective ruler",
      image: ramaRayaImg,
      achievements: [
        "Last effective ruler of Vijayanagara",
        "Administered vast empire"
      ],
      militaryVictories: [
        "Initial victories against Deccan Sultans",
        "Defeated in Battle of Talikota (1565)"
      ]
    },
    // Mysore Kingdom
"Hyder Ali": {
  name: "Hyder Ali",
  reignStart: 1761,
  reignEnd: 1782,
  notable: "Military innovator, rocket warfare",
  image: hyderAliImg,
  achievements: [
    "Rose from commander to de facto ruler of Mysore.",
    "Modernized the Mysore army with European techniques.",
    "Developed advanced rocket artillery systems."
  ],
  militaryVictories: [
    "Defeated Marathas and Nizam of Hyderabad in key battles.",
    "Fought the British effectively during the First and Second Anglo-Mysore Wars."
  ]
},
"Tipu Sultan": {
  name: "Tipu Sultan",
  reignStart: 1782,
  reignEnd: 1799,
  notable: "Tiger of Mysore, fought British",
  image: tipuSultanImg,
  achievements: [
    "Expanded use of Mysorean rockets in warfare.",
    "Introduced new currency, calendar, and modernized trade.",
    "Established alliances with France, Turkey, and Afghanistan against British."
  ],
  militaryVictories: [
    "Won major battles in the Second and Third Anglo-Mysore Wars.",
    "Achieved a decisive victory at the Battle of Pollilur (1780)."
  ]
},


    // Bahmani Sultanate
    "Alauddin Bahman Shah": {
      name: "Alauddin Bahman Shah",
      reignStart: 1347,
      reignEnd: 1358,
      notable: "Founder of Bahmani Sultanate",
      image: alauddinBahmanShahImg,
      achievements: [
        "Founded Bahmani Sultanate",
        "Established capital at Gulbarga",
        "Created administrative system"
      ],
      militaryVictories: [
        "Defeated Vijayanagara forces",
        "Expanded northern territories"
      ]
    },
    "Muhammad Shah I": {
      name: "Muhammad Shah I",
      reignStart: 1358,
      reignEnd: 1375,
      notable: "Expanded territories",
      image: muhammadShahIImg,
      achievements: [
        "Expanded Bahmani territories",
        "Built Gulbarga fort",
        "Promoted Persian culture"
      ],
      militaryVictories: [
        "Victories over Vijayanagara",
        "Expanded westward"
      ]
    },
    // Bahmani Sultanate
"Mujahid Shah": {
  name: "Mujahid Shah",
  reignStart: 1375,
  reignEnd: 1378,
  notable: "Brief reign",
  image: mujahidShahImg,
  achievements: [
    "Led an expedition against the Vijayanagara Empire.",
    "Attempted to expand Bahmani influence in southern India.",
    "Initiated military reforms despite his short reign."
  ],
  militaryVictories: [
    "Briefly occupied parts of Vijayanagara territory during his campaign.",
    "Demonstrated military ambition during early stages of Bahmani expansion."
  ]
},
"Firoz Shah Bahmani": {
  name: "Firoz Shah Bahmani",
  reignStart: 1397,
  reignEnd: 1422,
  notable: "Cultural patron",
  image: firozShahBahmaniImg,
  achievements: [
    "Encouraged Persian culture and literature.",
    "Established strong diplomatic and trade relations with Persia and the Arab world.",
    "Built educational institutions and supported scholars."
  ],
  militaryVictories: [
    "Successfully led campaigns in the Deccan region.",
    "Maintained control over rebellious provinces."
  ]
},
"Ahmad Shah I": {
  name: "Ahmad Shah I",
  reignStart: 1422,
  reignEnd: 1436,
  notable: "Moved capital to Bidar",
  image: ahmadShahIImg,
  achievements: [
    "Shifted the capital from Gulbarga to Bidar to strengthen administrative control.",
    "Promoted architecture and built the famous Ahmad Shah Wali tomb.",
    "Patronized art and religious institutions."
  ],
  militaryVictories: [
    "Defeated Vijayanagara forces in several confrontations.",
    "Consolidated power in the Deccan region."
  ]
},

    "Mahmud Gawan": {
      name: "Mahmud Gawan",
      reignStart: 1461,
      reignEnd: 1481,
      notable: "Prime Minister, effective ruler",
      image: mahmudGawanImg,
      achievements: [
        "Administrative reforms",
        "Established madrasa",
        "Expanded trade networks"
      ],
      militaryVictories: [
        "Successful campaigns against Vijayanagara",
        "Maintained stable borders"
      ]
    },
    // Sikh Empire

"Maharaja Ranjit Singh": {
  name: "Maharaja Ranjit Singh",
  reignStart: 1799,
  reignEnd: 1839,
  notable: "Lion of Punjab, unified Sikh territories",
  image: maharajaRanjitSinghImg,
  achievements: [
    "Unified various Sikh misls into a powerful Sikh Empire.",
    "Modernized the army along European lines.",
    "Promoted religious tolerance and protected all communities.",
    "Established Lahore as a vibrant cultural and political capital."
  ],
  militaryVictories: [
    "Captured Lahore in 1799 and made it the capital.",
    "Annexed Multan, Kashmir, Peshawar, and other key regions.",
    "Successfully defended Punjab against Afghan and British threats during his reign."
  ]
},

"Kharak Singh": {
  name: "Kharak Singh",
  reignStart: 1839,
  reignEnd: 1840,
  notable: "Eldest son of Ranjit Singh",
  image: kharakSinghImg,
  achievements: [
    "Succeeded his father peacefully and maintained royal dignity.",
    "Tried to uphold unity within the court and army.",
    "Continued patronage of religious and cultural institutions."
  ],
  militaryVictories: [
    "Maintained frontier defenses though faced internal dissent.",
    "Prevented major uprisings during a short and fragile reign."
  ]
},

"Nau Nihal Singh": {
  name: "Nau Nihal Singh",
  reignStart: 1840,
  reignEnd: 1840,
  notable: "Died in accident",
  image: nauNihalSinghImg,
  achievements: [
    "Known for intelligence and military potential.",
    "Prepared to restore discipline in administration.",
    "Supported reforms in court and army organization."
  ],
  militaryVictories: [
    "Oversaw stability along western frontiers during his brief rule.",
    "Was expected to strengthen Sikh military power had he lived longer."
  ]
},

"Sher Singh": {
  name: "Sher Singh",
  reignStart: 1841,
  reignEnd: 1843,
  notable: "Second son of Ranjit Singh",
  image: sherSinghImg,
  achievements: [
    "Restored some stability after civil strife.",
    "Attempted to modernize the administration.",
    "Maintained external relations with the British and Afghans."
  ],
  militaryVictories: [
    "Defeated Chand Kaur’s forces to secure the throne.",
    "Prevented disintegration of the empire during a turbulent period."
  ]
},

"Duleep Singh": {
  name: "Duleep Singh",
  reignStart: 1843,
  reignEnd: 1849,
  notable: "Last Sikh emperor, child ruler",
  image: duleepSinghImg,
  achievements: [
    "Became Maharaja at age 5 under regency.",
    "His reign saw continued resistance to British interference.",
    "Remembered for symbolizing Sikh sovereignty in later nationalist movements."
  ],
  militaryVictories: [
    "No personal military command due to age.",
    "Sikh armies fought valiantly in the Anglo-Sikh Wars during his nominal reign."
  ]
},


// Ahom Kingdom
"Sukapha": {
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
"Subinpha": {
  name: "Subinpha",
  reignStart: 1281,
  reignEnd: 1293,
  notable: "Expanded the territory of the Ahom kingdom and strengthened the kingdom's control.",
  image: subinphaImg,
  achievements: [
    "Extended Ahom influence eastward and westward through diplomatic alliances and conquests.",
    "Improved the kingdom’s administrative efficiency and military organization."
  ],
  militaryVictories: [
    "Successfully subdued several rebellious local chieftains.",
    "Maintained peace and stability during his reign."
  ]
},
"Sukangpha": {
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
"Pratap Singha": {
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
"Chakradhwaj Singha": {
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
"Rudra Singha": {
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
"Purandar Singha": {
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
}

  };

  return rulers[rulerName as keyof typeof rulers] || {
    name: rulerName,
    reignStart: 0,
    reignEnd: 0,
    notable: "Ruler of " + kingdomName,
    achievements: [],
    militaryVictories: []
  };
};

const RulerCard: React.FC<RulerCardProps> = ({ ruler, kingdomName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const rulerData = getRulerDetails(ruler.name, kingdomName);
  const imageSrc = ruler.image || rulerData.image;

  return (
    <Card className="p-6 transition-all duration-200 hover:shadow-lg">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full p-0 h-auto justify-between hover:bg-transparent">
            <div className="flex items-start justify-between w-full">
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="h-5 w-5 text-heritage-gold" />
                  <h4 className="text-xl font-playfair font-bold">{ruler.name}</h4>
                </div>
                <p className="text-muted-foreground">
                  Reign: {ruler.reignStart} - {ruler.reignEnd} CE ({ruler.reignEnd - ruler.reignStart} years)
                </p>
                {ruler.notable && (
                  <p className="text-heritage-maroon italic mt-1">{ruler.notable}</p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="shrink-0">
                  {ruler.reignEnd - ruler.reignStart} years
                </Badge>
                {isOpen ? <ChevronUp className="h-4 w-4 shrink-0" /> : <ChevronDown className="h-4 w-4 shrink-0" />}
              </div>
            </div>
          </Button>
        </CollapsibleTrigger>

        <CollapsibleContent className="space-y-4 mt-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <img
                src={imageSrc}
                alt={`Portrait of ${ruler.name}`}
                className="w-full h-64 object-contain rounded-lg border-2 border-heritage-gold/30"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = qutbAibakImg;
                }}
              />
              <p className="text-sm text-muted-foreground text-center">
                {ruler.name} of {kingdomName}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2 flex items-center gap-2">
                  <Scroll className="h-4 w-4" />
                  Biography
                </h5>
                <p className="text-muted-foreground text-sm">
                  {rulerData.notable}. Ruled from {rulerData.reignStart} to {rulerData.reignEnd}.
                </p>
              </div>

              <div>
                <h5 className="font-semibold mb-2 flex items-center gap-2">
                  <Trophy className="h-4 w-4" />
                  Major Achievements
                </h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {rulerData.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-heritage-gold">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {rulerData.militaryVictories.length > 0 && (
                <div>
                  <h5 className="font-semibold mb-2">Military Victories</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {rulerData.militaryVictories.map((victory, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-500">⚔</span>
                        {victory}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default RulerCard;
