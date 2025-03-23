export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="w-full text-center py-6 bg-gray-900 text-gray-400 footer">
        <p>&copy; {currentYear} Ethan Lee. All rights reserved.</p>
        <p>
          Built with{" "}
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Next.js
          </a>.
        </p>
        <p>
          View the source code {" "}
          <a href="https://github.com/misterworker/Portfolio" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            here
          </a>.
        </p>
      </footer>
    );
  }
  