DateField
=========

### Import
```js
  import DateField from '@govuk-react/date-field';
```
<!-- STORY -->

### Usage

Simple
```jsx
<DateField>What is your date of birth?</DateField>
```

Date with hint text
```jsx
<DateField hintText="For example, 31 03 1980">
  What is your date of birth?
</DateField>
```

Date with hint text & error
```jsx
<DateField
  hintText="For example, 31 03 1980"
  errorText="Error message goes here"
>
  What is your date of birth?
</DateField>
```

With custom input name props
```jsx
<DateField hintText="For example, 31 03 1980"
  inputNames={{
    day: 'dayInputName',
    month: 'monthInputName',
    year: 'yearInputName',
  }}
 >
  What is your date of birth?
</DateField>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/date-field

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 
 `defaultValues` |  | ```{    day: undefined,    month: undefined,    year: undefined,  }``` | custom | 
 `errorText` |  | ```undefined``` | string | Error text
 `hintText` |  | ```undefined``` | string | Optional hint text
 `input` |  | ```undefined``` | shape[object Object] | Properties that are sent to the input, matching final form and redux form input type
 `inputNames` |  | ```{    day: undefined,    month: undefined,    year: undefined,  }``` | shape[object Object] | Input name attributes


