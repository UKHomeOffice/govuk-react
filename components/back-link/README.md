BackLink
========

### Import
```js
  import BackLink from '@govuk-react/back-link';
```
<!-- STORY -->

### Usage

Simple
```jsx
<BackLink>Back</BackLink>
```

With custom click handler
```jsx
<BackLink onClick={this.myCustomFunction}>Back</BackLink>
```

With `href` attribute
```jsx
<BackLink href='#'>Back</BackLink>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/back-link

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```'Back'``` | string | Text that will appear in the back link
 `onClick` |  | ```undefined``` | func | Custom function to run when the `onClick` event is fired


