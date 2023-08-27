import BankContent from "./index";
import { Meta, StoryFn } from "@storybook/react";
import { BankContentProps } from "./index";

export default {
  title: "atoms/Form/BankContent",
  component: BankContent,
} as Meta<typeof BankContent>;

const Template: StoryFn<typeof BankContent> = (args: BankContentProps) => <BankContent {...args} />;

export const Default = Template.bind({});
Default.args = {};
