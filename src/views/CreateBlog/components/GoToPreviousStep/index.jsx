import useCreateBlog from "hooks/useCreateBlog";
import React from "react";
import { BsChevronLeft } from "react-icons/bs";

const GoToPreviousStep = () => {
  const { goToPreviousStep } = useCreateBlog();
  return (
    <button
      type="button"
      onClick={goToPreviousStep}
      className="absolute w-[60px] h-[60px] top-1/2 -translate-y-1/2 rounded-full right-[calc(100%+100px)] bg-white shadow-[0px_4px_4px_rgba(0_0_0_0.06)] flex items-center justify-center"
    >
      <BsChevronLeft size={23} />
    </button>
  );
};

export default GoToPreviousStep;
