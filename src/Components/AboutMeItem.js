export default function AboutMeItem({ ...props }) {
  return (
    <div className="about-me-item">
      <div className="boleta"></div>

      <div className="about-me-item-content">
        <span className="data">{props.data}</span>
        <h3 className="titol">{props.titol}</h3>
        <h4 className="lloc">{props.lloc}</h4>
        {props.descripcio}
      </div>
    </div>
  );
}
