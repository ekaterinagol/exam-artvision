import React from "react"; 
import { Routes, Route } from 'react-router-dom'; 
import Main from "./pages/Main"; 
import About from "./pages/About"; 
import Events from "./pages/Events"; 
import MainNav from "./components/layout/MainNav"; 
import Footer from "./components/layout/Footer";
import RegistrationForm from "./pages/RegistrationForm";

function App() { 
  return ( 
    <div>
    <MainNav/>
    <Routes>
    <Route path="/" element={<Main/>}>
    </Route>
    <Route path="/About" element={<About/>}>
    </Route>
    <Route path="/Events" element={<Events/>}>
    </Route>
    <Route path="/Events/register" element={<RegistrationForm />}>
    </Route>
    </Routes>
    <Footer/>
    </div>
  ); 
} 
export default App; 