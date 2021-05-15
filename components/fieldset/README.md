Fieldset
========

### Import
```js
  import Fieldset from '@govuk-react/fieldset';
```
<!-- STORY -->

### Usage

Use the fieldset component when you need to show a relationship between multiple
form inputs. For example, you may need to group a set of text inputs into a single
fieldset when asking for an address.

Simple
```jsx
<Fieldset>
  <Fieldset.Legend>Example</Fieldset.Legend>
</Fieldset>
```

The `Fieldset.Legend` sub-component supports a `size` prop compatible with Heading
and a `isPageHeading` prop for use when you wish your legend to be used as a page heading

Custom legend
```jsx
<Fieldset>
  <Fieldset.Legend size="XL" isPageHeading>Legend as page heading</Fieldset.Legend>
</Fieldset>
```

### References
- https://design-system.service.gov.uk/components/fieldset/
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/fieldset
- https://design-system.service.gov.uk/get-started/labels-legends-headings/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 


