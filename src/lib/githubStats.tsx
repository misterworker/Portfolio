const GITHUB_API_URL = 'https://api.github.com';

export const fetchGitHubCommits = async (username: string, repo: string): Promise<number> => {
  const response = await fetch(`${GITHUB_API_URL}/repos/${username}/${repo}/commits`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch commits');
  }

  const commits = await response.json();
  return commits.length;
};

export const fetchGitHubIssues = async (username: string, repo: string): Promise<number> => {
  const response = await fetch(`${GITHUB_API_URL}/repos/${username}/${repo}/issues?state=all`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch issues');
  }
  
  const issues = await response.json();
  return issues.length;
};

