import Footer from "../../components/footer/Footer";
import Accesibility_tools from "../../components/Accessibility_tools";
import Navbar from "./components/navbar/NavBar";
import GoogleMaps from "./components/GoogleMap";

export const Home = () => {
  return (
    <div className=" w-full min-h-screen grid grid-rows-3 dark:bg-slate-950 bg-orange-100">
      <Navbar />
      <main className="row-span-2 flex flex-col justify-center min-h-screen items-center">
        <GoogleMaps />
      </main>
      <Footer />
      <Accesibility_tools />
    </div>
  );
};
