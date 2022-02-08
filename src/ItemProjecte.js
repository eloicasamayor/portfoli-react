export default function ItemProjecte({
  titol,
  descripcio,
  contingut,
  descripcioFoto,
}) {
  return (
    <li class="tarjeta sombra">
      <h3>
        <mark>{titol}</mark>
      </h3>
      <h4>{descripcio}</h4>
      <span class="portfolio-tag">HTML</span>
      <span class="portfolio-tag">React</span>
      <p>{contingut}</p>
      <img
        src="https://git.az/source/services/2/photo/original/web.jpg"
        alt={descripcioFoto}
        width="250px"
      />
    </li>
  );
}
