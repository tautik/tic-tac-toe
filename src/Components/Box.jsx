import React, { useState } from "react";
import "../Styles/Box.css";
export default function Box(props) {
  let [input, setInput] = useState(" ");
  let condition = {
    row: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ],
    column: [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ],
    diagonal: [
      [0, 4, 8],
      [2, 4, 6],
    ],
  };
  let checkResult = (boxes) => {
    for (let index in condition) {
      condition[index].forEach((x) => {
        console.log(x[0]);
        if (boxes[x[0]] == " " || boxes[x[1]] == " " || boxes[x[2]] == " ") {
          console.log("Not wone yet");
        } else if (boxes[x[0]] == boxes[x[1]] && boxes[x[1]] == boxes[x[2]]) {
          props.setWinner(boxes[x[0]] == "X" ? 1 : 0);
        }
      });
    }
  };
  function register() {
    let boxes = { ...props.status };
    if (boxes[props.num] == " ") {
      if (props.player == 1) {
        setInput("X");
        boxes[props.num] = "X";
        props.setPlayer(2);
      } else {
        setInput("0");
        boxes[props.num] = "O";
        props.setPlayer(1);
      }
    } else {
      alert("Again clicking wont work buddy");
    }
    props.setStatus(boxes);
    console.log(boxes);
    checkResult(boxes);
  }
  function donone() {
    console.log(":asd");
  }
  return <td onClick={register}>{props.status[props.num]}</td>;
}
