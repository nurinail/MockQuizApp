import React from "react";
import Subject from "../../components/Buttons/Subject/Subject";
import {
  htmlIcon,
  cssIcon,
  javaScriptIcon,
  accessibiltyIcon,
} from "../../assets/icons/Icon";
import style from "./home.module.scss";
import { Link } from "react-router-dom";

const Home = ({ setSelectedSubjectIcon }) => {
  return (
    <div className={style.homeComp}>
      <div className={style.homeComp_intro}>
        <span className={style.homeComp_intro_welcome}>Welcome to the</span>
        <span className={style.homeComp_intro_name}>Frontend Quiz</span>
        <p className={style.homeComp_intro_started}>
          Pick a subject to get started.
        </p>
      </div>
      <div className={style.homeComp_subjects}>
        <Link className={style.homeComp_subjects_link}
          onClick={() =>
            setSelectedSubjectIcon({ icon: htmlIcon, text: "HTML" })
          }
          to="/quiz"
        >
          <Subject icon={htmlIcon} text={"HTML"} />
        </Link>
        <Link className={style.homeComp_subjects_link}
          onClick={() => setSelectedSubjectIcon({ icon: cssIcon, text: "CSS" })}
          to="/quiz"
        >
          <Subject icon={cssIcon} text={"CSS"} />
        </Link>
        <Link className={style.homeComp_subjects_link}
          onClick={() =>
            setSelectedSubjectIcon({ icon: javaScriptIcon, text: "JavaScript" })
          }
          to="/quiz"
        >
          <Subject icon={javaScriptIcon} text={"JavaScript"} />
        </Link>
        <Link className={style.homeComp_subjects_link}
          onClick={() =>
            setSelectedSubjectIcon({
              icon: accessibiltyIcon,
              text: "Accessibility",
            })
          } 
          to="/quiz">
          <Subject icon={accessibiltyIcon} text={"Accessibility"} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
