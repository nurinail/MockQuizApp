import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { CiLight, CiDark } from "react-icons/ci";
import style from "./mode.module.scss";

const Mode = ({ selectedSubjectIcon }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        {selectedSubjectIcon && (
          <div className={style.wrapper_subject}>
            <img
              className={style.wrapper_subject_icon}
              src={selectedSubjectIcon.icon}
              alt="Selected Subject"
            />
            <h2 className={style.wrapper_subject_name}>
              {selectedSubjectIcon.text}
            </h2>
          </div>
        )}
      </div>

      <div className={style.modeComp}>
        <CiLight className={style.modeComp_icon} />
        <button
          onClick={() => setIsDarkMode((prev) => !prev)}
          className={style.modeComp_btnWrapper}
        >
          <div
            className={classNames(
              isDarkMode
                ? style.modeComp_btnWrapper_item
                : style.modeComp_btnWrapper_itemActive
            )}
          ></div>
        </button>
        <CiDark className={style.modeComp_icon} />
      </div>
    </div>
  );
};

export default Mode;
