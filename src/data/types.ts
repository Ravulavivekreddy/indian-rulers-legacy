export interface Kingdom {
  id: string;
  name: string;
  dynasty?: string;
  startYear: number;
  endYear: number;
  period: "Ancient" | "Medieval" | "Modern";
  capital: string;
  image?: string;
  achievements?: string[];
  majorWars?: string[];
  militaryCampaigns?: string[];
  rulers: {
    name: string;
    reignStart: number;
    reignEnd: number;
    notable?: string;
    image?: string;
    achievements?: string[];
    militaryVictories?: string[];
  }[];
  territory: {
    lat: number;
    lng: number;
    // SVG coordinates based on the Indian map
    x: number;
    y: number;
  };
  color: string;
  importance: "major" | "medium" | "minor";
  stateColor: string; // Color for the state when this kingdom controls it
  architecturalMarvels?: {
    name: string;
    image: string;
    description: string;
  }[];
}
