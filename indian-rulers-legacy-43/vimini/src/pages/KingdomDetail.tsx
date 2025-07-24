import { useParams, Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Crown, Scroll, Swords, Trophy, Building, MapPin, Calendar } from 'lucide-react';
import { kingdoms } from '@/data/kingdoms';
import Header from '@/components/Header';
import RulerCard from '@/components/RulerCard';
import ArchitectureCard from '@/components/ArchitectureCard';
import cholaKingdomImage from '@/assets/chola kingdom image.jpg';
import pallavaImage from '@/assets/pallava.jpg';
import delhiSultanateImage from '@/assets/Delhi Sultanate.jpg';
import bahmaniSultanateImage from '@/assets/Bahmani Sultanate.jpg';
import ahomKingdomImage from '@/assets/Ahom Kingdom.jpg';
import mewarEmpireImg from '@/assets/Mewar.jpg';
import rathoreDynastyImg from '@/assets/Rathore Dynasty.jpg';
import maharanaPratapImg from '@/assets/Maharana Pratap.jpg';
import marathaEmpireImg from '@/assets/Maratha Empire.jpg';
import sikhEmpireImg from '@/assets/Sikh Empire.jpg';
import vijayanagaraEmpireImg from '@/assets/Vijayanagara Empire.jpg';
import mewarImg from '@/assets/Mewar.jpg';
import brihadeeswararTempleImg from '@/assets/Brihadeeswarar Temple.jpg';
import gangaikondaCholapuramImg from '@/assets/Gangaikonda Cholapuram.jpg';
import { Kingdom } from '@/data/types';
import mysoreImg from '@/assets/mysore empire.jpg';




import tajMahalImg from '@/assets/taj-mahal.jpg';
import redFortImg from '@/assets/red fort.jpg';
import fatehpurSikriImg from '@/assets/Fatehpur Sikri.jpg';

import raigadFortImg from '@/assets/Raigad Fort.jpg';
import shaniwarWadaImg from '@/assets/Shaniwar Wada.jpg';

import hampiMonumentsImg from '@/assets/Hampi Monuments.jpg';
import vittalaTempleImg from '@/assets/Vittala Temple.jpg';



import dashavataraTempleImg from '@/assets/Dashavatara Temple.jpg';
import udayagiriCavesImg from '@/assets/Udayagiri Caves.jpg';

import shoreTempleImg from '@/assets/Shore Temple.jpg';
import panchaRathasImg from '@/assets/Pancha Rathas.jpg';

import qutubMinarImg from '@/assets/Qutub Minar.jpeg';
import alaiDarwazaImg from '@/assets/Alai Darwaza.jpg';
import tughlaqabadFortImg from '@/assets/Tughlaqabad Fort.jpg';

import golGumbazImg from '@/assets/Gol Gumbaz.jpg';
import mahmudGawanMadrasaImg from '@/assets/Mahmud Gawan Madrasa.jpg';

import talatalGharImg from '@/assets/Talatal Ghar.jpg';
import rangGharImg from '@/assets/Rang Ghar.jpg';

import cityPalaceImg from '@/assets/City Palace.jpg';
import kumbhalgarhFortImg from '@/assets/Kumbhalgarh Fort.jpg';

import mehrangarhFortImg from '@/assets/Mehrangarh Fort.jpg';
import umaidBhawanPalaceImg from '@/assets/Umaid Bhawan Palace.jpg';

import harmandirSahibImg from '@/assets/Harmandir Sahib.jpeg';
import ramBaghPalaceImg from '@/assets/Ram Bagh Palace.jpg';

import dariaDaulatBaghImg from '@/assets/Daria Daulat Bagh.png';
import jamaMasjidImg from '@/assets/Jama Masjid.jpeg';
;



const KingdomDetail = () => {
  const { kingdomId } = useParams();
  const kingdom = kingdoms.find(k => k.id === kingdomId);

  if (!kingdom) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-heritage-cream via-background to-heritage-cream/50">
        <Header />
        <div className="pt-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-playfair font-bold mb-4">Kingdom Not Found</h1>
            <Link to="/timeline">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Timeline
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-heritage-cream via-background to-heritage-cream/50">
      <Header />
      
      <div className="pt-20 px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-8">
            <Link to="/timeline">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Timeline
              </Button>
            </Link>
            
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                <span className="heritage-text-gradient">{kingdom.name}</span>
              </h1>
              {kingdom.dynasty && (
                <p className="text-xl text-muted-foreground mb-2">
                  {kingdom.dynasty} Dynasty
                </p>
              )}
              <div className="flex items-center justify-center gap-4 text-lg flex-wrap">
                <Badge variant="secondary" className="px-3 py-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  {kingdom.startYear} - {kingdom.endYear} CE
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  {kingdom.capital}
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  {kingdom.period} Period
                </Badge>
              </div>
            </div>

            {/* Kingdom Image */}
            <div className="mb-8">
              <Card className="p-6">
                <img
                  src={getKingdomImage(kingdom.name)}
                  alt={`${kingdom.name} kingdom`}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
                {/* <p className="text-center mt-4 text-muted-foreground">
                  Historical representation of {kingdom.name}
                </p> */}
              </Card>
              {/* Removed the long line above the images as per user request */}
              {/* Removed the two images below as per user request */}
              {/* {kingdom.id === "chola" && (
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <img
                      src={brihadeeswararTempleImg}
                      alt="Brihadeeswarar Temple"
                      className="w-full h-48 object-cover rounded-lg border-2 border-heritage-bronze/30"
                    />
                    <p className="text-center mt-2 text-muted-foreground">Brihadeeswarar Temple, Thanjavur</p>
                  </div>
                  <div>
                    <img
                      src={gangaikondaCholapuramImg}
                      alt="Gangaikonda Cholapuram"
                      className="w-full h-48 object-cover rounded-lg border-2 border-heritage-bronze/30"
                    />
                    <p className="text-center mt-2 text-muted-foreground">Gangaikonda Cholapuram, Tamil Nadu</p>
                  </div>
                </div>
              )} */}
            </div>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <Crown className="h-4 w-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="rulers" className="flex items-center gap-2">
                <Scroll className="h-4 w-4" />
                Rulers
              </TabsTrigger>
              <TabsTrigger value="wars" className="flex items-center gap-2">
                <Swords className="h-4 w-4" />
                Wars
              </TabsTrigger>
              <TabsTrigger value="achievements" className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                Achievements
              </TabsTrigger>
              <TabsTrigger value="architecture" className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                Architecture
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <KingdomOverview kingdom={kingdom} />
            </TabsContent>

            <TabsContent value="rulers" className="mt-8">
              <KingdomRulers kingdom={kingdom} />
            </TabsContent>

            <TabsContent value="wars" className="mt-8">
              <KingdomWars kingdom={kingdom} />
            </TabsContent>

            <TabsContent value="achievements" className="mt-8">
              <KingdomAchievements kingdom={kingdom} />
            </TabsContent>

            <TabsContent value="architecture" className="mt-8">
              <KingdomArchitecture kingdom={kingdom} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

// Helper function to get kingdom images - updated with historically accurate photos
import guptaEmpireImg from '@/assets/gupta empire.jpg';

const getKingdomImage = (kingdomName: string): string => {
    const kingdomImages = {
      "Mauryan Empire": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Ashoka_Pillar_at_Vaishali%2C_Bihar%2C_India.jpg/800px-Ashoka_Pillar_at_Vaishali%2C_Bihar%2C_India.jpg",
      "Mughal Empire": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/800px-Taj_Mahal_%28Edited%29.jpeg",
      "Vijayanagara Empire": vijayanagaraEmpireImg,
      "Chola Empire": cholaKingdomImage,
      "Gupta Empire": guptaEmpireImg,
      "Pallava Kingdom": pallavaImage,
      "Satavahana Empire": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sanchi_Stupa_No1_Full_View.jpg/800px-Sanchi_Stupa_No1_Full_View.jpg",
      "Kingdom of Mysore": mysoreImg,
      "Delhi Sultanate": delhiSultanateImage,
      "Bahmani Sultanate": bahmaniSultanateImage,
      "Ahom Kingdom": ahomKingdomImage,
      "Marwar (Jodhpur)": rathoreDynastyImg,
      "Mewar (Udaipur)": mewarImg,
      "Maratha Empire": marathaEmpireImg,
      "Sikh Empire": sikhEmpireImg
      
    };
    return kingdomImages[kingdomName as keyof typeof kingdomImages] || "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/800px-Taj_Mahal_%28Edited%29.jpeg";
  };

// Overview Component
const KingdomOverview = ({ kingdom }: { kingdom: Kingdom }) => (
  <div className="grid md:grid-cols-2 gap-8">
    <Card className="p-6">
      <h3 className="text-2xl font-playfair font-bold mb-4">Historical Context</h3>
      <div className="space-y-4 text-muted-foreground">
        <p>
          The {kingdom.name} was one of the most significant {kingdom.period.toLowerCase()} period kingdoms 
          in Indian history, ruling from {kingdom.startYear} to {kingdom.endYear} CE.
        </p>
        <p>
          Established in {kingdom.capital}, this {kingdom.dynasty ? `${kingdom.dynasty} dynasty` : 'kingdom'} 
          played a crucial role in shaping the political, cultural, and economic landscape of its time.
        </p>
        <p>
          Known for its {kingdom.importance === 'major' ? 'vast territorial control and imperial administration' : 
          kingdom.importance === 'medium' ? 'regional influence and cultural contributions' : 
          'local governance and unique traditions'}.
        </p>
      </div>
    </Card>
    
    <Card className="p-6">
      <h3 className="text-2xl font-playfair font-bold mb-4">Quick Facts</h3>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="font-medium">Founded:</span>
          <span>{kingdom.startYear} CE</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Dissolved:</span>
          <span>{kingdom.endYear} CE</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Duration:</span>
          <span>{kingdom.endYear - kingdom.startYear} years</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Capital:</span>
          <span>{kingdom.capital}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Period:</span>
          <span>{kingdom.period}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Importance:</span>
          <Badge variant={kingdom.importance === 'major' ? 'default' : 'secondary'}>
            {kingdom.importance}
          </Badge>
        </div>
      </div>
    </Card>
  </div>
);

// Updated Rulers Component using RulerCard
const KingdomRulers = ({ kingdom }: { kingdom: Kingdom }) => (
  <div className="space-y-6">
    <h3 className="text-2xl font-playfair font-bold">Notable Rulers</h3>
    <div className="grid gap-6">
      {kingdom.rulers.map((ruler: any, index: number) => (
        <RulerCard key={index} ruler={ruler} kingdomName={kingdom.name} />
      ))}
    </div>
  </div>
);

// Wars Component
const KingdomWars = ({ kingdom }: { kingdom: Kingdom }) => {
  const wars = getWarsData(kingdom.name);

  // For Mewar, show only wars like Chola style (no military campaigns list)
  if (kingdom.name === "Mewar (Udaipur)") {
    return (
      <div className="space-y-6">
        <h3 className="text-2xl font-playfair font-bold">Military Campaigns & Wars</h3>
        <div className="grid gap-6">
          {wars.map((war, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-playfair font-bold">{war.name}</h4>
                  <p className="text-muted-foreground">Period: {war.period}</p>
                </div>
                <Swords className="h-6 w-6 text-red-500" />
              </div>
              <p className="text-muted-foreground mb-3">{war.description}</p>
              <Badge variant={war.outcome === 'Victory' ? 'default' : war.outcome === 'Defeat' ? 'destructive' : 'secondary'}>
                {war.outcome}
              </Badge>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Default rendering for other kingdoms
  const militaryCampaigns = kingdom.militaryCampaigns || [];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-playfair font-bold">Military Campaigns & Wars</h3>

      {militaryCampaigns.length > 0 && (
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Military Campaigns</h4>
          <ul className="list-disc list-inside text-muted-foreground">
            {militaryCampaigns.map((campaign, idx) => (
              <li key={idx}>{campaign}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-6">
        {wars.map((war, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-xl font-playfair font-bold">{war.name}</h4>
                <p className="text-muted-foreground">Period: {war.period}</p>
              </div>
              <Swords className="h-6 w-6 text-red-500" />
            </div>
            <p className="text-muted-foreground mb-3">{war.description}</p>
            <Badge variant={war.outcome === 'Victory' ? 'default' : war.outcome === 'Defeat' ? 'destructive' : 'secondary'}>
              {war.outcome}
            </Badge>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Achievements Component
const KingdomAchievements = ({ kingdom }: { kingdom: Kingdom }) => (
  <div className="space-y-6">
    <h3 className="text-2xl font-playfair font-bold">Major Achievements</h3>
    <div className="grid gap-6">
      {getAchievementsData(kingdom.name).map((achievement, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="text-xl font-playfair font-bold">{achievement.title}</h4>
              <p className="text-muted-foreground">Category: {achievement.category}</p>
            </div>
            <Trophy className="h-6 w-6 text-heritage-gold" />
          </div>
          <p className="text-muted-foreground">{achievement.description}</p>
        </Card>
      ))}
    </div>
  </div>
);

// Updated Architecture Component using ArchitectureCard
const KingdomArchitecture = ({ kingdom }: { kingdom: Kingdom }) => (
  <div className="space-y-6">
    <h3 className="text-2xl font-playfair font-bold">Architectural Marvels</h3>
    <div className="grid gap-6">
      {getArchitectureData(kingdom.name).map((structure, index) => (
        <ArchitectureCard key={index} structure={structure} kingdomName={kingdom.name} />
      ))}
    </div>
  </div>
);


// Helper functions for generating data
const getRulerDescription = (rulerName: string, kingdomName: string): string => {
  const descriptions = {
    "Chandragupta Maurya": "Founded the Mauryan Empire after overthrowing the Nanda dynasty. Established a vast administrative system and expanded the empire across most of the Indian subcontinent.",
    "Ashoka the Great": "One of India's greatest emperors, known for his conversion to Buddhism after the Kalinga War and his efforts to spread Buddhist teachings throughout his empire.",
    "Akbar": "The greatest Mughal emperor who established a policy of religious tolerance and created an efficient administrative system. Known for his cultural patronage and military conquests.",
    "Shivaji": "Founder of the Maratha Empire, known for his innovative military tactics, naval fleet, and establishment of a well-administered kingdom in the Deccan.",
    "Krishnadevaraya": "The greatest ruler of the Vijayanagara Empire, known for his military victories, patronage of arts and literature, and administrative reforms.",
  };
  return descriptions[rulerName as keyof typeof descriptions] || `A significant ruler of the ${kingdomName}, known for their contributions to the kingdom's expansion and administration.`;
};

const getWarsData = (kingdomName: string) => {
  const warsData = {
    "Mauryan Empire": [
      { name: "Kalinga War", period: "262-261 BCE", description: "Major military campaign that led to Ashoka's conversion to Buddhism", outcome: "Victory" },
      { name: "Seleucid-Mauryan War", period: "305-303 BCE", description: "Conflict with Seleucus I resulting in territorial gains", outcome: "Victory" }
    ],
    "Mughal Empire": [
      { name: "Battle of Panipat (First)", period: "1526 CE", description: "Babur's victory that established Mughal rule in India", outcome: "Victory" },
      { name: "Siege of Chittor", period: "1567-1568 CE", description: "Akbar's conquest of the Rajput stronghold", outcome: "Victory" }
    ],
    "Maratha Empire": [
      { name: "Battle of Pratapgad", period: "1659 CE", description: "Shivaji's victory against Afzal Khan", outcome: "Victory" },
      { name: "Battle of Panipat (Third)", period: "1761 CE", description: "Decisive defeat against Ahmad Shah Durrani", outcome: "Defeat" }
    ],
    "Vijayanagara Empire": [
      { name: "Battle of Talikota", period: "1565 CE", description: "Decisive defeat by the Deccan Sultanates", outcome: "Defeat" },
      { name: "Conquest of Udayagiri", period: "1514 CE", description: "Krishnadevaraya's successful campaign", outcome: "Victory" }
    ],
    "Chola Empire": [
      { name: "Conquest of Sri Lanka and Maldives", period: "9th-11th centuries CE", description: "Extended territorial control over Sri Lanka and Maldives through military campaigns", outcome: "Victory" },
      { name: "Naval Expeditions to Southeast Asia", period: "11th century CE", description: "Successful naval campaigns expanding influence to Southeast Asia", outcome: "Victory" },
      { name: "Battles against Pandyas, Cheras, and Western Chalukyas", period: "Various periods", description: "Multiple battles to assert dominance over South Indian kingdoms", outcome: "Mixed" },
      { name: "Defeat of Pallavas and Chalukyas", period: "9th-11th centuries CE", description: "Military victories that weakened rival dynasties", outcome: "Victory" },
      { name: "Expansion into Bengal and Ganges region", period: "11th century CE", description: "Extended empire's reach into eastern India", outcome: "Victory" }
    ],
    "Delhi Sultanate": [
      { name: "Battle of Tarain (1191 and 1192)", period: "1191-1192 CE", description: "Fought between Muhammad Ghori and Prithviraj Chauhan, marking the beginning of Muslim rule in India.", outcome: "Victory for Muhammad Ghori" },
      { name: "Conquest of Northern India", period: "1206-1290 CE", description: "Expansion under various sultans consolidating control over Rajput and other kingdoms.", outcome: "Victory" },
      { name: "Conflicts with Rajput Kingdoms", period: "Various", description: "Numerous battles asserting dominance over northern India.", outcome: "Mixed" },
      { name: "Resistance against Mongol Invasions", period: "13th-14th centuries CE", description: "Successfully repelled multiple Mongol incursions, securing the empire's frontiers.", outcome: "Victory" },
      { name: "Battle of Panipat (1526)", period: "1526 CE", description: "The decisive battle marking the end of the Delhi Sultanate and the rise of the Mughal Empire.", outcome: "Defeat" }
    ],
    "Mewar (Udaipur)": [
      { name: "Battle of Haldighati", period: "1576 CE", description: "Maharana Pratap's resistance against Mughal Emperor Akbar", outcome: "Mixed" },
      { name: "Siege of Chittorgarh", period: "1567-1568 CE", description: "Mughal siege led by Akbar against the fort of Chittorgarh", outcome: "Defeat" },
      { name: "Battle of Dewair", period: "1606 CE", description: "Rana Amar Singh I's victory over Mughal forces", outcome: "Victory" },
      { name: "Battle of Khanwa", period: "1527 CE", description: "Rana Sanga's coalition against Babur's Mughal forces", outcome: "Defeat" },
      { name: "Battle of Gagron", period: "1519 CE", description: "Rana Sanga's victory over the Malwa Sultanate", outcome: "Victory" },
      { name: "Battle of Rumal", period: "1544 CE", description: "Conflict with Sher Shah Suri's forces", outcome: "Mixed" }
    ],
    "Marwar (Jodhpur)": [
      { name: "Battle of Sammel", period: "1544 CE", description: "Rao Maldeo's victory against Sher Shah Suri", outcome: "Victory" },
      { name: "Battle of Dharmatpur", period: "1658 CE", description: "Conflict with Mughal forces during Aurangzeb's reign", outcome: "Defeat" }
    ],
    "Ahom Kingdom": [
      { name: "Battle of Saraighat", period: "1671 CE", description: "Ahom forces' victory against Mughal army led by Ram Singh I", outcome: "Victory" },
      { name: "Battle of Alaboi", period: "1669 CE", description: "Defeat against Mughal forces", outcome: "Defeat" }
    ],
    "Pallava Kingdom": [
      { name: "Conflicts with the Chalukyas", period: "6th-9th centuries CE", description: "Multiple battles and skirmishes with the Chalukya dynasty", outcome: "Mixed" },
      { name: "Battles against the Pandyas", period: "7th-9th centuries CE", description: "Struggles for dominance in South India against the Pandya kingdom", outcome: "Mixed" },
      { name: "Defeat of the Kadambas", period: "7th century CE", description: "Military campaigns leading to the decline of the Kadamba dynasty", outcome: "Victory" },
      { name: "Naval expeditions in the Bay of Bengal", period: "8th century CE", description: "Expansion of naval power and influence in the Bay of Bengal region", outcome: "Victory" },
      { name: "Defense against Rashtrakutas", period: "8th-9th centuries CE", description: "Military defense against the Rashtrakuta invasions", outcome: "Mixed" }
     ],
     "Mysore Sultanate": [
  { name: "First Anglo-Mysore War", period: "1767–1769 CE", description: "Hyder Ali nearly captured Madras; ended with Treaty of Madras", outcome: "Mixed" },
  { name: "Second Anglo-Mysore War", period: "1780–1784 CE", description: "Hyder Ali and Tipu Sultan inflicted defeats on British; ended with Treaty of Mangalore", outcome: "Mixed" },
  { name: "Third Anglo-Mysore War", period: "1790–1792 CE", description: "Tipu Sultan resisted British; forced to cede territory in Treaty of Seringapatam", outcome: "Defeat" },
  { name: "Fourth Anglo-Mysore War", period: "1799 CE", description: "Final siege of Seringapatam; Tipu Sultan killed; British captured Mysore", outcome: "Defeat" }
],
"Sikh Empire": [
  { name: "Expansion Campaigns of Ranjit Singh", period: "1799–1837 CE", description: "Annexation of Lahore, Multan, Kashmir, and Peshawar; consolidation of Sikh Empire", outcome: "Victory" },
  { name: "First Anglo-Sikh War", period: "1845–1846 CE", description: "Series of battles including Mudki and Sobraon; led to British control of parts of Punjab", outcome: "Defeat" },
  { name: "Second Anglo-Sikh War", period: "1848–1849 CE", description: "Battles like Chillianwala and Gujrat; ended with British annexation of Punjab", outcome: "Defeat" }
],
"Gupta Empire": [
  { name: "Campaigns of Samudragupta", period: "c. 335–375 CE", description: "Samudragupta expanded the Gupta Empire through a series of northern and southern campaigns, defeating over 20 rulers", outcome: "Victory" },
  { name: "Conquest of Western Kshatrapas", period: "c. 375–380 CE", description: "Chandragupta II defeated the Western Kshatrapas, extending Gupta rule to western India", outcome: "Victory" },
  { name: "Defense against Hun Invasions", period: "c. 450–470 CE", description: "Skandagupta successfully repelled Huna invasions, preserving the empire temporarily", outcome: "Victory" },
  { name: "Later Conflicts with the Huns", period: "c. 500–550 CE", description: "Weakened Gupta rulers failed to stop Hun invasions, leading to imperial decline", outcome: "Defeat" }
]

  };
  return warsData[kingdomName as keyof typeof warsData] || [
    { name: "Territorial Expansion", period: "Various periods", description: "Multiple campaigns to expand territorial control", outcome: "Mixed" }
  ];
};

const getAchievementsData = (kingdomName: string) => {
  const achievementsData = {
    "Mauryan Empire": [
      { title: "Administrative System", category: "Governance", description: "Established one of the world's first organized administrative systems with detailed bureaucracy" },
      { title: "Spread of Buddhism", category: "Religion", description: "Ashoka's efforts led to Buddhism becoming a major world religion" },
      { title: "Edicts of Ashoka", category: "Communication", description: "First known use of written proclamations for mass communication in India" }
    ],
    "Mughal Empire": [
      { title: "Religious Tolerance", category: "Social", description: "Akbar's policy of 'Sulh-i-Kul' promoted religious harmony" },
      { title: "Architectural Marvels", category: "Architecture", description: "Built iconic structures like the Taj Mahal and Red Fort" },
      { title: "Cultural Synthesis", category: "Culture", description: "Created a unique Indo-Islamic culture blending various traditions" }
    ],
    "Maratha Empire": [
      { title: "Naval Power", category: "Military", description: "Established India's first major naval force in the medieval period" },
      { title: "Administrative Innovation", category: "Governance", description: "Developed efficient revenue collection and military organization" },
      { title: "Cultural Revival", category: "Culture", description: "Promoted Marathi language and Hindu traditions" }
    ],
    "Chola Empire": [
      { title: "Long-lasting Dynasty", category: "Political", description: "One of the longest-ruling dynasties in South Indian history, lasting nearly a millennium" },
      { title: "Naval Dominance", category: "Military", description: "Pioneered naval dominance in the Indian Ocean, expanding influence across Southeast Asia" },
      { title: "Architectural Marvels", category: "Architecture", description: "Built monumental temples such as Brihadeeswarar Temple and Gangaikonda Cholapuram" },
      { title: "Trade Expansion", category: "Economic", description: "Expanded trade routes to Southeast Asia and beyond, boosting economic prosperity" },
      { title: "Cultural Patronage", category: "Cultural", description: "Promoted Tamil culture, arts, and literature, leaving a lasting cultural legacy" }
    ],
    "Delhi Sultanate": [
      { title: "Centralized Administration", category: "Governance", description: "Established a strong centralized bureaucracy and legal system based on Sharia law" },
      { title: "Cultural Integration", category: "Culture", description: "Promoted Persian art, literature, and education, influencing Indian culture" },
      { title: "Architectural Innovation", category: "Architecture", description: "Developed Indo-Islamic architecture blending Persian and Indian styles" },
      { title: "Agricultural Advancements", category: "Economic", description: "Introduced new agricultural techniques and irrigation systems" },
      { title: "Military Reforms", category: "Military", description: "Implemented market reforms and military expansions under rulers like Alauddin Khalji" }
    ],"Gupta Empire": [
  { title: "Golden Age of India", category: "Culture", description: "Period marked by advancements in science, mathematics, astronomy, and literature" },
  { title: "Decimal System & Zero", category: "Science", description: "Contributed foundational concepts like zero and the decimal system in mathematics" },
  { title: "Universities like Nalanda", category: "Education", description: "Established renowned institutions such as Nalanda University" },
  { title: "Classical Sanskrit Literature", category: "Literature", description: "Produced timeless works by poets like Kalidasa" },
  { title: "Efficient Governance", category: "Governance", description: "Maintained peace and prosperity through decentralized administration" }
],

"Sikh Empire": [
  { title: "Unified Sikh Confederacies", category: "Political", description: "Ranjit Singh united various Sikh misls into a centralized and powerful state" },
  { title: "Modern Army Formation", category: "Military", description: "Introduced European-style military reforms and artillery units" },
  { title: "Religious Tolerance", category: "Social", description: "Promoted secular governance with diverse appointments in court" },
  { title: "Economic Prosperity", category: "Economic", description: "Improved trade and taxation systems, boosting prosperity in Punjab" },
  { title: "Patronage of Art & Architecture", category: "Culture", description: "Commissioned beautiful gurdwaras and buildings including the Golden Temple restoration" }
],

"Mysore Sultanate": [
  { title: "Military Modernization", category: "Military", description: "Hyder Ali and Tipu Sultan introduced European-style military drills and weapons" },
  { title: "Rocket Technology", category: "Science", description: "Tipu Sultan developed advanced iron-cased rockets used in warfare" },
  { title: "Economic Reforms", category: "Economic", description: "Streamlined tax systems and promoted trade and agriculture" },
  { title: "Resistance to British", category: "Political", description: "Staunchly resisted British expansion through four Anglo-Mysore Wars" },
  { title: "Religious and Cultural Patronage", category: "Culture", description: "Supported Hindu temples and Islamic institutions alike" }
],"Vijayanagara Empire": [
  { title: "Temple Architecture", category: "Architecture", description: "Developed distinct Dravidian temple styles like those at Hampi" },
  { title: "Efficient Administration", category: "Governance", description: "Maintained a well-organized central and provincial governance system" },
  { title: "Flourishing Trade", category: "Economic", description: "Encouraged trade with Persia, Arabia, and Southeast Asia" },
  { title: "Cultural Patronage", category: "Culture", description: "Supported Telugu, Kannada, Sanskrit literature and fine arts" },
  { title: "Military Defense", category: "Military", description: "Successfully resisted invasions and preserved Hindu culture in the South" }
],

"Bahamani Sultanate": [
  { title: "Deccan Persianate Culture", category: "Culture", description: "Blended Persian and Deccan cultures, influencing art and architecture" },
  { title: "Advancement in Architecture", category: "Architecture", description: "Built notable structures like the Mahmud Gawan Madrasa and Gol Gumbaz" },
  { title: "Administrative Reforms", category: "Governance", description: "Developed an efficient revenue and military system" },
  { title: "Promotion of Education", category: "Education", description: "Encouraged the study of Persian, Arabic, and Islamic sciences" }
],

"Ahom Kingdom": [
  { title: "Longevity of Rule", category: "Political", description: "Ruled Assam for nearly 600 years resisting invasions and revolts" },
  { title: "Military Innovations", category: "Military", description: "Used guerrilla tactics and strong fortifications to repel Mughals" },
  { title: "Tai-Ahom Culture", category: "Culture", description: "Blended local Assamese culture with Tai traditions" },
  { title: "Administrative Strength", category: "Governance", description: "Implemented the Paik system for civil and military labor" },
  { title: "Promotion of Literature", category: "Literature", description: "Supported chronicles (Buranjis) and translation of texts into Assamese" }
],

"Mewar (Udaipur)": [
  { title: "Resistance Against Mughals", category: "Military", description: "Rulers like Rana Pratap led valiant resistance against Mughal invasions" },
  { title: "Rajput Pride and Honor", category: "Culture", description: "Symbol of Rajput valor and cultural heritage" },
  { title: "Architectural Legacy", category: "Architecture", description: "Built iconic forts and palaces like Chittorgarh and Kumbhalgarh" },
  { title: "Cultural Patronage", category: "Culture", description: "Encouraged arts, music, and traditional Rajput customs" }
],

"Marwar (Jodhpur)": [
  { title: "Rajput Valor", category: "Military", description: "Maintained independence through numerous wars and alliances" },
  { title: "Cultural Heritage", category: "Culture", description: "Fostered Rajasthani arts, language, and customs" },
  { title: "Architectural Landmarks", category: "Architecture", description: "Built majestic forts like Mehrangarh and Umaid Bhawan Palace" },
  { title: "Diplomatic Alliances", category: "Political", description: "Maintained autonomy through alliances with Mughals and British" }
],

"Pallava Kingdom": [
  { title: "Pioneers of Dravidian Architecture", category: "Architecture", description: "Built early structural temples like Shore Temple and Pancha Rathas" },
  { title: "Promotion of Sanskrit and Tamil", category: "Literature", description: "Encouraged both Sanskrit and Tamil literary works" },
  { title: "Naval Trade", category: "Economic", description: "Engaged in maritime trade with Southeast Asia" },
  { title: "Religious Harmony", category: "Social", description: "Supported Shaivism, Vaishnavism, and Jainism" }
],


  };
  return achievementsData[kingdomName as keyof typeof achievementsData] || [
    { title: "Regional Influence", category: "Political", description: "Significant impact on regional politics and culture" },
    { title: "Cultural Contributions", category: "Culture", description: "Important contributions to local art, literature, and traditions" }
  ];
};

const getArchitectureData = (kingdomName: string) => {
  const architectureData = {
   "Mauryan Empire": [
  { name: "Sanchi Stupa", location: "Madhya Pradesh", period: "3rd century BCE", description: "One of the oldest stone structures in India", type: "Buddhist Monument", image: "Sanchi Stupa" },
  { name: "Ashoka Pillars", location: "Various locations", period: "3rd century BCE", description: "Polished sandstone pillars with edicts", type: "Memorial Pillars", image: "Ashoka Pillars" }
],

"Mughal Empire": [
  { name: "Taj Mahal", location: "Agra", period: "1632-1653 CE", description: "Marble mausoleum and UNESCO World Heritage Site", type: "Mausoleum", image:tajMahalImg },
  { name: "Red Fort", location: "Delhi", period: "1638-1648 CE", description: "Fortified palace of Mughal emperors", type: "Palace Complex", image: redFortImg },
  { name: "Fatehpur Sikri", location: "Uttar Pradesh", period: "1571-1585 CE", description: "Planned city built by Akbar", type: "City Complex", image:fatehpurSikriImg }
],

"Maratha Empire": [
  { name: "Raigad Fort", location: "Maharashtra", period: "17th century CE", description: "Capital fortress of Shivaji", type: "Hill Fort", image:raigadFortImg },
  { name: "Shaniwar Wada", location: "Pune", period: "1732 CE", description: "Palace of the Peshwas", type: "Palace", image: shaniwarWadaImg }
],

"Vijayanagara Empire": [
  { name: "Hampi Monuments", location: "Karnataka", period: "14th-16th century CE", description: "Ruins of the capital city", type: "City Complex", image: hampiMonumentsImg },
  { name: "Vittala Temple", location: "Hampi", period: "15th century CE", description: "Famous for its stone chariot", type: "Temple", image: vittalaTempleImg }
],

"Chola Empire": [
  { name: "Brihadeeswarar Temple", location: "Thanjavur", period: "1010 CE", description: "UNESCO World Heritage site built by Raja Raja Chola I", type: "Temple", image: brihadeeswararTempleImg },
  { name: "Gangaikonda Cholapuram", location: "Tamil Nadu", period: "1035 CE", description: "Built by Rajendra Chola I as a royal capital", type: "Temple", image: gangaikondaCholapuramImg }
],

"Gupta Empire": [
  { name: "Dashavatara Temple", location: "Deogarh", period: "5th century CE", description: "Early example of Gupta temple architecture", type: "Temple", image:dashavataraTempleImg },
  { name: "Udayagiri Caves", location: "Madhya Pradesh", period: "4th-5th century CE", description: "Rock-cut caves with Hindu and Jain sculptures", type: "Cave Complex", image: udayagiriCavesImg }
],

"Pallava Kingdom": [
  { name: "Shore Temple", location: "Mahabalipuram", period: "8th century CE", description: "Earliest structural temple in South India", type: "Temple", image:shoreTempleImg },
  { name: "Pancha Rathas", location: "Mahabalipuram", period: "7th century CE", description: "Five monolithic rock-cut temples", type: "Rock-cut Temples", image: panchaRathasImg }
],

"Delhi Sultanate": [
  { name: "Qutub Minar", location: "Delhi", period: "1199 CE", description: "Tallest brick minaret in the world, built by Qutb-ud-din Aibak", type: "Minaret", image:qutubMinarImg },
  { name: "Alai Darwaza", location: "Delhi", period: "1311 CE", description: "Gateway to Quwwat-ul-Islam Mosque, example of Indo-Islamic architecture", type: "Gateway", image: alaiDarwazaImg },
  { name: "Tughlaqabad Fort", location: "Delhi", period: "1321 CE", description: "Massive fort built by Ghiyas-ud-din Tughlaq", type: "Fort", image: tughlaqabadFortImg }
],

"Bahamani Sultanate": [
  { name: "Gol Gumbaz", location: "Bijapur", period: "1656 CE", description: "Famous for its massive dome and whispering gallery", type: "Mausoleum", image: golGumbazImg},
  { name: "Mahmud Gawan Madrasa", location: "Bidar", period: "1472 CE", description: "Center of Islamic learning with Persian-style architecture", type: "Educational Institution", image: mahmudGawanMadrasaImg }
],

"Ahom Kingdom": [
  { name: "Talatal Ghar", location: "Sivasagar, Assam", period: "18th century CE", description: "Underground palace with tunnels and chambers", type: "Palace", image: talatalGharImg },
  { name: "Rang Ghar", location: "Sivasagar, Assam", period: "1744 CE", description: "One of the oldest surviving amphitheaters in Asia", type: "Amphitheater", image: rangGharImg }
],

"Mewar (Udaipur)": [
  { name: "City Palace", location: "Udaipur", period: "1559 CE onwards", description: "Blend of Rajasthani and Mughal styles overlooking Lake Pichola", type: "Palace Complex", image: cityPalaceImg},
  { name: "Kumbhalgarh Fort", location: "Rajasthan", period: "15th century CE", description: "Second longest wall in the world, built by Rana Kumbha", type: "Fort", image: kumbhalgarhFortImg }
],

"Marwar (Jodhpur)": [
  { name: "Mehrangarh Fort", location: "Jodhpur", period: "1459 CE", description: "Massive hill fort with palaces and museums", type: "Fort", image: mehrangarhFortImg },
  { name: "Umaid Bhawan Palace", location: "Jodhpur", period: "1929–1943 CE", description: "One of the largest private residences in the world", type: "Palace", image: umaidBhawanPalaceImg }
],

"Sikh Empire": [
  { name: "Harmandir Sahib (Golden Temple)", location: "Amritsar", period: "1581–1604 CE (renovated in 1830s)", description: "Spiritual center of Sikhism with gold-plated sanctum", type: "Gurudwara", image: harmandirSahibImg },
  { name: "Ram Bagh Palace", location: "Amritsar", period: "early 19th century CE", description: "Summer residence of Maharaja Ranjit Singh", type: "Palace", image: ramBaghPalaceImg }
],

"Mysore Sultanate": [
  { name: "Daria Daulat Bagh", location: "Srirangapatna", period: "1784 CE", description: "Summer palace of Tipu Sultan with Indo-Islamic frescoes", type: "Palace", image: dariaDaulatBaghImg },
  { name: "Jama Masjid", location: "Srirangapatna", period: "1787 CE", description: "Mosque built by Tipu Sultan with Persian inscriptions", type: "Mosque", image: jamaMasjidImg }
]

  };
  return architectureData[kingdomName as keyof typeof architectureData] || [
    { name: "Regional Monuments", location: "Various", period: "Historical period", description: "Important architectural contributions to the region", type: "Various" }
  ];
};

export default KingdomDetail;
