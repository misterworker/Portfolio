"use client";

import React, { useState, useEffect } from "react";

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
  const [isClient, setIsClient] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    setIsCompact(window.innerWidth < 640);
    
    const handleResize = () => {
      setIsCompact(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sort contributions by date
  const sortedContributions = [...contributions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // For mobile view, we'll show only the most recent 6 months of data
  const displayContributions = isClient && isCompact 
    ? sortedContributions.slice(-6 * 30) // Approximate 6 months
    : sortedContributions;

  // Group data into weeks (GitHub calendar layout)
  const weeks: Contribution[][] = [];
  let week: Contribution[] = [];
  displayContributions.forEach((contribution, index) => {
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

  // Calculate cell size based on client state (server renders full size)
  const cellSize = isClient && isCompact ? 8 : 12;
  const cellGap = 1;
  const totalWidth = weeks.length * (cellSize + cellGap);

  return (
    <div className="flex flex-col items-center p-2 sm:p-[10px] text-[#8b949e] overflow-x-auto w-full">
      <h2 className="text-center text-white text-sm sm:text-base mb-2">
        {isClient && isCompact ? "GitHub Activity (Last 6 Months)" : "GitHub Contribution Calendar"}
      </h2>

      {isClient ? (
        <div className="flex min-w-full" style={{ minWidth: `${totalWidth + 30}px` }}>
          {/* Weekday Labels */}
          <div 
            className="grid text-[8px] sm:text-[10px] text-right pr-1 sm:pr-[5px] mr-[2px]"
            style={{ 
              gridTemplateRows: `repeat(8, ${isCompact ? '10px' : '14px'})`, 
              height: isCompact ? "80px" : "112px" 
            }}
          >
            <div style={{ height: isCompact ? "10px" : "14px" }}></div> {/* Empty cell for month row */}
            {["", "M", "", "W", "", "F", ""].map((day, index) => (
              <div key={index} style={{ height: isCompact ? "10px" : "14px" }} className="flex items-center justify-end">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid with Month Labels and Contributions */}
          <div className="flex flex-col">
            {/* Month Labels Row */}
            <div className="flex" style={{ height: isCompact ? "10px" : "14px", marginBottom: "1px" }}>
              {monthLabels.map((month, index) => (
                <div
                  key={index}
                  className="text-[8px] sm:text-[10px] font-medium"
                  style={{ 
                    marginLeft: index === 0 ? 0 : `${(month.index - monthLabels[index-1].index - 1) * (cellSize + cellGap)}px`,
                    width: `${cellSize}px`
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
                  style={{ gridTemplateRows: `repeat(7, ${cellSize}px)` }}
                >
                  {week.map((contribution, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      title={`${contribution.contributions} contributions on ${contribution.date}`}
                      className="rounded-[2px]"
                      style={{ 
                        backgroundColor: getColor(contribution.contributions),
                        width: `${cellSize}px`,
                        height: `${cellSize}px`
                      }}
                    ></div>
                  ))}
                  {/* Fill empty cells if week is not complete */}
                  {Array(7 - week.length).fill(0).map((_, i) => (
                    <div
                      key={`empty-${i}`}
                      className="rounded-[2px]"
                      style={{ 
                        backgroundColor: "#161b22",
                        width: `${cellSize}px`,
                        height: `${cellSize}px`
                      }}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="animate-pulse flex items-center justify-center h-[200px] w-full bg-gray-800 rounded-lg">
          <p className="text-gray-400">Loading calendar...</p>
        </div>
      )}
    </div>
  );
};

export default GithubCalendar;