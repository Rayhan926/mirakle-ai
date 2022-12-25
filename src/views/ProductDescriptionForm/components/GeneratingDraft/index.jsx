import React, { useEffect, useRef } from "react";

const GeneratingDraft = () => {
  const progressRef = useRef();

  useEffect(() => {
    if (!progressRef.current) return;
    setTimeout(() => {
      progressRef.current.style.width = "100%";
    }, 100);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-dark h-[280px]">
      <div className="w-[245px] rounded-full mx-auto bg-softGray overflow-hidden">
        <div
          ref={progressRef}
          className="h-[9px] duration-[15s] w-[0%] bg-primary"
        ></div>
      </div>
      <p className="text-dark text-sm mt-6">
        Hang tight — We are generating your{" "}
        <strong>Product description!</strong>
      </p>
      <p className="opacity-50 text-[11px] mt-1">
        (this can take up to a few minutes)
      </p>
    </div>
  );
};

export default GeneratingDraft;
