import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Footer from './Common/Footer';
import Header from './Common/Header';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, footerData,hyoloData } from '../mock/data';
import Hyolo from './Projects/Hyolo';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [footer, setFooter] = useState({});
  const [hyolo, setHyolo] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setFooter({ ...footerData });
    setHyolo({ ...hyoloData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, footer,hyolo }}>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Hyolo />

      <Footer />
    </PortfolioProvider>
  );
}

export default App;
