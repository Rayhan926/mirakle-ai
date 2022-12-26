import useLoginForm from "@hooks/useLoginForm";
import { Formik } from "formik";
import React from "react";
import RadioButton from "../RadioButton";
import SkipStep from "../SkipStep";

const options = [
  {
    value: "Google Article",
    label: "Google Article",
  },
  {
    value: "Facebook",
    label: "Facebook",
  },
  {
    value: "Google",
    label: "Google",
  },
  {
    value: "Linkedin",
    label: "Linkedin",
  },
  {
    value: "Twitter",
    label: "Twitter",
  },
  {
    value: "Tiktok",
    label: "Tiktok",
  },
  {
    value: "A friend or colleague",
    label: "A friend or colleague",
  },
  {
    value: "Other",
    label: "Other",
  },
];

const Step3 = () => {
  const { getStepData, setStepData, goToPreviousStep } = useLoginForm();

  return (
    <div>
      <h2 className="__login_title">How did you hear about us?</h2>

      <Formik
        onSubmit={(values) => {
          const finalData = setStepData("step3", values);

          // Do whatever on final submit
          alert(`
          Form submitted \n

          ${JSON.stringify(finalData)}
          `);
          console.log({ finalData }); // Full form data
        }}
        initialValues={getStepData("step3")}
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
                  name="howDidYouHear"
                />
              ))}
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="__login_btn"
                onClick={goToPreviousStep}
              >
                Go Back
              </button>
              <button type="submit" className="__login_btn">
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>

      <SkipStep onClick={() => alert("Form Submitted on Skip")} />
    </div>
  );
};

export default Step3;
