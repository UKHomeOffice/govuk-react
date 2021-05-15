import styled from 'styled-components';
import { BORDER_COLOUR } from 'govuk-colours';

const Section = styled('div')({
  // Borders between accordion sections
  borderTop: `1px solid ${BORDER_COLOUR}`,
  paddingTop: 0,
});

export default Section;
