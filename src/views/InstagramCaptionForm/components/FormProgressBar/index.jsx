import useInstagramCaptionForm from "@hooks/useInstagramCaptionForm";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

const FormProgressBar = () => {
  const { activeStep, totalSteps } = useInstagramCaptionForm();

  const progressPercentage = (activeStep / totalSteps) * 100;
  return (
    <div>
      <div className="flex justify-center gap-5 items-center mb-5 lg:px-2 [&>svg]:opacity-25">
        <StepName
          isActive={activeStep >= 1}
          stepNumber={1}
          name={"Add details"}
        />
        <HiOutlineArrowRight size={14} />
        <StepName
          isActive={activeStep >= 2}
          stepNumber={2}
          name={"Generate content"}
        />
      </div>
      <div className="h-3 w-full bg-softGray rounded-t-lg overflow-hidden">
        <div
          className="h-full bg-[#8984DE] duration-200"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default FormProgressBar;

const StepName = ({ name, stepNumber, isActive }) => {
  return (
    <div
      className={`flex items-center gap-2 font-montserrat font-bold text-xs lg:text-sm duration-200 ${
        isActive ? "opacity-100" : "opacity-50"
      }`}
    >
      <div className="w-5 h-5 lg:w-[23px] lg:h-[23px] shrink-0 bg-primary rounded-full flex items-center justify-center text-white">
        {stepNumber}
      </div>
      <p>{name}</p>
    </div>
  );
};
