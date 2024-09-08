import hamburger from "../assets/Menu.png";
import logo from "../assets/youtube-logo-png-46020.png";
import search from "../assets/search.png";

const Header = () => {
  return (
    <div className="flex items-center">
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
      <div className="h-10">
        <div className="w-[39.5rem] border-[#ffffff26] border-2 h-full flex rounded-3xl">
          <input
            className="h-full w-full bg-inherit text-white outline-none focus:outline-blue-500 focus:rounded-l-3xl focus:outline-1 px-5 text-sm"
            type="text"
            placeholder="Search"
          />
          <img
            className="py-2 px-5 rounded-r-3xl bg-[#ffffff26]"
            src={search}
            alt="search"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
