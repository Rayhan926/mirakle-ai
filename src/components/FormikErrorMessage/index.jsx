import { useFormikContext } from "formik";
import React from "react";

const FormikErrorMessage = ({ name }) => {
  const { errors, touched } = useFormikContext();
  const isError = errors[name] && touched[name];

  if (!isError) return null;

  return (
    <p className="text-[12px] mt-0.5 text-red-500 flex items-center gap-1">
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z" />
        <path d="M11 7h2v7h-2zm0 8h2v2h-2z" />
      </svg>

      {errors[name]}
    </p>
  );
};

export default FormikErrorMessage;
