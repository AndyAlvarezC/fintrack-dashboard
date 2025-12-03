import { expenditureData } from '../../../data/mockData';

// Expenditure Legend Component

// Main Component
export default function ExpenditureLegend() {
  return (
    <div className="flex flex-col gap-2 text-sm">
      {/* Loop through each expenditure category */}
      {expenditureData.map((legend, index) => (
        <div key={index} className="flex items-center gap-2">
          {/* Color indicator */}
          <div
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: legend.color }}
          />
          {/* Category name */}
          <span className="text-gray-300">{legend.name}</span>
        </div>
      ))}
    </div>
  );
}
