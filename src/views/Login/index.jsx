import useLoginForm from "@hooks/useLoginForm";
import React from "react";
import Step1 from "./components/Steps/Step1";
import Step2 from "./components/Steps/Step2";
import Step3 from "./components/Steps/Step3";

const Login = () => {
  const { activeStep } = useLoginForm();

  return (
    <>
      <div className="py-14 md:py-20 lg:py-[110px] px-5">
        <h1 className="text-center text-dark text-xl md:text-[24px] md:leading-[29px] font-montserrat font-semibold">
          Welcome to Mirakle!
        </h1>
        <p className="max-w-[470px] mx-auto text-center text-sm md:text-[20px] md:leading-[24px] mt-6 font-semibold font-montserrat text-[#999999]">
          Help us customize your experience by telling us a bit about yourself
          and your goals.
        </p>

        <div className="max-w-[770px] mx-auto mt-16 md:mt-[90px]">
          {activeStep === 1 && <Step1 />}
          {activeStep === 2 && <Step2 />}
          {activeStep === 3 && <Step3 />}
        </div>
      </div>
    </>
  );
};

export default Login;
