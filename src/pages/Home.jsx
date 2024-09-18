import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

const Home = () => {
  return (
    <div className="bg-black h-full flex flex-col">
      <Header />
      <div className="flex text-white h-full overflow-y-hidden">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default Home;
