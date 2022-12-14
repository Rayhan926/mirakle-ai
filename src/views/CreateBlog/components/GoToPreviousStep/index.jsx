import useCreateBlog from "@hooks/useCreateBlog";
import React from "react";
import { BsChevronLeft } from "react-icons/bs";

const GoToPreviousStep = () => {
  const { goToPreviousStep } = useCreateBlog();
  return (
    <button
      type="button"
      style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.06)" }}
      onClick={goToPreviousStep}
      className="absolute w-9 h-9 lg:w-[60px] lg:h-[60px] top-[-44px] lg:top-1/2 lg:-translate-y-1/2 rounded-full left-0 lg:left-auto lg:right-[calc(100%+100px)] bg-white flex items-center justify-center"
    >
      <BsChevronLeft size={23} className="scale-[0.65] lg:scale-100" />
    </button>
  );
};

export default GoToPreviousStep;
