import Hut from "../assets/home.png";
import shorts from "../assets/icons8-youtube-shorts-24 (1).png";
import user from "../assets/user.png";

const Sidebar = () => {
  return (
    <div className="p-3 overflow-y-hidden hover:overflow-y-auto w-[18.1rem]">
      <div className="w-full pb-3 border-b-2 border-[#ffffff26]">
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={Hut} alt="home logo" />
          <p className="pl-7">Home</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={shorts} alt="home logo" />
          <p className="pl-7">Shorts</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={Hut} alt="home logo" />
          <p className="pl-7">Subscriptions</p>
        </div>
      </div>
      <div className="w-full py-3 border-b-2 border-[#ffffff26]">
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={Hut} alt="home logo" />
          <p className="pl-7">You</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={shorts} alt="home logo" />
          <p className="pl-7">History</p>
        </div>
      </div>
      <div className="w-full py-3 border-b-2 border-[#ffffff26]">
        <p className="pl-6">Sign in to like videos, comment, and subscribe.</p>
        <div className="flex w-[7.5rem] ml-6 mt-4 border-2 py-2 px-4 rounded-3xl border-[#ffffff26] cursor-pointer">
          <img src={user} alt="user-icon" />
          <p className="text-blue-400 ml-2">Sign in</p>
        </div>
      </div>
      <div className="w-full pb-3 border-b-2 border-[#ffffff26]">
        <h1 className="p-3">Explore</h1>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={Hut} alt="home logo" />
          <p className="pl-7">Trending</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={shorts} alt="home logo" />
          <p className="pl-7">Shopping</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={Hut} alt="home logo" />
          <p className="pl-7">Music</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={Hut} alt="home logo" />
          <p className="pl-7">Movies</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={shorts} alt="home logo" />
          <p className="pl-7">Live</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={Hut} alt="home logo" />
          <p className="pl-7">Gaming</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={Hut} alt="home logo" />
          <p className="pl-7">News</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={shorts} alt="home logo" />
          <p className="pl-7">Sports</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={Hut} alt="home logo" />
          <p className="pl-7">Courses</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={Hut} alt="home logo" />
          <p className="pl-7">Fashion & Beauty</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={shorts} alt="home logo" />
          <p className="pl-7">Podcasts</p>
        </div>
      </div>
      <div className="w-full py-3 border-b-2 border-[#ffffff26]">
        <h1 className="p-3">More From Youtube</h1>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={shorts} alt="home logo" />
          <p className="pl-7">YouTube Premium</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={shorts} alt="home logo" />
          <p className="pl-7">YouTube Music</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={shorts} alt="home logo" />
          <p className="pl-7">YouTube Kids</p>
        </div>
      </div>
      <div className="w-full py-3 border-b-2 border-[#ffffff26]">
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={shorts} alt="home logo" />
          <p className="pl-7">Settings</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={shorts} alt="home logo" />
          <p className="pl-7">Report history</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={shorts} alt="home logo" />
          <p className="pl-7">Help</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={shorts} alt="home logo" />
          <p className="pl-7">Send feedback</p>
        </div>
      </div>
      <div className="p-2 text-sm flex flex-wrap items-center font-semibold text-[#b0b0b0]">
        <a href="" className="ml-1 mr-1 mt-1">
          About
        </a>
        <a href="" className="ml-1 mr-1 mt-1">
          Press
        </a>
        <a href="" className="ml-1 mr-1 mt-1">
          Copyright
        </a>
        <a href="" className="ml-1 mr-1">
          Contact Us
        </a>
        <a href="" className="ml-1 mr-2">
          Creators
        </a>
        <a href="" className="ml-1 mr-1 mb-3">
          Advertise
        </a>
        <a href="" className="ml-1 mr-7 mb-3">
          Developers
        </a>
        <a href="" className="ml-1">
          Terms
        </a>
        <a href="" className="ml-1">
          Privacy
        </a>
        <a href="" className="ml-1">
          Policy & Safety
        </a>
        <a href="" className="ml-1 mr-1">
          How YouTube Works
        </a>
        <a href="" className="ml-1 mr-1">
          Test new features
        </a>
        <a href="" className="mt-4 mb-3 text-xs text-[#737171]">
          © 2024 Google LLC
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
