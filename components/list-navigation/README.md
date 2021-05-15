ListNavigation
==============

### Import
```js
  import ListNavigation from '@govuk-react/list-navigation';
```
<!-- STORY -->

### Usage

Simple
```jsx
import Link from '@govuk-react/link';

<ListNavigation>
  <Link href="/section-a">Section A</Link>
  <Link href="/section-b">Section B</Link>
</ListNavigation>
```

Using React Router with `Link` component for GDS styled links
```jsx
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@govuk-react/link';

<ListNavigation listStyleType="circle">
  <Link as={RouterLink} to="/link-a">Link A</Link>
  <Link as={RouterLink} to="/link-b">Link B</Link>
</ListNavigation>
```

### References:
- https://govuk-static.herokuapp.com/component-guide/government_navigation

### TODO:
- Consider using the context API https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md
- Fix active state overlaping siblings

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | List navigation content
 `listStyleType` |  | ```undefined``` | string | CSS value for `list-style-type`


