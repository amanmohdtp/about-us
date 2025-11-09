import { Link, useLocation } from "react-router-dom";
import siteConfig from "../config/siteConfig";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 p-4 flex justify-between items-center shadow z-50">
      <div className="flex items-center gap-3">
        <img src={siteConfig.logo} alt="Logo" className="w-10 h-10" />
        <span className="font-bold text-lg text-gray-800">
          {siteConfig.companyName}
        </span>
      </div>

      <div className="flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
              location.pathname === item.path ? "text-blue-600" : "text-gray-700"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
