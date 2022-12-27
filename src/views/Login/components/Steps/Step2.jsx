import useLoginForm from "@hooks/useLoginForm";
import { Formik } from "formik";
import React from "react";
import RadioButton from "../RadioButton";
import SkipStep from "../SkipStep";

const options = [
  {
    value: "Paid Ads",
    label: "Paid Ads",
  },
  {
    value: "Social media content",
    label: "Social media content",
  },
  {
    value: "Website copy",
    label: "Website copy",
  },
  {
    value: "Email",
    label: "Email",
  },
  {
    value: "Video",
    label: "Video",
  },
  {
    value: "Blog",
    label: "Blog",
  },
  {
    value: "Case Study or Testimonial",
    label: "Case Study or Testimonial",
  },
  {
    value: "Other",
    label: "Other",
  },
];

const Step2 = () => {
  const { getStepData, goToNextStep, setStepData } = useLoginForm();

  return (
    <div>
      <h2 className="__login_title">What do you need to make?</h2>

      <Formik
        onSubmit={(values) => {
          setStepData("step2", values);
          goToNextStep();
        }}
        initialValues={getStepData("step2")}
      >
        {({ handleSubmit }) => (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="__login_grid">
              {options.map((opt, i) => (
                <RadioButton
                  key={i}
                  label={opt.label}
                  value={opt.value}
                  name="needToMake"
                />
              ))}
            </div>
            <div className="flex justify-end">
              <button type="submit" className="__login_btn">
                Next
              </button>
            </div>
          </form>
        )}
      </Formik>

      <SkipStep onClick={goToNextStep} />
    </div>
  );
};

export default Step2;
