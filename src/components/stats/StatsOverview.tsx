'use client'

import { useEffect, useState } from 'react';
import { fetchGitHubCommits, fetchGitHubIssues } from '@/lib/githubStats';
import StatsCard from './StatsCard';

const StatsOverview = ({ username, repo }: { username: string; repo: string }) => {
  const [commits, setCommits] = useState<number | null>(null);
  const [issues, setIssues] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const commitsCount = await fetchGitHubCommits(username, repo);
        const issuesCount = await fetchGitHubIssues(username, repo);

        setCommits(commitsCount);
        setIssues(issuesCount);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchData();
  }, [username, repo]);

  return (
    <div className="flex flex-wrap gap-6">
      <StatsCard label="Total Commits" value={commits || 0} />
      <StatsCard label="Total Issues" value={issues || 0} />
    </div>
  );
};

export default StatsOverview;
