import FormikErrorMessage from "@components/FormikErrorMessage";
import { useField, useFormikContext } from "formik";
import React, { useId } from "react";

const FormikInput = ({ name, label, ...props }) => {
  const [field] = useField(name);
  const { errors, touched } = useFormikContext();
  const id = useId();

  const isError = errors[name] && touched[name];
  return (
    <div className="grid grid-cols-[100px,auto]">
      <label
        className="font-bold text-xs flex items-center max-h-[38px]"
        htmlFor={id}
      >
        {label}
      </label>
      <div>
        <input
          {...field}
          {...props}
          type="text"
          id={id}
          className={`__create_blog_form_input ${
            isError ? "!border-red-500" : ""
          }`}
        />
        <FormikErrorMessage name={name} />
      </div>
    </div>
  );
};

export default FormikInput;
