// Page model: the text shown for each nav link. Themes only change colors, never this text.
export const navLinks = ['Home', 'About', 'Projects', 'Contact'];

const pages = {
  Home: {
    greeting: 'Hi, Welcome to',
    title: "MIAO's WEBSITE",
    tagline: 'CIT TOPS AGAIN!!!',
  },
  About: {
    greeting: 'Get to know',
    title: 'ABOUT MIAO',
    body: "I'm Miao, a CIT student who loves building things for the web.",
    tagline: 'Always learning',
  },
  Projects: {
    greeting: "Things I've built",
    title: "MIAO's PROJECTS",
    body: 'This website is the first one. More are on the way.',
    tagline: 'More coming soon',
  },
  Contact: {
    greeting: 'Say hello',
    title: 'CONTACT MIAO',
    body: 'Reach me at your-email@example.com',
    tagline: "Let's build something together",
  },
};

export default pages;
