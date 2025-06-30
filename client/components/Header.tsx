import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-charcoal">
              China VPS Host
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-dark-gray hover:text-charcoal font-medium transition-colors"
            >
              Home
            </Link>
            <a
              href="https://www.arzhost.com/about-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-gray hover:text-charcoal font-medium transition-colors"
            >
              About Us
            </a>
            <a
              href="https://www.arzhost.com/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-gray hover:text-charcoal font-medium transition-colors"
            >
              Contact
            </a>
            <a
              href="https://arzhost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-yellow-400 text-charcoal px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </a>
          </nav>

          <div className="md:hidden">
            <button className="text-dark-gray hover:text-charcoal">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
