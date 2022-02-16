import ItemProjecte from "./ItemProjecte";
import { useState } from "react";
export default function Portfolio(){
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
      descripcio: "Exercicis React",
      img: "https://designsupply-web.com/public/assets/images/site/media/programming/react_min.png",
      tags: ["React", "useState"],
      contingut:
        "Projecte senzill de galeria de fotos fet amb React des de zero.",
      descripcioFoto: "Galeria de fotos amb React",
      link: "https://eloicasamayor.github.io/exercicis-react/",
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

  
  const [tagsSeleccionats, setTagsSeleccionats] = useState({"React":true, "HTML":true, "CSS":true, "Design":true}, );
  const canviarFiltresProjectes = (tag) => {
    
    //console.log("tag " + tag);
    setTagsSeleccionats((prevState)=>(Object.keys(prevState).map((item)=> {
        console.log(item+"="+prevState[item]);
        
        return (item===tag? {item:!prevState[item]}:{item:prevState[item]});
    })));
  };
    return(
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
                    checked={tagsSeleccionats.t}
                    id={t}
                    value={t}
                    onChange={() => canviarFiltresProjectes(t)}
                  />{" "}
                  {t}
                </label>
              );
            })}
          </div>
          <div>{JSON.stringify(tagsSeleccionats)}</div>

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
    )
}