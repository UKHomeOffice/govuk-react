TextArea
========

### Import
```js
  import TextArea from '@govuk-react/text-area';
```
<!-- STORY -->

### Usage

Simple
```jsx
<TextArea name="group1">Description of what you saw</TextArea>
```

TextArea with hint text
```jsx
<TextArea name="group1" hint={['Enter as many words as you like']}>
  Description of what you saw
</TextArea>
```

TextArea with hint text & error
```jsx
const meta = {
  touched: true,
  error: 'Example',
};

<TextArea
   name="group1"
   hint={['Enter as many words as you like']}
   meta={meta}
 >
   Description of what you saw
 </TextArea>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/textarea

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 
 `hint` |  | ```undefined``` | string | 
 `input` |  | ```{}``` | shape[object Object] | 
 `meta` |  | ```{}``` | shape[object Object] | 


