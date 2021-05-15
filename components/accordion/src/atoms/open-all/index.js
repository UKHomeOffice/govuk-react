import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { typography } from '@govuk-react/lib';
import Link from '@govuk-react/link';
import { LINK_COLOUR } from 'govuk-colours';

const StyledLink = styled(Link)(typography.font({ size: 16 }), {
  display: 'inline',
  borderWidth: 0,
  color: LINK_COLOUR,
  background: 'none',
  cursor: 'pointer',
  ':focus': {
    background: 'none',
  },
});

const OpenAllButton = ({ children, href, onClick, ...props }) => (
  <div style={{ textAlign: 'right' }}>
    <StyledLink href={href} onClick={onClick} {...props}>
      {children}
    </StyledLink>
  </div>
);

OpenAllButton.defaultProps = {
  href: '#',
};

OpenAllButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default OpenAllButton;
