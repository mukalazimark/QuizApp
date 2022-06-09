import React, { useState } from "react";
import questions from "./questions";

function Quiz() {
  const [task, setTask] = useState("Hello! Test your knowledge");
  let [count, setCount] = useState(0);
  const [mark, setMark] = useState(0);
  const [answer, setAnswer] = useState("");
  const currentQuestion = questions[count];
  // Removing the start task button
  const customStyle = {
    display: count > 0 && "none",
  };
  // getting the input text
  function changed(e) {
    const inputText = e.target.value.toLowerCase();
    setAnswer(inputText);
    // console.log(answer);
  }
  // changing the color of the marks
  const markStyle = { color: mark <= 15 ? "red" : "green" };
  function nextBtn(e) {
    e.preventDefault();
    setAnswer("");
    setCount(count + 1);
    setTask(currentQuestion.qn);
    // getting the index of the previous question
    const prevNum = questions.indexOf(currentQuestion, 0) - 1;
    // getting the previous question
    const prevQn = questions[prevNum];
    answer === prevQn.ans && setMark(mark + 5);
  }
  // taking away the input block & next button after the questions are done
  const endStyle = { display: count >= questions.length && "none" };
  // starting the task
  function startBtn(e) {
    e.preventDefault();
    setTask(currentQuestion.qn);
  }
  return (
    <center>
      <button style={customStyle} onClick={startBtn}>
        Start Task
      </button>
      <p>{task}</p>
      <br />
      <input
        type="text"
        onChange={changed}
        placeholder="enter answer"
        value={answer}
        style={endStyle}
      />
      <br />
      <br />
      <button onClick={nextBtn} style={endStyle}>
        next
      </button>
      <p style={markStyle}>Marks: {mark}</p>
    </center>
  );
}

export default Quiz;
