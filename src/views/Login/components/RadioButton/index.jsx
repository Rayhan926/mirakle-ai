import { useFormikContext } from "formik";
import React from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

const RadioButton = ({ label, value, name, ...props }) => {
  const { values, setFieldValue } = useFormikContext();

  const onChangeHandler = () => {
    setFieldValue(name, { label, value });
  };
  return (
    <label className="block cursor-pointer">
      <input
        {...props}
        onChange={onChangeHandler}
        value={value}
        checked={values[name].value === value}
        type="radio"
        name={name}
        className="__checkbox sr-only"
      />
      <div className="flex items-center gap-3 border rounded-[3px] border-[rgba(231,231,231,0.1)] bg-[rgba(231,231,231,0.35)] p-3 __checkbox_content">
        <div>
          <IoMdRadioButtonOff
            size={20}
            color="#160C28"
            className="__unchecked"
          />
          <IoMdRadioButtonOn
            size={20}
            className="hidden __checked text-primary"
          />
        </div>
        <p className="text-[13px] font-semibold">{label}</p>
      </div>
    </label>
  );
};

export default RadioButton;
