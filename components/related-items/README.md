RelatedItems
============

### Import
```js
  import RelatedItems from '@govuk-react/related-items';
```
<!-- STORY -->

### Usage

Simple
```jsx
import { H3 } from '@govuk-react/heading';
import UnorderedList from '@govuk-react/unordered-list';
import Link from '@govuk-react/link';
import ListItem from '@govuk-react/list-item';

<RelatedItems>
  <H3>Example heading</H3>
  <UnorderedList listStyleType="none">
    <ListItem>
      <Link href="https://example.com">Link A</Link>
    </ListItem>
  </UnorderedList>
</RelatedItems>
```

### References:
- https://govuk-static.herokuapp.com/component-guide/related_items

### TODO:
- Replace CSS selectors with imported components

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Related items content


