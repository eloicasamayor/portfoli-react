import "./App.css";
import Header from "./Header";
import ItemProjecte from "./ItemProjecte";
import SvgBaix from "./SvgBaix";
import SvgDalt from "./SvgDalt";
import Form from "./Form";
import SocialLink from "./SocialLink";
function App() {
  let projectes = [
    {
      titol: "Calculadora",
      descripcio: "App de calculadora amb React",
      img: "https://git.az/source/services/2/photo/original/web.jpg",
      tags: ["html", "css", "React"],
      contingut: "Petita app de calculadora feta amb React des de 0",
      link: "https://eloicasamayor.github.io/calculadora/",
    },
    {
      titol: "Projecte 2",
      descripcio: "Descripcio del projecte 2",
      img: "https://git.az/source/services/2/photo/original/web.jpg",
      tags: ["html", "UI"],
      contingut:
        "Text d'explicació del projecte 2 amb totes les caracteristiques i etc etc.",
      descripcioFoto: "Descripcio de la foto del projecte 2",
      link: "https://eloicasamayor.github.io/calculadora/",
    },
    {
      titol: "Projecte 3",
      descripcio: "Descripcio del projecte 3",
      img: "https://git.az/source/services/2/photo/original/web.jpg",
      tags: ["html", "css"],
      contingut:
        "Text d'explicació del projecte 3 amb totes les caracteristiques i etc etc.",
      descripcioFoto: "Descripcio de la foto del projecte 3",
      link: "https://eloicasamayor.github.io/calculadora/",
    },
    {
      titol: "Projecte 4",
      descripcio: "Descripcio del projecte 4",
      img: "https://git.az/source/services/2/photo/original/web.jpg",
      tags: ["html", "css"],
      contingut:
        "Text d'explicació del projecte 4 amb totes les caracteristiques i etc etc.",
      descripcioFoto: "Descripcio de la foto del projecte 4",
      link: "https://eloicasamayor.github.io/calculadora/",
    },
  ];

  let socialLinks = [
    {
      url: "http://www.linkedin.com/in/eloicasamayor",
      nom: "linkedin",
      icon: "fab fa-linkedin",
      compte: "eloicasamayor",
    },
    {
      url: "mailto:eloi.casamayor@gmail.com",
      nom: "email",
      icon: "fas fa-envelope",
      compte: "eloicasamayor@gmail.com",
    },
    {
      url: "http://www.twitter.com/eloicasamayor",
      nom: "twitter",
      icon: "fab fa-twitter",
      compte: "@eloicasamayor",
    },

    {
      url: "http://www.github.com/eloicasamayor",
      nom: "github",
      icon: "fab fa-github",
      compte: "@eloicasamayor",
    },
  ];

  return (
    <div className="App">
      <SvgDalt />
      <Header />

      <section id="home">
        <h1>
          Eloi Casamayor
          <br />
          <mark>Web developer</mark>
        </h1>
        <div className="pilota-animada"></div>
        <a className="link-center-home" href="#contact">
          Contact me
        </a>
        <SvgBaix />
      </section>

      <section id="about_me">
        <SvgDalt />
        <div className="section-wrapper">
          <h2>
            <mark>About me</mark>
          </h2>
          <div className="about-div">
            <img
              className="img-about_me sombra"
              src={"eloi-sense-background.png"}
              alt="Eloi Casamayor"
            />
            <div className="img-wrapper"></div>

            <p className="tarjeta sombra">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              vehicula convallis urna ac semper. Sed nisl nulla, bibendum a
              tellus in, condimentum volutpat felis. Proin vel finibus nisi.
              Vivamus vestibulum blandit urna quis tempus. Integer aliquam eu
              ante non semper. Vivamus justo mi, rhoncus quis nibh ac, malesuada
              pulvinar massa. Etiam ornare facilisis ex, at placerat erat.
              nulla, bibendum a tellus in, condimentum volutpat felis. Proin vel
              finibus nisi.
            </p>
          </div>
        </div>
        <SvgBaix />
      </section>

      <section id="portfolio">
        <SvgDalt />
        <div className="section-wrapper">
          <h2>
            <mark>Portfolio</mark>
          </h2>
          <ul>
            {projectes.map((p, i) => {
              return (
                <ItemProjecte
                  key={i}
                  titol={p.titol}
                  descripcio={p.descripcio}
                  img={p.img}
                  tags={p.tags}
                  contingut={p.contingut}
                  descripcioFoto={p.descripcioFoto}
                  link={p.link}
                />
              );
            })}
          </ul>
        </div>
        <SvgBaix />
      </section>
      <section id="contact">
        <SvgDalt />
        <div className="section-wrapper">
          <h2>
            <mark>Contact me</mark>
          </h2>
          <div className="content-contact">
            <div className="contact-form">
              <h3>Send me a message</h3>
              <Form />
            </div>
            <div className="social-media-content">
              <h3>My social media</h3>
              <ul className="social-media-list">
                {socialLinks.map((s, n) => {
                  return (
                    <SocialLink
                      key={n}
                      url={s.url}
                      nom={s.nom}
                      icon={s.icon}
                      compte={s.compte}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <SvgBaix />
      </section>

      <footer>
        <p>©copyright Eloi Casamayor 2022</p>
      </footer>
    </div>
  );
}

export default App;
