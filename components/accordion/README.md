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


