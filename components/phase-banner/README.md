PhaseBanner
===========

### Import
```js
  import PhaseBanner from '@govuk-react/phase-banner';
```
<!-- STORY -->

### Usage

Alpha
```jsx
<PhaseBanner level="alpha">
   This part of GOV.UK is being rebuilt &#8211;{' '}
   <AnchorLink href="https://example.com">find out what that means</AnchorLink>
 </PhaseBanner>
```

Beta
```jsx
<PhaseBanner level="beta">
   This part of GOV.UK is being rebuilt &#8211;{' '}
   <AnchorLink href="https://example.com">find out what that means</AnchorLink>
 </PhaseBanner>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/phase-banner
- https://design-system.service.gov.uk/components/phase-banner/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Children text and links
 `level` | true | `````` | string | Alpha or beta banner


