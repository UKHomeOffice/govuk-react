import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  SPACING,
  NTA_LIGHT,
} from '@govuk-react/constants';
import { withWhiteSpace } from '@govuk-react/hoc';

const StyledList = styled('ul')({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  marginTop: SPACING.SCALE_5,
  padding: SPACING.SCALE_2,
  justifyContent: 'space-between',
  fontFamily: NTA_LIGHT,
  fontWeight: 400,
  textTransform: 'none',
  fontSize: FONT_SIZE.SIZE_16,
  lineHeight: LINE_HEIGHT.SIZE_16,
  width: '100%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_19,
    lineHeight: LINE_HEIGHT.SIZE_19,
    flexDirection: 'row',
  },
});

/**
 *
 * ### Usage
 *
 * Simple usage with `asPaginationItem` HOC
 * ```jsx
 * import { asPaginationItem } from '@govuk-react/hoc';
 *
 * const PaginationAnchor = asPaginationItem('a');
 *
 * <Pagination>
 *   <PaginationAnchor href="#prev" previousPage>
 *     Previous page
 *   </PaginationAnchor>
 *   <PaginationAnchor href="#next" nextPage>
 *     Next page
 *   </PaginationAnchor>
 * </Pagination>
 * ```
 *
 * ### References:
 * - https://govuk-static.herokuapp.com/component-guide/previous_and_next_navigation
 *
 */
const Pagination = props => <StyledList {...props} />;

Pagination.propTypes = {
  /** `asPaginationItem` nodes */
  children: PropTypes.node.isRequired,
};

export default withWhiteSpace({ marginBottom: 6 })(Pagination);
