export default function SocialLink({ url, nom, icon, compte }) {
  return (
    <a href={url}>
      <li className="social sombra tarjeta">
        <i className={icon}></i>
        <span className="detall-compte-social">{compte}</span>
      </li>
    </a>
  );
}
