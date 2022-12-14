import FormikInput from "@components/FormikInput";
import { Formik } from "formik";
import useCreateBlog from "hooks/useCreateBlog";
import React from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  blogTitle: Yup.string().required().label("Blog Title/Topic"),
  keywords: Yup.string().required().label("Keywords"),
  tone: Yup.string().required().label("Tone"),
});

const Step1 = () => {
  const { getStepData, setStepData, goToNextStep } = useCreateBlog();
  return (
    <div>
      <h2 className="__create_blog_form_title">
        <strong>Step 1:</strong> Tell us what you want to create
      </h2>
      <p className="__create_blog_form_subtitle">
        The more details you input, the better your generated content will be.
      </p>

      <div className="mt-8">
        <Formik
          initialValues={getStepData("step1")}
          onSubmit={(values) => {
            setStepData("step1", values);
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
              className="space-y-[14px]"
            >
              <FormikInput
                label="Blog Title/Topic"
                name="blogTitle"
                placeholder="Enter your blog Title or Topic Here"
              />

              <FormikInput
                label="Keywords"
                name="keywords"
                placeholder="Write some keywords or phrases relevant to your blog"
              />

              <FormikInput label="Tone" placeholder="Tone" name="tone" />

              <button
                type="submit"
                className="__create_blog_form_btn !mt-[26px]"
              >
                Next: Outline
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Step1;
