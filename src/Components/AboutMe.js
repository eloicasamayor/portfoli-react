import AboutMeItem from "./AboutMeItem";
import { educacionItems, experienceItems } from "../data/experience";
export default function AboutMe() {
  return (
    <>
      <h3>
        <mark>Experience</mark>
      </h3>

      <div className="tarjeta sombra experience">
        {experienceItems.map((a, i) => (
          <AboutMeItem
            key={i}
            data={a.data}
            titol={a.titol}
            lloc={a.lloc}
            descripcio={a.descripcio}
          />
        ))}
      </div>
      <div className="separacio"></div>
      <h3>
        <mark>Education</mark>
      </h3>
      <div className="tarjeta sombra education">
        {educacionItems.map((a, i) => (
          <AboutMeItem
            key={i}
            data={a.data}
            titol={a.titol}
            lloc={a.lloc}
            descripcio={a.descripcio}
          />
        ))}
      </div>
    </>
  );
}
