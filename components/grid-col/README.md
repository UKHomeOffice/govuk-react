GridCol
=======

### Import
```js
  import GridCol from '@govuk-react/grid-col';
```
<!-- STORY -->

Should always be wrapped by `GridRow`. Will always render a column at full width if
the browser width is below the `TABLET` breakpoint.

NB our grid is based on flex-box, which differs from govuk-frontend, which instead uses
floats, however it is otherwise similar to use.

### Usage

Simple
```jsx
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

<Fragment>
  <GridRow>
    <GridCol>
      ...
    </GridCol>
  </GridRow>
  <GridRow>
    <GridCol setWidth="one-half">
      ...
    </GridCol>
    <GridCol setWidth="one-quarter">
      ...
    </GridCol>
    <GridCol setWidth="one-quarter">
      ...
    </GridCol>
  <GridRow>
    <GridCol setWidth="one-third">
      ...
    </GridCol>
    <GridCol setWidth="two-thirds">
      ...
    </GridCol>
  </GridRow>
  <GridRow>
    <GridCol setWidth="one-third" setDesktopWidth="one-quarter">
      ...
    </GridCol>
    <GridCol setWidth="two-thirds" setDesktopWidth="auto">
      ...
    </GridCol>
  </GridRow>
</Fragment>
```

### References:
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` | node | GridCol content
 `columnFull` |  | ```false``` | bool | Dimension setting for the column (deprecated)
 `columnOneHalf` |  | ```false``` | bool | Dimension setting for the column (deprecated)
 `columnOneQuarter` |  | ```false``` | bool | Dimension setting for the column (deprecated)
 `columnOneThird` |  | ```false``` | bool | Dimension setting for the column (deprecated)
 `columnThreeQuarters` |  | ```false``` | bool | Dimension setting for the column (deprecated)
 `columnTwoThirds` |  | ```false``` | bool | Dimension setting for the column (deprecated)
 `setDesktopWidth` |  | ```undefined``` | union(string \| number \| enum) | Explicitly set desktop column to width using value or descriptive string<br/>(`one-quarter`, `one-third`, `one-half`, `two-thirds`, `three-quarters`, `full`)
 `setWidth` |  | ```undefined``` | union(string \| number \| enum) | Explicitly set column to width using value or descriptive string<br/>(`one-quarter`, `one-third`, `one-half`, `two-thirds`, `three-quarters`, `full`)


