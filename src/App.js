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
          Having started working as a C# programmer, in 2022 I reoriented my carrer towards frontend development. I consider myself a responsable person who is good at working in a team and who enjoys using creativity to solve problems.
          <br/>
          I love living in the small town where I live, where I enjoy running through nature. I also practice indoor football and touch rugby!
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
