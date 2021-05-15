Pagination
==========

### Import
```js
  import Pagination from '@govuk-react/pagination';
```
<!-- STORY -->

### Usage

Simple usage with `asPaginationItem` HOC
```jsx
import { asPaginationItem } from '@govuk-react/hoc';

const PaginationAnchor = asPaginationItem('a');

<Pagination>
  <PaginationAnchor href="#prev" previousPage>
    Previous page
  </PaginationAnchor>
  <PaginationAnchor href="#next" nextPage>
    Next page
  </PaginationAnchor>
</Pagination>
```

### References:
- https://govuk-static.herokuapp.com/component-guide/previous_and_next_navigation

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | `asPaginationItem` nodes


