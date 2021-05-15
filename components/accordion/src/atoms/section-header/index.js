import React from 'react';
import styled from 'styled-components';
import { GREY_4, YELLOW } from 'govuk-colours';
import { FOCUS_WIDTH, SPACING } from '@govuk-react/constants';

const StyledHeader = styled('div')(
  // Setting focus styles on header
  // so that summary that is not part of the button is included in focus
  ({ focused }) =>
    focused
      ? {
          outline: `${FOCUS_WIDTH} solid ${YELLOW}`,
          outlineOffset: 0,
        }
      : undefined,
  {
    position: 'relative',
    // Safe area on the right to avoid clashing with icon
    paddingRight: '40px',
    paddingBottom: SPACING.SCALE_3,

    // Section headers have a pointer cursor as an additional affordance
    cursor: 'pointer',
    // Section headers have a grey background on hover as an additional affodance
    ':hover': {
      backgroundColor: GREY_4,
      '@media (hover: none)': {
        backgroundColor: 'initial',
      },
    },
  }
);

const SectionHeader = ({ children, focused, ...props }) => (
  <StyledHeader focused={focused} {...props}>
    {children}
  </StyledHeader>
);

export default SectionHeader;
