import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../atoms/icon';
import Section from '../../atoms/section';
import SectionHeader from '../../atoms/section-header';
import SectionHeading from '../../atoms/section-heading';
import SectionButton from '../../atoms/section-button';
import SectionContent from '../../atoms/section-content';
import SectionSummary from '../../atoms/section-summary';

class Group extends Component {
  state = { isFocused: false };

  setFocus = bool => this.setState({ isFocused: bool });

  handleFocus = () => this.setFocus(true);

  handleBlur = () => this.setFocus(false);

  render() {
    const { children, heading, expanded, summary, onClick } = this.props;
    return (
      <Section>
        <SectionHeader focused={this.state.isFocused}>
          <SectionHeading>
            <SectionButton onClick={onClick} onBlur={this.handleBlur} onFocus={this.handleFocus}>
              {heading}
            </SectionButton>
          </SectionHeading>
          {summary && <SectionSummary>{summary}</SectionSummary>}
          <Icon expanded={expanded} />
        </SectionHeader>
        {expanded && <SectionContent>{children}</SectionContent>}
      </Section>
    );
  }
}

Group.defaultProps = {
  expanded: false,
  summary: undefined,
};

Group.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.node.isRequired,
  expanded: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  summary: PropTypes.node,
};

export default Group;
