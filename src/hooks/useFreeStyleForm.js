import { useRouter } from "next/router";
import { freeStyleOutputs } from "src/data/mock-freestyle-outputs";
import { v4 as uuid } from "uuid";

const { createContext, useState, useContext } = require("react");

const FreeStyleFormContext = createContext();

export const FreeStyleFormProvider = ({ children }) => {
  const router = useRouter();
  const [outputs, setOutputs] = useState([]);
  const [isGeneratingOutputs, setIsGeneratingOutputs] = useState(false);
  const [stepsData, _setStepsData] = useState({
    step1: {
      title: "",
      mainPoints: "",
      tone: "",
    },
  });

  const getStepData = (stepName) => stepsData[stepName];

  const setStepData = (stepName, data) => {
    let finalData;
    _setStepsData((prev) => {
      finalData = {
        ...prev,
        [stepName]: { ...prev[stepName], ...data },
      };

      return finalData;
    });

    return finalData;
  };

  const generateOutpustsHandler = ({ scrollToTop, resetOldData }) => {
    setIsGeneratingOutputs(true);
    if (resetOldData) {
      setOutputs([]);
    }

    setTimeout(() => {
      setOutputs((prev) =>
        resetOldData
          ? freeStyleOutputs.map((e) => ({ ...e, id: uuid() }))
          : [...prev, ...freeStyleOutputs.map((e) => ({ ...e, id: uuid() }))],
      );
      setIsGeneratingOutputs(false);
      scrollToTop && router.push("#outputs");
    }, 500);
  };

  const removeOutput = (id) => {
    setOutputs((prev) => prev.filter((o) => o.id !== id));
  };

  const updateOutput = (id, newData) => {
    setOutputs((prev) => {
      return prev.map((o) => {
        if (o.id === id) {
          return {
            ...o,
            ...newData,
          };
        }
        return o;
      });
    });
  };

  const value = {
    stepsData,
    outputs,
    isGeneratingOutputs,
    setIsGeneratingOutputs,
    getStepData,
    setStepData,
    removeOutput,
    updateOutput,
    generateOutpustsHandler,
  };

  return (
    <FreeStyleFormContext.Provider value={value}>
      {children}
    </FreeStyleFormContext.Provider>
  );
};

const useFreeStyleForm = () => useContext(FreeStyleFormContext);

export default useFreeStyleForm;
