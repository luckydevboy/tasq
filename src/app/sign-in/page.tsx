"use client";

import { Suspense } from "react";

import { AuthForm } from "@/components";

const SignIn = () => {
  return (
    <Suspense>
      <AuthForm type="signIn" />
    </Suspense>
  );
};

export default SignIn;
