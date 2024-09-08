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
        <div className="w-[40rem] border-[#ffffff26] border-2 h-full flex rounded-3xl items-center">
          <div className="w-12 px-3">
            <img src={search} alt="search" />
          </div>
          <input
            className="h-full w-full bg-inherit text-white outline-none focus:outline-blue-500 focus:rounded-l-3xl focus:outline-1 pl-2 pr-5 text-base"
            type="text"
            placeholder="Search"
          />
          <div className="h-full">
            <img
              className="px-5 h-full object-contain rounded-r-3xl bg-[#ffffff26]"
              src={search}
              alt="search"
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
