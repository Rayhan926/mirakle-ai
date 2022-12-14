import React, { useEffect, useState } from "react";

const useGenerating = () => {
  const [isGenerating, setIsGenerating] = useState(true);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setIsGenerating(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return { isGenerating };
};

export default useGenerating;
