import { _titles } from "src/data/titles";

const { createContext, useState, useContext } = require("react");

const LoginFormContext = createContext();

export const LoginFormProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [stepsData, _setStepsData] = useState({
    step1: {
      role: "",
    },
    step2: {
      needToMake: "",
    },
    step3: {
      howDidYouHear: "",
    },
  });

  const totalSteps = Object.keys(stepsData).length;

  const getStepData = (stepName) => stepsData[stepName];

  const setStepData = (stepName, data) => {
    let finalData;
    _setStepsData((prev) => {
      finalData = {
        ...prev,
        [stepName]: data,
      };

      return finalData;
    });

    return finalData;
  };

  const goToNextStep = () => {
    setActiveStep((prev) => prev + 1);
  };

  const goToPreviousStep = () => {
    setActiveStep((prev) => prev - 1);
  };

  const value = {
    stepsData,
    activeStep,
    totalSteps,
    getStepData,
    setStepData,
    goToNextStep,
    goToPreviousStep,
  };

  return (
    <LoginFormContext.Provider value={value}>
      {children}
    </LoginFormContext.Provider>
  );
};

const useLoginForm = () => useContext(LoginFormContext);

export default useLoginForm;
