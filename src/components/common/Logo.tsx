import { Link } from "react-router-dom";

const Logo = () => {
  const logo = "/images/logo/logo_white.png";
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src={logo} className="text-white w-[100px]" alt="Logo" />
    </Link>
  );
};

export default Logo;
