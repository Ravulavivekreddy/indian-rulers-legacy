
import { useState } from "react";
import TimelineDial from "@/components/TimelineDial";
import InteractiveMap from "@/components/InteractiveMap";
import BharatRoyalBot from "@/components/BharatRoyalBot";

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState(1200);

  return (
    <div className="min-h-screen bg-gradient-to-br from-heritage-cream via-background to-heritage-cream/50">
      {/* Timeline Dial at the top */}
      <div className="pt-20 pb-8">
        <TimelineDial onYearChange={setSelectedYear} />
      </div>
      
      {/* Interactive Map below */}
      <div className="px-6 pb-12">
        <InteractiveMap selectedYear={selectedYear} />
      </div>
      
      {/* BharatRoyalBot */}
      <BharatRoyalBot />
    </div>
  );
};

export default Timeline;
