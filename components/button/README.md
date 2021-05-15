Button
======

### Import
```js
  import Button from '@govuk-react/button';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Button>My button text</Button>
```

With Icon
```jsx
import { ButtonArrow } from '@govuk-react/icons';

<Button icon={<ButtonArrow />}>My button text</Button>
```

### References:
- https://design-system.service.gov.uk/components/button/
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/button/_button.scss

### TODO:
- Remove cascade styling for nested elements, specifically `svg`
- Consider ensuring text colour automatically switches between black/white based on WCAG guidance
  - see https://www.w3.org/TR/WCAG20-TECHS/G18.html
  - can use Polished's `readableColor` call, but translate their black to govuk's black

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `buttonColour` |  | ```undefined``` | string | Override for default button colour
 `buttonHoverColour` |  | ```undefined``` | string | Override for default button hover colour,<br/>which defaults to `buttonColour` darkened by 5%
 `buttonShadowColour` |  | ```undefined``` | string | Override for default button shadow colour,<br/>which defaults to `buttonColour` darkened by 15%
 `buttonTextColour` |  | ```undefined``` | string | Override for default button text colour,<br/>which defaults to govuk white
 `children` | true | `````` | node | Button text
 `disabled` |  | ```false``` | bool | Renders a disabled button and removes pointer events if set to true
 `icon` |  | ```undefined``` | node | Button icon
 `start` |  | ```false``` | bool | Renders a large button if set to true


