import React from "react";

import { Header } from "../Header/Header";
import { Field } from "../Field/Field";
// import { LoginForm } from "../LoginForm/LoginForm";
import "./page.css";

export const Page: React.FC = () => {
  return (
    <div className="h-screen">
      <Header />

      <section className="h-full">
        <Field />
        {/* <LoginForm /> */}
      </section>
    </div>
  );
};
