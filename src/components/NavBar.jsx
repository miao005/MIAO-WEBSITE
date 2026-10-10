import './NavBar.css';

function NavBar({ links = ['Home', 'About', 'Projects', 'Contact'], activePage, onNavigate }) {
  return (
    <nav className="navbar">
      {links.map((label) => (
        <a
          key={label}
          href={`#${label.toLowerCase()}`}
          className={label === activePage ? 'active' : ''}
          aria-current={label === activePage ? 'page' : undefined}
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) onNavigate(label);
          }}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
