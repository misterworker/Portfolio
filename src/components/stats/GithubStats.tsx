import React from "react";

type Contribution = {
  date: string;
  contributions: number;
};

type GithubStatsCardProps = {
  contributions: Contribution[];
};

const GithubStatsCard: React.FC<GithubStatsCardProps> = ({ contributions }) => {
  // Calculate total commits
  const totalCommits = contributions.reduce(
    (total, day) => total + day.contributions,
    0
  );

  // Sort contributions by date (oldest to newest)
  const sortedContributions = [...contributions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Calculate longest streak
  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;

  // Function to check if dates are consecutive
  const isConsecutive = (date1: string, date2: string) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    
    // Set time to noon to avoid timezone issues
    d1.setHours(12, 0, 0, 0);
    d2.setHours(12, 0, 0, 0);
    
    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays === 1;
  };

  // Calculate longest streak
  for (let i = 0; i < sortedContributions.length; i++) {
    const contribution = sortedContributions[i];
    
    if (contribution.contributions > 0) {
      tempStreak++;
      
      if (tempStreak > longestStreak) {
        longestStreak = tempStreak;
      }
      
      // Check if this is the last element or the next day doesn't have contributions
      if (i === sortedContributions.length - 1 || 
          !isConsecutive(contribution.date, sortedContributions[i+1].date) ||
          sortedContributions[i+1].contributions === 0) {
        tempStreak = 0;
      }
    }
  }

  // Calculate current streak (working backwards from most recent)
  const reversedContributions = [...sortedContributions].reverse();
  
  // Skip initial days with no contributions
  let startIndex = 0;
  while (startIndex < reversedContributions.length && 
         reversedContributions[startIndex].contributions === 0) {
    startIndex++;
  }
  
  // Count consecutive days with contributions
  for (let i = startIndex; i < reversedContributions.length - 1; i++) {
    if (reversedContributions[i].contributions > 0 && 
        isConsecutive(reversedContributions[i+1].date, reversedContributions[i].date) &&
        reversedContributions[i+1].contributions > 0) {
      currentStreak++;
    } else {
      break;
    }
  }
  
  // Add 1 for the current day if it has contributions
  if (startIndex < reversedContributions.length && 
      reversedContributions[startIndex].contributions > 0) {
    currentStreak++;
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-[#0d1117] text-[#8b949e] rounded-lg mb-4">
      <div className="flex flex-col items-center justify-center p-4 bg-[#161b22] rounded-md">
        <span className="text-2xl font-bold text-white">{totalCommits}</span>
        <span className="text-sm">Total Contributions</span>
        <span className="text-xs">(past year)</span>
      </div>
      
      <div className="flex flex-col items-center justify-center p-4 bg-[#161b22] rounded-md">
        <span className="text-2xl font-bold text-white">{longestStreak}</span>
        <span className="text-sm">Longest Streak</span>
        <span className="text-xs">(days)</span>
      </div>
      
      <div className="flex flex-col items-center justify-center p-4 bg-[#161b22] rounded-md">
        <span className="text-2xl font-bold text-white">{currentStreak}</span>
        <span className="text-sm">Current Streak</span>
        <span className="text-xs">(days)</span>
      </div>
    </div>
  );
};

export default GithubStatsCard;