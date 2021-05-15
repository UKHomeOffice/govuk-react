import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LINK_COLOUR } from 'govuk-colours';
import { SPACING } from '@govuk-react/constants';
import { link, typography } from '@govuk-react/lib';

const StyledButton = styled('button')(typography.font({ size: 24, weight: 'bold' }), link.common(), {
  width: '100%',
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  paddingTop: SPACING.SCALE_3,
  paddingBottom: 0,
  paddingLeft: 0,
  borderWidth: 0,
  // Headings in section headers have link colours as an additional affodance
  color: LINK_COLOUR,
  background: 'none',
  textAlign: 'left',
  cursor: 'pointer',
  ':focus': {
    outline: 'none',
    background: 'none',
  },
  ':after': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

const SectionButton = ({ children, type, ...props }) => (
  <StyledButton type={type} {...props}>
    {children}
  </StyledButton>
);

SectionButton.defaultProps = {
  type: 'button',
};

SectionButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

// @include govuk-link-common;
export default SectionButton;
