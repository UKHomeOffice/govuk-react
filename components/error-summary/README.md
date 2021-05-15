ErrorSummary
============

### Import
```js
  import ErrorSummary from '@govuk-react/error-summary';
```
<!-- STORY -->

### Usage

Simple
```jsx
const heading = 'Message to alert the user to a problem goes here';
const description = 'Optional description of the errors and how to correct them';
const errors = [
  {
    targetName: 'national-insurance-number',
    text: 'National Insurance number error',
  },
  {
    targetName: 'description',
    text: 'Description of what you saw error',
  },
];

const onHandleErrorClick = (targetName) => {
  document.getElementsByName(targetName)[0].scrollIntoView();
};

<div>
  <ErrorSummary
    heading={heading}
    description={description}
    onHandleErrorClick={onHandleErrorClick}
    errors={errors}
  />
  <InputField
    name="national-insurance-number"
    hint="It’s on your National Insurance card, benefit letter, payslip or P60."
  >
    National Insurance number
  </InputField>
  <br />
  <TextArea name="description">Description of what you saw</TextArea>
</div>
```

### References:
- https://govuk-elements.herokuapp.com/errors/#summarise-errors
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/error-summary

### TODO:
- Swap out browser dependancy for context API to help with React Native support

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `description` |  | `````` | string | Optional description of the errors
 `errors` |  | `````` | arrayOf[object Object] | Array of errors with text and target element name to scroll into view when clicked
 `heading` |  | ```'There is a problem'``` | string | Heading text
 `onHandleErrorClick` |  | `````` | func | onClick function to scroll the target element into view


