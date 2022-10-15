import React, { memo, useEffect } from "react";
import { Header } from "../Header/Header";
import { Field } from "../Field/Field";
import { Sidebar } from "../Sidebar/Sidebar";
import { useAppSelector } from "../../hooks/redux.hook";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/display-name */
export const Page: React.FC = memo(() => {
  const navigate = useNavigate();
  const { authed } = useAppSelector((state) => state.auth);

  useEffect(() => {    
    if (!authed) navigate("/login");
  }, [navigate, authed]);
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
