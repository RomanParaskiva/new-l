import React, { memo } from "react";
import { Header } from "../Header/Header";
import { Field } from "../Field/Field";
import { Sidebar } from "../Sidebar/Sidebar";

export const Page: React.FC = memo(() => {
  return (
    <div className="h-screen">
      <Header />
      <section className="h-full flex gap-5">
        <Sidebar />
        <Field />
      </section>
    </div>
  );
});
