import glamorous from 'glamorous';
import { MEDIA_QUERIES, SPACING } from '@govuk-react/constants';

const RightHandSide = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  marginTop: SPACING.SCALE_2,
  [MEDIA_QUERIES.LARGESCREEN]: {
    alignItems: 'flex-start',
    width: '66.66%',
    paddingLeft: SPACING.SCALE_3,
    marginTop: 0,
  },
});

export default RightHandSide;
