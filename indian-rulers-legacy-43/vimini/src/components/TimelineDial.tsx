
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";

interface TimelinePeriod {
  name: string;
  startYear: number;
  endYear: number;
  color: string;
}

const timelinePeriods: TimelinePeriod[] = [
  { name: "Ancient Period", startYear: 300, endYear: 1200, color: "heritage-gold" },
  { name: "Medieval Period", startYear: 1200, endYear: 1700, color: "heritage-saffron" },
  { name: "Modern Period", startYear: 1700, endYear: 1947, color: "heritage-bronze" },
];

interface TimelineDialProps {
  onYearChange: (year: number) => void;
}

const TimelineDial = ({ onYearChange }: TimelineDialProps) => {
  const [selectedYear, setSelectedYear] = useState([1200]);
  const currentYear = selectedYear[0];
  
  const getCurrentPeriod = (year: number) => {
    return timelinePeriods.find(period => year >= period.startYear && year <= period.endYear);
  };

  const currentPeriod = getCurrentPeriod(currentYear);

  const handleYearChange = (value: number[]) => {
    setSelectedYear(value);
    onYearChange(value[0]);
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
          <span className="heritage-text-gradient">Timeline Explorer</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Navigate through the chronological history of Indian rulers
        </p>
      </div>

      <Card className="p-8 bg-card/80 backdrop-blur-sm border-heritage-gold/20">
        {/* Year Display */}
        <div className="text-center mb-8">
          <div className="text-4xl md:text-6xl font-playfair font-bold heritage-text-gradient mb-2">
            {currentYear} CE
          </div>
          {currentPeriod && (
            <div className={`text-lg font-medium text-heritage-${currentPeriod.color}`}>
              {currentPeriod.name}
            </div>
          )}
        </div>

        {/* Timeline Slider */}
        <div className="mb-8">
          <Slider
            value={selectedYear}
            onValueChange={handleYearChange}
            max={1947}
            min={300}
            step={10}
            className="w-full"
          />
          
          {/* Period Markers */}
          {/* Removed period markers as per user request */}
        </div>

        {/* Period Information */}
        <div className="grid md:grid-cols-3 gap-4">
          {timelinePeriods.map((period, index) => {
            const handleClick = () => {
              const randomYear = Math.floor(
                Math.random() * (period.endYear - period.startYear + 1)
              ) + period.startYear;
              setSelectedYear([randomYear]);
              onYearChange(randomYear);
            };
            return (
              <div
                key={index}
                onClick={handleClick}
                className={`cursor-pointer p-4 rounded-lg border-2 transition-all duration-300 ${
                  currentPeriod?.name === period.name
                    ? `border-heritage-${period.color} bg-heritage-${period.color}/10`
                    : 'border-border bg-card/50'
                }`}
              >
                <h3 className={`font-playfair font-semibold mb-2 text-heritage-${period.color}`}>
                  {period.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {period.startYear} - {period.endYear} CE
                </p>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default TimelineDial;
