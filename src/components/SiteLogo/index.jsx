import Image from "next/image";
import Link from "next/link";
import React from "react";

const SiteLogo = () => {
  return (
    <Link href={"/"}>
      <Image src={"/img/logo.svg"} alt="Mirakle.ai" width={117} height={30} />
    </Link>
  );
};

export default SiteLogo;
