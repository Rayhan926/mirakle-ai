import { CreateBlogV2Provider } from "@hooks/useCreateBlogV2";
import CreateBlogV2 from "@views/CreateBlogV2";
import React from "react";

const CreateBlogFormV2Page = () => {
  return (
    <CreateBlogV2Provider>
      <CreateBlogV2 />
    </CreateBlogV2Provider>
  );
};

export default CreateBlogFormV2Page;
