import Image from 'next/image';
import Header from '../components/Header';
import { BsGithub, BsLinkedin, BsFillPhoneFill, BsFillEnvelopeFill } from 'react-icons/bs';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen p-6 text-white">
        {/* Profile Picture */}
        <div className="mb-6">
          <Image
            src="/images/others/goober_pfp.jpg"
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full border-4 border-gray-500"
          />
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 text-lg mb-6">
          <a
            href="https://github.com/misterworker"
            target="_blank" //? opens in new tab
            rel="noopener noreferrer" //? prevents new page from accessing this page's window.opener property
            className="flex items-center space-x-2 hover:text-blue-400"
          >
            <BsGithub size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ethan-lee-224659251"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-blue-400"
          >
            <BsLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="tel:+1234567890"
            className="flex items-center space-x-2 hover:text-blue-400"
          >
            <BsFillPhoneFill size={20} />
            <span>Phone</span>
          </a>
          <a
            href="mailto:ethanroo2016@gmail.com"
            className="flex items-center space-x-2 hover:text-blue-400"
          >
            <BsFillEnvelopeFill size={20} />
            <span>Email</span>
          </a>
        </div>

        {/* About Me Section */}
        <section className="max-w-xl text-center">
          <p className="text-xl font-semibold mb-4">
            Application Developer, Data Analyst, Casual Armwrestler.
          </p>
          <p className="text-gray-300">
            I haven't always been in the tech space, but my interest piqued when I entered <b>Applied AI & Analytics</b> at <b>Nanyang Polytechnic</b>. Since then, I founded a startup called <b>Maibel.ai</b> and created various personal projects (Including this!).
          </p>
          <br />
          <p className="text-gray-300">
            I also take an interest in fitness, casually trying out powerlifting, bodybuilding, and most recently <b>armwrestling</b>.
          </p>
        </section>
      </main>
    </>
  );
}
