import Hut from "../assets/home.png";
import shorts from "../assets/icons8-youtube-shorts-24 (1).png";
import user from "../assets/user.png";

const Sidebar = () => {
  return (
    <div className="w-60 p-3 hover:overflow-y-auto hover:w-[15.5rem]">
      <div className="w-full pb-3 border-b-2 border-[#ffffff26]">
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={Hut} alt="home logo" />
          <p className="pl-10 font-semibold">Home</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={shorts} alt="home logo" />
          <p className="pl-10 font-semibold">Shorts</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={Hut} alt="home logo" />
          <p className="pl-10 font-semibold">Subscriptions</p>
        </div>
      </div>
      <div className="w-full py-3 border-b-2 border-[#ffffff26]">
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={Hut} alt="home logo" />
          <p className="pl-10 font-semibold">You</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={shorts} alt="home logo" />
          <p className="pl-10 font-semibold">History</p>
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
          <p className="pl-10 font-semibold">Trending</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={shorts} alt="home logo" />
          <p className="pl-10 font-semibold">Shopping</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={Hut} alt="home logo" />
          <p className="pl-10 font-semibold">Music</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={Hut} alt="home logo" />
          <p className="pl-10 font-semibold">Movies</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={shorts} alt="home logo" />
          <p className="pl-10 font-semibold">Live</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={Hut} alt="home logo" />
          <p className="pl-10 font-semibold">Gaming</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={Hut} alt="home logo" />
          <p className="pl-10 font-semibold">News</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={shorts} alt="home logo" />
          <p className="pl-10 font-semibold">Sports</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={Hut} alt="home logo" />
          <p className="pl-10 font-semibold">Courses</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={Hut} alt="home logo" />
          <p className="pl-10 font-semibold">Fashion & Beauty</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={shorts} alt="home logo" />
          <p className="pl-10 font-semibold">Podcasts</p>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Sidebar;
