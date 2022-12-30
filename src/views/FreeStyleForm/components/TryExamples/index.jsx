import useFreeStyleForm from "@hooks/useFreeStyleForm";
import React from "react";

const examples = [
  {
    label: (
      <>
        <strong>A love letter </strong> to...
      </>
    ),
    title: "Write a love letter to my puppy",
    mainPoints:
      "My puppy Charly has beautiful eyes. His tail is always wagging. I just love him more than life.",
  },
  {
    label: (
      <>
        <strong>A sales email </strong> for...
      </>
    ),
    title: "A sales email for Black Friday",
    mainPoints:
      "We are selling puppy toys and treats from our company PuppyTreats we are offering a 25 discount across the entire website with code BF25",
  },
  {
    label: (
      <>
        <strong>A LinkedIn post </strong> about...
      </>
    ),
    title: "A LinkedIn post about the war for talent",
    mainPoints:
      "The war for talent is something I have been very interested in. Write about the importance of retention strategies and link it back to my own experience as a HR manager.",
  },
  {
    label: (
      <>
        <strong>A short story </strong> about...
      </>
    ),
    title: "A short story about a girl who always wanted a puppy",
    mainPoints:
      "A little girl always wanted a puppy for her birthday but her parents didn't earn enough to support a puppy. One day everything changed",
  },
];

const TryExamples = () => {
  const { setStepData } = useFreeStyleForm();
  return (
    <div className="mt-[7px]">
      <p className="text-xs text-[#999999]">Try some examples:</p>

      <div className="flex gap-[7px] flex-wrap mt-1.5">
        {examples.map((e, i) => (
          <button
            onClick={() => {
              setStepData("step1", {
                title: e.title,
                mainPoints: e.mainPoints,
              });
            }}
            type="button"
            className="text-[10px] px-1.5 py-1 border border-[#DEE0E3] rounded-[3px] bg-[rgba(137,132,222,0.14)] hover:bg-[rgba(137,132,222,0.2)]"
            key={i}
          >
            {e.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TryExamples;
