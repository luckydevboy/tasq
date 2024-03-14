"use client";

import { Suspense } from "react";

import { AuthForm } from "@/components";

const Register = () => {
  return (
    <Suspense>
      <AuthForm type="register" />
    </Suspense>
  );
};

export default Register;
