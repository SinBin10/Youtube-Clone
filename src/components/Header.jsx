import hamburger from "../assets/Menu.png";
import logo from "../assets/youtube-logo-png-46020.png";

const Header = () => {
  return (
    <div className="flex">
      <div className="flex h-14">
        <div className="h-full">
          <img
            className="h-full p-4 hover:cursor-pointer"
            src={hamburger}
            alt="hamburger"
          />
        </div>
        <a href="/">
          <img className="h-full" src={logo} alt="youtube logo" />
        </a>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Header;
