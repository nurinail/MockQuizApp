import React, { useState } from "react";
import dataApi from "../../questions.json";
import Variant from "../../components/Buttons/Variant/Variant";
import { IoIosCloseCircleOutline } from "react-icons/io";
import style from "./quiz.module.scss";

const Quiz = () => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(null);
  const [isOnSubmit, setOnSubmit] = useState(false);
  const [isNextQuestion, setIsNextQuestion] = useState(false);
  const [showValidationError, setShowValidationError] = useState(false);

  const data = dataApi;

  const combinedAnswers = Object.entries(data[currentQuizIndex].answers)
    .filter(([key, value]) => value !== null)
    .map(([key, text]) => {
      const correctKey = `${key}_correct`;
      const isCorrect =
        data[currentQuizIndex].correct_answers[correctKey] === "true";
      return {
        id: data[currentQuizIndex].id,
        key,
        text,
        correct: isCorrect,
      };
    });

    const handleSubmit = () => {
        if (!isNextQuestion) {
          if (selectedVariantIndex !== null) {
            setOnSubmit(true);
            setIsNextQuestion(true);
            setShowValidationError(false); // düzgün seçim edilibsə, error gizlənsin
          } else {
            setShowValidationError(true); // seçim edilməyibsə, error görünsün
          }
        } else {
          setCurrentQuizIndex((prev) => prev + 1);
          setSelectedVariantIndex(null);
          setOnSubmit(false);
          setIsNextQuestion(false);
          setShowValidationError(false); // növbəti sual gələndə error sıfırlansın
        }
      };
      

  return (
    <div className={style.quizComp}>
      <div className={style.quizComp_text}>
        <span className={style.quizComp_text_count}>
          Question {currentQuizIndex + 1} of {data.length}
        </span>
        <h2 className={style.quizComp_text_question}>
          {data[currentQuizIndex]?.question}
        </h2>
        <div className={style.quizComp_text_progress}>
          <div
            className={style.quizComp_text_progress_part}
            style={{
              width: `${((currentQuizIndex + 1) / data.length) * 100}%`,
              transition: "width 0.5s ease-in-out",
            }}
          ></div>
        </div>
      </div>
      <div className={style.quizComp_variants}>
        {combinedAnswers.map((item, index) => (
          <Variant
            key={index}
            index={index}
            variant={item.key.slice(-1).toUpperCase()}
            correct={item.correct}
            text={item.text}
            setSelectedVariantIndex={setSelectedVariantIndex}
            selected={selectedVariantIndex}
            isOnSubmit={isOnSubmit}
          />
        ))}

        <button
          className={style.quizComp_variants_submitBtn}
          onClick={handleSubmit}
        >
          {isNextQuestion ? "Next Question" : "Submit Answer"}
        </button>
        {showValidationError && (
  <div className={style.quizComp_validationError}>
    <IoIosCloseCircleOutline />
    <span>Please select an answer</span>
  </div>
)}
      </div>
    </div>
  );
};

export default Quiz;
