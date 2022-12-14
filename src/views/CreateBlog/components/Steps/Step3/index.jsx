import React from "react";
import RefreshIcon from "@components/Icons/RefreshIcon";
import OutlineTipsTooltip from "../../OutlineTipsTooltip";
import BlogOutlines from "../../BlogOutlines";
import GoToPreviousStep from "../../GoToPreviousStep";
import useGenerating from "@hooks/useGenerating";
import GeneratingSpinner from "../../GeneratingSpinner";
import GeneratingDraft from "../../GeneratingDraft";
import { Formik } from "formik";

const Step3 = () => {
  const { isGenerating } = useGenerating();
  return (
    <div>
      <GoToPreviousStep />
      <div>
        <div className="flex justify-between gap-3">
          <h2 className="__create_blog_form_title">
            <strong>Step 3:</strong> Review your outline
          </h2>
          <OutlineTipsTooltip />
        </div>
        <p className="__create_blog_form_subtitle">
          Customize the headings below to create the perfect outline.
        </p>
      </div>

      {isGenerating ? (
        <GeneratingSpinner text="Sit tight — we're generating some outline!" />
      ) : (
        <>
          <Formik
            initialValues={{}}
            onSubmit={(val, actions) => {
              setTimeout(() => {
                actions.setSubmitting(false);
              }, 15.2 * 1000);
            }}
          >
            {({ handleSubmit, isSubmitting }) => (
              <>
                {isSubmitting ? (
                  <GeneratingDraft />
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                  >
                    {/* Outline Intro --Start-- */}
                    <div className="px-[14px] py-4 rounded-[5px] text-[13px] font-inter font-bold text-dark/30 border border-[#DEE2DF] border-dashed mt-5">
                      A Blog Intro will be added here
                    </div>
                    {/* Outline Intro --End-- */}

                    <BlogOutlines />

                    <div className="mt-2 flex justify-between items-center pl-[35px] flex-wrap gap-4">
                      <button
                        type="button"
                        className="underline hover:no-underline text-[#6861FF] text-[13px] font-medium font-inter "
                      >
                        + Generate a new outline
                      </button>

                      <button
                        type="button"
                        className="__create_blog_form_btn flex items-center bg-white text-dark w-auto font-inter font-medium text-[13px] px-4 py-[7px] gap-2 hover:bg-dark hover:text-white"
                      >
                        <RefreshIcon /> Regenerate all
                      </button>
                    </div>

                    {/* Outline Conclusion --Start-- */}
                    <div className="px-[14px] py-4 rounded-[5px] text-[13px] font-inter font-bold text-dark/30 border border-[#DEE2DF] border-dashed mt-4">
                      A Blog Conclusion will be added here
                    </div>
                    {/* Outline Conclusion --End-- */}

                    <button
                      type="submit"
                      className="__create_blog_form_btn !mt-7 lg:!mt-[38px]"
                    >
                      Write Draft
                    </button>
                  </form>
                )}
              </>
            )}
          </Formik>
        </>
      )}
    </div>
  );
};

export default Step3;
