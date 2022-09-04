import React from "react";

import { Header } from "../Header/Header";
import Field from "../Field/Field";
import "./page.css";

export const Page: React.FC = () => {
  return (
    <div>
      <Header />

      <section>
        <Field />
      </section>
    </div>
  );
};
