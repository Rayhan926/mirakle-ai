import { _titles } from "src/data/titles";

const { createContext, useState, useContext } = require("react");

const InstagramCaptionFormContext = createContext();

export const InstagramCaptionFormProvider = ({ children }) => {
  const [titles, setTitles] = useState(_titles);
  const [activeStep, setActiveStep] = useState(1);
  const [stepsData, _setStepsData] = useState({
    step1: {
      postName: "",
      tone: "",
    },
    step2: {},
  });

  const removeTitle = (id) =>
    setTitles((prev) => prev.filter((t) => t.id !== id));

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
    titles,
    setTitles,
    removeTitle,
  };

  return (
    <InstagramCaptionFormContext.Provider value={value}>
      {children}
    </InstagramCaptionFormContext.Provider>
  );
};

const useInstagramCaptionForm = () => useContext(InstagramCaptionFormContext);

export default useInstagramCaptionForm;
