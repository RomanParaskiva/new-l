import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Sidebar } from "../components/Sidebar/Sidebar";
import { GridProvider } from "../hooks/grid.hook";

export default {
  title: "Sidebar",
  component: Sidebar,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => <GridProvider><Sidebar /></GridProvider>;

export const NormalLoginForm = Template;
