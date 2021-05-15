import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BLACK } from 'govuk-colours';

const Icon = styled('div')(
  {
    position: 'absolute',
    top: '50%',
    right: '15px',
    width: '16px',
    height: '16px',
    marginTop: '-8px',
    ':after,:before': {
      content: '""',
      boxSizing: 'border-box',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: '25%',
      height: '25%',
      margin: 'auto',
      border: '2px solid transparent',
      backgroundColor: BLACK,
    },
    ':before': {
      width: '100%',
    },
    ':after': {
      height: '100%',
    },
  },
  ({ expanded }) => ({
    ':after': expanded && {
      content: '" "',
      display: 'none',
    },
  })
);

Icon.defaultProps = {
  expanded: false,
};

Icon.propTypes = {
  expanded: PropTypes.bool,
};

export default Icon;
