import AboutMeItem from "./AboutMeItem";

export default function AboutMe() {
  const educacionItems = [
    {
      data: "January to April 2022",
      titol: "Frontend specialization course",
      lloc: "Tecnocampus Mataró (UPF)",
      descripcio: (
        <p>
          Professional development of frontend applications based in HTML, CSS
          and Javascript. Usage of React framework.
        </p>
      ),
    },
    {
      data: "2010-2014",
      titol: "Multimedia Degree",
      lloc: "Centre de la Imatge i la Tecnologia Multimèdia (UPC)",
      descripcio: (
        <p>
          Specialization in digital contents and UX/UI. Implementation of
          websites, apps and interactive virtual environments.
        </p>
      ),
    },
    {
      data: "2014",
      titol: "Advanced Video Postproduction",
      lloc: "Centre de la Imatge i la Tecnologia Multimèdia (UPC)",
      descripcio: <p>Professional usage of After Effects.</p>,
    },
  ];
  const experienceItems = [
    {
      data: "September 2021",
      titol: "Databases Teacher",
      lloc: "Escola Pia Nostra Senyora",
      descripcio: (
        <p>
          CFGS Multiplatform Apps Development. Teaching Relational Databases
          design and SQL queries, including MySQL and PostgreSQL. And
          programming Databases with Pg/PlSQL.
        </p>
      ),
    },
    {
      data: "Sept. 2015 to June 2021",
      titol: "Software Developer",
      lloc: "Walk3D",
      descripcio: (
        <ul>
          <li>
            Designs and creates software solutions for engineering and marketing
            fields.
          </li>
          <li>App development based on the Unity Engine and its C# API.</li>
          <li>Important clients like Alstom and CAF</li>
        </ul>
      ),
    },
    {
      data: "Jan. to June 2014",
      titol: "Junior web developer",
      lloc: "LaGenciaWeb",
      descripcio: (
        <>
          <p>
            Developed and implemented web solutions based on{" "}
            <b>Wordpress and Joomla</b>.
          </p>
          <p>Performance and SEO optimization. Agile Methodology</p>
        </>
      ),
    },
  ];
  return (
    <>
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
      <div className="separacio"></div>
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
    </>
  );
}
