import React from "react";
import { useNavigate } from "react-router-dom";
import { accessibiltyIcon } from "../../assets/icons/Icon";
import style from "./result.module.scss";

const Result = ({ correctAnswerCount, totalQuestion }) => {
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    navigate("/");
  };
  return (
    <div className={style.resultComp}>
      <div className={style.resultComp_text}>
        <span className={style.resultComp_text_complete}>Quiz completed</span>
        <h2 className={style.resultComp_text_score}>You scored...</h2>
      </div>
      <div className={style.resultComp_info}>
        <div className={style.resultComp_info_top}>
          <div className={style.resultComp_info_top_subject}>
            <img
              className={style.resultComp_info_top_subject_icon}
              src={accessibiltyIcon}
              alt="accessibility"
            />
            <h2 className={style.resultComp_info_top_subject_name}>
              Accessibility
            </h2>
          </div>
          <h2 className={style.resultComp_info_top_scoreCount}>
            {correctAnswerCount}
          </h2>
          <p className={style.resultComp_info_top_totalyCount}>
            out of {totalQuestion}
          </p>
        </div>
        <button
          className={style.resultComp_info_againBtn}
          onClick={handlePlayAgain}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Result;
