import React, { useState } from "react";
import Variant from "../../components/Buttons/Variant/Variant";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import style from "./quiz.module.scss";

const Quiz = ({currentQuizIndex,setCurrentQuizIndex,data,setCorrectAnswerCount}) => {
 
    const navigate = useNavigate();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(null);
  const [isOnSubmit, setOnSubmit] = useState(false);
  const [isNextQuestion, setIsNextQuestion] = useState(false);
  const [showValidationError, setShowValidationError] = useState(false);

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
            const selectedAnswer = combinedAnswers[selectedVariantIndex];
            if (selectedAnswer.correct) {
              setCorrectAnswerCount((prev) => prev + 1);
            }
      
            setOnSubmit(true);
            setIsNextQuestion(true);
            setShowValidationError(false); 
          } else {
            setShowValidationError(true); 
          }
        } else {
          const nextIndex = currentQuizIndex + 1;
      
          if (nextIndex >= data.length) {
            // bütün suallar bitibsə result səhifəsinə get
            navigate("/result");
          } else {
            setCurrentQuizIndex(nextIndex);
            setSelectedVariantIndex(null);
            setOnSubmit(false);
            setIsNextQuestion(false);
            setShowValidationError(false); 
          }
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
