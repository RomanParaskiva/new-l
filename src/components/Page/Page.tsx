import React from "react";

import { Header } from "../Header/Header";
import { Field } from "../Field/Field";
import { Sidebar } from "../Sidebar/Sidebar";
// import { LoginForm } from "../LoginForm/LoginForm";
import "./page.css";

export const Page: React.FC = () => {
  return (
    <div className="h-screen">
      <Header />

      <section className="h-full flex gap-5">
        <Sidebar />
        <Field />
        {/* <LoginForm /> */}
      </section>
    </div>
  );
};
