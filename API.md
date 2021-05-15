Accordion
=========

### Import
```js
  import Accordion from '@govuk-react/accordion';
```
<!-- STORY -->

### Usage

Simple
```jsx

import Accordion from '@govuk-react/accordion'

const checkOpen = state => Object.values(state).every(Boolean);

class AccordionComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      accordionOne: false,
      accordionTwo: false,
      accordionThree: false,
      accordionFour: false,
    };
    this.individualAccordionSetState = this.individualAccordionSetState.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  toggleAll() {
    return this.setState(state =>
      Object.keys(state).reduce(
        (prev, key) => ({
          ...prev,
          [key]: !this.isAllOpen,
        }),
        {},
    ));
  }

  individualAccordionSetState(property) {
    return () => this.setState(state => ({
      [property]: !state[property],
    }));
  }

  render() {
    this.isAllOpen = checkOpen(this.state);
    return (
      <Accordion>
        <Accordion.OpenAll href="#" onClick={this.toggleAll}>
          {`${isAllOpen ? 'Close' : 'Open'} all`}
        </Accordion.OpenAll>
        <Accordion.Group
          heading="Writing well for the web"
          expanded={accordions.accordionOne}
          onClick={this.individualAccordionSetState('accordionOne')}
        >
          <Paragraph mb={0}>This is the content for writing well for the web.</Paragraph>
        </Accordion.Group>
        <Accordion.Group
          heading="Writing well for specialists"
          expanded={accordions.accordionTwo}
          onClick={this.individualAccordionSetState('accordionTwo')}
        >
          <Paragraph mb={0}>This is the content for writing well for the specialists.</Paragraph>
        </Accordion.Group>
        <Accordion.Group
          heading="Know your audience"
          expanded={accordions.accordionThree}
          onClick={this.individualAccordionSetState('accordionThree')}
        >
          <Paragraph mb={0}>This is the content for Know you audience.</Paragraph>
        </Accordion.Group>
        <Accordion.Group
          heading="How people read"
          expanded={accordions.accordionFour}
          onClick={this.individualAccordionSetState('accordionFour')}
        >
          <Paragraph mb={0}>This is the content for How people read.</Paragraph>
        </Accordion.Group>
      </Accordion>
    );
  }
}
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/accordion
- https://design-system.service.gov.uk/components/accordion/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 


Link
====

### Import
```js
  import Link from '@govuk-react/link';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Link href="/some/page">Example</Link>
```

It is possible to use this component to style a link from react-router, or reach-router
as follows:
```jsx
import { Link as RouterLink } from 'react-router-dom';

<Link as={RouterLink} to="destination">Router example</Link>
```

NB if no link destination is set then the link styling will not be applied

### References
- https://design-system.service.gov.uk/styles/typography/#links
- https://github.com/alphagov/govuk-frontend/blob/master/src/core/_links.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | link contents
 `muted` |  | ```false``` | bool | show link in a "muted" (grey) style
 `noVisitedState` |  | ```false``` | bool | ensure there is no "visited" style
 `textColour` |  | ```false``` | bool | ensure link is shown in plain text colour


BackLink
========

### Import
```js
  import BackLink from '@govuk-react/back-link';
```
<!-- STORY -->

### Usage

Simple
```jsx
<BackLink>Back</BackLink>
```

With custom click handler
```jsx
<BackLink onClick={this.myCustomFunction}>Back</BackLink>
```

With `href` attribute
```jsx
<BackLink href='#'>Back</BackLink>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/back-link

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```'Back'``` | string | Text that will appear in the back link
 `onClick` |  | ```undefined``` | func | Custom function to run when the `onClick` event is fired


Breadcrumb
==========

### Import
```js
  import Breadcrumb from '@govuk-react/breadcrumb';
```
<!-- STORY -->

### Usage

This component is DEPRECATED.

Please use the `Breadcrumbs` component instead.

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Breadcrumb contents


Breadcrumbs
===========

### Import
```js
  import Breadcrumbs from '@govuk-react/breadcrumbs';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Breadcrumbs>
  <Breadcrumbs.Link href="/section">Section</Breadcrumbs.Link>
  <Breadcrumbs.Link href="/section/sub-section">Sub-section</Breadcrumbs.Link>
  Current page
</Breadcrumbs>
```

Providing links with, or without React Router
```jsx
import { Link } from 'react-router-dom';

<Breadcrumbs>
  <Breadcrumbs.Link as={Link} to="/section">Section</Breadcrumbs.Link>
  <Breadcrumbs.Link href="/section">Sub-section</Breadcrumbs.Link>
</Breadcrumbs>
```

### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/breadcrumbs/_breadcrumbs.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Breadcrumbs contents


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


Caption
=======

### Import
```js
  import Caption from '@govuk-react/caption';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Caption>Caption heading text</Caption>
```

With another header
```jsx
import { H1 } from '@govuk-react/heading';

<Caption size="XL">Supporting header text</Caption>
<H1>Main header text</H1>
```

### References
- https://github.com/alphagov/govuk-frontend/blob/master/src/core/_typography.scss
- https://design-system.service.gov.uk/styles/typography/#headings

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | string | Text to be rendered as a caption
 `size` |  | ```'XL'``` | enum(...Object.keys(CAPTION_SIZES) \| ...Object.keys(TYPOGRAPHY_SCALE)) | Visual size level, accepts:<br/>   `XLARGE`, `LARGE`, `MEDIUM`, `XL`, `L`, `M`<br/>   or a numeric size that fits in the GDS font scale list


Checkbox
========

### Import
```js
  import Checkbox from '@govuk-react/checkbox';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Checkbox>Text displayed next to checkbox</Checkbox>
```

With disabled state
```jsx
<Checkbox disabled="disabled">Disabled checkbox option</Checkbox>
```

Checkbox preselected
```jsx
<Checkbox defaultChecked>Farm or agricultural waste</Checkbox>
```

Checkbox preselected & disabled
```jsx
<Checkbox disabled="disabled" defaultChecked>Farm or agricultural waste</Checkbox>
```

Checkbox with hint text
```jsx
<Checkbox hint="including English, Scottish, Welsh and Northern Irish">British</Checkbox>
```
### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/checkboxes/_checkboxes.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Text content for checkbox
 `className` |  | ```undefined``` | string | CSS Classname for outermost container
 `hint` |  | ```undefined``` | node | 


DateField
=========

### Import
```js
  import DateField from '@govuk-react/date-field';
```
<!-- STORY -->

### Usage

Simple
```jsx
<DateField>What is your date of birth?</DateField>
```

Date with hint text
```jsx
<DateField hintText="For example, 31 03 1980">
  What is your date of birth?
</DateField>
```

Date with hint text & error
```jsx
<DateField
  hintText="For example, 31 03 1980"
  errorText="Error message goes here"
>
  What is your date of birth?
</DateField>
```

With custom input name props
```jsx
<DateField hintText="For example, 31 03 1980"
  inputNames={{
    day: 'dayInputName',
    month: 'monthInputName',
    year: 'yearInputName',
  }}
 >
  What is your date of birth?
</DateField>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/date-field

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 
 `defaultValues` |  | ```{    day: undefined,    month: undefined,    year: undefined,  }``` | custom | 
 `errorText` |  | ```undefined``` | string | Error text
 `hintText` |  | ```undefined``` | string | Optional hint text
 `input` |  | ```undefined``` | shape[object Object] | Properties that are sent to the input, matching final form and redux form input type
 `inputNames` |  | ```{    day: undefined,    month: undefined,    year: undefined,  }``` | shape[object Object] | Input name attributes


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


ErrorSummary
============

### Import
```js
  import ErrorSummary from '@govuk-react/error-summary';
```
<!-- STORY -->

### Usage

Simple
```jsx
const heading = 'Message to alert the user to a problem goes here';
const description = 'Optional description of the errors and how to correct them';
const errors = [
  {
    targetName: 'national-insurance-number',
    text: 'National Insurance number error',
  },
  {
    targetName: 'description',
    text: 'Description of what you saw error',
  },
];

const onHandleErrorClick = (targetName) => {
  document.getElementsByName(targetName)[0].scrollIntoView();
};

<div>
  <ErrorSummary
    heading={heading}
    description={description}
    onHandleErrorClick={onHandleErrorClick}
    errors={errors}
  />
  <InputField
    name="national-insurance-number"
    hint="It’s on your National Insurance card, benefit letter, payslip or P60."
  >
    National Insurance number
  </InputField>
  <br />
  <TextArea name="description">Description of what you saw</TextArea>
</div>
```

### References:
- https://govuk-elements.herokuapp.com/errors/#summarise-errors
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/error-summary

### TODO:
- Swap out browser dependancy for context API to help with React Native support

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `description` |  | `````` | string | Optional description of the errors
 `errors` |  | `````` | arrayOf[object Object] | Array of errors with text and target element name to scroll into view when clicked
 `heading` |  | ```'There is a problem'``` | string | Heading text
 `onHandleErrorClick` |  | `````` | func | onClick function to scroll the target element into view


ErrorText
=========

### Import
```js
  import ErrorText from '@govuk-react/error-text';
```
<!-- STORY -->

### Usage


Simple
```jsx
<ErrorText>Example</ErrorText>
```

### References
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/error-message/_error-message.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | string | Text to describe the error


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


FileUpload
==========

### Import
```js
  import FileUpload from '@govuk-react/file-upload';
```
<!-- STORY -->

### Usage

Simple
```jsx
<FileUpload name="group0">Upload a document</FileUpload>
```

Input with hint text
```jsx
<FileUpload
  name="group1"
  acceptedFormats=".jpg, .png"
  hint={['This can be in either JPG or PNG format']}
>
  Upload a photo
</FileUpload>
```

Input with hint text & error
```jsx
const meta = {
  touched: true,
  error: 'Example',
};

<FileUpload
  name="group1"
  acceptedFormats=".jpg, .png"
  hint={['This can be in either JPG or PNG format']}
  meta={meta}
>
  Upload a photo
</FileUpload>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/file-upload

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `acceptedFormats` |  | ```undefined``` | string | 
 `children` | true | `````` | node | 
 `hint` |  | ```undefined``` | string | Optional hint text
 `meta` |  | ```{}``` | shape[object Object] | Final form meta object, pending adjustment/removal


Footer
======

### Import
```js
  import Footer from '@govuk-react/footer';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Footer />
```

Footer with Copyright information
```jsx
// Import self hosted copyright image
import crest from './govuk-crest.png';

<Footer
  copyright={{
    text: 'Crown copyright',
    link:
      'https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/',
    image: {
      source: crest,
      height: 102,
      width: 125,
    },
  }}
/>;
```

Footer with navigation.  There is also the option to provide footer links with, or without React/Reach Router.
```jsx
import { Link } from 'react-router-dom';

<Footer>
  <Footer.Navigation>
    <Footer.NavigationLinks heading="Two column list" listColumns={2}>
      <Footer.Link href="/">Navigation item 1</Footer.Link>
      <Footer.Link to="/footer-nav-item-2" as={Link}>Navigation item 2 (Router Link)</Footer.Link>
      <Footer.Link href="/">Navigation item 3</Footer.Link>
      <Footer.Link href="/">Navigation item 4</Footer.Link>
      <Footer.Link href="/">Navigation item 5</Footer.Link>
      <Footer.Link href="/">Navigation item 6</Footer.Link>
    </Footer.NavigationLinks>
    <Footer.NavigationLinks heading="Single column list">
      <Footer.Link href="/">Navigation item 1</Footer.Link>
      <Footer.Link href="/">Navigation item 2</Footer.Link>
      <Footer.Link href="/">Navigation item 3</Footer.Link>
    </Footer.NavigationLinks>
  </Footer.Navigation>
</Footer>
```

Footer with links in meta area
```jsx
<Footer meta={
    <Footer.MetaLinks heading="Support links">
      <Footer.Link href="/">Item 1</Footer.Link>
      <Footer.Link to="/footer-meta-item-2" as={Link}>Item 2 (Router Link)</Footer.Link>
      <Footer.Link href="/">Item 3</Footer.Link>
    </Footer.MetaLinks>
  }
/>
```

Footer with custom content in meta area
```jsx
<Footer meta={
    <Footer.MetaCustom>
      Built by the <Footer.Link href="/">Government Digital Service</Footer.Link>
    </Footer.MetaCustom>
  }
/>
```

NB <Footer.Link /> is styled extention of @govuk-react/link

### References:
- https://design-system.service.gov.uk/components/footer/
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/footer/template.njk
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/footer/_footer.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` | node | Footer navigation links
 `container` |  | ```Footer.WidthContainer``` | func | Override the default footer container component.<br/>`children`, `copyright` and `meta` will be placed inside this component.
 `copyright` |  | ```undefined``` | shape[object Object] | Copyright information
 `meta` |  | ```undefined``` | node | Meta text and links


FormGroup
=========

### Import
```js
  import FormGroup from '@govuk-react/form-group';
```
<!-- STORY -->

### Usage

Simple
```jsx
import Checkbox from '@govuk-react/checkbox';

<FormGroup>
  <Checkbox name="group-1">Example</Checkbox>
</FormGroup>
```

### References
- https://github.com/alphagov/govuk-frontend/blob/master/src/objects/_form-group.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 
 `error` |  | ```false``` | bool | 


GridCol
=======

### Import
```js
  import GridCol from '@govuk-react/grid-col';
```
<!-- STORY -->

Should always be wrapped by `GridRow`. Will always render a column at full width if
the browser width is below the `TABLET` breakpoint.

NB our grid is based on flex-box, which differs from govuk-frontend, which instead uses
floats, however it is otherwise similar to use.

### Usage

Simple
```jsx
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

<Fragment>
  <GridRow>
    <GridCol>
      ...
    </GridCol>
  </GridRow>
  <GridRow>
    <GridCol setWidth="one-half">
      ...
    </GridCol>
    <GridCol setWidth="one-quarter">
      ...
    </GridCol>
    <GridCol setWidth="one-quarter">
      ...
    </GridCol>
  <GridRow>
    <GridCol setWidth="one-third">
      ...
    </GridCol>
    <GridCol setWidth="two-thirds">
      ...
    </GridCol>
  </GridRow>
  <GridRow>
    <GridCol setWidth="one-third" setDesktopWidth="one-quarter">
      ...
    </GridCol>
    <GridCol setWidth="two-thirds" setDesktopWidth="auto">
      ...
    </GridCol>
  </GridRow>
</Fragment>
```

### References:
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` | node | GridCol content
 `columnFull` |  | ```false``` | bool | Dimension setting for the column (deprecated)
 `columnOneHalf` |  | ```false``` | bool | Dimension setting for the column (deprecated)
 `columnOneQuarter` |  | ```false``` | bool | Dimension setting for the column (deprecated)
 `columnOneThird` |  | ```false``` | bool | Dimension setting for the column (deprecated)
 `columnThreeQuarters` |  | ```false``` | bool | Dimension setting for the column (deprecated)
 `columnTwoThirds` |  | ```false``` | bool | Dimension setting for the column (deprecated)
 `setDesktopWidth` |  | ```undefined``` | union(string \| number \| enum) | Explicitly set desktop column to width using value or descriptive string<br/>(`one-quarter`, `one-third`, `one-half`, `two-thirds`, `three-quarters`, `full`)
 `setWidth` |  | ```undefined``` | union(string \| number \| enum) | Explicitly set column to width using value or descriptive string<br/>(`one-quarter`, `one-third`, `one-half`, `two-thirds`, `three-quarters`, `full`)


GridRow
=======

### Import
```js
  import GridRow from '@govuk-react/grid-row';
```
<!-- STORY -->

### Usage

Example
* https://codesandbox.io/s/x917knwm4z

Simple
```jsx
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

<Fragment>
  <GridRow>
    <GridCol>
      ...
    </GridCol>
  </GridRow>
</Fragment>
```

### References:
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | One or more GridCol nodes


Header
======

### Import
```js
  import Header from '@govuk-react/header';
```
<!-- STORY -->

### Usage

This component is DEPRECATED.

Please use the `Heading` component instead.

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `level` |  | ```1``` | number | Semantic heading level value between 1 and 6
 `size` |  | ```undefined``` | enum(...Object.keys(HEADING_SIZES) \| ...Object.keys(TYPOGRAPHY_SCALE)) | Visual size level, accepts:<br/>   `XLARGE`, `LARGE`, `MEDIUM`, `SMALL`, `XL`, `L`, `M`, `S`<br/>   or a numeric size that fits in the GDS font scale list


Heading
=======

### Import
```js
  import Heading from '@govuk-react/heading';
```
<!-- STORY -->

### Usage


Simple
```jsx
<Heading>Heading text</Heading>
```

To pick different heading levels it is recommended to use the shortcut versions as
that will pick the appropriate tag as well as set the appropriate corresponding font size.

Using shortcuts
```jsx
import { H1, H2, H3, H4, H5, H6 } from "@govuk-react/heading";

<H1>h1</H1>
<H2>h2</H2>
<H3>h3</H3>
<H4>h4</H4>
<H5>h5</H5>
<H6>h6</H6>
```

Differing sizes
```jsx
<H6 size={80}>
  H6 with font size 80
</H6>
<Heading as="h2" size="SMALL">
  Heading as h2 with SMALL size
</Heading>
<H3 size="LARGE">H3 with LARGE size</H3>
```

Props pass through
```jsx
<Heading onClick={() => { console.log('clicked'); }}>Click me</Heading>
```

### References:
- https://design-system.service.gov.uk/styles/typography/#headings
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_typography.scss
- https://github.com/alphagov/govuk-frontend/blob/master/src/core/_typography.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `as` |  | ```undefined``` | string | Semantic heading tag to use (e.g. 'h3')<br/>By default element used will be an 'h1'
 `level` |  | ```undefined``` | number | Semantic heading level value between 1 and 6 (deprecated)
 `size` |  | ```'XLARGE'``` | enum(...Object.keys(HEADING_SIZES) \| ...Object.keys(TYPOGRAPHY_SCALE)) | Visual size level, accepts:<br/>   `XLARGE`, `LARGE`, `MEDIUM`, `SMALL`, `XL`, `L`, `M`, `S`<br/>   or a numeric size that fits in the GDS font scale list


HintText
========

### Import
```js
  import HintText from '@govuk-react/hint-text';
```
<!-- STORY -->

### Usage


Simple
```jsx
<HintText>Example</HintText>
```

### References
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/hint/_hint.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Text for the hint


InputField
==========

### Import
```js
  import InputField from '@govuk-react/input-field';
```
<!-- STORY -->

### Usage

Simple
```jsx
<InputField name="group0">National Insurance number</InputField>
```

Input with hint text
```jsx
<InputField
   name="group1"
   hint={[
     'It’s on your National Insurance card, benefit letter, payslip or P60.',
     <br />,
     'For example, ‘QQ 12 34 56 C’.',
   ]}
 >
   National Insurance number
 </InputField>
```

Input with hint text & error
```jsx
 const meta = {
   touched: true,
   error: 'Example',
 };

 <InputField
   name="group1"
   hint={[
     'It’s on your National Insurance card, benefit letter, payslip or P60.',
     <br />,
     'For example, ‘QQ 12 34 56 C’.',
   ]}
   meta={meta}
 >
   National Insurance number
 </InputField>
```
### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/input/_input.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 
 `hint` |  | ```undefined``` | node | 
 `input` |  | ```{}``` | shape[object Object] | 
 `meta` |  | ```{}``` | shape[object Object] | 


Input
=====

### Import
```js
  import Input from '@govuk-react/input';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Input />
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/

### TODO:
- Remove `errorColor` and provide examples on how to extend the component

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `type` |  | ```'text'``` | string | HTML `<Input />` type


InsetText
=========

### Import
```js
  import InsetText from '@govuk-react/inset-text';
```
<!-- STORY -->

### Usage

```jsx
<InsetText>
 Hello
</InsetText>
```

### References
- https://design-system.service.gov.uk/components/inset-text/
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/inset-text/_inset-text.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 


LabelText
=========

### Import
```js
  import LabelText from '@govuk-react/label-text';
```
<!-- STORY -->

### Usage

Simple
```jsx
<LabelText>Example</LabelText>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Text for the label


Label
=====

### Import
```js
  import Label from '@govuk-react/label';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Label>Example</Label>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Text for the label
 `error` |  | ```false``` | bool | Apply error state styling to the component


Layout
======

### Import
```js
  import Layout from '@govuk-react/layout';
```
<!-- STORY -->

THIS COMPONENT IS NO LONGER REQUIRED TO ACHIEVE LAYOUT;
1. `GridCol` contains the required gutters, we do not need to provide additional gutter
to build an accurate grid layout.

2. `GridRow` contains the required `display: flex;` and associated properties for `GridCol`.

3. `Main` contains the required properties to center a container that matches up with `TopNav`
and house the remaining body of content for the page.

If you feel you may still need a `Layout` component, please do raise a ticket on [Github](https://github.com/govuk-react/govuk-react/issues/177)

### Usage

This component provides default padding.
You can use this component to wrap Grid components however it is not required.

Simple usage
```jsx
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

<Layout>
  <GridRow>
    <GridCol>
      ...
    </GridCol>
  </GridRow>
</Layout>
```

### References:
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | GridRow and GridCol children nodes


LeadParagraph
=============

### Import
```js
  import LeadParagraph from '@govuk-react/lead-paragraph';
```
<!-- STORY -->

### Usage


Simple
```jsx
<LeadParagraph>LeadParagraph example</LeadParagraph>
```

### References
- https://design-system.service.gov.uk/styles/typography/#paragraphs

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Text in the Lead paragraph


Link
====

### Import
```js
  import Link from '@govuk-react/link';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Link href="/some/page">Example</Link>
```

It is possible to use this component to style a link from react-router, or reach-router
as follows:
```jsx
import { Link as RouterLink } from 'react-router-dom';

<Link as={RouterLink} to="destination">Router example</Link>
```

NB if no link destination is set then the link styling will not be applied

### References
- https://design-system.service.gov.uk/styles/typography/#links
- https://github.com/alphagov/govuk-frontend/blob/master/src/core/_links.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | link contents
 `muted` |  | ```false``` | bool | show link in a "muted" (grey) style
 `noVisitedState` |  | ```false``` | bool | ensure there is no "visited" style
 `textColour` |  | ```false``` | bool | ensure link is shown in plain text colour


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


ListNavigation
==============

### Import
```js
  import ListNavigation from '@govuk-react/list-navigation';
```
<!-- STORY -->

### Usage

Simple
```jsx
import Link from '@govuk-react/link';

<ListNavigation>
  <Link href="/section-a">Section A</Link>
  <Link href="/section-b">Section B</Link>
</ListNavigation>
```

Using React Router with `Link` component for GDS styled links
```jsx
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@govuk-react/link';

<ListNavigation listStyleType="circle">
  <Link as={RouterLink} to="/link-a">Link A</Link>
  <Link as={RouterLink} to="/link-b">Link B</Link>
</ListNavigation>
```

### References:
- https://govuk-static.herokuapp.com/component-guide/government_navigation

### TODO:
- Consider using the context API https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md
- Fix active state overlaping siblings

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | List navigation content
 `listStyleType` |  | ```undefined``` | string | CSS value for `list-style-type`


LoadingBox
==========

### Import
```js
  import LoadingBox from '@govuk-react/loading-box';
```
<!-- STORY -->

### Usage

Simple
```jsx
<LoadingBox loading>
  Lorem ipsum dolor sit amet
</LoadingBox>
```

Loading box complex
```jsx
<LoadingBox
   loading={false}
   backgroundColor={'#fff'}
   timeIn={800}
   timeOut={200}
   backgroundColorOpacity={0.85}
   spinnerColor={'#000'}
>
  Lorem ipsum dolor sit amet
</LoadingBox>
```

### References:
- https://govuk-loader-prototype.herokuapp.com/components/loader

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `backgroundColor` |  | ```WHITE``` | string | Background color (3 or 6 Hex char) of loading spinner overlay when loading is true.
 `backgroundColorOpacity` |  | ```0.85``` | number | Opacity of loading spinner backgroud colour when loading is true
 `children` | true | `````` | node | One or more children nodes that loading box will overlay
 `loading` |  | ```false``` | bool | Whether loading is currently set to true or false
 `spinnerColor` |  | ```BLACK``` | string | Color (3 or 6 Hex char) of loading spinner
 `timeIn` |  | ```800``` | number | Length of fade-in animation in milliseconds
 `timeOut` |  | ```200``` | number | Length of fade-out animation in milliseconds
 `title` |  | ```undefined``` | string | Loading spinner title text


Main
====

### Import
```js
  import Main from '@govuk-react/main';
```
<!-- STORY -->

Provides a container which aligns to the topNav component,
is centered, and provides top padding.


### Usage

Example
* https://codesandbox.io/s/x917knwm4z

Simple
```jsx
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

<Main>
  <GridRow>
    <GridCol>
      ...
    </GridCol>
  </GridRow>
</Main>
```

### TODO
- Implement the 1020px min-width MQ to constants

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` | node | Child nodes for the page being built


MultiChoice
===========

### Import
```js
  import MultiChoice from '@govuk-react/multi-choice';
```
<!-- STORY -->

### Usage

Simple
```jsx
import Radio from '@govuk-react/radio';

<MultiChoice label="example">
   <Radio name="group1" inline>
     Yes
   </Radio>
   <Radio name="group1" inline>
     No
   </Radio>
</MultiChoice>
```

### References:
- https://govuk-elements.herokuapp.com/errors/
- https://govuk-elements.herokuapp.com/errors/example-form-validation-single-question-radio

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 
 `hint` |  | ```undefined``` | string | 
 `label` | true | `````` | node | 
 `meta` |  | ```{}``` | shape[object Object] | 


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


Page
====

### Import
```js
  import Page from '@govuk-react/page';
```
<!-- STORY -->

### Usage

Simple
```jsx
import BackLink from '@govuk-react/back-link';
import { H1 } from '@govuk-react/heading';

<Page beforeChildren={<BackLink href="#" />}>
  <H1>Page title</H1>
</Page>
```

### References
- https://design-system.service.gov.uk/styles/page-template/
- https://design-system.service.gov.uk/styles/layout/#page-wrappers
- https://github.com/alphagov/govuk-frontend/blob/master/src/objects/_main-wrapper.scss
- https://github.com/alphagov/govuk-frontend/blob/master/src/objects/_width-container.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `beforeChildren` |  | ```undefined``` | node | Content that needs to appear outside the main page wrapper (see `main`).<br/>For example: A back link component, breadcrumbs, phase banner component
 `children` |  | ```undefined``` | node | Page contents
 `container` |  | ```Page.WidthContainer``` | func | Override the default page container component.<br/>`beforeChildren` and `children` (wrapped in `main`) will be placed inside this component.
 `footer` |  | ```undefined``` | node | Override the default page footer component.
 `header` |  | ```<TopNav />``` | node | Override the default page header component.
 `id` |  | ```'content'``` | string | ID for page content
 `main` |  | ```Page.Main``` | func | Override the default wrapper component for main page content


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


Panel
=====

### Import
```js
  import Panel from '@govuk-react/panel';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Panel title="Application complete" />
```

Panel with header and HTML body
```jsx
<Panel title="Application complete">
  Your reference number<br />
  <strong>HDJ2123F</strong>
</Panel>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/panel

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` | node | Panel body text
 `title` | true | `````` | string | Panel title text


Paragraph
=========

### Import
```js
  import Paragraph from '@govuk-react/paragraph';
```
<!-- STORY -->

Supports bold, italic, links, inline code and block code in Markdown ONLY.
This is to ensure we follow GDS as closely as possible.
It is worth noting that GDS recommends avoiding bold and italics.

Bold should be avoided in general as not only can it dilute the message, it will also
cause Screenreaders to increase the volume of any bold text to reflect the increase in
font-weight.

### Usage

Simple
```jsx
<Paragraph>Lorem `ipsum` **dolor** sit *amet* with [some link](https://google.com)</Paragraph>
```

As supporting text
```jsx
<Paragraph supportingText>Lorem `ipsum` **dolor** sit *amet* with [some link](https://google.com)</Paragraph>
```

With a block of code
````jsx
<Paragraph>
  Some other text...
  ```
  Some Code Block
  ```
  Some more text.
</Paragraph>
````

With React router

```jsx
const ReactRouterLinkRenderer = ({ href, children }) => (
  href.match(/^\//)
    ? <Link to={href}>{children}</Link>
    : <a href={href}>{children}</a>
);

<Paragraph linkRenderer={ReactRouterLinkRenderer}>
  ...
</Paragraph>
```

### References
- https://govuk-elements.herokuapp.com/typography/#typography-body-copy

### TODO
- Add test for supporting text
- Review code snippet styling
- Remove magic numbers from inline code styling blocks

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```''``` | node | Text content supporting markdown
 `linkRenderer` |  | ```props => <Link {...props} />``` | func | 
 `supportingText` |  | ```false``` | bool | Is this paragraph supporting text for another element?


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


Radio
=====

### Import
```js
  import Radio from '@govuk-react/radio';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Radio name="group1">Radio button text example</Radio>
```

Radio stacked
```jsx
 <div>
   <Radio name="group1">Waste from animal carcasses</Radio>
   <Radio name="group1">Waste from mines or quarries</Radio>
   <Radio name="group1">Farm or agricultural waste</Radio>
 </div>
```

Radio inline
```jsx
 <div>
   <Radio name="group1" inline>
     Yes
   </Radio>
   <Radio name="group1" inline>
     No
   </Radio>
 </div>
```

Radio disabled
```jsx
 <div>
   <Radio name="group1" disabled="disabled">
     Disabled checkbox option
   </Radio>
 </div>
 ```

Radio preselected
```jsx
 <div>
   <Radio name="group1" checked>
     Farm or agricultural waste
   </Radio>
 </div>
```

Radio preselected & disabled
```jsx
 <div>
   <Radio name="group1" disabled="disabled" checked>
     Farm or agricultural waste
   </Radio>
 </div>
```
Radio with hint text
```jsx
<div>
  <Radio
   name="group1"
   hint="You'll have a user ID if you've registered for Self Assessment or filed a tax return
         online before."
  >
    Sign in with Government Gateway
  </Radio>
</div>
```
### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/radios/_radios.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 
 `className` |  | ```undefined``` | string | 
 `hint` |  | ```undefined``` | node | 
 `inline` |  | ```false``` | bool | 


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


SearchBox
=========

### Import
```js
  import SearchBox from '@govuk-react/search-box';
```
<!-- STORY -->

### Usage

Simple
```jsx
import Layout from '@govuk-react/layout';
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

<Layout>
   <GridRow>
     <GridCol>
       <SearchBox placeholder="Search GOV.UK">SearchBox example</SearchBox>
     </GridCol>
   </GridRow>
 </Layout>
```

### References:
- https://govuk-static.herokuapp.com/component-guide/search

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `placeholder` |  | ```undefined``` | string | 


SectionBreak
============

### Import
```js
  import SectionBreak from '@govuk-react/section-break';
```
<!-- STORY -->

### Usage

Simple
```jsx
<SectionBreak>Example</SectionBreak>
```

### References
- https://design-system.service.gov.uk/styles/typography/#section-break
- https://github.com/alphagov/govuk-frontend/blob/master/src/core/_section-break.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `level` |  | `````` | enum('XL' \| 'XLARGE' \| 'L' \| 'LARGE' \| 'M' \| 'MEDIUM') | 
 `visible` |  | ```undefined``` | bool | 


Select
======

### Import
```js
  import Select from '@govuk-react/select';
```
<!-- STORY -->

### Usage

Simple
```jsx
 <Select name="group1" label="This is a label">
    <option value="0">GOV.UK elements option 1</option>
    <option value="1">GOV.UK elements option 2</option>
    <option value="2">GOV.UK elements option 3</option>
  </Select>
```

Select with hint text
```jsx
<Select
   name="group1"
   label="This is a label"
   hint={[
     'This is and example of hintText/description of what we need from you.',
   ]}
 >
   <option value="0">GOV.UK elements option 1</option>
   <option value="1">GOV.UK elements option 2</option>
   <option value="2">GOV.UK elements option 3</option>
 </Select>
```

Select with hint text & error
```jsx
const meta = {
  touched: true,
  error: 'Example',
};

<Select
   name="group1"
   label="This is a label"
   hint={[
     'This is and example of hintText/description of what we need from you.',
   ]}
   meta={meta}
 >
   <option value="0">GOV.UK elements option 1</option>
   <option value="1">GOV.UK elements option 2</option>
   <option value="2">GOV.UK elements option 3</option>
 </Select>
```

Standalone input with inline label
```jsx
import LabelText from '@govuk-react/label-text';
import { SelectInput } '@govuk-react/select';

<label>
   <LabelText>Sort by:&nbsp;
     <SelectInput>
       <option value="0">People</option>
       <option value="1">Animals</option>
       <option value="2">Vegetables</option>
     </SelectInput>
   </LabelText>
 </label>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/select

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 
 `errorText` |  | ```undefined``` | string | 
 `hint` |  | ```undefined``` | string | 
 `input` |  | ```{}``` | shape[object Object] | 
 `label` | true | `````` | string | 
 `meta` |  | ```{}``` | shape[object Object] | 


SkipLink
========

### Import
```js
  import SkipLink from '@govuk-react/skip-link';
```
<!-- STORY -->

### Usage

Use the skip link component to help keyboard-only users skip to the main content on a page.

Simple
```jsx
<SkipLink href="#main-content">Skip to main content</SkipLink>
```

### References
- https://design-system.service.gov.uk/components/skip-link/
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/skip-link

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```'Skip to main content'``` | node | 
 `href` |  | ```'#content'``` | string | 


SupportingHeader
================

### Import
```js
  import SupportingHeader from '@govuk-react/supporting-header';
```
<!-- STORY -->

### Usage

This component is DEPRECATED.

Please use the `Caption` component instead.

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | string | Text to be rendered as a supporting header


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


Tabs
====

### Import
```js
  import Tabs from '@govuk-react/tabs';
```
<!-- STORY -->

### Import
```js
import Tabs from '@govuk-react/tabs';
```

##### Simple Example
```js
class App extends Component {
  constructor() {
    super();
    this.state = { tabIndex: 0 };
    this.setTabIndex = this.setTabIndex.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setTabIndex(newTabIndex) {
    this.setState({
      tabIndex: newTabIndex,
    }));
  }

  handleClick(e, index) {
    const mql = window.matchMedia(`(min-width: ${BREAKPOINTS.TABLET})`);
    if (mql.matches) {
      e.preventDefault();
    }
    return this.setTabIndex(index);
  }

  render() {
    const { tabIndex } = this.state;
    return (
      <Tabs>
        <Tabs.Title>Content</Tabs.Title>
        <Tabs.List>
          <Tabs.Tab
            onClick={(event) => this.handleClick(event, 0)}
            selected={tabIndex === 0}
            href="#first-panel"
          >
            Title 1
          </Tabs.Tab>
          <Tabs.Tab
            onClick={(event) => this.handleClick(event, 1)}
            selected={tabIndex === 1}
            href="#second-panel"
          >
            Title 2
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel selected={tabIndex === 0} id="first-panel">Panel content 1</Panel>
        <Tabs.Panel selected={tabIndex === 1} id="second-panel" >Panel content 2</Panel>
      </Tabs>
    );
  }
}
```

##### Hooks Example
```js
const App = ({ defaultIndex }) => {
  const [tabIndex, setTabIndex] = React.useState(defaultIndex);

  const handleTabChange = newTabIndex => setTabIndex(newTabIndex);

  function handleClick({ event: e, index }) {
    const mql = window.matchMedia(`(min-width: ${BREAKPOINTS.TABLET})`);
    if (mql.matches) {
      e.preventDefault();
    }
    return handleTabChange(index);
  }

  return (
    <Tabs>
      <Tabs.Title>Content</Tabs.Title>
      <Tabs.List>
       {[
          {
            content: 'Title 1',
            href: '#first-panel',
          },
          {
            content: 'Title 2',
            href: '#second-panel',
          },
        ].map(({ content, href }, index) => (
          <Tabs.Tab
            onClick={(event) => handleClick({ event, index })}
            selected={tabIndex === index}
            href={href}
          >
           {content}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      {[
        {
          content: 'Panel content 1',
          id: 'first-panel',
        },
        {
          content: 'Panel content 2',
          id: 'second-panel',
        },
      ].map(({ content, id }, index) => (
        <Tabs.Panel
          selected={tabIndex === index}
          id={id}
        >
         {content}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
}

```


### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/tabs
- https://design-system.service.gov.uk/components/tabs/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | child components that will appear in the Tabs section


Tag
===

### Import
```js
  import Tag from '@govuk-react/tag';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Tag>beta</Tag>
```

### References:
- https://design-system.service.gov.uk/components/tag/
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/tag/_tag.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `inactive` |  | ```false``` | bool | 


TextArea
========

### Import
```js
  import TextArea from '@govuk-react/text-area';
```
<!-- STORY -->

### Usage

Simple
```jsx
<TextArea name="group1">Description of what you saw</TextArea>
```

TextArea with hint text
```jsx
<TextArea name="group1" hint={['Enter as many words as you like']}>
  Description of what you saw
</TextArea>
```

TextArea with hint text & error
```jsx
const meta = {
  touched: true,
  error: 'Example',
};

<TextArea
   name="group1"
   hint={['Enter as many words as you like']}
   meta={meta}
 >
   Description of what you saw
 </TextArea>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/textarea

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 
 `hint` |  | ```undefined``` | string | 
 `input` |  | ```{}``` | shape[object Object] | 
 `meta` |  | ```{}``` | shape[object Object] | 


TopNav
======

### Import
```js
  import TopNav from '@govuk-react/top-nav';
```
<!-- STORY -->

### Usage

TopNav with logo, service title and navigation items
```jsx
import CrownIcon from '@govuk-react/icon-crown';
import SearchBox from '@govuk-react/search-box';
import TopNav, { asNavLinkAnchor, asTopNavAnchor } from '@govuk-react/top-nav';

const LogoAnchor = asTopNavAnchor('a');
const NavAnchor = asNavLinkAnchor('a');

const link = 'https://example.com?=1';

const Company = (
  <LogoAnchor href={link} target="new">
    <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
  </LogoAnchor>
);

const ServiceTitle = (
  <NavAnchor href={link} target="new">
    Service Title
  </NavAnchor>
);

const Search = (
  <SearchBox placeholder="Search">hi</SearchBox>
);

<TopNav company={Company} serviceTitle={ServiceTitle} search={Search} active={0}>
  <NavAnchor href="https://example.com?q=catdog" target="new">Navigation item #1</NavAnchor>
  <NavAnchor href="https://example.com?q=dogcat" target="new">Navigation item #2</NavAnchor>
</TopNav>
```

```jsx
import { BrowserRouter, Link } from 'react-router-dom';
import CrownIcon from '@govuk-react/icon-crown';
import TopNav, { asLogoAnchor, asNavLinkAnchor } from '@govuk-react/top-nav';

const LogoLink = asTopNavAnchor(Link);
const NavLink= asNavLinkAnchor(Link);

const reactRouterLink = '/section';
const CompanyLink = (
  <LogoLink to={reactRouterLink}>
    <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
  </LogoLink>
);

const ServiceTitleLink = (
  <NavLink to={reactRouterLink}>
    Service Title
  </NavLink>
);

<BrowserRouter>
  <TopNav company={CompanyLink} serviceTitle={ServiceTitleLink} />
</BrowserRouter>
```

### References:
- http://alphagov.github.io/govuk_template/example-proposition-menu.html
- https://design-system.service.gov.uk/components/header/

### TODO:
- TODO: this component is a work in progress and needs to more closely match existing examples
- TODO: is TopNav the right name? What's it called in other GDS styles/patterns?
- TODO: (The name Header is ambiguous)
- TODO: #205 Use context api and/or render props for `active` navigation items
- TODO: Vertical alignment here needs some work, perhaps should be its own component
- TODO: Icon should be lined up with font baseline, e.g. vertical-align: baseline

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `bgColor` |  | ```BLACK``` | string | Top nav background color
 `children` |  | ```undefined``` | node | List Navigation items with anchor tags e.g. NavAnchor components
 `color` |  | ```WHITE``` | string | Top nav text color
 `company` |  | ```<IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</IconTitle>``` | node | Company component e.g. GOV UK
 `defaultOpen` |  | ```false``` | bool | Is the mobile navigation open by default?
 `search` |  | ```false``` | node | Search component
 `serviceTitle` |  | ```undefined``` | node | Service title component e.g. Food Standards Authority


UnorderedList
=============

### Import
```js
  import UnorderedList from '@govuk-react/unordered-list';
```
<!-- STORY -->

### Usage

Simple
```jsx
import UnorderedList from '@govuk-react/unordered-list';
import ListItem from '@govuk-react/list-item';

<UnorderedList>
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</UnorderedList>
```

with Roman
```jsx
import UnorderedList from '@govuk-react/unordered-list';
import ListItem from '@govuk-react/list-item';

<UnorderedList listStyleType="lower-roman">
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</UnorderedList>
```

### References
- https://design-system.service.gov.uk/styles/typography/#lists
- https://github.com/alphagov/govuk-frontend/blob/master/src/core/_lists.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | One or more ListItem components
 `listStyleType` |  | ```undefined``` | string | CSS value for `list-style-type`, or `bullet` or `number` to match govuk-frontend


VisuallyHidden
==============

### Import
```js
  import VisuallyHidden from '@govuk-react/visually-hidden';
```
<!-- STORY -->

### Usage

This component is primarily intended to be used for material that will be visually hidden
but visible to screen-reader devices.

Simple
```jsx
<VisuallyHidden>Example</VisuallyHidden>
```

### References
- https://github.com/alphagov/govuk-frontend/blob/master/src/helpers/_visually-hidden.scss
- https://github.com/alphagov/govuk-frontend/blob/master/src/utilities/_visually-hidden.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Content to be hidden
 `focusable` |  | ```false``` | bool | Allow component to be focusable, and thus become visible
 `important` |  | ```true``` | bool | Set styles with `!important`


WarningText
===========

### Import
```js
  import WarningText from '@govuk-react/warning-text';
```
<!-- STORY -->

### Usage

Simple
```jsx
<WarningText>Example</WarningText>
```

### References:
- https://govuk-elements.herokuapp.com/typography/#typography-warning-text
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/warning-text

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Warning text to be displayed


