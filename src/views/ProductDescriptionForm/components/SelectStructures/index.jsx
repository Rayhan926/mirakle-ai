import { useFormikContext } from "formik";
import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const options = [
  {
    value: "3 Key Benefits",
    label: "3 Key Benefits",
  },
  {
    value: "3 Pain Points",
    label: "3 Pain Points",
  },
  {
    value: "Why buying?",
    label: "Why buying?",
  },
  {
    value: "Call to action",
    label: "Call to action",
  },
  {
    value: "x5 Samples FAQ",
    label: "x5 Samples FAQ",
  },
  {
    value: "x5 Samples testimonials",
    label: "x5 Samples testimonials",
  },
];

const SelectStructures = () => {
  return (
    <div>
      <p className="text-[14px] font-bold mb-2 block">
        Select 1 or multiple structure bellow{" "}
        <span className="text-[#D9D9D9]">(optional)</span>
      </p>
      <div className="px-[13px] py-4 rounded-[5px] text-[13px] font-inter font-bold text-dark/30 border border-[#DEE2DF] border-dashed mt-2">
        A product description will be added here
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-x-[33px] sm:gap-y-[9px] mt-4">
        {options.map((option, i) => (
          <CheckBox key={i} {...option} />
        ))}
      </div>
    </div>
  );
};

export default SelectStructures;

const CheckBox = ({ label, value }) => {
  const { values, setFieldValue } = useFormikContext();

  const onChangeHandler = (e) => {
    if (e.target.checked) {
      setFieldValue("structures", [...values["structures"], { label, value }]);
    } else {
      setFieldValue("structures", [
        ...values["structures"].filter((e) => e.value !== value),
      ]);
    }
  };
  return (
    <label className="block cursor-pointer">
      {/* sr-only */}
      <input
        onChange={onChangeHandler}
        value={value}
        checked={values["structures"].find((s) => s.value === value)}
        type="checkbox"
        className="__checkbox sr-only"
      />
      <div className="flex items-center gap-3 border border-[#ECECEC] p-3 __checkbox_content">
        <div>
          <MdCheckBoxOutlineBlank
            size={18}
            color="#E1E1E1"
            className="__unchecked"
          />
          <MdCheckBox size={18} className="hidden __checked text-primary" />
        </div>
        <p className="text-xs font-medium">{label}</p>
      </div>
    </label>
  );
};
