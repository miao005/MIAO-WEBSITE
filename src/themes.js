// Theme model (colors only) + random theme generator.

// The "normal" theme the site starts with and goes back to.
export const defaultTheme = {
  name: 'Normal',
  accent: '#1d4ed8',
  bgFrom: '#f8fafc',
  bgTo: '#e2e8f0',
  card: 'rgba(255,255,255,0.75)',
  text: '#1e293b',
  muted: '#64748b',
  nav: '#475569',
};

const adjectives = [
  'Cosmic', 'Sleepy', 'Neon', 'Velvet', 'Golden', 'Frosty', 'Wild', 'Cozy', 'Electric', 'Mellow',
  'Sparkly', 'Mystic', 'Sunny', 'Dreamy', 'Spicy', 'Lazy', 'Brave', 'Fuzzy', 'Silver', 'Tropical',
];
const nouns = [
  'Panda', 'Garden', 'Comet', 'Cafe', 'Jungle', 'Cloud', 'Island', 'Robot', 'Meadow', 'Lantern',
  'Harbor', 'Canyon', 'Pancake', 'Orbit', 'Studio', 'Kitten', 'Volcano', 'Library', 'Carnival', 'Tide',
];
const pick = (list) => list[Math.floor(Math.random() * list.length)];
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Makes a brand-new random theme (random colors, light or dark, plus a fun name; the page text never changes).
export function generateTheme() {
  const hue = rand(0, 359);
  const hue2 = (hue + rand(30, 90)) % 360;
  const dark = Math.random() < 0.3;
  const adjective = pick(adjectives);
  const noun = pick(nouns);

  const colors = dark
    ? {
        accent: `hsl(${hue}, 85%, 68%)`,
        bgFrom: `hsl(${hue}, 40%, 10%)`,
        bgTo: `hsl(${hue2}, 35%, 18%)`,
        card: `hsla(${hue}, 30%, 16%, 0.75)`,
        text: `hsl(${hue}, 30%, 95%)`,
        muted: `hsl(${hue}, 15%, 70%)`,
        nav: `hsl(${hue}, 20%, 80%)`,
      }
    : {
        accent: `hsl(${hue}, 70%, 38%)`,
        bgFrom: `hsl(${hue}, 80%, 97%)`,
        bgTo: `hsl(${hue2}, 70%, 86%)`,
        card: 'rgba(255,255,255,0.75)',
        text: `hsl(${hue}, 60%, 15%)`,
        muted: `hsl(${hue}, 30%, 35%)`,
        nav: `hsl(${hue}, 30%, 30%)`,
      };

  return {
    name: `${adjective} ${noun}`,
    ...colors,
  };
}
