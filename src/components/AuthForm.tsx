"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

import { useRegister } from "@/api/hooks/auth";

type Props = {
  type: "signIn" | "register";
};

const AuthForm = ({ type }: Props) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
  });
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/";
  const register = useRegister();
  const [error, setError] = useState(params.get("error") || "");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const urlObj = new URL(window.location.href);
    urlObj.searchParams.delete("error");

    e.preventDefault();

    try {
      if (type === "register") {
        await register.mutateAsync(formData);
      }
      await signIn("credentials", {
        redirect: true,
        ...formData,
        callbackUrl,
      });
    } catch (error: any) {
      setError(error.response.data.message);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <Image
            src="/assets/img/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="mx-auto mb-4"
          /> */}
          <div className="font-black text-3xl text-blue-700 text-center">
            تسکیو
          </div>
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-davysGray">
            {type === "signIn" ? "ورود به حساب کاربری" : "ثبت نام"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {type === "register" && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-davysGray"
                >
                  نام
                </label>
                <div className="mt-2">
                  <input
                    value={formData.name}
                    onChange={handleChange}
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-davysGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-davysGray focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-davysGray"
              >
                نام کاربری
              </label>
              <div className="mt-2">
                <input
                  value={formData.username}
                  onChange={handleChange}
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-davysGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-davysGray focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-davysGray"
                >
                  رمز عبور
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-blue-700 hover:text-vistaBlue"
                  >
                    رمز عبور خود را فراموش کرده‌اید؟
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  value={formData.password}
                  onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-davysGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-davysGray focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-vistaBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 disabled:bg-blue-700/40"
              >
                {type === "signIn" ? "ورود" : "ثبت نام"}
              </button>
            </div>
          </form>
          {error === "CredentialsSignin" ? (
            <div className="text-coquelicot mt-2 text-sm">
              نام کاربری یا رمز عبور اشتباه است!
            </div>
          ) : (
            error && <div className="text-coquelicot mt-2 text-sm">{error}</div>
          )}

          <p className="mt-10 text-center text-sm text-davysGray">
            {type === "signIn" ? "هنوز ثبت نام نکردی؟" : "قبلا ثبت نام کردی؟"}{" "}
            <Link
              href={type === "signIn" ? "/register" : "/sign-in"}
              className="font-semibold leading-6 text-blue-700 hover:text-vistaBlue"
            >
              {type === "signIn" ? "از اینجا ثبت نام کن" : "از اینجا وارد شو"}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
