import { expenditureLegend } from '../data/expenditureLegend';

export default function ExpenditureLegend() {
  return (
    <>
      {/* Legend */}
      <div className="flex flex-col gap-2 text-sm">
        {expenditureLegend.map((legend, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: legend.color }}
            />
            <span className="text-gray-300">{legend.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}
