import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { gridContext } from "../context/gridContext";
import { Field } from "../components/Field/Field";
import { useGrid } from "../hooks/grid.hook";
import "../index.css";

export default {
  title: "Field",
  component: Field,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = () => (
  <gridContext.Provider value={{ ...useGrid() }}>
    <Field />
  </gridContext.Provider>
);

export const NormalField = Template;
