import useLoginForm from "@hooks/useLoginForm";
import { Formik } from "formik";
import React from "react";
import RadioButton from "../RadioButton";
import SkipStep from "../SkipStep";

const options = [
  {
    value: "Business owner",
    label: "Business owner",
  },
  {
    value: "Marketer at a company",
    label: "Marketer at a company",
  },
  {
    value: "Marketer - agency - freelance",
    label: "Marketer - agency - freelance",
  },
  {
    value: "Copywriter at a company",
    label: "Copywriter at a company",
  },
  {
    value: "Copywriter - agency or freelance",
    label: "Copywriter - agency or freelance",
  },
  {
    value: "Other employee at a company",
    label: "Other employee at a company",
  },
  {
    value: "Student",
    label: "Student",
  },
  {
    value: "Hobbyist",
    label: "Hobbyist",
  },
];

const Step1 = () => {
  const { getStepData, goToNextStep, setStepData } = useLoginForm();

  return (
    <div>
      <h2 className="__login_title">What best describes your role?</h2>

      <Formik
        onSubmit={(values) => {
          setStepData("step1", values);
          goToNextStep();
        }}
        initialValues={getStepData("step1")}
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
                  name="role"
                />
              ))}
            </div>
            <div className="flex justify-end">
              {" "}
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

export default Step1;
