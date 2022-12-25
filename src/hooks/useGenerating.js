import React, { useEffect, useState } from "react";

const useGenerating = (initialVal = true) => {
  const [isGenerating, setIsGenerating] = useState(initialVal);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setIsGenerating(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return { isGenerating };
};

export default useGenerating;
