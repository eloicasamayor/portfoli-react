export default function Header() {
  return (
    <header className="sticky">
      <span id="toggle-menu-mobile">☰</span>
      <div id="menu" className="menu-hidden">
        <nav>
          <a href="#home">Home</a>
          <a href="#about_me">About me</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
