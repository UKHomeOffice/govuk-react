import styled from 'styled-components';
import { SPACING } from '@govuk-react/constants';
import { TEXT_COLOUR } from 'govuk-colours';
import { typography } from '@govuk-react/lib';

const SectionSummary = styled('div')(
  // typography.common,
  // govuk-body
  typography.font({ size: 19 }),

  // margin - top: 0;
  // @include govuk - responsive - margin(4, "bottom");
  {
    color: TEXT_COLOUR,
    display: 'block',
    // section summary
    marginTop: SPACING.SCALE_2,
    marginBottom: 0,
  }
);

export default SectionSummary;
