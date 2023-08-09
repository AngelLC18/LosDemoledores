import Navbar from "../components/navbar/NavBar";
import Sidebar from "../components/sidebar/Sidebar";
import Modals from "../components/modal/Modals";
import Footer from "../components/footer/Footer";

const Index = () => {
  return (
    <div className=" w-full min-h-screen grid grid-rows-3">
      <Navbar />
      <Sidebar />
      <main className="row-span-3 flex flex-col bg-sky-300 dark:bg-slate-900 justify-center h-screen items-center">
        <h1 className="text-6xl font-bold font-mono">AccesSim</h1>
        <Modals />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
