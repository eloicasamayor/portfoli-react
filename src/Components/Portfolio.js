import ItemProjecte from "./ItemProjecte";
import { useState, useRef, useEffect } from "react";
import { projectes } from "../data/projects";
import { FiltresProjectes } from "./FiltresProjects";

export default function Portfolio() {
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
    { Redux: true },
    { MUI: true },
    { Gatsby: true },
    { Flutter: true },
    { WordPress: true },
  ]);
  const [tagsSeleccionats, setTagsSeleccionats] = useState([
    "React",
    "Redux",
    "Material UI",
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
      <FiltresProjectes
        refsArray={refsArray}
        arrayTags={arrayTags}
        canviarFiltresProjectes={canviarFiltresProjectes}
      />

      <ul>
        {projectes.map((p, i) => {
          return (
            <>
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
                  source={p.source}
                />
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
}
