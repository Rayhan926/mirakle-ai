import { LoginFormProvider } from "@hooks/useLoginForm";
import Login from "@views/Login";
import Head from "next/head";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginFormProvider>
        <Login />
      </LoginFormProvider>
    </>
  );
};

export default LoginPage;
