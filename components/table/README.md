Table
=====

### Import
```js
  import Table from '@govuk-react/table';
```
<!-- STORY -->

### Usage

The Table component provides a construction kit of elements to create a table

Component default
```jsx
<Table caption="Dates and amounts">
 <Table.Row>
   <Table.CellHeader>First 6 weeks</Table.CellHeader>
   <Table.Cell>£109.80 per week</Table.Cell>
 </Table.Row>
 <Table.Row>
   <Table.CellHeader>Next 33 weeks</Table.CellHeader>
   <Table.Cell>£109.80 per week</Table.Cell>
 </Table.Row>
 <Table.Row>
   <Table.CellHeader>Total estimated pay</Table.CellHeader>
   <Table.Cell>£4,282.20</Table.Cell>
 </Table.Row>
 <Table.Row>
   <Table.CellHeader>Tell the mother&rsquo;s employer</Table.CellHeader>
   <Table.Cell>28 days before they want to start maternity pay</Table.Cell>
 </Table.Row>
</Table>
```

Numeric tabular data
```jsx
const example2Head = (
  <Table.Row>
    <Table.CellHeader>Month you apply</Table.CellHeader>
    <Table.CellHeader numeric>Rate for vehicles</Table.CellHeader>
    <Table.CellHeader numeric>Rate for bicycles</Table.CellHeader>
  </Table.Row>
);

<Table
 caption="Attention, I am the caption of this ship!"
 head={example2Head}
>
  <Table.Row>
    <Table.CellHeader>January</Table.CellHeader>
    <Table.Cell numeric>£165.00</Table.Cell>
    <Table.Cell numeric>£85.00</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.CellHeader>February</Table.CellHeader>
    <Table.Cell numeric>£165.00</Table.Cell>
    <Table.Cell numeric>£85.00</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.CellHeader>March</Table.CellHeader>
    <Table.Cell numeric>£151.00</Table.Cell>
    <Table.Cell numeric>£77.00</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.CellHeader>April</Table.CellHeader>
    <Table.Cell numeric>£136.00</Table.Cell>
    <Table.Cell numeric>£70.00</Table.Cell>
  </Table.Row>
</Table>
```

Setting custom column widths
```jsx
<Table
  caption="Custom header"
  head={
    <Table.Row>
      <Table.CellHeader setWidth="one-half>Wide header</Table.CellHeader>
      <Table.CellHeader setWidth="30%">Regular</Table.CellHeader>
      <Table.CellHeader>Normal</Table.CellHeader>
    </Table.Row>
  }
>
  <Table.Row>
    <Table.Cell>Header makes this column one-half wide</Table.Cell>
    <Table.Cell>And this one 30%</Table.Cell>
    <Table.Cell>Another</Table.Cell>
  </Table.Row>
</Table>
```

### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/table/_table.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `body` |  | ```undefined``` | node | Table body rows and cells (for backward compatibility)
 `caption` |  | ```undefined``` | string | Table caption title
 `children` |  | ```undefined``` | node | Table body rows and cells (recommended way)
 `head` |  | ```undefined``` | node | Table header rows and cells


