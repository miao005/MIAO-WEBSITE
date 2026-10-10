import Page from './Page.js';

// All pages, keyed by nav link name. Themes never change this text.
const pages = {
  Home: new Page({
    name: 'Home',
    greeting: 'Hi, Welcome to',
    title: "MIAO's WEBSITE",
    tagline: 'CIT TOPS AGAIN!!!',
  }),
  About: new Page({
    name: 'About',
    greeting: 'Get to know',
    title: 'ABOUT MIAO',
    body: "I'm Miao, a CIT student who loves building things for the web.",
    tagline: 'Always learning',
  }),
  Projects: new Page({
    name: 'Projects',
    greeting: "Things I've built",
    title: "MIAO's PROJECTS",
    body: 'This website is the first one. More are on the way.',
    tagline: 'More coming soon',
  }),
  Contact: new Page({
    name: 'Contact',
    greeting: 'Say hello',
    title: 'CONTACT MIAO',
    body: 'Reach me at your-email@example.com',
    tagline: "Let's build something together",
  }),
};

export const navLinks = Object.keys(pages);

export default pages;
