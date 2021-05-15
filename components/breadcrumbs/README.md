Breadcrumbs
===========

### Import
```js
  import Breadcrumbs from '@govuk-react/breadcrumbs';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Breadcrumbs>
  <Breadcrumbs.Link href="/section">Section</Breadcrumbs.Link>
  <Breadcrumbs.Link href="/section/sub-section">Sub-section</Breadcrumbs.Link>
  Current page
</Breadcrumbs>
```

Providing links with, or without React Router
```jsx
import { Link } from 'react-router-dom';

<Breadcrumbs>
  <Breadcrumbs.Link as={Link} to="/section">Section</Breadcrumbs.Link>
  <Breadcrumbs.Link href="/section">Sub-section</Breadcrumbs.Link>
</Breadcrumbs>
```

### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/breadcrumbs/_breadcrumbs.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Breadcrumbs contents


