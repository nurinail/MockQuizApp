import Mode from "./components/Mode/Mode";
import Home from "./pages/Home/Home.jsx";
import useAxiosApi from "./hooks/useAxiosApi.js";
import "./App.css";
import Quiz from "./pages/Quiz/Quiz.jsx";

function App() {
  return (
    <div className="app">
      {/* <Mode /> */}
      {/* <Home/> */}
      <Quiz/>

    </div>
  );
}

export default App;
