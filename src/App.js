import React from 'react';
import Navbar from "./components/Navbar";
import Mainpage from "./components/Mainpage";
import Footer from "./components/Footer";
import ProjetsDescription from "./components/ProjetsDescription";
import PageProjCannabis from "./components/PageProjCannabis";
import PageProjBlog from "./components/PageProjBlog";
import Contact from "./components/Contact";
import ListeTemoignage from "./components/ListeTemoignage";
import GererTemoignage from "./components/GererTemoignage";
import { Route, Routes } from 'react-router-dom';
import { TemoignageProvider } from './context/TemoignageContext';

function App() {
  return (
    <TemoignageProvider>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={
              <div>
                <Mainpage />
                <ProjetsDescription />
              </div>
            } />
            <Route path="/pageprojcannabis" element={<PageProjCannabis />} />
            <Route path="/pageprojblog" element={<PageProjBlog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/listetemoignages" element={<ListeTemoignage />} />
            <Route path="/gerertemoignages" element={<GererTemoignage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </TemoignageProvider>
  );
}

export default App;
