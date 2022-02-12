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
    <li class="tarjeta sombra">
      <h3>
        <mark>{titol}</mark>
      </h3>
      <h4>{descripcio}</h4>
      {tags.map((t) => {
        return <span class="portfolio-tag">{t}</span>;
      })}
      <p>{contingut}</p>
      <img src={img} alt={descripcioFoto} width="250px" />
      <a className="btn-visitar-projecte" href={link}>
        Veure projecte ❯
      </a>
    </li>
  );
}
