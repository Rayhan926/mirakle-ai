import React from "react";

const SkipStep = ({ onClick }) => {
  return (
    <div className="max-w-[455px] mt-[55px] mx-auto flex flex-col items-center">
      <div className="w-full h-px bg-[#E8E8E8]"></div>
      <button
        type="button"
        onClick={onClick && onClick}
        className="font-bold text-[13px] text-[#CACACA] hover:text-dark duration-200 mt-2 underline"
      >
        Skip this question
      </button>
    </div>
  );
};

export default SkipStep;
