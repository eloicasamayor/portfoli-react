export default function Header() {
  return (
    <header class="sticky">
      <span id="toggle-menu-mobile">☰</span>
      <div id="menu" class="menu-hidden">
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
