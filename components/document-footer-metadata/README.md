DocumentFooterMetadata
======================

### Import
```js
  import DocumentFooterMetadata from '@govuk-react/document-footer-metadata';
```
<!-- STORY -->

### Usage


Simple
```jsx
import { Link } from '@govuk-react/link';

const fromData = [
  <Link href="/government/organisations/ministry-of-defence">
    Ministry of Defence
  </Link>,
];

<DocumentFooterMetadata from={fromData} />
```


DFM From & part of example
```jsx
import { Link } from '@govuk-react/link';

const fromData = [
  <Link href="/government/organisations/ministry-of-defence">
    Ministry of Defence
  </Link>,
];
const partOfData = [
  <Link href="/government/topics/energy">Energy</Link>,
  <Link href="/government/topics/environment">Environment</Link>,
];

<DocumentFooterMetadata from={fromData} partOf={partOfData} />
```


DFM From & other data example
```jsx
import { Link } from '@govuk-react/link';

const fromData = [
  <Link href="/government/organisations/ministry-of-defence">
    Ministry of Defence
  </Link>,
];
const otherData = [
  {
    id: 0,
    title: 'Consultation type',
    content: <Link href="/government/publications">Open</Link>,
  },
  {
    id: 1,
    title: 'Published',
    content: '20 January 2012',
  },
];

<DocumentFooterMetadata from={fromData} other={otherData} />
```

### References:
- https://govuk-static.herokuapp.com/component-guide/document_footer

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `from` |  | ```undefined``` | arrayOf[object Object] | Array of JSX nodes to render underneath the `from:` title
 `other` |  | ```undefined``` | arrayOf[object Object] | Array of Objects for any additional items, each object should contain an `id`, `title` and `content` property
 `partOf` |  | ```undefined``` | arrayOf[object Object] | Array of JSX nodes to render underneath the `part of:` title


