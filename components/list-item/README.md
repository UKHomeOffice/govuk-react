ListItem
========

### Import
```js
  import ListItem from '@govuk-react/list-item';
```
<!-- STORY -->

### Usage


Simple
```jsx
<ListItem>List item example</ListItem>
```

With a link
```jsx
import { Link } from '@govuk-react/link';

<ListItem>
  <Link href="https://www.google.com/">List item example</Link>
</ListItem>
```

### References
- https://github.com/alphagov/govuk-frontend/blob/master/src/core/_lists.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | List item content


