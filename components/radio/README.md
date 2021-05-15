Radio
=====

### Import
```js
  import Radio from '@govuk-react/radio';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Radio name="group1">Radio button text example</Radio>
```

Radio stacked
```jsx
 <div>
   <Radio name="group1">Waste from animal carcasses</Radio>
   <Radio name="group1">Waste from mines or quarries</Radio>
   <Radio name="group1">Farm or agricultural waste</Radio>
 </div>
```

Radio inline
```jsx
 <div>
   <Radio name="group1" inline>
     Yes
   </Radio>
   <Radio name="group1" inline>
     No
   </Radio>
 </div>
```

Radio disabled
```jsx
 <div>
   <Radio name="group1" disabled="disabled">
     Disabled checkbox option
   </Radio>
 </div>
 ```

Radio preselected
```jsx
 <div>
   <Radio name="group1" checked>
     Farm or agricultural waste
   </Radio>
 </div>
```

Radio preselected & disabled
```jsx
 <div>
   <Radio name="group1" disabled="disabled" checked>
     Farm or agricultural waste
   </Radio>
 </div>
```
Radio with hint text
```jsx
<div>
  <Radio
   name="group1"
   hint="You'll have a user ID if you've registered for Self Assessment or filed a tax return
         online before."
  >
    Sign in with Government Gateway
  </Radio>
</div>
```
### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/radios/_radios.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 
 `className` |  | ```undefined``` | string | 
 `hint` |  | ```undefined``` | node | 
 `inline` |  | ```false``` | bool | 


