import { Formik } from "formik";
import useProductDescriptionForm from "@hooks/useProductDescriptionForm";
import React, { useId } from "react";
import * as Yup from "yup";
import FormikErrorMessage from "@components/FormikErrorMessage";
import { useField, useFormikContext } from "formik";
import DescribeProductTooltip from "../../DescribeProductTooltip";
import SelectStructures from "../../SelectStructures";
import SelectTone from "../../SelectTone";

const validationSchema = Yup.object().shape({
  description: Yup.string().required().label("Description"),
});

const Step1 = () => {
  const { getStepData, setStepData, goToNextStep } =
    useProductDescriptionForm();
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
              <Input
                label={
                  <>
                    What is your product or brand called?{" "}
                    <span className="text-[#D9D9D9]">(Optional)</span>
                  </>
                }
                id="productName"
                type="text"
                placeholder="Gymshark"
                name={"productName"}
              />

              <Textarea
                name="description"
                label="Describe your product"
                placeholder="Sports bra, comfortable, supportive, V-neckline, lightweight fabric, breathable design."
              />

              <SelectStructures />
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

const Input = ({ name, label, ...props }) => {
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

        <DescribeProductTooltip />
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
