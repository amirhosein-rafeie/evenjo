import { useState } from "react";
import Icon from "@mdi/react";
import { mdiHelpCircleOutline, mdiChevronDown } from "@mdi/js";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question:
        "When Exclusive Private Market for Event ticket salo Opportumities ?",
      answer: `it is a long established fact that a reader containt for a page when lpsum that it has
          a more-or-this is simple less normal it is a long established fact that a
          reader containt of a page when ipsum it has it has a more-or-this is simple less normal`,
    },
    {
      question: "If Easy to found subscription And Tickets purchase?",
      answer: `it is a long established fact that a reader containt for a page when lpsum that it has
          a more-or-this is simple less normal it is a long established fact that a
          reader containt of a page when ipsum it has it has a more-or-this is simple less normal`,
    },
    {
      question: "Why Raiso Your more Event & ticket?",
      answer: `it is a long established fact that a reader containt for a page when lpsum that it has
          a more-or-this is simple less normal it is a long established fact that a
          reader containt of a page when ipsum it has it has a more-or-this is simple less normal`,
    },
    {
      question: "I haven’t received my e-ticket. What should I do",
      answer: `it is a long established fact that a reader containt for a page when lpsum that it has
          a more-or-this is simple less normal it is a long established fact that a
          reader containt of a page when ipsum it has it has a more-or-this is simple less normal`,
    },
    {
      question: "How More Supply and more Event for future ?",
      answer: `it is a long established fact that a reader containt for a page when lpsum that it has
          a more-or-this is simple less normal it is a long established fact that a
          reader containt of a page when ipsum it has it has a more-or-this is simple less normal`,
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pt-10">
      <div className="max-w-[900px] w-[92%] mx-auto text-center mb-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-n100">
          Frequently Asked <span className="text-primaryMain">Questions</span>
        </h1>
        <p className="mt-2 text-sm text-neutral-n200">
          Explore the most common questions and detailed answers about our events<br /> ot concerts, and security to help guide your journey in the EVENJO.
        </p>
      </div>

      <section className="max-w-[900px] w-[92%] mx-auto mb-6">
        <div className="space-y-3">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl border border-neutral-n700 transition-all duration-300 overflow-hidden bg-neutral-n1000 ${activeIndex === index ? "ring-1 ring-tint-bt2" : ""
                }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-right text-neutral-n100 font-medium focus:outline-none"
              >
                <div className="flex items-center gap-2">
                  <Icon path={mdiHelpCircleOutline} size={1} />
                  <span>{item.question}</span>
                </div>
                <span className="inline-flex items-center justify-center rounded-full border border-neutral-n700 bg-neutral-n800/60 p-1">
                  <Icon
                    path={mdiChevronDown}
                    size={0.9}
                    className={`text-neutral-n100 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                  />
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index
                  ? "max-h-40 opacity-100 pb-4 px-6"
                  : "max-h-0 opacity-0 px-6"
                  }`}
              >
                <p className="text-neutral-n200 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
