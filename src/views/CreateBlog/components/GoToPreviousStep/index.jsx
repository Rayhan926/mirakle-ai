import useCreateBlog from "@hooks/useCreateBlog";
import React from "react";
import { BsChevronLeft } from "react-icons/bs";

const GoToPreviousStep = () => {
  const { goToPreviousStep } = useCreateBlog();
  return (
    <button
      type="button"
      onClick={goToPreviousStep}
      className="absolute w-9 h-9 shadow lg:w-[60px] lg:h-[60px] top-1/2 -translate-y-1/2 rounded-full right-full translate-x-1/2 lg:translate-x-0 lg:right-[calc(100%+100px)] bg-white flex items-center justify-center"
    >
      <BsChevronLeft size={23} className="scale-[0.65] lg:scale-100" />
    </button>
  );
};

export default GoToPreviousStep;
