import "./App.css";
import Header from "./Header";

import SvgBaix from "./SvgBaix";
import SvgDalt from "./SvgDalt";
import Form from "./Form";
import SocialLink from "./SocialLink";

import Portfolio from "./Components/Portfolio";
import AboutMe from "./Components/AboutMe";
function App() {
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
          <mark>frontend developer</mark>
        </h1>
        {/*<div className="pilota-animada"></div>
        <a className="link-center-home" href="#contact">
          Contact me
  </a>*/}
        <div className="about-div">
          <img
            className="img-about_me sombra"
            src={"eloi-sense-background.png"}
            alt="Eloi Casamayor"
          />
          <div className="img-wrapper"></div>

          <p className="tarjeta sombra">
            Hello, I am Eloi Casamayor Esteve, a experienced software developer
            who is taking his first steps as a <b>modern frontend developer</b>.
            <br />
            <br />
            With a 5 years background in production-ready software development
            for engineering purposes, I am reorienting my carrer towards this
            amazing and very active field.
            <br />
            <br />
            Having attained a gread domain in HTML and CSS, now I am centered on{" "}
            <b>React application</b> development, including most used libraries
            as Redux and React-based frameworks as Gatsby.
            <br />
            <br />
            Do you want to know more about me? Have a look take a look at my
            projects and contact me!
          </p>
        </div>
        <SvgBaix />
      </section>

      <section id="about_me">
        <SvgDalt />
        <div className="section-wrapper">
          <h2>
            <mark>About me</mark>
          </h2>

          <AboutMe />
        </div>
        <SvgBaix />
      </section>

      <section id="portfolio">
        <SvgDalt />
        <Portfolio />
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
