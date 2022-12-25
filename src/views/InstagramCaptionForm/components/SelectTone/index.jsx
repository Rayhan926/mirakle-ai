import { useFormikContext } from "formik";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SelectTone = () => {
  const { values, setFieldValue } = useFormikContext();

  console.log(values["tone"]);
  return (
    <div>
      <p className="text-[14px] font-bold mb-2 block">Choose a tone</p>

      <div className="relative">
        <select
          value={values["tone"]}
          onChange={(e) => setFieldValue("tone", e.target.value)}
          style={{ boxShadow: "0px 4px 4px rgba(0,0,0,0.04)" }}
          className="__input"
        >
          <option value="">Select Tone</option>
          <option value="Friendly">Friendly</option>
          <option value="Option2">Option2</option>
        </select>

        <div className="absolute top-0 right-0 h-full py-3 pr-3 text-[#BCBCBC] pointer-events-none">
          <div className="h-full border-l border-inherit pl-2">
            <BsChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectTone;
