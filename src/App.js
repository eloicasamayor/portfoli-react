import "./App.css";
import Header from "./Header";
import ItemProjecte from "./ItemProjecte";
import SvgBaix from "./SvgBaix";
import SvgDalt from "./SvgDalt";
import Form from "./Form";
import SocialLink from "./SocialLink";
import { useState } from "react";
function App() {
  let tags = ["React", "HTML", "CSS", "Design", "Flutter"];
  let projectes = [
    {
      titol: "Calculadora",
      descripcio: "App de calculadora amb React",
      img: "https://designsupply-web.com/public/assets/images/site/media/programming/react_min.png",
      tags: ["html", "css", "React", "from-scratch"],
      contingut: "Petita app de calculadora feta amb React des de 0",
      descripcioFoto: "Calculadora feta amb React",
      link: "https://eloicasamayor.github.io/calculadora/",
    },
    {
      titol: "Projecte 2",
      descripcio: "Galeria de fotos React",
      img: "https://designsupply-web.com/public/assets/images/site/media/programming/react_min.png",
      tags: ["React", "useState"],
      contingut:
        "Projecte senzill de galeria de fotos fet amb React des de zero.",
      descripcioFoto: "Galeria de fotos amb React",
      link: "https://eloicasamayor.github.io/galeria-fotos-react/",
    },
    {
      titol: "Projecte 3",
      descripcio: "Portfolio Eloi",
      img: "https://designsupply-web.com/public/assets/images/site/media/programming/react_min.png",
      tags: ["html", "css", "react", "UI"],
      contingut:
        "Text d'explicació del projecte 3 amb totes les caracteristiques i etc etc.",
      descripcioFoto: "projecte de portfoli Eloi",
      link: "https://github.com/eloicasamayor/portfoli-react",
    },
    {
      titol: "Projecte 4",
      descripcio: "Blog amb Gatsby i Contentful",
      img: "https://designsupply-web.com/public/assets/images/site/media/programming/react_min.png",
      tags: ["React", "Contentful", "GraphQL"],
      contingut:
        "Desenvolupament d'un lloc web construit amb Gatsby i amb el CMS Contentful",
      descripcioFoto: "blog gastby contentful",
      link: "https://eloi-gatsby-cms-blog.netlify.app/",
    },
    {
      titol: "Projecte 4",
      descripcio: "Lloc web de receptes basat en Gatsby",
      img: "https://designsupply-web.com/public/assets/images/site/media/programming/react_min.png",
      tags: ["Gatsby", "React", "GraphQL"],
      contingut: "Construcció d'un lloc web usant Gatsby",
      descripcioFoto: "projecte gatsby receptes",
      link: "https://eloi-gatsby-cms-blog.netlify.app/",
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

  const [tagsSeleccionats, setTagsSeleccionats] = useState([]);
  const canviarFiltresProjectes = (tag) => {
    console.log("tag " + { tag });
  };
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
          <div className="div-filtres-projectes">
            {tags.map((t, i) => {
              return (
                <label key={i}>
                  <input
                    type="checkbox"
                    id={t}
                    value={t}
                    onClick={() => canviarFiltresProjectes(t.toString)}
                  />{" "}
                  {t}
                </label>
              );
            })}
          </div>
          <div>{tagsSeleccionats}</div>

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
