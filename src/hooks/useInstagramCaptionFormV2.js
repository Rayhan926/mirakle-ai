import { useRouter } from "next/router";
import { instagramOutputs } from "src/data/mock-instagram-outputs";
import { v4 as uuid } from "uuid";

const { createContext, useState, useContext } = require("react");

const InstagramCaptionFormV2Context = createContext();

export const InstagramCaptionFormV2Provider = ({ children }) => {
  const router = useRouter();
  const [outputs, setOutputs] = useState([]);
  const [isGeneratingOutputs, setIsGeneratingOutputs] = useState(false);
  const [stepsData, _setStepsData] = useState({
    step1: {
      postName: "",
      tone: "",
    },
  });

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

  const generateOutpustsHandler = ({ scrollToTop, resetOldData }) => {
    setIsGeneratingOutputs(true);
    if (resetOldData) {
      setOutputs([]);
    }

    setTimeout(() => {
      setOutputs((prev) =>
        resetOldData
          ? instagramOutputs.map((e) => ({ ...e, id: uuid() }))
          : [...prev, ...instagramOutputs.map((e) => ({ ...e, id: uuid() }))],
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
    <InstagramCaptionFormV2Context.Provider value={value}>
      {children}
    </InstagramCaptionFormV2Context.Provider>
  );
};

const useInstagramCaptionFormV2 = () =>
  useContext(InstagramCaptionFormV2Context);

export default useInstagramCaptionFormV2;
