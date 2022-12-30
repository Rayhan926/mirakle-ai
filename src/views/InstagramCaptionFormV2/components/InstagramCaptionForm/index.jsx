import CircularProgress from "@components/CircularProgress";
import useInstagramCaptionFormV2 from "@hooks/useInstagramCaptionFormV2";
import React from "react";
import SingleOutput from "../SingleOutput";
import Step1 from "../Steps/Step1";

const InstagramCaptionForm = () => {
  const { isGeneratingOutputs, outputs, generateOutpustsHandler } =
    useInstagramCaptionFormV2();
  return (
    <div className="px-5">
      <div className="max-w-[533px] mx-auto mt-14 lg:mt-[50px]">
        <h1 className="text-center font-bold text-dark mb-10">
          Instagram Caption
        </h1>

        <div className="relative">
          <div className="rounded-[5px] rounded-t-none bg-white shadow">
            <div className="px-5 py-6 lg:pt-[50px] pb-6 lg:px-[35px]">
              <Step1 />
            </div>

            {outputs.length > 0 && (
              <div className="mt-9">
                <div
                  className="border-t border-[#F1F1F1] scroll-mt-5"
                  id="outputs"
                >
                  {outputs.map((output, i) => (
                    <SingleOutput key={output.id} {...output} />
                  ))}
                </div>

                <div className="px-[33px] pb-12 mt-10">
                  <button
                    type="submit"
                    className={`__create_blog_form_btn !mt-[23px] relative ${
                      isGeneratingOutputs ? "pointer-events-none" : ""
                    }`}
                    disabled={isGeneratingOutputs}
                    onClick={() => generateOutpustsHandler(false)}
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

export default InstagramCaptionForm;
