import AuthForm from "@/components/Forms/AuthForm";
import React from "react";

const LoginPage = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <AuthForm FormType="Login" />
    </section>
  );
};

export default LoginPage;
