import React from "react";
import Subject from "../../components/Buttons/Subject/Subject";
import {
  htmlIcon,
  cssIcon,
  javaScriptIcon,
  accessibiltyIcon,
} from "../../assets/icons/Icon";
import style from "./home.module.scss";
import { Link } from "react-router-dom"; // DÜZGÜN import

const Home = () => {
  return (
    <div className={style.homeComp}>
      <div className={style.homeComp_intro}>
        <span className={style.homeComp_intro_welcome}>Welcome to the</span>
        <span className={style.homeComp_intro_name}>Frontend Quiz</span>
        <p className={style.homeComp_intro_started}>Pick a subject to get started.</p>
      </div>
      <div className={style.homeComp_subjects}>
        <Link style={{ width: "100%" }} to="/quiz">
          <Subject icon={htmlIcon} text={"HTML"} />
        </Link>
        <Subject icon={cssIcon} text={"CSS"} />
        <Subject icon={javaScriptIcon} text={"JavaScript"} />
        <Subject icon={accessibiltyIcon} text={"Accessibility"} />
      </div>
    </div>
  );
};

export default Home;
