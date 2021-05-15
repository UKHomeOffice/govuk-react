InputField
==========

### Import
```js
  import InputField from '@govuk-react/input-field';
```
<!-- STORY -->

### Usage

Simple
```jsx
<InputField name="group0">National Insurance number</InputField>
```

Input with hint text
```jsx
<InputField
   name="group1"
   hint={[
     'It’s on your National Insurance card, benefit letter, payslip or P60.',
     <br />,
     'For example, ‘QQ 12 34 56 C’.',
   ]}
 >
   National Insurance number
 </InputField>
```

Input with hint text & error
```jsx
 const meta = {
   touched: true,
   error: 'Example',
 };

 <InputField
   name="group1"
   hint={[
     'It’s on your National Insurance card, benefit letter, payslip or P60.',
     <br />,
     'For example, ‘QQ 12 34 56 C’.',
   ]}
   meta={meta}
 >
   National Insurance number
 </InputField>
```
### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/input/_input.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 
 `hint` |  | ```undefined``` | node | 
 `input` |  | ```{}``` | shape[object Object] | 
 `meta` |  | ```{}``` | shape[object Object] | 


