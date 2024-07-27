import { Meta, StoryObj } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import { Slider } from "../components/Slider/Slider";

const meta = {
    title: 'Example/Slider',
    component: Slider,

    tags: ['autodocs'],

    args: { handleChange: action("onChange") },
} satisfies Meta<typeof Slider>

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Sliders: Story = {
    args: {
        type: "Continuous",
        subtype: "Single",
        steps: 10,
        handleSize: 'Size_24',

    },
};
