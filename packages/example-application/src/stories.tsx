import React from 'react';

import Component from '.';

export default {
  title: 'Example Application',
  component: Component,
};
// bind
const Template = (args) => <Component {...args} />;
Template.parameters = {
  layout: 'fullscreen',
  previewTabs: {
    docs: { hidden: true },
    'storybook/docs/panel': { hidden: true },
  },
  viewMode: 'canvas',
};

export const ExampleApplication = Template.bind({});
ExampleApplication.parameters = Template.parameters;

export const Form = Template.bind({});
Form.args = {
  routerEntries: ['/form'],
};
Form.parameters = Template.parameters;

export const FinalForm = Template.bind({});
FinalForm.args = {
  routerEntries: ['/final-form'],
};
FinalForm.parameters = Template.parameters;

export const Formik = Template.bind({});
Formik.args = {
  routerEntries: ['/formik'],
};
Formik.parameters = Template.parameters;
