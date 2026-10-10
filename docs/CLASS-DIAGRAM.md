# MIAO-WEBSITE: Class Diagram & Class Model

## Class Diagram

```mermaid
classDiagram
direction TB
class Main:::existing {
  +render() void
}
class App:::existing {
  -theme Theme
  -page string
  +randomizeTheme() void
  +resetTheme() void
  +navigate(page) void
  +handleKeyDown(event) void
  +render() JSX
}
class Theme:::added {
  +name string
  +accent string
  +bgFrom string
  +bgTo string
  +card string
  +text string
  +muted string
  +nav string
  +toCssVars() object
}
class ThemeGenerator:::added {
  +defaultTheme Theme
  +generateTheme() Theme
}
class Page:::added {
  +name string
  +greeting string
  +title string
  +body string
  +tagline string
}
class NavBar:::added {
  +links string[]
  +activePage string
  +onNavigate(page) void
  +render() JSX
}
class HeroSection:::added {
  +greeting string
  +title string
  +body string
  +render() JSX
}
class Footer:::added {
  +tagline string
  +render() JSX
}
class ResetButton:::added {
  +themeName string
  +isDefault boolean
  +onReset() void
  +render() JSX
}
Main --> App : mounts
App *-- NavBar
App *-- HeroSection
App *-- Footer
App *-- ResetButton
App --> Theme : current theme
App ..> ThemeGenerator : asks for random theme
ThemeGenerator ..> Theme : creates
App "1" o-- "4" Page : shows
NavBar ..> Page : switches
classDef existing fill:#dbeafe,stroke:#1d4ed8,color:#1e293b
classDef added fill:#dcfce7,stroke:#15803d,color:#1e293b
```

## Class Model

| Class | Attributes | Methods | Responsibility |
|---|---|---|---|
| Main | — | render() | Creates the React root and mounts App in StrictMode. |
| App | theme, page (state) | randomizeTheme(), resetTheme(), navigate(), handleKeyDown(), render() | Page layout. Clicking the card gives a random theme, a nav link switches the page, and the reset button restores the normal theme. |
| Theme | name, accent, bgFrom, bgTo, card, text, muted, nav | toCssVars() | One color theme. Changes colors only, never the page text. Lives in `src/models/Theme.js`. |
| ThemeGenerator | defaultTheme, word lists | generateTheme() | Builds a random color theme (light or dark) with a fun name. Lives in `src/models/ThemeGenerator.js`. |
| Page | name, greeting, title, body, tagline | — | Text for Home, About, Projects and Contact. Fixed: themes never change it. Lives in `src/models/Page.js` and `src/models/pages.js`. |
| NavBar | links, activePage | onNavigate(), render() | Top navigation; highlights the current page. |
| HeroSection | greeting, title, body | render() | Greeting, title, bar and optional paragraph. |
| Footer | tagline | render() | Tagline line at the bottom of the card. |
| ResetButton | themeName, isDefault | onReset(), render() | Shows the current theme name and a "Back to normal" button (disabled when already normal). |
