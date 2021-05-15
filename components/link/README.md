Link
====

### Import
```js
  import Link from '@govuk-react/link';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Link href="/some/page">Example</Link>
```

It is possible to use this component to style a link from react-router, or reach-router
as follows:
```jsx
import { Link as RouterLink } from 'react-router-dom';

<Link as={RouterLink} to="destination">Router example</Link>
```

NB if no link destination is set then the link styling will not be applied

### References
- https://design-system.service.gov.uk/styles/typography/#links
- https://github.com/alphagov/govuk-frontend/blob/master/src/core/_links.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | link contents
 `muted` |  | ```false``` | bool | show link in a "muted" (grey) style
 `noVisitedState` |  | ```false``` | bool | ensure there is no "visited" style
 `textColour` |  | ```false``` | bool | ensure link is shown in plain text colour


