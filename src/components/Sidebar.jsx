import Hut from "../assets/home.png";

const Sidebar = () => {
  return (
    <div className="w-60 p-3">
      <div className="w-full">
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={Hut} alt="home logo" />
          <p className="pl-10 font-semibold">Home</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={Hut} alt="home logo" />
          <p className="pl-10 font-semibold">Shorts</p>
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-[#282828] hover:cursor-pointer">
          <img className="h-5 pl-2" src={Hut} alt="home logo" />
          <p className="pl-10 font-semibold">Subscriptions</p>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Sidebar;
