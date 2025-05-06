import React from "react";
import style from "./subject.module.scss";

const Subject = ({icon,text}) => {
  return <div className={style.subjectComp}>
    <img className={style.subjectComp_icon} src={icon} alt={text} />
    <h2 className={style.subjectComp_text}>{text}</h2>
  </div>;
};

export default Subject;
