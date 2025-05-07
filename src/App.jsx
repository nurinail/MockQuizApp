import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Mode from "./components/Mode/Mode";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Result from "./pages/Result/Result";
import dataApi from "./questions.json";
import "./App.css";

function App() {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

  const data = dataApi;
  const totalQuestion = data.length;

  return (
    <div className="app">
      <Mode />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/quiz"
          element={
            <Quiz
              currentQuizIndex={currentQuizIndex}
              setCurrentQuizIndex={setCurrentQuizIndex}
              correctAnswerCount={correctAnswerCount}
              setCorrectAnswerCount={setCorrectAnswerCount}
              data={data}
            />
          }
        />
        <Route
          path="/result"
          element={
            <Result
              correctAnswerCount={correctAnswerCount}
              totalQuestion={totalQuestion}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
