import AdminStatusPage from "./AdminStatusPage";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "page/status",
  component: AdminStatusPage,
} as Meta;

const Template: StoryFn<typeof AdminStatusPage> = () => <AdminStatusPage />;

export const Default = Template.bind({});
Default.args = {};
