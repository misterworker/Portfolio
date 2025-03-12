import GithubCalendar from "@/components/stats/GithubCalendar";
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

// Server Component
export default async function Page() {
  const contributions = await fetchContributions();

  return (
    <>
      <Header/>
        <div>
          <h1>GitHub Contributions</h1>
          <GithubCalendar contributions={contributions} />
        </div>
    </>
  );
}
