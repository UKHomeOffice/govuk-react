Details
=======

### Import
```js
  import Details from '@govuk-react/details';
```
<!-- STORY -->

### Usage


Simple
```jsx
<Details summary="Help with nationality">
  I am a paragraph of hidden details, to be revealed when summary is clicked
</Details>
```

### References
- https://design-system.service.gov.uk/components/details/
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/details/_details.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` | node | The content that will be displayed when details are revealed
 `open` |  | ```false``` | bool | Flag to indicate whether to show component open by default
 `summary` | true | `````` | node | Text for the details summary link e.g. Help with nationality


