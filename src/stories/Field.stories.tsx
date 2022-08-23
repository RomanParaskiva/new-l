import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Field from '../components/Field/Field'

export default {
  title: 'Example/Field',
  component: Field,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Field>

const Template: ComponentStory<typeof Field> = (args) => <Field {...args} />

export const Default = Template.bind({})

Default.args = { rows: 40, columns: 30}

Default.storyName = '40*30'

export const Secondary = Template.bind({})

Secondary.args = {rows: 40, columns: 10}

Secondary.storyName = '40*10'