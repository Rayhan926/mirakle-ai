import { Formik } from "formik";
import useFreeStyleForm from "@hooks/useFreeStyleForm";
import React, { useEffect, useId } from "react";
import * as Yup from "yup";
import FormikErrorMessage from "@components/FormikErrorMessage";
import { useField, useFormikContext } from "formik";
import SelectTone from "../../SelectTone";
import PostAboutTooltip from "../../PostAboutTooltip";
import CircularProgress from "@components/CircularProgress";
import TryExamples from "../../TryExamples";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  mainPoints: Yup.string().required().label("Description"),
  tone: Yup.string().required().label("Tone"),
});

const Step1 = () => {
  const {
    getStepData,
    setStepData,
    isGeneratingOutputs,
    generateOutpustsHandler,
  } = useFreeStyleForm();

  console.log({ g: getStepData("step1") });

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={getStepData("step1")}
        onSubmit={(values) => {
          setStepData("step1", values);
          generateOutpustsHandler({ scrollToTop: true, resetOldData: true });
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
            <div className="space-y-6">
              <div>
                <Input
                  name={"title"}
                  placeholder="A Black Friday sales email"
                  label={"What are you looking to create?"}
                />
                <TryExamples />
              </div>
              <Textarea
                name="mainPoints"
                label="What are the main points you want to cover?"
                placeholder="
                [Product details] [Any other details]
                "
              />
              <SelectTone name="tone" />
            </div>

            <button
              type="submit"
              className={`__create_blog_form_btn !mt-[23px] relative ${
                isGeneratingOutputs ? "pointer-events-none" : ""
              }`}
              disabled={isGeneratingOutputs}
            >
              Generate Content
              {isGeneratingOutputs && (
                <div className="absolute inset-[-1px] rounded-[5px] flex justify-center items-center py-1.5 bg-[#75707F]">
                  <CircularProgress />
                </div>
              )}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Step1;

const Textarea = ({ name, label, ...props }) => {
  const [field] = useField(name);
  const { errors, touched } = useFormikContext();
  const id = useId();

  const isError = errors[name] && touched[name];
  return (
    <div>
      <label htmlFor={id} className="text-sm font-bold mb-2 block">
        {label}
      </label>
      <div>
        <textarea
          {...field}
          {...props}
          rows={4}
          id={id}
          style={{ boxShadow: "0px 4px 4px rgba(0,0,0,0.04)" }}
          className={`py-[8.5px] text-[13px] min-h-[98px] resize-none px-[15px] border border-[#DEE2DF] w-full outline-none rounded-[3px] ${
            isError ? "!border-red-500" : ""
          }`}
        ></textarea>
        <FormikErrorMessage name={name} />
      </div>
    </div>
  );
};

const Input = ({ name, label, ...props }) => {
  const [field] = useField(name);
  const { errors, touched } = useFormikContext();
  const id = useId();

  const isError = errors[name] && touched[name];
  return (
    <div>
      <div className="flex justify-between flex-wrap gap-2">
        <label htmlFor={id} className="text-sm font-bold mb-2 block">
          {label}
        </label>
        <PostAboutTooltip />
      </div>
      <div>
        <input
          {...field}
          {...props}
          type="text"
          id={id}
          style={{ boxShadow: "0px 4px 4px rgba(0,0,0,0.04)" }}
          className={`__input ${isError ? "!border-red-500" : ""}`}
        />
        <FormikErrorMessage name={name} />
      </div>
    </div>
  );
};
