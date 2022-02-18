import ItemProjecte from "./ItemProjecte";
import { useState, useRef, useEffect } from "react";
export default function Portfolio() {
  let projectes = [
    {
      id: 1,
      titol: "Calculadora",
      descripcio: "App de calculadora amb React",
      img: "https://designsupply-web.com/public/assets/images/site/media/programming/react_min.png",
      tags: ["html", "css", "React", "from-scratch"],
      contingut: "Petita app de calculadora feta amb React des de 0",
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
        "Projecte senzill de galeria de fotos fet amb React des de zero.",
      descripcioFoto: "Galeria de fotos amb React",
      link: "https://eloicasamayor.github.io/exercicis-react/",
    },
    {
      id: 3,
      titol: "Projecte 3",
      descripcio: "Portfolio Eloi",
      img: "https://designsupply-web.com/public/assets/images/site/media/programming/react_min.png",
      tags: ["html", "css", "UI"],
      contingut:
        "Text d'explicació del projecte 3 amb totes les caracteristiques i etc etc.",
      descripcioFoto: "projecte de portfoli Eloi",
      link: "https://github.com/eloicasamayor/portfoli-react",
    },
    {
      id: 4,
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
      id: 5,
      titol: "Projecte 4",
      descripcio: "Lloc web de receptes basat en Gatsby",
      img: "https://designsupply-web.com/public/assets/images/site/media/programming/react_min.png",
      tags: ["Gatsby", "React", "GraphQL"],
      contingut: "Construcció d'un lloc web usant Gatsby",
      descripcioFoto: "projecte gatsby receptes",
      link: "https://eloi-gatsby-cms-blog.netlify.app/",
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
    { Design: true },
  ]);
  const [tagsSeleccionats, setTagsSeleccionats] = useState([
    "React",
    "HTML",
    "CSS",
    "Gatsby",
    "Design",
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
      <div className="div-filtres-projectes">
        {arrayTags.map((ObjecteTag, i) => {
          return (
            <label key={i}>
              <input
                type="checkbox"
                checked={Object.values(ObjecteTag)[0]}
                id={Object.keys(ObjecteTag)[0]}
                value={Object.keys(ObjecteTag)[0]}
                ref={(el) => (refsArray.current[i] = el)}
                onChange={() => canviarFiltresProjectes()}
              />{" "}
              {Object.keys(ObjecteTag)[0]}
            </label>
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
                  key={i}
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
