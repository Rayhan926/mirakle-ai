import { Formik } from "formik";
import useInstagramCaptionForm from "@hooks/useInstagramCaptionForm";
import React, { useId } from "react";
import * as Yup from "yup";
import FormikErrorMessage from "@components/FormikErrorMessage";
import { useField, useFormikContext } from "formik";
import SelectTone from "../../SelectTone";
import PostAboutTooltip from "../../PostAboutTooltip";

const validationSchema = Yup.object().shape({
  postName: Yup.string().required().label("Description"),
});

const Step1 = () => {
  const { getStepData, setStepData, goToNextStep } = useInstagramCaptionForm();
  return (
    <div>
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
            <div className="space-y-6">
              <Textarea
                name="postName"
                label="What is your post about?"
                placeholder="Summer is coming, a new puppy toys is available on our website
                with a 20% promo"
              />
              <SelectTone />
            </div>

            <button type="submit" className="__create_blog_form_btn !mt-[50px]">
              Generate Content
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
      <div className="flex justify-between flex-wrap gap-2">
        <label htmlFor={id} className="text-sm font-bold mb-2 block">
          {label}
        </label>

        <PostAboutTooltip />
      </div>
      <div>
        <textarea
          {...field}
          {...props}
          rows={4}
          id={id}
          style={{ boxShadow: "0px 4px 4px rgba(0,0,0,0.04)" }}
          className={`py-[8.5px] text-[13px] resize-none px-[15px] border border-[#DEE2DF] w-full outline-none rounded-[3px] ${
            isError ? "!border-red-500" : ""
          }`}
        ></textarea>
        <FormikErrorMessage name={name} />
      </div>
    </div>
  );
};
