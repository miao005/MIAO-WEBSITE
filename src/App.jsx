import { useState } from 'react';
import './App.css';
import ThemeGenerator from './models/ThemeGenerator.js';
import pages, { navLinks } from './models/pages.js';
import NavBar from './components/NavBar.jsx';
import HeroSection from './components/HeroSection.jsx';
import Footer from './components/Footer.jsx';
import ResetButton from './components/ResetButton.jsx';

function App() {
  const [theme, setTheme] = useState(ThemeGenerator.defaultTheme);
  const [page, setPage] = useState('Home');

  // The text comes from the page only. Themes change colors, not text.
  const content = pages[page];

  const navigate = (name) => setPage(name);
  const randomizeTheme = () => setTheme(ThemeGenerator.generateTheme());
  const resetTheme = () => {
    setTheme(ThemeGenerator.defaultTheme);
    setPage('Home');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      randomizeTheme();
    }
  };

  const themeVars = theme.toCssVars();

  return (
    <div className="app" style={themeVars}>
      <NavBar links={navLinks} activePage={page} onNavigate={navigate} />
      <div
        className="card"
        role="button"
        tabIndex={0}
        aria-label={`Theme: ${theme.name}. Press for a random new theme`}
        onClick={randomizeTheme}
        onKeyDown={handleKeyDown}
      >
        <HeroSection greeting={content.greeting} title={content.title} body={content.body} />
        <Footer tagline={content.tagline} />
      </div>
      <ResetButton
        themeName={theme.name}
        isDefault={theme === ThemeGenerator.defaultTheme && page === 'Home'}
        onReset={resetTheme}
      />
    </div>
  );
}

export default App;
