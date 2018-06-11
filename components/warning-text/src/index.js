// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { IconImportant } from '@govuk-react/icons';
import { withWhiteSpace } from '@govuk-react/hoc';

import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
} from '@govuk-react/constants';

const StyledWarningText = styled('div')({
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'flex',
  width: '100%',
});

const IconImportantWrapper = styled('i')({
  flex: 'none',
  height: '35px',
  marginRight: '15px',
  width: '35px',
});

const WarningTextWrapper = styled('strong')({
  fontFamily: NTA_LIGHT,
  fontSize: FONT_SIZE.SIZE_16,
  fontWeight: 700,
  lineHeight: LINE_HEIGHT.SIZE_16,
  textTransform: 'none',
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_19,
    lineHeight: LINE_HEIGHT.SIZE_19,
  },
});

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <WarningText>Example</WarningText>
 * ```
 *
 * ### References:
 * - https://govuk-elements.herokuapp.com/typography/#typography-warning-text
 * - https://github.com/alphagov/govuk-frontend/tree/master/src/components/warning-text
 *
 */
const WarningText = ({ children }) => (
  <StyledWarningText>
    <IconImportantWrapper>
      <IconImportant />
    </IconImportantWrapper>
    <WarningTextWrapper>{children}</WarningTextWrapper>
  </StyledWarningText>
);

WarningText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withWhiteSpace({ marginBottom: 0 })(WarningText);
