import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaLaptopCode } from "react-icons/fa"; // For Fullstack developer
import { FaBuilding } from "react-icons/fa"; // For company
import { FaUserGraduate } from "react-icons/fa"; // For Student
import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);

  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          <VerticalTimelineElement
            date={"March 2024 - Present"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<FaLaptopCode />}
          >
            <h3 className="vertical-timeline-element-title" data-aos="fade-right">
              Fullstack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
              Essentials
            </h4>
            <p data-aos="fade-right">
              Currently a fullstack developer that develops both the frontend and backend of web applications
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date={"October 2022 - February 2024"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<FaBuilding />}
          >
            <h3 className="vertical-timeline-element-title" data-aos="fade-right">
              Fullstack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
              Ntech Systems
            </h4>
            <p data-aos="fade-right">
              I was a fullstack developer at Ntech systems where I developed web applications and also tutored some students.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date={"Oct 2021 - April 2022"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<FaBuilding />}
          >
            <h3 className="vertical-timeline-element-title" data-aos="fade-right">
              Frontend Developer Lead
            </h3>
            <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
              Zentrix (Remote)
            </h4>
            <p data-aos="fade-right">
              Worked as a frontend developer lead for a team of 8, where I successfully developed 2 apps with my teammates.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date={"May 2016 - February 2020"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<FaUserGraduate />}
          >
            <h3 className="vertical-timeline-element-title" data-aos="fade-right">
              Student
            </h3>
            <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
              Obafemi Awolowo University
            </h4>
            <p data-aos="fade-right">
              Studied English Language while in school and graduated with a second class (upper division).
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
