import GithubCalendar from "@/components/stats/GithubCalendar";
import GithubStatsCard from "@/components/stats/GithubStats";
import Header from "@/components/Header";

// Type definition for fetched data
type Contribution = {
  date: string;
  contributions: number;
};

// Server-side function to fetch contributions
const fetchContributions = async (): Promise<Contribution[]> => {
  try {
    const res = await fetch("http://127.0.0.1:8000/contributions/misterworker", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch contributions");

    const data = await res.json();
    return data.contributions;
  } catch (error) {
    console.error("Error fetching contributions:", error);
    return [];
  }
};

export default async function Page() {
  const contributions = await fetchContributions();

  return (
    <>
      <Header/>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text">GitHub Activity</h1>
        
        {/* Stats Card */}
        <GithubStatsCard contributions={contributions} />
        
        {/* Calendar */}
        <div className="bg-[#0d1117] rounded-lg overflow-hidden">
          <GithubCalendar contributions={contributions} />
        </div>
      </div>
    </>
  );
}

