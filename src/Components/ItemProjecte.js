export default function ItemProjecte({
  titol,
  descripcio,
  img,
  tags,
  contingut,
  descripcioFoto,
  link,
  source,
}) {
  return (
    <li className="tarjeta sombra">
      <div className="project-img-wrapper">
        <img src={img} alt={descripcioFoto} width="250px" />
      </div>

      <div className="contingut-tarjeta">
        <h3>
          <mark>{titol}</mark>
        </h3>
        <h4>{descripcio}</h4>
        {tags.map((t, i) => {
          return (
            <>
              <span key={i} className="portfolio-tag">
                {t}
              </span>{" "}
            </>
          );
        })}
        <p>{contingut}</p>
        <div className="project-buttons">
          <a className="btn-visitar-projecte" href={link} target="_blank">
            See the project ❯
          </a>
          <a className="btn-visitar-projecte" href={source} target="_blank">
            Source code ❯
          </a>
        </div>
        <div className="clear"></div>
      </div>
    </li>
  );
}
