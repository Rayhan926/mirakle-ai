import CircularProgress from "@components/CircularProgress";
import React from "react";

const GeneratingSpinner = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1.5 text-dark h-[400px]">
      <CircularProgress size={22} />
      <p className="text-dark text-sm">{text}</p>
    </div>
  );
};

export default GeneratingSpinner;
