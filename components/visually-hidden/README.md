VisuallyHidden
==============

### Import
```js
  import VisuallyHidden from '@govuk-react/visually-hidden';
```
<!-- STORY -->

### Usage

This component is primarily intended to be used for material that will be visually hidden
but visible to screen-reader devices.

Simple
```jsx
<VisuallyHidden>Example</VisuallyHidden>
```

### References
- https://github.com/alphagov/govuk-frontend/blob/master/src/helpers/_visually-hidden.scss
- https://github.com/alphagov/govuk-frontend/blob/master/src/utilities/_visually-hidden.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Content to be hidden
 `focusable` |  | ```false``` | bool | Allow component to be focusable, and thus become visible
 `important` |  | ```true``` | bool | Set styles with `!important`


