import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="bg-black h-full flex flex-col">
      <Header />
      <div className="flex text-white h-full overflow-hidden">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
