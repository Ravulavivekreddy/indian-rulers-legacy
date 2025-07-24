
import { Kingdom } from '../types';

import brihadeeswararTempleImg from '../../assets/Brihadeeswarar Temple.jpg';
import gangaikondaCholapuramImg from '../../assets/Gangaikonda Cholapuram.jpg';

import vijayalayaCholaImg from '../../assets/vijayalaya chola.jpg';
import adityaIImg from '../../assets/aditya I.jpg';
import rajarajaCholaIImg from '../../assets/rajaraja chola 1.jpg';
import rajendraCholaIImg from '../../assets/rajendra chola I.jpg';
import rajadhirajaCholaImg from '../../assets/rajadhiraja chola.jpg';
import kulothungaCholaIImg from '../../assets/kulothunga chola I.jpg';
import parantakaIImg from '../../assets/parabtaka_I.jpg';

import simhavishnuImg from '../../assets/Simhavishnu.jpg';
import mahendravarmanImg from '../../assets/mahendravarman.jpg';
import narasimhavarmanImg from '../../assets/narasimhavarman.jpg';
import mahendravarmaIIImg from '../../assets/mahendravarma_II.jpg';
import parabtakaIImg from '../../assets/parabtaka_I.jpg';
import panchaRathasImg from '../../assets/Pancha Rathas.jpg';
import shoreTempleImg from '../../assets/Shore Temple.jpg';
import narasimhavarmaIIImg from '../../assets/narasimhavarma II.jpg';

import simhavishnuKingImg from '../../assets/simhavishnu.jpg';
import mahendravarmanKingImg from '../../assets/mahendravarman.jpg';
import narasimhavarmanKingImg from '../../assets/narasimhavarman.jpg';
import mahendravarmaIIKingImg from '../../assets/mahendravarma_II.jpg';
import parabtakaIKingImg from '../../assets/parabtaka_I.jpg';
import narasimhavarmaIIKingImg from '../../assets/narasimhavarma II.jpg';

import chandraguptaIImg from '../../assets/chandragupta I.jpg';
import samudraguptaImg from '../../assets/samudraguptha.jpg';
import chandraptugaIIImg from '../../assets/chandragupta.jpg';
import kumaraguptaImg from '../../assets/kumaragupta.jpg';
import skandaguptaImg from '../../assets/skandaguptha.jpg';
import puruguptaImg from '../../assets/purugupta.jpg';
import narasimhaguptaImg from '../../assets/narasimhaguptha.jpg';

import chandraguptaImg from '../../assets/chandragupta.jpg';
import chandraguptaMauryaImg from '../../assets/chandragupta-maurya.jpg';
import ashokaGreatImg from '../../assets/ashoka-great.jpg';

import brihadrathaImg from '../../assets/brihadratha.jpg';
/* import brihadrathaImg from '../../assets/brihadratha.jpg'; */


import bindusaraImg from '../../assets/bindusara.jpg';
import dasharathaMauryaImg from '../../assets/dasharatha Maurya.jpg';
import sampratiImg from '../../assets/samprati.jpg'; 
import shalishukaImg from '../../assets/shalishuka.jpeg'; 

export const ancientKingdoms: Kingdom[] = [
  {
    id: "maurya",
    name: "Mauryan Empire",
    dynasty: "Maurya",
    startYear: 321,
    endYear: 185,
    period: "Ancient",
    capital: "Pataliputra (Patna)",
    rulers: [
      { name: "Chandragupta Maurya", reignStart: 321, reignEnd: 297, notable: "Founder of the empire", image: chandraguptaMauryaImg },
      { name: "Bindusara", reignStart: 297, reignEnd: 272, notable: "Expanded empire southward",image: bindusaraImg },
      { name: "Ashoka the Great", reignStart: 268, reignEnd: 232, notable: "Buddhist conversion after Kalinga War", image: ashokaGreatImg },
      { name: "Dasharatha Maurya", reignStart: 232, reignEnd: 224, notable: "Grandson of Ashoka",image: dasharathaMauryaImg },
      { name: "Samprati", reignStart: 224, reignEnd: 215, notable: "Promoted Jainism", image: sampratiImg },
      { name: "Shalishuka", reignStart: 215, reignEnd: 202, notable: "Later Mauryan ruler" , image: shalishukaImg },
      { name: "Brihadratha", reignStart: 202, reignEnd: 185, notable: "Last Mauryan emperor" , image: brihadrathaImg }
    ],
    territory: { lat: 25.6, lng: 85.1, x: 420, y: 390 },
    color: "heritage-gold",
    importance: "major",
    stateColor: "#FFD700"
  },
  {
    id: "gupta",
    name: "Gupta Empire",
    dynasty: "Gupta",
    startYear: 320,
    endYear: 550,
    period: "Ancient",
    capital: "Pataliputra (Patna)",
    rulers: [
      { name: "Chandragupta I", reignStart: 320, reignEnd: 335, notable: "Founder of Gupta Empire", image: chandraguptaIImg },
      { name: "Samudragupta", reignStart: 335, reignEnd: 375, notable: "Great conqueror and patron of arts", image: samudraguptaImg },
      { name: "Chandragupta II", reignStart: 375, reignEnd: 415, notable: "Golden Age ruler, defeated Shakas", image: chandraptugaIIImg },
      { name: "Kumaragupta I", reignStart: 415, reignEnd: 455, notable: "Founded Nalanda University", image: kumaraguptaImg },
      { name: "Skandagupta", reignStart: 455, reignEnd: 467, notable: "Defeated Huna invasions", image: skandaguptaImg },
      { name: "Purugupta", reignStart: 467, reignEnd: 473, notable: "Later Gupta ruler", image: puruguptaImg },
      { name: "Narasimhagupta", reignStart: 473, reignEnd: 476, notable: "Faced Huna invasions", image: narasimhaguptaImg }
    ],
    territory: { lat: 25.6, lng: 85.1, x: 430, y: 400 },
    color: "heritage-gold",
    importance: "major",
    stateColor: "#FFA500",
    architecturalMarvels: [
      {
        name: "Dashavatara Temple",
        image: "",
        description: "Early example of Gupta temple architecture"
      },
      {
        name: "Udayagiri Caves",
        image: "",
        description: "Rock-cut caves with Hindu and Jain sculptures"
      }
    ]
  },
  {
    id: "chola",
    name: "Chola Empire",
    dynasty: "Chola",
    startYear: 300,
    endYear: 1279,
    period: "Ancient",
    capital: "Thanjavur",
    achievements: [
      "One of the longest-ruling dynasties in South Indian history",
      "Pioneered naval dominance in the Indian Ocean",
      "Built monumental temples and architectural marvels",
      "Expanded trade routes to Southeast Asia and beyond",
      "Promoted Tamil culture, arts, and literature"
    ],
    majorWars: [
      "Conquest of Sri Lanka and Maldives",
      "Naval expeditions to Southeast Asia",
      "Battles against the Pandyas, Cheras, and Western Chalukyas",
      "Defeat of the Pallavas and Chalukyas",
      "Expansion into Bengal and the Ganges region"
    ],
    rulers: [
      { 
        name: "Vijayalaya Chola", 
        reignStart: 848, 
        reignEnd: 871, 
        notable: "Founder of imperial Cholas",
        achievements: [
          "Founded the imperial Chola dynasty",
          "Established Thanjavur as the capital",
          "Laid the foundation for Chola naval power"
        ],
        militaryVictories: [
          "Conquered Tanjore region",
          "Defeated the Pallavas"
        ],
        image: vijayalayaCholaImg
      },
      { 
        name: "Aditya I", 
        reignStart: 871, 
        reignEnd: 907, 
        notable: "Defeated Pallavas",
        achievements: [
          "Expanded Chola territories",
          "Defeated Pallavas",
          "Strengthened Chola administration"
        ],
        militaryVictories: [
          "Victory over Pallavas",
          "Conquest of neighboring regions"
        ],
        image: adityaIImg
      },
      { 
        name: "Parantaka I", 
        reignStart: 907, 
        reignEnd: 955, 
        notable: "Extended empire to Lanka",
        achievements: [
          "Extended Chola Empire to Sri Lanka",
          "Strengthened naval power",
          "Promoted trade and commerce"
        ],
        militaryVictories: [
          "Conquest of Sri Lanka",
          "Defeated Pandyas and Cheras"
        ],
        image: parantakaIImg
      },
      { 
        name: "Rajaraja Chola I", 
        reignStart: 985, 
        reignEnd: 1014, 
        notable: "Naval expansion and temple builder",
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
        ],
        image: rajarajaCholaIImg
      },
      { 
        name: "Rajendra Chola I", 
        reignStart: 1014, 
        reignEnd: 1044, 
        notable: "Southeast Asia conquest",
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
        ],
        image: rajendraCholaIImg
      },
      { 
        name: "Rajadhiraja Chola", 
        reignStart: 1044, 
        reignEnd: 1054, 
        notable: "Defeated Chalukyas",
        achievements: [
          "Defeated Chalukyas",
          "Expanded Chola territories",
          "Strengthened military"
        ],
        militaryVictories: [
          "Victory over Chalukyas",
          "Successful military campaigns"
        ],
        image: rajadhirajaCholaImg
      },
      { 
        name: "Kulothunga Chola I", 
        reignStart: 1070, 
        reignEnd: 1120, 
        notable: "Restored Chola power",
        achievements: [
          "Restored Chola power",
          "Reformed administration",
          "Promoted arts and culture"
        ],
        militaryVictories: [
          "Defeated Western Chalukyas",
          "Maintained empire stability"
        ],
        image: kulothungaCholaIImg
      }
    ],
    territory: { lat: 10.8, lng: 79.1, x: 330, y: 720 },
    color: "heritage-gold",
    importance: "major",
    stateColor: "#8B4513",
    
  },
  {
    id: "pallava",
    name: "Pallava Kingdom",
    dynasty: "Pallava",
    startYear: 275,
    endYear: 897,
    period: "Ancient",
    capital: "Kanchipuram",
    majorWars: [
      "Conflicts with the Chalukyas",
      "Battles against the Pandyas",
      "Defeat of the Kadambas",
      "Naval expeditions in the Bay of Bengal",
      "Defense against Rashtrakutas"
    ],
    rulers: [
      { 
        name: "Simhavishnu", 
        reignStart: 575, 
        reignEnd: 600, 
        notable: "Established Pallava power", 
        militaryVictories: [
          "Defeated Kalabhras",
          "Expanded Pallava territory"
        ],
        image: simhavishnuKingImg 
      },
      { 
        name: "Mahendravarman I", 
        reignStart: 600, 
        reignEnd: 630, 
        notable: "Patron of arts and architecture", 
        militaryVictories: [
          "Defended against Chalukya invasions",
          "Built rock-cut temples"
        ],
        image: mahendravarmanKingImg 
      },
      { 
        name: "Narasimhavarman I", 
        reignStart: 630, 
        reignEnd: 668, 
        notable: "Defeated Chalukyas, built Mamallapuram", 
        militaryVictories: [
          "Victory over Chalukyas at Vatapi",
          "Established Mamallapuram as a cultural center"
        ],
        image: narasimhavarmanKingImg 
      },
      { 
        name: "Mahendravarman II", 
        reignStart: 668, 
        reignEnd: 672, 
        notable: "Brief reign", 
        militaryVictories: [],
        image: mahendravarmaIIKingImg 
      },
      { 
        name: "Paramesvaravarman I", 
        reignStart: 672, 
        reignEnd: 700, 
        notable: "Continued conflicts with Chalukyas", 
        militaryVictories: [
          "Defended Pallava territories",
          "Maintained stability"
        ],
        image: parabtakaIKingImg 
      },
      { 
        name: "Narasimhavarman II", 
        reignStart: 700, 
        reignEnd: 728, 
        notable: "Built Kailasanatha temple", 
        militaryVictories: [
          "Consolidated Pallava power",
          "Promoted temple architecture"
        ],
        image: narasimhavarmaIIKingImg 
      }
    ],
    territory: { lat: 12.8, lng: 79.7, x: 340, y: 680 },
    color: "heritage-gold",
    importance: "medium",
    stateColor: "#CD853F",
    architecturalMarvels: [
      {
        name: "Pancha Rathas",
        image: panchaRathasImg,
        description: "A group of monolithic rock-cut temples at Mahabalipuram, representing the architectural brilliance of the Pallava dynasty."
      },
      {
        name: "Parabtaka I",
        image: parabtakaIImg,
        description: "An important Pallava ruler known for his contributions to architecture and temple building."
      },
      {
        name: "Shore Temple",
        image: shoreTempleImg,
        description: "A UNESCO World Heritage Site, the Shore Temple is a structural temple built with granite blocks, overlooking the Bay of Bengal."
      }
    ]
  },
  {
    id: "satavahana",
    name: "Satavahana Empire",
    dynasty: "Satavahana",
    startYear: 230,
    endYear: 220,
    period: "Ancient",
    capital: "Amaravati",
    rulers: [
      { name: "Simuka", reignStart: 230, reignEnd: 207, notable: "Founder of Satavahana dynasty" },
      { name: "Krishna", reignStart: 207, reignEnd: 196, notable: "Expanded into Malwa" },
      { name: "Satakarni I", reignStart: 196, reignEnd: 186, notable: "First to use title Satakarni" },
      { name: "Gautamiputra Satakarni", reignStart: 106, reignEnd: 130, notable: "Greatest Satavahana ruler" },
      { name: "Vashishtiputra Pulumayi", reignStart: 130, reignEnd: 158, notable: "Son of Gautamiputra" },
      { name: "Yajna Sri Satakarni", reignStart: 174, reignEnd: 203, notable: "Last great Satavahana ruler" }
    ],
    territory: { lat: 16.5, lng: 80.6, x: 350, y: 600 },
    color: "heritage-gold",
    importance: "medium",
    stateColor: "#DAA520"
  }
];
