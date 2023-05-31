/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { LanguageContext } from "../context";

export const useTextChange = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150 - Math.random() * 25);
  const [index, setIndex] = useState(1);
  const deletingPeriod = Math.random() * 150 + 1;
  const typingPeriod = Math.random() * 150 + 50;
  let toRotate = ["a Web Developer", "and Front-End Developer"];
  let toRotateEs = ["un Desarrollador Web", "y Desarrollador Front-End"];
  const period = 2000;
  const { language } = useContext(LanguageContext);

  const tick = () => {
    if (language === "es") {
      let i = loopNum % toRotateEs.length;
      let fullText = toRotateEs[i];
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
    } else {
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
    }
  };

  return {
    tick,
    text,
    delta,
  };
};
