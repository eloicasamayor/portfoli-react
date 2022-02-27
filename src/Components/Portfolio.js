import ItemProjecte from "./ItemProjecte";
import { useState, useRef, useEffect } from "react";
export default function Portfolio() {
  let projectes = [
    {
      id: 1,
      titol: "Calculadora",
      descripcio: "App de calculadora amb React",
      img: "https://www.linkpicture.com/q/calculadora.png",
      tags: ["html", "css", "React", "from-scratch"],
      contingut: "Little calculator app made with React from scratch",
      descripcioFoto: "Calculadora feta amb React",
      link: "https://eloicasamayor.github.io/calculadora/",
    },
    {
      id: 2,
      titol: "Projecte 2",
      descripcio: "Exercicis React",
      img: "https://designsupply-web.com/public/assets/images/site/media/programming/react_min.png",
      tags: ["React", "useState"],
      contingut:
        "Project that includes all react exercises from the frontend specialization course",
      descripcioFoto: "Galeria de fotos amb React",
      link: "https://eloicasamayor.github.io/exercicis-react/",
    },
    {
      id: 3,
      titol: "Projecte 3",
      descripcio: "Portfolio Eloi",
      img: "https://www.linkpicture.com/q/Captura_16.png",
      tags: ["html", "css", "React"],
      contingut: "The website you are currently seing. Made with React.",
      descripcioFoto: "projecte de portfoli Eloi",
      link: "https://github.com/eloicasamayor/portfoli-react",
    },
    {
      id: 4,
      titol: "Projecte 4",
      descripcio: "Blog amb Gatsby i Contentful",

      img: "https://www.linkpicture.com/q/Captura_15.png",
      tags: ["React", "Contentful", "GraphQL"],
      contingut:
        "Website built with Gatsby i and the CMS Contentful as the backend",
      descripcioFoto: "blog gastby contentful",
      link: "https://eloi-gatsby-cms-blog.netlify.app/",
    },
    {
      id: 5,
      titol: "Projecte 5",
      descripcio: "Lloc web de receptes basat en Gatsby",
      img: "https://www.linkpicture.com/q/Captura_15.png",
      tags: ["Gatsby", "React", "GraphQL"],
      contingut:
        "Recipes site developed with Gatsby, following a Gatsby tutorial.",
      descripcioFoto: "projecte gatsby receptes",
      link: "https://eloi-gatsby-cms-blog.netlify.app/",
    },
    {
      id: 6,
      titol: "Projecte 6",
      descripcio: "Flutter app clone",
      img: "https://www.linkpicture.com/q/Captura_14.png",
      tags: ["Flutter", "Dart", "Android"],
      contingut: "Clone of the Feedly RSS reader android app made with flutter",
      descripcioFoto: "projecte gatsby receptes",
      link: "https://eloicasamayor.github.io/feedly_clone/#/",
    },
    {
      id: 7,
      titol: "Projecte 7",
      descripcio: "Expenses Tracker",
      img: "https://www.linkpicture.com/q/Captura_13.png",
      tags: ["React", "State management"],
      contingut: "Expenses tracker web app made with React",
      descripcioFoto: "Expenses Tracker app screenshot",
      link: "https://eloicasamayor.github.io/ExpensesTracker/",
    },
    {
      id: 8,
      titol: "Projecte 8",
      descripcio: "Escolapios Californias Website",
      img: "https://www.linkpicture.com/q/Captura_17.png",
      tags: ["Wordpress", "CSS"],
      contingut:
        "Escolapios en las Californias website, done based on the WordPress CMS",
      descripcioFoto: "Escolapios Californias' website screenshot",
      link: "https://epiacalifornias.org/",
    },
    {
      id: 9,
      titol: "Projecte 9",
      descripcio: "Educacion Solidaria en las Californias website",
      img: "https://i.postimg.cc/44W5kjPW/werwer.png",
      tags: ["Wordpress", "CSS"],
      contingut:
        "Educacion Solidaria en las Californias website, done based on the WordPress CMS",
      descripcioFoto: "Escolapios Californias' website screenshot",
      link: "https://edusolidaria.org/",
    },
    {
      id: 10,
      titol: "Projecte 10",
      descripcio: "Wedding website",
      img: "https://i.postimg.cc/44P84Yfb/Captura4.png",
      tags: ["Wordpress", "CSS"],
      contingut: "Wedding website, deployed with WordPress",
      descripcioFoto: "Escolapios Californias' website screenshot",
      link: "https://adrianayrene.com/",
    },
    {
      id: 11,
      titol: "Projecte 11",
      descripcio: "Banking app UI Challange",
      img: "https://i.postimg.cc/G3KDTYst/Captura3.png",
      tags: ["Flutter", "UX/UI"],
      contingut: "Little Flutter app made as a UI/UX challange",
      descripcioFoto: "Banking app UI Challange",
      link: "https://eloicasamayor.github.io/UIChallenge_BankingApp/#/detail_screen",
    },
    {
      id: 12,
      titol: "Projecte 12",
      descripcio: "Birthday reminder flutter app",
      img: "https://i.postimg.cc/BQgcckLT/sdfsadf.png",
      tags: ["Flutter", "UX/UI"],
      contingut: "Flutter app to be reminded on every birthday",
      descripcioFoto: "Birthday reminder app screenshot",
      link: "https://play.google.com/store/apps/details?id=com.cofoi_apps.birthday_reminder",
    },
  ];

  const [mostrarProjectes, setMostrarProjectes] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const [arrayTags, setArrayTags] = useState([
    { React: true },
    { HTML: true },
    { CSS: true },
    { Gatsby: true },
    { Flutter: true },
    { WordPress: true },
  ]);
  const [tagsSeleccionats, setTagsSeleccionats] = useState([
    "React",
    "HTML",
    "CSS",
    "Gatsby",
    "Flutter",
    "Wordpress",
  ]);
  const canviarFiltresProjectes = () => {
    setArrayTags(refsArray.current.map((r) => ({ [r.value]: r.checked })));
  };

  const shaDeMostarElProjecte = (tagsProjecte) => {
    return tagsProjecte
      .map((t) => t.toUpperCase())
      .some((t) => tagsSeleccionats.includes(t));
  };

  useEffect(() => {
    let arraysTrue = arrayTags.map((t) =>
      Object.values(t)[0] ? Object.keys(t)[0].toUpperCase() : null
    );
    setTagsSeleccionats((v) =>
      arraysTrue.filter((elementArray) => elementArray !== null)
    );
  }, arrayTags);
  useEffect(() => {
    setMostrarProjectes(projectes.map((p) => shaDeMostarElProjecte(p.tags)));
  }, [tagsSeleccionats]);

  const refsArray = useRef([]);

  return (
    <div className="section-wrapper">
      <h2>
        <mark>Portfolio</mark>
      </h2>
      <p>{mostrarProjectes}</p>
      <div className="div-filtres-projectes tarjeta sombra">
        {arrayTags.map((ObjecteTag, i) => {
          return (
            <>
              <input
                key={"input-" + i}
                type="checkbox"
                checked={Object.values(ObjecteTag)[0]}
                id={Object.keys(ObjecteTag)[0].toLowerCase()}
                value={Object.keys(ObjecteTag)[0].toLowerCase()}
                ref={(el) => (refsArray.current[i] = el)}
                onChange={() => canviarFiltresProjectes()}
                className="toggle"
              />
              <label
                key={"label-" + i}
                htmlFor={Object.keys(ObjecteTag)[0].toLowerCase()}
              >
                {Object.keys(ObjecteTag)[0].toLowerCase()}
              </label>
            </>
          );
        })}
      </div>

      <ul>
        {projectes.map((p, i) => {
          return (
            <>
              {/*<p>{p.tags.map((t) => t.toUpperCase())}</p>
              <p>
                {arrayTags.map((t) =>
                  Object.values(t)[0] ? Object.keys(t)[0].toUpperCase() : ""
                )}
                </p>*/}

              {mostrarProjectes[i] && (
                <ItemProjecte
                  key={"projecte" + i}
                  titol={p.titol}
                  descripcio={p.descripcio}
                  img={p.img}
                  tags={p.tags}
                  contingut={p.contingut}
                  descripcioFoto={p.descripcioFoto}
                  link={p.link}
                />
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
}
