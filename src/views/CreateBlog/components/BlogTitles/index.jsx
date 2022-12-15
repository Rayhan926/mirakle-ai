import { IoMdClose } from "react-icons/io";
import React, { useEffect, useState } from "react";
import useCreateBlog from "@hooks/useCreateBlog";
import RefreshIcon from "@components/Icons/RefreshIcon";
import { useFormikContext } from "formik";
import FormikErrorMessage from "@components/FormikErrorMessage";
import { v4 as uuid } from "uuid";

const BlogTitles = () => {
  const { values, setFieldValue } = useFormikContext();
  const { titles, removeTitle, setTitles } = useCreateBlog();

  const onChangeHandler = (id, val) => {
    setTitles((prev) => {
      return prev.map((title) => {
        if (title.id === id) {
          return {
            ...title,
            title: val,
          };
        }
        return title;
      });
    });
  };

  // console.log({ titles });

  return (
    <>
      <div className="space-y-[13px] mt-[18px]">
        {titles.map(({ id, title }, i) => (
          <div className="flex items-center gap-2" key={i}>
            <div className="relative grow">
              <label className="absolute cursor-pointer top-0 left-0 h-full aspect-square rounded-[5px] flex items-center justify-center">
                <input
                  type="radio"
                  checked={values.titleId === id}
                  onChange={() => setFieldValue("titleId", id)}
                  className="w-4 h-4 cursor-pointer accent-primary opacity-50 checked:opacity-100"
                  name="title"
                />
              </label>
              <input
                placeholder="Enter your title"
                value={title}
                onChange={(e) => onChangeHandler(id, e.target.value)}
                className="border resize-none border-[#DEE2DF] font-inter text-[13px] pl-10 leading-[16px] font-medium p-[11px] rounded-[5px] w-full outline-none"
              />
            </div>
            <button
              type="button"
              onClick={() => removeTitle(id)}
              className="h-full"
            >
              <IoMdClose />
            </button>
          </div>
        ))}
      </div>

      <FormikErrorMessage name={"titleId"} />
      {/* Add new title --End-- */}
      <div className="mt-2 flex justify-between items-center flex-wrap gap-4">
        <button
          type="button"
          onClick={() =>
            setTitles((prev) => [...prev, { id: uuid(), title: "" }])
          }
          className="underline hover:no-underline text-[#6861FF] text-[13px] font-medium font-inter "
        >
          + Write my own title
        </button>

        <button
          type="button"
          className="__create_blog_form_btn flex items-center bg-white text-dark w-auto font-inter font-medium text-[13px] px-4 py-[7px] gap-2 hover:bg-dark hover:text-white"
        >
          <RefreshIcon /> Regenerate all
        </button>
      </div>
    </>
  );
};

export default BlogTitles;
