import React from "react";
import style from "./mode.module.scss";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

const Mode = () => {
  
  return (
    <div>
      <div className={style.modeComp}>
        <CiLight className={style.modeComp_icon} />
        <div className={style.modeComp_btnWrapper}>
          <button className={style.modeComp_btnWrapper_item}></button>
        </div>
        <CiDark className={style.modeComp_icon} />
      </div>
    </div>
  );
};

export default Mode;
