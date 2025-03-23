import Image from 'next/image';
import Header from '@/components/Header';
import SocialLinks from "@/components/SocialLinks";
import GithubCalendar from "@/components/stats/GithubCalendar";
import GithubStatsCard from "@/components/stats/GithubStats";
import AutoTwistableProfilePicture from "@/components/AutoTwistableProfilePicture";
import Certificates from "@/components/Certificates";
import Technologies from "@/components/Technologies";
import ProjectsList from '@/components/projects/ProjectsList';
import projects from "@/data/projects";
import Footer from "@/components/Footer";

// Type definition for fetched data
type Contribution = {
  date: string;
  contributions: number;
};

const env = process.env.NODE_ENV
let link:string
if(env == "development"){
  link = "http://127.0.0.1:8000/contributions/misterworker"
}
else if (env == "production"){
  link = process.env.CONTRIBUTIONS_LINK as string
}

const fetchContributions = async (): Promise<Contribution[]> => {
  try {
    const res = await fetch(link, {
      next: { revalidate: 600 }, // Cache data for 10 minutes
    });

    if (!res.ok) throw new Error("Failed to fetch contributions");

    const data = await res.json();
    return data.contributions;
  } catch (error) {
    console.error("Error fetching contributions:", error);
    return [];
  }
};

export default async function Home() {
  const contributions = await fetchContributions();
  const allTags = [...new Set(projects.flatMap((project) => project.tags))];
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen p-6 text overflow-x-hidden">
        {/* Auto-Twistable Profile Picture */}
        <div className="mb-6">
          <AutoTwistableProfilePicture
            src="/others/goober_pfp.jpg"
            alt="Profile Picture"
            width={150}
            height={150}
            twistInterval={3500}
            twistDuration={2500}
            twistDegrees={180}
          />
        </div>

        {/* Social Links */}
        <SocialLinks />

        {/* About Me Section */}
        <section className="max-w-xl text-center mb-10 w-full">
          <p className="text-xl font-semibold mb-6">
            Application Developer, Data Analyst, Casual Armwrestler.
          </p>
          <p className="text mb-4">
            I haven't always been in the tech space, but my interest piqued when I entered <b>Applied AI & Analytics</b> at
            <b> Nanyang Polytechnic</b>. Since then, I founded a startup called <b>Maibel.ai</b> and created various personal projects.
            I am well versed in areas like Machine Learning, Deep Learning, Data Analysis, as well as creating Generative AI applications.
          </p>
          <p className="text mb-6">
            I also take an interest in fitness, casually trying out powerlifting, bodybuilding, and most recently <b>armwrestling</b>.
          </p>
        </section>

        {/* Call to Action - View Projects */}
        <section className="text-center w-full">
          <a
            href="/projects"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          >
            View My Projects
          </a>
        </section>

        {/* Technologies Used */}
        <Technologies />

        {/* Github Stats */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6 text">GitHub Activity</h1>
          
          {/* Stats Card */}
          <GithubStatsCard contributions={contributions} />
          
          {/* Calendar */}
          <div className="bg-[#0d1117] rounded-lg overflow-hidden">
            <GithubCalendar contributions={contributions} />
          </div>
        </div>

        {/* Projects Section */}
        <section id="projects" className="my-16 w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
          <ProjectsList projects={projects} allTags={allTags} />
        </section>

        {/* Call to Action - View Github */}
        <section className="text-center w-full">
          <a
            href="https://github.com/misterworker"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          >
            View My Github
          </a>
        </section>

        {/* Certificates Section */}
        <section id="certificates">
          <Certificates />
        </section>

      </main>
      <Footer />
    </>
  );
}
