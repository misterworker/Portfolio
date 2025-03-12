import React from "react";

type Contribution = {
  date: string;
  contributions: number;
};

type GithubCalendarProps = {
  contributions: Contribution[];
};

const getColor = (count: number) => {
  if (count === 0) return "#161b22"; // GitHub dark background
  if (count < 2) return "#0e4429";
  if (count < 4) return "#006d32";
  if (count < 6) return "#26a641";
  return "#39d353"; // Brightest green for high contributions
};

const GithubCalendar: React.FC<GithubCalendarProps> = ({ contributions }) => {
  // Group data into weeks (GitHub calendar layout)
  const weeks: Contribution[][] = [];
  let week: Contribution[] = [];
  contributions.forEach((contribution, index) => {
    week.push(contribution);
    if ((index + 1) % 7 === 0) {
      weeks.push(week);
      week = [];
    }
  });
  if (week.length > 0) weeks.push(week); // Add remaining days

  // Extract unique months and their position
  const monthLabels: { name: string; index: number }[] = [];
  
  weeks.forEach((week, weekIndex) => {
    const firstDayOfWeek = week[0];
    if (firstDayOfWeek) {
      const date = new Date(firstDayOfWeek.date);
      const month = date.toLocaleString("default", { month: "short" });
      
      // Check if this is the first week of a new month
      if (weekIndex === 0 || 
          new Date(weeks[weekIndex-1][0]?.date).getMonth() !== date.getMonth()) {
        monthLabels.push({ name: month, index: weekIndex });
      }
    }
  });

  return (
    <div className="flex flex-col items-center p-[10px] text-[#8b949e]">
      <h2 className="text-center text-white mb-2">GitHub Contribution Calendar</h2>

      <div className="flex">
        {/* Weekday Labels */}
        <div className="grid text-[10px] text-right pr-[5px] mr-[2px]"
             style={{ gridTemplateRows: "repeat(8, 1fr)", height: "112px" }}>
          <div className="h-[14px]"></div> {/* Empty cell for month row */}
          {["", "M", "", "W", "", "F", ""].map((day, index) => (
            <div key={index} className="h-[14px] flex items-center justify-end">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid with Month Labels and Contributions */}
        <div className="flex flex-col">
          {/* Month Labels Row */}
          <div className="flex h-[14px] mb-[1px]">
            {monthLabels.map((month, index) => (
              <div
                key={index}
                className="text-[10px] font-medium"
                style={{ 
                  marginLeft: index === 0 ? 0 : `${(month.index - monthLabels[index-1].index - 1) * 13}px`,
                  width: '13px'
                }}
              >
                {month.name}
              </div>
            ))}
          </div>

          {/* Contribution Heatmap */}
          <div className="flex gap-[1px]">
            {weeks.map((week, weekIndex) => (
              <div
                key={weekIndex}
                className="grid gap-[1px]"
                style={{ gridTemplateRows: "repeat(7, 1fr)" }}
              >
                {week.map((contribution, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    title={`${contribution.contributions} contributions on ${contribution.date}`}
                    className="w-[12px] h-[12px] rounded-[2px]"
                    style={{ backgroundColor: getColor(contribution.contributions) }}
                  ></div>
                ))}
                {/* Fill empty cells if week is not complete */}
                {Array(7 - week.length).fill(0).map((_, i) => (
                  <div
                    key={`empty-${i}`}
                    className="w-[12px] h-[12px] rounded-[2px]"
                    style={{ backgroundColor: "#161b22" }}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubCalendar;