import React, { useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import Link from '@govuk-react/link';
import ListNavigation from '@govuk-react/list-navigation';
import Paragraph from '@govuk-react/paragraph';

import Accordion from '.';

const sharedPropTypes = {
  initialState: PropTypes.shape({}).isRequired,
};

const constructFull = ({ bool, state }) =>
  Object.keys(state).reduce(
    (prev, key) => ({
      ...prev,
      [key]: bool,
    }),
    {}
  );

const reducer = (state, newState) => ({ ...state, ...newState });

const useLegacyState = state => useReducer(reducer, state);

const checkOpen = state => Object.values(state).every(Boolean);

const useAccordion = initialState => {
  const [state, setState] = useLegacyState(initialState);

  const objOpen = useMemo(() => constructFull({ bool: true, state }), [initialState, state.length]);
  const objClose = useMemo(() => constructFull({ bool: false, state }), [initialState, state.length]);

  const areAllOpen = useMemo(() => checkOpen(state), [state]);

  const toggleAll = e => {
    e.preventDefault();
    return setState(!areAllOpen ? objOpen : objClose);
  };

  const individualAccordionSetState = property => () =>
    setState({
      [property]: !state[property],
    });

  return {
    areAllOpen,
    individualAccordionSetState,
    toggleAll,
    state,
  };
};

const ExampleWithoutSummaries = ({ initialState }) => {
  const { areAllOpen, individualAccordionSetState, toggleAll, state } = useAccordion(initialState);

  return (
    <Accordion>
      <Accordion.OpenAll href="#" onClick={toggleAll}>
        {`${areAllOpen ? 'Close' : 'Open'} all`}
      </Accordion.OpenAll>
      <Accordion.Group
        heading="Writing well for the web"
        expanded={state.accordionOne}
        onClick={individualAccordionSetState('accordionOne')}
      >
        <Paragraph mb={0}>This is the content for writing well for the web.</Paragraph>
      </Accordion.Group>
      <Accordion.Group
        heading="Writing well for specialists"
        expanded={state.accordionTwo}
        onClick={individualAccordionSetState('accordionTwo')}
      >
        <Paragraph mb={0}>This is the content for writing well for the specialists.</Paragraph>
      </Accordion.Group>
      <Accordion.Group
        heading="Know your audience"
        expanded={state.accordionThree}
        onClick={individualAccordionSetState('accordionThree')}
      >
        <Paragraph mb={0}>This is the content for Know you audience.</Paragraph>
      </Accordion.Group>
      <Accordion.Group
        heading="How people read"
        expanded={state.accordionFour}
        onClick={individualAccordionSetState('accordionFour')}
      >
        <Paragraph mb={0}>This is the content for How people read.</Paragraph>
      </Accordion.Group>
    </Accordion>
  );
};

ExampleWithoutSummaries.propTypes = sharedPropTypes;

const ExampleWithSummaries = ({ initialState }) => {
  const { areAllOpen, individualAccordionSetState, toggleAll, state } = useAccordion(initialState);

  return (
    <Accordion>
      <Accordion.OpenAll href="#" onClick={toggleAll}>
        {`${areAllOpen ? 'Close' : 'Open'} all`}
      </Accordion.OpenAll>
      <Accordion.Group
        heading="Understanding agile project management"
        summary="Introductions, methods, core features."
        expanded={state.accordionOne}
        onClick={individualAccordionSetState('accordionOne')}
      >
        <ListNavigation listStyleType="none">
          {[
            'Agile and government services: an introduction',
            'Agile methods: an introduction',
            'Core principles of agile',
          ].map(elem => (
            <Link key={elem} href={`#myprefix-${elem}`}>
              {elem}
            </Link>
          ))}
        </ListNavigation>
      </Accordion.Group>
      <Accordion.Group
        heading="Working with agile methods"
        summary="Workspaces, tools and techniques, user stories, planning."
        expanded={state.accordionTwo}
        onClick={individualAccordionSetState('accordionTwo')}
      >
        <ListNavigation listStyleType="none">
          {[
            'Creating an agile working environment',
            'Agile tools and techniques',
            'Set up a team wall',
            'Writing user stories',
            'Planning in agile',
            'Deciding on priorities',
            'Developing a roadmap',
          ].map(elem => (
            <Link key={elem} href={`#myprefix-${elem}`}>
              {elem}
            </Link>
          ))}
        </ListNavigation>
      </Accordion.Group>
      <Accordion.Group
        heading="Governing agile services"
        summary="Principles, measuring progress, spending money."
        expanded={state.accordionThree}
        onClick={individualAccordionSetState('accordionThree')}
      >
        <ListNavigation listStyleType="none">
          {[
            'How the discovery phase works',
            'Measuring and reporting progress',
            'Spend controls: check if you need approval to spend money on a service',
            'Spend controls: apply for approval to spend money on a service',
            'Working across organisational boundaries',
          ].map(elem => (
            <Link key={elem} href={`#myprefix-${elem}`}>
              {elem}
            </Link>
          ))}
        </ListNavigation>
      </Accordion.Group>
      <Accordion.Group
        heading="Phases of an agile project"
        summary="Discovery, alpha, beta, live and retirement."
        expanded={state.accordionFour}
        onClick={individualAccordionSetState('accordionFour')}
      >
        <ListNavigation listStyleType="none">
          {[
            'Governance principles for agile service delivery',
            'How the alpha phase works',
            'How the beta phase works',
            'How the live phase works',
            'Retiring your service',
          ].map(elem => (
            /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
            <Link key={elem} href={`#myprefix-${elem}`}>
              {elem}
            </Link>
          ))}
        </ListNavigation>
      </Accordion.Group>
    </Accordion>
  );
};

ExampleWithSummaries.propTypes = sharedPropTypes;

class AccordionClassComponent extends React.Component {
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
        {}
      )
    );
  }

  individualAccordionSetState(property) {
    return () =>
      this.setState(state => ({
        [property]: !state[property],
      }));
  }

  render() {
    this.isAllOpen = checkOpen(this.state);
    return (
      <Accordion>
        <Accordion.OpenAll href="#" onClick={this.toggleAll}>
          {`${this.isAllOpen ? 'Close' : 'Open'} all`}
        </Accordion.OpenAll>
        <Accordion.Group
          heading="Writing well for the web"
          expanded={this.state.accordionOne}
          onClick={this.individualAccordionSetState('accordionOne')}
        >
          <Paragraph mb={0}>This is the content for writing well for the web.</Paragraph>
        </Accordion.Group>
        <Accordion.Group
          heading="Writing well for specialists"
          expanded={this.state.accordionTwo}
          onClick={this.individualAccordionSetState('accordionTwo')}
        >
          <Paragraph mb={0}>This is the content for writing well for the specialists.</Paragraph>
        </Accordion.Group>
        <Accordion.Group
          heading="Know your audience"
          expanded={this.state.accordionThree}
          onClick={this.individualAccordionSetState('accordionThree')}
        >
          <Paragraph mb={0}>This is the content for Know you audience.</Paragraph>
        </Accordion.Group>
        <Accordion.Group
          heading="How people read"
          expanded={this.state.accordionFour}
          onClick={this.individualAccordionSetState('accordionFour')}
        >
          <Paragraph mb={0}>This is the content for How people read.</Paragraph>
        </Accordion.Group>
      </Accordion>
    );
  }
}

export { AccordionClassComponent, ExampleWithoutSummaries, ExampleWithSummaries };
