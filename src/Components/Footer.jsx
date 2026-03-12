import { FaFacebook, FaTwitter, FaYoutube, FaDiscord } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-gray-700 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-primary drop-shadow-lg">
            GameHub
          </h2>
          <p className="mt-3 text-sm">
            Discover the best games, explore trending titles and join the
            ultimate gaming community.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Navigation</h3>

          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/games" className="hover:text-primary transition">
                Games
              </Link>
            </li>

            <li>
              <Link to="/top-games" className="hover:text-primary transition">
                Top Games
              </Link>
            </li>

            <li>
              <Link to="/my-profile" className="hover:text-primary transition">
                My Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>

          <ul className="space-y-2">
            <li className="hover:text-primary cursor-pointer">Gaming News</li>

            <li className="hover:text-primary cursor-pointer">Community</li>

            <li className="hover:text-primary cursor-pointer">Support</li>

            <li className="hover:text-primary cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Join Community
          </h3>

          <div className="flex gap-4 text-xl">
            <a className="hover:text-primary transition cursor-pointer">
              <FaFacebook />
            </a>

            <a className="hover:text-primary transition cursor-pointer">
              <FaTwitter />
            </a>

            <a className="hover:text-primary transition cursor-pointer">
              <FaYoutube />
            </a>

            <a className="hover:text-primary transition cursor-pointer">
              <FaDiscord />
            </a>
          </div>

          <p className="text-sm mt-4">Connect with gamers around the world.</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} GameHub — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
