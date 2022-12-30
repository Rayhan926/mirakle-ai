import CircularProgress from "@components/CircularProgress";
import useFreeStyleForm from "@hooks/useFreeStyleForm";
import React from "react";
import SingleOutput from "../SingleOutput";
import Step1 from "../Steps/Step1";

const FreeStyleForm = () => {
  const { isGeneratingOutputs, outputs, generateOutpustsHandler } =
    useFreeStyleForm();
  return (
    <div className="px-5">
      <div className="max-w-[533px] mx-auto mt-14 lg:mt-[50px]">
        <h1 className="text-center font-bold text-dark mb-10">Freestyle</h1>

        <div className="relative">
          <div className="rounded-[5px] bg-white shadow">
            <div className="px-5 py-6 lg:pt-[50px] pb-6 lg:px-[35px]">
              <Step1 />
            </div>

            {outputs.length > 0 && (
              <div className="mt-6 lg:mt-9">
                <div
                  className="border-t border-[#F1F1F1] scroll-mt-5"
                  id="outputs"
                >
                  {outputs.map((output, i) => (
                    <SingleOutput key={output.id} {...output} />
                  ))}
                </div>

                <div className="px-[33px] mt-2 pb-8 lg:pb-12 lg:mt-10">
                  <button
                    type="submit"
                    className={`__create_blog_form_btn !mt-[23px] relative ${
                      isGeneratingOutputs ? "pointer-events-none" : ""
                    }`}
                    disabled={isGeneratingOutputs}
                    onClick={() =>
                      generateOutpustsHandler({
                        scrollToTop: false,
                        resetOldData: false,
                      })
                    }
                  >
                    Generate More
                    {isGeneratingOutputs && (
                      <div className="absolute inset-[-1px] rounded-[5px] flex justify-center items-center py-1.5 bg-[#75707F]">
                        <CircularProgress />
                      </div>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeStyleForm;
