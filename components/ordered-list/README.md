OrderedList
===========

### Import
```js
  import OrderedList from '@govuk-react/ordered-list';
```
<!-- STORY -->

### Usage

Simple
```jsx
import OrderedList from '@govuk-react/ordered-list';
import ListItem from '@govuk-react/list-item';

<OrderedList>
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</OrderedList>
```

with Roman
```jsx
import OrderedList from '@govuk-react/ordered-list';
import ListItem from '@govuk-react/list-item';

<OrderedList listStyleType="lower-roman">
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</OrderedList>
```

### References
- https://design-system.service.gov.uk/styles/typography/#lists
- https://github.com/alphagov/govuk-frontend/blob/master/src/core/_lists.scss

### TODO
- Consider using the context API https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | One or more ListItem components
 `listStyleType` |  | ```undefined``` | string | CSS value for `list-style-type`, or `bullet` or `number` to match govuk-frontend


