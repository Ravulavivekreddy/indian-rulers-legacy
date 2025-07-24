
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Info, Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import { Kingdom, getRulersForYear } from '@/data/kingdoms';
import { Link } from 'react-router-dom';

interface KingdomDetailsProps {
  kingdom: Kingdom | null;
  currentYear: number;
}

const KingdomDetails: React.FC<KingdomDetailsProps> = ({ kingdom, currentYear }) => {
  if (!kingdom) {
    return (
      <Card className="p-6 bg-card/80 backdrop-blur-sm border-heritage-gold/20">
        <div className="flex items-center gap-2 mb-4">
          <Info className="h-5 w-5 text-heritage-gold" />
          <h3 className="font-playfair font-semibold">Kingdom Details</h3>
        </div>
        <div className="text-center text-muted-foreground py-8">
          <MapPin className="h-8 w-8 mx-auto mb-2 opacity-50" />
          <p>Click on a kingdom marker to explore</p>
        </div>
      </Card>
    );
  }

  const currentRulers = getRulersForYear(kingdom, currentYear);

  return (
    <Card className="p-6 bg-card/80 backdrop-blur-sm border-heritage-gold/20">
      <div className="flex items-center gap-2 mb-4">
        <Info className="h-5 w-5 text-heritage-gold" />
        <h3 className="font-playfair font-semibold">Kingdom Details</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className={`font-playfair font-semibold text-lg text-heritage-${kingdom.color}`}>
            {kingdom.name}
          </h4>
          {kingdom.dynasty && (
            <p className="text-sm text-muted-foreground">
              {kingdom.dynasty} Dynasty
            </p>
          )}
          <p className="text-sm text-muted-foreground">
            {kingdom.period} Period
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <Calendar className="h-3 w-3" />
              <span className="font-medium">Duration:</span>
            </div>
            <p className="text-muted-foreground">
              {kingdom.startYear} - {kingdom.endYear} CE
            </p>
          </div>
          
          <div>
            <div className="flex items-center gap-1 mb-1">
              <MapPin className="h-3 w-3" />
              <span className="font-medium">Capital:</span>
            </div>
            <p className="text-muted-foreground">
              {kingdom.capital}
            </p>
          </div>
        </div>

        {currentRulers.length > 0 && (
          <div>
            <div className="flex items-center gap-1 mb-2">
              <Users className="h-4 w-4" />
              <h5 className="font-medium">
                Ruler{currentRulers.length > 1 ? 's' : ''} in {currentYear} CE:
              </h5>
            </div>
            <div className="space-y-2">
              {currentRulers.map((ruler, index) => (
                <div key={index} className="bg-heritage-cream/20 p-2 rounded">
                  <p className="font-medium">{ruler.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {ruler.reignStart} - {ruler.reignEnd} CE
                  </p>
                  {ruler.notable && (
                    <p className="text-xs text-heritage-maroon italic">
                      {ruler.notable}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        <Link to={`/kingdom/${kingdom.id}`}>
          <Button 
            variant="outline" 
            className="w-full border-heritage-gold/30 hover:bg-heritage-gold/10"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Learn More
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default KingdomDetails;
