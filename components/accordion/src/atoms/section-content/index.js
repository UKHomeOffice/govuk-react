import styled from 'styled-components';
import { spacing } from '@govuk-react/lib';

const SectionContent = styled('div')(
  spacing.responsive({ size: 3, property: 'padding', direction: 'top' }),
  spacing.responsive({ size: 3, property: 'padding', direction: 'bottom' }),
  {
    ':last-child': {
      marginBottom: 0,
    },
  }
);

export default SectionContent;
