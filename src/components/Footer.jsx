import './Footer.css';
function Footer({ tagline = 'CIT TOPS AGAIN!!!' }) {
  return <p className="footer-tagline">{tagline}</p>;
}

export default Footer;
