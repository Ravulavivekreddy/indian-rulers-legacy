
import { useState, useEffect } from "react";
import { Crown, Shield, Sword } from "lucide-react";
import { Card } from "@/components/ui/card";
import IndianMap from "./IndianMap";
import KingdomPin from "./KingdomPin";
import KingdomDetails from "./KingdomDetails";
import { Kingdom, getKingdomsForYear } from "@/data/kingdoms";

interface InteractiveMapProps {
  selectedYear: number;
}

const InteractiveMap = ({ selectedYear }: InteractiveMapProps) => {
  const [selectedKingdom, setSelectedKingdom] = useState<Kingdom | null>(null);
  const [visibleKingdoms, setVisibleKingdoms] = useState<Kingdom[]>([]);

  useEffect(() => {
    const kingdoms = getKingdomsForYear(selectedYear);
    setVisibleKingdoms(kingdoms);
    
    // If the selected kingdom is no longer visible, clear selection
    if (selectedKingdom && !kingdoms.find(k => k.id === selectedKingdom.id)) {
      setSelectedKingdom(null);
    }
  }, [selectedYear, selectedKingdom]);

  const handleKingdomClick = (kingdom: Kingdom) => {
    setSelectedKingdom(kingdom.id === selectedKingdom?.id ? null : kingdom);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
          <span className="heritage-text-gradient">Interactive Map</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Explore the kingdoms and empires across the Indian subcontinent in {selectedYear} CE
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Showing {visibleKingdoms.length} active kingdom{visibleKingdoms.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map Section */}
        <div className="lg:col-span-2">
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-heritage-gold/20">
            <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-br from-heritage-cream to-heritage-gold/10 rounded-lg overflow-hidden border-4 border-heritage-gold/50 shadow-lg">
              {/* Indian Map SVG */}
              <div className="absolute inset-4">
                <IndianMap className="w-full h-full text-heritage-maroon" />
              </div>

              {/* Kingdom Pins */}
              {visibleKingdoms.map((kingdom) => (
                <KingdomPin
                  key={kingdom.id}
                  kingdom={kingdom}
                  isSelected={selectedKingdom?.id === kingdom.id}
                  onClick={() => handleKingdomClick(kingdom)}
                  currentYear={selectedYear}
                />
              ))}

              {/* Year indicator */}
              <div className="absolute top-4 right-4 bg-heritage-cream/90 px-3 py-1 rounded-full border border-heritage-gold/30">
                <span className="font-playfair font-semibold text-heritage-maroon">
                  {selectedYear} CE
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* Information Panel */}
        <div className="space-y-4">
          <KingdomDetails kingdom={selectedKingdom} currentYear={selectedYear} />

          {/* Legend */}
          <Card className="p-4 bg-card/80 backdrop-blur-sm border-heritage-gold/20">
            <h4 className="font-playfair font-semibold mb-3">Legend</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-heritage-gold rounded-full border-2 border-heritage-maroon"></div>
                <span>Ancient Period (300-1200 CE)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-heritage-saffron rounded-full border-2 border-heritage-maroon"></div>
                <span>Medieval Period (1200-1700 CE)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-heritage-bronze rounded-full border-2 border-heritage-maroon"></div>
                <span>Modern Period (1700-1947 CE)</span>
              </div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-heritage-gold/20">
              <h5 className="font-medium mb-2 text-xs">Kingdom Importance:</h5>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <Crown className="w-3 h-3" />
                  <span>Major Empire</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-2.5 h-2.5" />
                  <span>Regional Kingdom</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sword className="w-2 h-2" />
                  <span>Local Principality</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-heritage-gold/20">
              <h5 className="font-medium mb-2 text-xs">Active Kingdoms ({selectedYear} CE):</h5>
              <div className="space-y-1 text-xs max-h-32 overflow-y-auto">
                {visibleKingdoms.map((kingdom) => (
                  <div key={kingdom.id} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full border border-gray-400"
                      style={{ backgroundColor: kingdom.stateColor }}
                    ></div>
                    <span className="truncate">{kingdom.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
