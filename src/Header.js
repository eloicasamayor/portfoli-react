export default function Header() {
  function toggleMenuMobil() {
    document.querySelector("#menu").classList.toggle("menu-hidden");
    if (document.querySelector("#toggle-menu-mobile").innerHTML === "✕") {
      document.querySelector("#toggle-menu-mobile").innerHTML = "☰";
    } else {
      document.querySelector("#toggle-menu-mobile").innerHTML = "✕";
    }
  }
  return (
    <header className="sticky">
      <span onClick={toggleMenuMobil} id="toggle-menu-mobile">
        ☰
      </span>
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
