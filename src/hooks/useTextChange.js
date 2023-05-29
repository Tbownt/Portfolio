/* eslint-disable no-unused-vars */
import { useState } from "react";

export const useTextChange = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150 - Math.random() * 25);
  const [index, setIndex] = useState(1);
  const deletingPeriod = Math.random() * 150 + 100;
  const typingPeriod = Math.random() * 150 + 100;
  const toRotate = ["a Web Developer", "and Front-End Developer"];
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText;

    if (isDeleting) {
      updatedText = fullText.substring(0, text.length - 1);
    } else {
      updatedText = fullText.substring(0, text.length + 1);
    }

    setText(updatedText);

    if (isDeleting) {
      setDelta(deletingPeriod);
    } else {
      setDelta(typingPeriod);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(25);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return {
    tick,
    text,
    delta,
  };
};
