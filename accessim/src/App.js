<<<<<<< HEAD
import './App.css';
import React from 'react';
import FormRegistro from './components/FormRegistro';
import Footer from './components/Footer';

=======
import React from "react";
import FormRegistro from "./components/FormRegistro";
//import './App.css';

function App() {
  return (
    <FormRegistro />
  );
}
>>>>>>> sara

function App(){
    return (
        <div>
            <div className="flex justify-center items-center w-full h-screen bg-gradient-to-tr from-blue-500 to-white-200 ">
                <FormRegistro />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
} export default App;   