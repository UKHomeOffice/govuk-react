import React from 'react';
import Main from '@govuk-react/main';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import { AccordionClassComponent, ExampleWithoutSummaries, ExampleWithSummaries } from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Accordion', module);
const examples = storiesOf('Accordion/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));

examples.addDecorator(WithDocsCustom());

stories.add('Component default', () => (
  <Main>
    <ExampleWithSummaries
      initialState={{
        accordionOne: false,
        accordionTwo: false,
        accordionThree: false,
        accordionFour: false,
      }}
    />
  </Main>
));

examples.add('without summaries', () => (
  <Main>
    <ExampleWithoutSummaries
      initialState={{
        accordionOne: false,
        accordionTwo: false,
        accordionThree: false,
        accordionFour: false,
      }}
    />
  </Main>
));

examples.add('with summaries', () => (
  <Main>
    <ExampleWithSummaries
      initialState={{
        accordionOne: false,
        accordionTwo: false,
        accordionThree: false,
        accordionFour: false,
      }}
    />
  </Main>
));

examples.add('as class component', () => (
  <Main>
    <AccordionClassComponent />
  </Main>
));
