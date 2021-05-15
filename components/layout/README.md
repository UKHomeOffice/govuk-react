Layout
======

### Import
```js
  import Layout from '@govuk-react/layout';
```
<!-- STORY -->

THIS COMPONENT IS NO LONGER REQUIRED TO ACHIEVE LAYOUT;
1. `GridCol` contains the required gutters, we do not need to provide additional gutter
to build an accurate grid layout.

2. `GridRow` contains the required `display: flex;` and associated properties for `GridCol`.

3. `Main` contains the required properties to center a container that matches up with `TopNav`
and house the remaining body of content for the page.

If you feel you may still need a `Layout` component, please do raise a ticket on [Github](https://github.com/govuk-react/govuk-react/issues/177)

### Usage

This component provides default padding.
You can use this component to wrap Grid components however it is not required.

Simple usage
```jsx
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

<Layout>
  <GridRow>
    <GridCol>
      ...
    </GridCol>
  </GridRow>
</Layout>
```

### References:
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | GridRow and GridCol children nodes


