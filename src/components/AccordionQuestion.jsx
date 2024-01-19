import { useState } from "react";
import plus from "../assets/img/icon-plus.svg";
import minus from "../assets/img/icon-minus.svg";
import questions from "../questions";

const AccordionQuestion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      {questions.map((question, index) => (
        <article
          key={question.id}
          className="cursor-pointer w-full border-b-[1px] py-4"
        >
          <div
            className="flex items-center justify-between gap-1"
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="text-darkPurple hover:text-hover text-lg font-semibold">
              {question.question}
            </h2>
            <img
              src={openIndex === index ? minus : plus}
              alt={openIndex === index ? "minus" : "plus"}
            />
          </div>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index
                ? "grid-rows-[1fr] opacity-100 "
                : "grid-rows-[0fr] opacity-0"
            }`}
            style={{ marginTop: openIndex === index ? "1rem" : "0" }}
          >
            <p className="overflow-hidden font-normal text-base text-slate-500">{question.answer}</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default AccordionQuestion;
