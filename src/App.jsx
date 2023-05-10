import { useState } from 'react';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppbar';
import { ThemeProvider } from '@emotion/react';
import { DarkTheme } from '../themes/DarkTheme';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Languages from './components/Languages';
import Footer from './Footer';

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <ResponsiveAppBar />
      <HeroSection />
      <Projects/>
      <Languages id="skills"/>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
