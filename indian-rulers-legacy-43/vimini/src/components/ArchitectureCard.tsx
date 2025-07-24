import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building, ChevronDown, ChevronUp, MapPin, Calendar, Info } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

import brihadeeswararTempleImg from '@/assets/Brihadeeswarar Temple.jpg';
import gangaikondaCholapuramImg from '@/assets/Gangaikonda Cholapuram.jpg';
import panchaRathasImg from '@/assets/Pancha Rathas.jpg';
import shoreTempleImg from '@/assets/Shore Temple.jpg';

import tajMahalImg from '@/assets/taj-mahal.jpg';
import redFortImg from '@/assets/red-fort.jpg';
import hampiMonumentsImg from '@/assets/hampi-monuments.jpg';

import vittalaTempleImg from '@/assets/Vittala Temple.jpg';
import dashavataraTempleImg from '@/assets/Dashavatara Temple.jpg';
import udayagiriCavesImg from '@/assets/Udayagiri Caves.jpg';
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

interface ArchitectureStructure {
  name: string;
  location: string;
  period: string;
  description: string;
  type: string;
  image?: string;
  details?: string;
  architecturalStyle?: string;
  significance?: string[];
  currentStatus?: string;
}

interface ArchitectureCardProps {
  structure: ArchitectureStructure;
  kingdomName: string;
}

const ArchitectureCard: React.FC<ArchitectureCardProps> = ({ structure, kingdomName }) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log('ArchitectureCard structure:', structure.name, 'kingdom:', kingdomName);

  const architectureData = getArchitectureDetails(structure.name, kingdomName);

  return (
    <Card className="p-6 transition-all duration-200 hover:shadow-lg">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full p-0 h-auto justify-between hover:bg-transparent">
            <div className="flex items-start justify-between w-full">
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <Building className="h-5 w-5 text-heritage-bronze" />
                  <h4 className="text-xl font-playfair font-bold">{structure.name}</h4>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {structure.location}
                  </p>
                  <p className="text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Built: {structure.period}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {structure.description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="shrink-0">
                  {structure.type}
                </Badge>
                {isOpen ? (
                  <ChevronUp className="h-4 w-4 shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 shrink-0" />
                )}
              </div>
            </div>
          </Button>
        </CollapsibleTrigger>

        <CollapsibleContent className="space-y-4 mt-4">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Architecture Image */}
            <div className="space-y-4">
              <img
                src={architectureData.image || '/placeholder.svg'}
                alt={structure.name}
                className="w-full h-64 object-cover rounded-lg border-2 border-heritage-bronze/30"
              />
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  {structure.name}, {structure.location}
                </p>
              </div>
            </div>

            {/* Architecture Details */}
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2 flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Detailed Description
                </h5>
                <p className="text-muted-foreground text-sm">
                  {architectureData.details}
                </p>
              </div>

              <div>
                <h5 className="font-semibold mb-2">Architectural Style</h5>
                <p className="text-sm text-muted-foreground">
                  {architectureData.architecturalStyle}
                </p>
              </div>

              <div>
                <h5 className="font-semibold mb-2">Historical Significance</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {architectureData.significance?.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-heritage-bronze">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-semibold mb-2">Current Status</h5>
                <Badge 
                  variant={architectureData.currentStatus?.toLowerCase().includes('unesco') ? 'default' : 'secondary'}
                  className="text-xs"
                >
                  {architectureData.currentStatus}
                </Badge>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

const getArchitectureDetails = (structureName: string, kingdomName: string) => {
  const architectureDatabase: Record<string, {
    image: string;
    details: string;
    architecturalStyle: string;
    significance: string[];
    currentStatus: string;
  }> = {
    "Brihadeeswarar Temple": {
      image: brihadeeswararTempleImg,
      details: "The Brihadeeswarar Temple, also known as Peruvudaiyar Kovil, is a magnificent Hindu temple dedicated to Lord Shiva. Built by Raja Raja Chola I in Thanjavur, it stands as a UNESCO World Heritage Site and is an architectural marvel of the Chola dynasty. The temple is renowned for its massive vimana (tower), intricate carvings, and grand scale, symbolizing the zenith of Chola architectural achievement.",
      architecturalStyle: "Dravidian architecture with intricate carvings and massive vimana tower. Represents the zenith of Chola architectural achievement.",
      significance: [
        "UNESCO World Heritage Site",
        "Architectural marvel of the Chola dynasty",
        "Symbol of Tamil culture and religious devotion",
        "Attracts scholars and tourists worldwide"
      ],
      currentStatus: "UNESCO World Heritage Site - Well preserved"
    },
    "Gangaikonda Cholapuram": {
      image: gangaikondaCholapuramImg,
      details: "Gangaikonda Cholapuram was established by Rajendra Chola I to commemorate his victorious expedition to the Ganges River. This temple city is celebrated for its grand architecture, including a towering vimana and exquisite sculptures. It served as the capital of the Chola Empire for several centuries and remains a testament to the empire's power and artistic excellence.",
      architecturalStyle: "Dravidian architecture with grand vimana and exquisite sculptures. Symbolizes the power and artistic excellence of the Chola Empire.",
      significance: [
        "Capital of the Chola Empire for several centuries",
        "Architectural masterpiece with towering vimana",
        "Cultural and historical significance",
        "Attracts historians and tourists worldwide"
      ],
      currentStatus: "Historical monument - Well preserved"
    },
    "Dashavatara Temple": {
      image: dashavataraTempleImg,
      details: "Early example of Gupta temple architecture",
      architecturalStyle: "Gupta style temple architecture",
      significance: [
        "One of the earliest Hindu temples",
        "Represents Gupta architectural innovation",
        "Important religious site"
      ],
      currentStatus: "Historical monument"
    },
    "Udayagiri Caves": {
      image: udayagiriCavesImg,
      details: "Rock-cut caves with Hindu and Jain sculptures",
      architecturalStyle: "Rock-cut architecture",
      significance: [
        "Important religious and historical site",
        "Showcases early Indian rock-cut architecture",
        "Contains significant sculptures and inscriptions"
      ],
      currentStatus: "Protected heritage site"
    },
    "Pancha Rathas": {
      image: panchaRathasImg,
      details: "A group of monolithic rock-cut temples at Mahabalipuram, representing the architectural brilliance of the Pallava dynasty.",
      architecturalStyle: "Dravidian rock-cut architecture",
      significance: [
        "UNESCO World Heritage Site",
        "Architectural masterpiece of Pallava dynasty",
        "Important religious site"
      ],
      currentStatus: "UNESCO World Heritage Site - Well preserved"
    },
    "Shore Temple": {
      image: shoreTempleImg,
      details: "The Shore Temple is a UNESCO World Heritage Site located in Mahabalipuram. It is one of the earliest examples of structural temples in South India, built with granite blocks. The temple overlooks the Bay of Bengal and showcases the elegance of Pallava architecture.",
      architecturalStyle: "Dravidian architecture with coastal structural elements",
      significance: [
        "UNESCO World Heritage Site",
        "Important coastal temple",
        "Early example of structural Dravidian architecture"
      ],
      currentStatus: "UNESCO World Heritage Site - Well preserved"
    },
    "Qutub Minar": {
      image: qutubMinarImg,
      details: "The Qutub Minar, located in Delhi, is the tallest brick minaret in the world. Built by Qutb-ud-din Aibak, it is part of the Qutub complex and represents the early Indo-Islamic architecture with intricate carvings and Quranic inscriptions.",
      architecturalStyle: "Indo-Islamic architecture with sandstone carvings",
      significance: [
        "UNESCO World Heritage Site",
        "Tallest brick minaret in the world",
        "Symbol of Delhi Sultanate power"
      ],
      currentStatus: "UNESCO World Heritage Site - Well preserved"
    },
    "Alai Darwaza": {
      image: alaiDarwazaImg,
      details: "Built by Alauddin Khalji, the Alai Darwaza is a gateway in the Qutub complex. It features pointed arches, red sandstone construction, and intricate lattice work, marking the introduction of true Islamic architecture in India.",
      architecturalStyle: "Indo-Islamic architecture with pointed arches and lattice work",
      significance: [
        "Important gateway in Qutub complex",
        "Showcases Islamic architectural features"
      ],
      currentStatus: "Historical monument"
    },
    "Tughlaqabad Fort": {
      image: tughlaqabadFortImg,
      details: "The Tughlaqabad Fort, built by Ghiyasuddin Tughlaq, is a massive fortification reflecting the militaristic and defensive architecture of the Tughlaq dynasty. It served as the third historic city of Delhi.",
      architecturalStyle: "Tughlaq architecture with massive stone walls",
      significance: [
        "Symbol of Tughlaq military power",
        "Example of early Indo-Islamic fort design"
      ],
      currentStatus: "Ruins - Protected heritage site"
    },
    "Gol Gumbaz": {
      image: golGumbazImg,
      details: "Gol Gumbaz is the mausoleum of Mohammed Adil Shah in Bijapur. Known for its colossal dome—the second-largest in the world—it also features a unique whispering gallery where even whispers can be heard across the dome.",
      architecturalStyle: "Deccan Indo-Islamic architecture with a large hemispherical dome",
      significance: [
        "One of the largest domes in the world",
        "Architectural landmark of the Deccan"
      ],
      currentStatus: "Historical monument - Well preserved"
    },
    "Mahmud Gawan Madrasa": {
      image: mahmudGawanMadrasaImg,
      details: "Located in Bidar, the Mahmud Gawan Madrasa is a Persian-style Islamic educational institution. Built in the 15th century, it represents the Bahmani Sultanate's commitment to learning and cultural patronage.",
      architecturalStyle: "Persian-Islamic architecture with colorful tilework",
      significance: [
        "Important educational institution",
        "Architectural marvel of Bidar"
      ],
      currentStatus: "Ruins - Protected monument"
    },
    "Talatal Ghar": {
      image: talatalGharImg,
      details: "Talatal Ghar in Assam was a royal palace and military base of the Ahom kings. The structure is known for its secret tunnels, underground chambers, and robust construction, reflecting military foresight.",
      architecturalStyle: "Ahom architecture with subterranean passages",
      significance: [
        "Historical seat of Ahom power",
        "Architectural ingenuity with secret tunnels"
      ],
      currentStatus: "Protected archaeological site"
    },
    "Rang Ghar": {
      image: rangGharImg,
      details: "Rang Ghar is one of Asia’s oldest surviving amphitheaters. Built by the Ahom kings, it was used as a royal pavilion for watching traditional games and cultural events.",
      architecturalStyle: "Ahom-style architecture with layered domes",
      significance: [
        "One of Asia’s oldest surviving amphitheaters",
        "Cultural and historical landmark"
      ],
      currentStatus: "Protected heritage site"
    },
    "City Palace": {
      image: cityPalaceImg,
      details: "The City Palace in Udaipur is a grand complex built by various Mewar rulers over centuries. It combines Rajput military architecture with Mughal decorative techniques.",
      architecturalStyle: "Rajput architecture with Mughal influence",
      significance: [
        "Royal residence of Mewar dynasty",
        "Architectural and cultural landmark"
      ],
      currentStatus: "Museum and tourist attraction"
    },
    "Kumbhalgarh Fort": {
      image: kumbhalgarhFortImg,
      details: "Kumbhalgarh Fort is known for having the second-longest continuous wall in the world. It served as a refuge and birthplace of Maharana Pratap, a Mewar hero.",
      architecturalStyle: "Rajput military architecture with extensive fortifications",
      significance: [
        "UNESCO World Heritage Site",
        "Strategic and historical importance"
      ],
      currentStatus: "Well preserved - Tourist site"
    },
    "Mehrangarh Fort": {
      image: mehrangarhFortImg,
      details: "Mehrangarh Fort, perched on a rocky hill in Jodhpur, is a majestic stronghold built by Rao Jodha. It houses several palaces, museums, and galleries showcasing Marwar’s royal heritage.",
      architecturalStyle: "Rajput architecture with massive courtyards and ornate palaces",
      significance: [
        "One of the largest forts in India",
        "Symbol of Marwar's legacy"
      ],
      currentStatus: "Museum and heritage site"
    },
    "Umaid Bhawan Palace": {
      image: umaidBhawanPalaceImg,
      details: "Umaid Bhawan Palace in Jodhpur was constructed during a famine to provide employment. It combines Indian and European styles and is partly a royal residence and luxury hotel.",
      architecturalStyle: "Indo-Deco style with domes and Greco-Roman motifs",
      significance: [
        "Modern royal palace",
        "Blend of eastern and western architectural elements"
      ],
      currentStatus: "Partially royal residence and luxury hotel"
    },
    "Harmandir Sahib": {
      image: harmandirSahibImg,
      details: "The Harmandir Sahib, also known as the Golden Temple, is the spiritual nucleus of Sikhism. Built in Amritsar by Guru Arjan, it features a gold-covered sanctum and a serene holy tank.",
      architecturalStyle: "Sikh architecture with gold gilding and sacred tank",
      significance: [
        "Spiritual center of Sikhism",
        "Architectural marvel"
      ],
      currentStatus: "Active place of worship"
    },
    "Ram Bagh Palace": {
      image: ramBaghPalaceImg,
      details: "Ram Bagh Palace was a garden palace built by Maharaja Ranjit Singh. It served as a summer retreat and now functions as a museum chronicling Sikh heritage.",
      architecturalStyle: "Sikh architecture with garden layout",
      significance: [
        "Royal residence of Ranjit Singh",
        "Now a museum preserving Sikh heritage"
      ],
      currentStatus: "Museum - Well maintained"
    },
    "Daria Daulat Bagh": {
      image: dariaDaulatBaghImg,
      details: "Daria Daulat Bagh, located in Srirangapatna, was Tipu Sultan’s summer palace. Constructed in teakwood, the palace features exquisite frescoes and Indo-Saracenic architecture.",
      architecturalStyle: "Indo-Saracenic architecture with painted interiors",
      significance: [
        "Residence of Tipu Sultan",
        "Beautiful wall murals and woodwork"
      ],
      currentStatus: "Protected heritage site"
    },
   "Jama Masjid": {
  image: jamaMasjidImg,
  details: "Jama Masjid in Srirangapatna was built by Tipu Sultan in the late 18th century. This historical mosque features two tall minarets and an open prayer hall with Persian-style arches. It showcases the architectural grandeur of the Mysore Sultanate period and remains an important religious site today.",
  architecturalStyle: "Indo-Islamic architecture with Persian influences",
  significance: [
    "Built by Tipu Sultan in 1782-84",
    "Features twin minarets and Persian-style arches",
    "Important Islamic religious site in Karnataka",
    "Represents the architectural style of Mysore Sultanate"
  ],
  currentStatus: "Active mosque - Protected heritage site"
}
  };
  return architectureDatabase[structureName as keyof typeof architectureDatabase] || {
    image: "",
    details: `${structureName} is an important architectural monument from the ${kingdomName} period, representing the artistic and engineering achievements of its time.`,
    architecturalStyle: "Regional architectural style with unique design elements and construction techniques of the period.",
    significance: [
      "Important historical monument",
      "Represents architectural achievements of the period",
      "Cultural and religious significance",
      "Tourist and educational importance"
    ],
    currentStatus: "Historical monument - Under maintenance"
  };
};

export default ArchitectureCard;
