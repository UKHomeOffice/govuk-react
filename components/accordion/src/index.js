import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BORDER_COLOUR } from 'govuk-colours';
import { spacing } from '@govuk-react/lib';

import Group from './molecules/group';
import Icon from './atoms/icon';
import OpenAll from './atoms/open-all';
import SectionButton from './atoms/section-button';
import SectionContent from './atoms/section-content';
import SectionHeader from './atoms/section-header';
import SectionHeading from './atoms/section-heading';
import SectionSummary from './atoms/section-summary';

const AccordionContainer = styled('div')(
  spacing.responsive({ size: 6, property: 'margin', direction: 'bottom' }),
  {
    borderBottom: `1px solid ${BORDER_COLOUR}`,
  },
  spacing.withWhiteSpace()
);

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 *
 * import Accordion from '@govuk-react/accordion'
 *
 * const checkOpen = state => Object.values(state).every(Boolean);
 *
 * class AccordionComponent extends React.Component {
 *   constructor() {
 *     super();
 *     this.state = {
 *       accordionOne: false,
 *       accordionTwo: false,
 *       accordionThree: false,
 *       accordionFour: false,
 *     };
 *     this.individualAccordionSetState = this.individualAccordionSetState.bind(this);
 *     this.toggleAll = this.toggleAll.bind(this);
 *   }
 *
 *   toggleAll() {
 *     return this.setState(state =>
 *       Object.keys(state).reduce(
 *         (prev, key) => ({
 *           ...prev,
 *           [key]: !this.isAllOpen,
 *         }),
 *         {},
 *     ));
 *   }
 *
 *   individualAccordionSetState(property) {
 *     return () => this.setState(state => ({
 *       [property]: !state[property],
 *     }));
 *   }
 *
 *   render() {
 *     this.isAllOpen = checkOpen(this.state);
 *     return (
 *       <Accordion>
 *         <Accordion.OpenAll href="#" onClick={this.toggleAll}>
 *           {`${isAllOpen ? 'Close' : 'Open'} all`}
 *         </Accordion.OpenAll>
 *         <Accordion.Group
 *           heading="Writing well for the web"
 *           expanded={accordions.accordionOne}
 *           onClick={this.individualAccordionSetState('accordionOne')}
 *         >
 *           <Paragraph mb={0}>This is the content for writing well for the web.</Paragraph>
 *         </Accordion.Group>
 *         <Accordion.Group
 *           heading="Writing well for specialists"
 *           expanded={accordions.accordionTwo}
 *           onClick={this.individualAccordionSetState('accordionTwo')}
 *         >
 *           <Paragraph mb={0}>This is the content for writing well for the specialists.</Paragraph>
 *         </Accordion.Group>
 *         <Accordion.Group
 *           heading="Know your audience"
 *           expanded={accordions.accordionThree}
 *           onClick={this.individualAccordionSetState('accordionThree')}
 *         >
 *           <Paragraph mb={0}>This is the content for Know you audience.</Paragraph>
 *         </Accordion.Group>
 *         <Accordion.Group
 *           heading="How people read"
 *           expanded={accordions.accordionFour}
 *           onClick={this.individualAccordionSetState('accordionFour')}
 *         >
 *           <Paragraph mb={0}>This is the content for How people read.</Paragraph>
 *         </Accordion.Group>
 *       </Accordion>
 *     );
 *   }
 * }
 * ```
 *
 * ### References:
 * - https://github.com/alphagov/govuk-frontend/tree/master/src/components/accordion
 * - https://design-system.service.gov.uk/components/accordion/
 */
const Accordion = props => <AccordionContainer {...props} />;

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
};

Accordion.Group = Group;
Accordion.Icon = Icon;
Accordion.OpenAll = OpenAll;
Accordion.SectionButton = SectionButton;
Accordion.SectionContent = SectionContent;
Accordion.SectionHeader = SectionHeader;
Accordion.SectionHeading = SectionHeading;
Accordion.SectionSummary = SectionSummary;

export default Accordion;
