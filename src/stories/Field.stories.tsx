import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Field } from "../components/Field/Field";
import { GridProvider } from "../hooks/grid.hook";
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
  <GridProvider>
    <Field />
  </GridProvider>
);

export const NormalField = Template;
