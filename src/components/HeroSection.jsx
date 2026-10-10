import './HeroSection.css';

function HeroSection({ greeting = 'Hi, Welcome to', title = "MIAO's WEBSITE", body }) {
  return (
    <>
      <p className="hero-greeting">{greeting}</p>
      <h1 className="hero-title">{title}</h1>
      <div className="hero-bar" />
      {body && <p className="hero-body">{body}</p>}
    </>
  );
}

export default HeroSection;
