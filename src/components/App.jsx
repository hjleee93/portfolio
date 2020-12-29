import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Footer from './Common/Footer';
import Header from './Common/Header';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, footerData } from '../mock/data';
import Hyolo from './Projects/Hyolo';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, footer }}>
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
