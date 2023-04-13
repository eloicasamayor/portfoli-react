import "./App.css";
import Header from "./Components/Header";

import SvgBaix from "./Components/SvgBaix";
import SvgDalt from "./Components/SvgDalt";
import Form from "./Components/Form";
import SocialLink from "./Components/SocialLink";
import { socialLinks } from "./data/socialLinks";

import Portfolio from "./Components/Portfolio";
import AboutMe from "./Components/AboutMe";
function App() {
  return (
    <div className="App">
      <SvgDalt />
      <Header />

      <section id="home">
        <div id="title-wave">
          <h1 className="border">Eloi Casamayor</h1>
          <h1 className="wave">Eloi Casamayor</h1>
        </div>

        <h1 id="title-frontend">
          <mark>frontend developer</mark>
        </h1>

        <div className="about-div">
          <img
            className="img-about_me sombra"
            src={"eloi-sense-background.png"}
            alt="Eloi Casamayor"
          />
          <div className="img-wrapper"></div>

          <p className="tarjeta sombra">
            Hello, I am Eloi Casamayor Esteve, a experienced software developer
            who is now working as a react developer
            <br />
            <br />
            With a 5 years background in production-ready software development
            for engineering purposes, one year ago I reoriented my carrer
            towards the world of frontend web development.
            <br />
            <br />
            Having attained a gread domain in HTML and CSS, now I am centered on
            <b>React application</b> development using Javascript as well as
            Typescript, including most used libraries as Redux and modern
            frameworks like Next.
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
        <p>©copyright Eloi Casamayor 2023</p>
      </footer>
    </div>
  );
}

export default App;
