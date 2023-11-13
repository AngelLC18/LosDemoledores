import "../../index.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/NavBar";
import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import InputForm from "../form/components/Input";

const Form_rubro = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-20 dark:bg-gray-800">
      <header>
        <Navbar />
      </header>
      <main>
        <div className="bg-white dark:bg-gray-800 border border-black rounded-xl p-20 m-20-20-20-30 mb-40">
          <h1 className="text-black dark:text-white font-extrabold">
            Registra tu empresa
          </h1>
          <div className="flex w-72 flex-col gap-6 mt-5">
            <InputForm />
            <Input color="teal" label="Nombre" />
            <Input color="teal" label="Horario" />
          </div>
          <div className="flex w-72 flex-col gap-6 mt-5">
            <Select color="teal" label="Zona">
              <Option>Centro</Option>
              <Option>Sur</Option>
              <Option>Norte</Option>
              <Option>Este</Option>
              <Option>Oeste</Option>
            </Select>
          </div>
          <div className="flex w-72 flex-col gap-6 mt-5">
            <Input color="teal" label="Ubicación" />
          </div>
          <div className="flex w-96 flex-col gap-6 mt-5">
            <Textarea color="grey" label="Descripción" />
          </div>
          <div className="flex items-center justify-center mt-5">
            <Button variant="gradient" className="rounded-full color-red">
              Registrar mi local
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Form_rubro;
