Heading
=======

### Import
```js
  import Heading from '@govuk-react/heading';
```
<!-- STORY -->

### Usage


Simple
```jsx
<Heading>Heading text</Heading>
```

To pick different heading levels it is recommended to use the shortcut versions as
that will pick the appropriate tag as well as set the appropriate corresponding font size.

Using shortcuts
```jsx
import { H1, H2, H3, H4, H5, H6 } from "@govuk-react/heading";

<H1>h1</H1>
<H2>h2</H2>
<H3>h3</H3>
<H4>h4</H4>
<H5>h5</H5>
<H6>h6</H6>
```

Differing sizes
```jsx
<H6 size={80}>
  H6 with font size 80
</H6>
<Heading as="h2" size="SMALL">
  Heading as h2 with SMALL size
</Heading>
<H3 size="LARGE">H3 with LARGE size</H3>
```

Props pass through
```jsx
<Heading onClick={() => { console.log('clicked'); }}>Click me</Heading>
```

### References:
- https://design-system.service.gov.uk/styles/typography/#headings
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_typography.scss
- https://github.com/alphagov/govuk-frontend/blob/master/src/core/_typography.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `as` |  | ```undefined``` | string | Semantic heading tag to use (e.g. 'h3')<br/>By default element used will be an 'h1'
 `level` |  | ```undefined``` | number | Semantic heading level value between 1 and 6 (deprecated)
 `size` |  | ```'XLARGE'``` | enum(...Object.keys(HEADING_SIZES) \| ...Object.keys(TYPOGRAPHY_SCALE)) | Visual size level, accepts:<br/>   `XLARGE`, `LARGE`, `MEDIUM`, `SMALL`, `XL`, `L`, `M`, `S`<br/>   or a numeric size that fits in the GDS font scale list


