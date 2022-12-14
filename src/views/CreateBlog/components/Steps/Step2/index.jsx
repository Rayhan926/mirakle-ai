import React from "react";
import OutlineTipsTooltip from "../../OutlineTipsTooltip";
import BlogTitles from "../../BlogTitles";
import { Formik } from "formik";
import useCreateBlog from "@hooks/useCreateBlog";

import * as Yup from "yup";
import GoToPreviousStep from "../../GoToPreviousStep";
import GeneratingSpinner from "../../GeneratingSpinner";
import useGenerating from "@hooks/useGenerating";

const validationSchema = Yup.object().shape({
  titleId: Yup.string().required("Please select a title"),
});

const Step2 = () => {
  const { getStepData, setStepData, goToNextStep, titles } = useCreateBlog();
  const step2Data = getStepData("step2");

  const { isGenerating } = useGenerating(step2Data.titleId ? false : true);

  return (
    <div>
      <GoToPreviousStep />
      <Formik
        initialValues={step2Data}
        onSubmit={(values, actions) => {
          if (!titles.find((t) => t?.id === values?.titleId)?.title) {
            return actions.setFieldError("titleId", "Please select a title");
          }

          setStepData("step2", values);
          goToNextStep();
        }}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div>
              <h2 className="__create_blog_form_title">
                <strong>Step 2:</strong> Select a title
              </h2>

              <p className="__create_blog_form_subtitle">
                Select from our generated list of titles or write your own.
              </p>
            </div>
            {isGenerating ? (
              <GeneratingSpinner text="Sit tight — we're generating some titles!" />
            ) : (
              <>
                <BlogTitles />

                <button
                  type="submit"
                  className="__create_blog_form_btn !mt-7 lg:!mt-[38px]"
                >
                  Write Draft
                </button>
              </>
            )}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Step2;
