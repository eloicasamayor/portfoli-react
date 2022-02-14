export default function ItemProjecte({
  titol,
  descripcio,
  img,
  tags,
  contingut,
  descripcioFoto,
  link,
}) {
  return (
    <li className="tarjeta sombra">
      <img src={img} alt={descripcioFoto} width="250px" />
      <div className="contingut-tarjeta">
        <h3>
          <mark>{titol}</mark>
        </h3>
        <h4>{descripcio}</h4>
        {tags.map((t, i) => {
          return (
            <span key={i} className="portfolio-tag">
              {t}
            </span>
          );
        })}
        <p>{contingut}</p>

        <a className="btn-visitar-projecte" href={link}>
          Veure projecte ❯
        </a>
        <div className="clear"></div>
      </div>
    </li>
  );
}
