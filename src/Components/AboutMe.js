import AboutMeItem from "./AboutMeItem";

export default function AboutMe() {
  let aboutMeItems = [
    {
      data: "2010-2014",
      titol: "Multimedia Degree",
      lloc: "Centre de la Imatge i la Tecnologia Multimèdia (UPC)",
      descripcio:
        "Specialization in digital contents and UX/UI. Implementation of websites, apps and interactive virtual environments.",
    },
    {
      data: "2014",
      titol: "Advanced Video Postproduction",
      lloc: "Centre de la Imatge i la Tecnologia Multimèdia (UPC)",
      descripcio: "Professional usage of After Effects.",
    },
    {
      data: "2022",
      titol: "Frontend specialization course",
      lloc: "Tecnocampus Mataró (UPF)",
      descripcio:
        "Professional development of frontend applications based in HTML, CSS and Javascript. Usage of React framework.",
    },
  ];
  return (
    <div className="tarjeta sombra education-experience">
      {aboutMeItems.map((a, i) => (
        <AboutMeItem
          key={i}
          data={a.data}
          titol={a.titol}
          lloc={a.lloc}
          descripcio={a.descripcio}
        />
      ))}
    </div>
  );
}
