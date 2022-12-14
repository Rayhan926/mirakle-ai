import { _titles } from "src/data/titles";

const { createContext, useState, useContext } = require("react");

const CreateBlogContext = createContext();

export const CreateBlogProvider = ({ children }) => {
  const [titles, setTitles] = useState(_titles);
  const [activeStep, setActiveStep] = useState(1);
  const [stepsData, _setStepsData] = useState({
    step1: {
      blogTitle: "",
      keywords: "",
      tone: "",
    },
    step2: {
      titleId: "",
    },
    step3: {
      outlines: [
        {
          title: "",
        },
      ],
    },
  });

  const removeTitle = (id) =>
    setTitles((prev) => prev.filter((t) => t.id !== id));

  const totalSteps = Object.keys(stepsData).length;

  const getStepData = (stepName) => stepsData[stepName];

  const setStepData = (stepName, data) => {
    _setStepsData((prev) => ({
      ...prev,
      [stepName]: data,
    }));
  };

  const goToNextStep = () => {
    setActiveStep((prev) => prev + 1);
  };

  const goToPreviousStep = () => {
    setActiveStep((prev) => prev - 1);
  };

  const value = {
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
    <CreateBlogContext.Provider value={value}>
      {children}
    </CreateBlogContext.Provider>
  );
};

const useCreateBlog = () => useContext(CreateBlogContext);

export default useCreateBlog;
