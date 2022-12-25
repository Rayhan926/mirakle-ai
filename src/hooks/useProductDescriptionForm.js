import { _titles } from "src/data/titles";

const { createContext, useState, useContext } = require("react");

const ProductDescriptionFormContext = createContext();

export const ProductDescriptionFormProvider = ({ children }) => {
  const [titles, setTitles] = useState(_titles);
  const [activeStep, setActiveStep] = useState(1);
  const [stepsData, _setStepsData] = useState({
    step1: {
      productName: "",
      description: "",
      structures: [],
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
    <ProductDescriptionFormContext.Provider value={value}>
      {children}
    </ProductDescriptionFormContext.Provider>
  );
};

const useProductDescriptionForm = () =>
  useContext(ProductDescriptionFormContext);

export default useProductDescriptionForm;
