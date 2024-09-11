import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="bg-black h-full">
      <Header />
      <div className="flex text-white">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
