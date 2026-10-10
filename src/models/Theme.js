// Theme model: one color theme. Colors only, never page text.
class Theme {
  constructor({ name, accent, bgFrom, bgTo, card, text, muted, nav }) {
    this.name = name;
    this.accent = accent;
    this.bgFrom = bgFrom;
    this.bgTo = bgTo;
    this.card = card;
    this.text = text;
    this.muted = muted;
    this.nav = nav;
  }

  // The CSS variables this theme sets on the page.
  toCssVars() {
    return {
      '--accent': this.accent,
      '--bg-from': this.bgFrom,
      '--bg-to': this.bgTo,
      '--card-bg': this.card,
      '--text': this.text,
      '--muted': this.muted,
      '--nav': this.nav,
    };
  }
}

export default Theme;
