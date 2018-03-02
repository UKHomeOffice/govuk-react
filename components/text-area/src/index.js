// https://github.com/alphagov/govuk-frontend/tree/master/src/components/textarea

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import { BLACK, YELLOW, ERROR_COLOUR } from 'govuk-colours';
import { MEDIA_QUERIES } from '@govuk-react/constants/index';

import Label from '../Label/index';
import LabelText from '../LabelText/index';
import ErrorText from '../ErrorText/index';
import HintText from '../HintText/index';

const TextareaField = glamorous.textarea(
  {
    boxSizing: 'border-box',
    fontFamily: '"nta", Arial, sans-serif',
    fontWeight: 400,
    textTransform: 'none',
    fontSize: '16px',
    lineHeight: '1.25',
    width: '100%',
    padding: '5px 4px 4px',
    border: `2px solid ${BLACK}`,
    [MEDIA_QUERIES.LARGESCREEN]: {
      width: '75%',
    },
    '[disabled]': {
      cursor: 'auto',
    },
    ':focus': {
      outline: `3px solid ${YELLOW}`,
      outlineOffset: 0,
    },
  },
  ({ error }) => ({
    border: error ? `4px solid ${ERROR_COLOUR}` : undefined,
  }),
);

const TextArea = props => (
  <Label error={props.meta.touched && props.meta.error}>
    <LabelText>{props.children}</LabelText>
    {props.hint && <HintText>{props.hint}</HintText>}
    {props.meta.touched &&
      props.meta.error && <ErrorText>{props.meta.error}</ErrorText>}
    <TextareaField
      type="text"
      rows="5"
      error={props.meta.touched && props.meta.error}
      {...props.input}
    />
  </Label>
);

TextArea.defaultProps = {
  hint: null,
  input: {},
  meta: {},
};

TextArea.propTypes = {
  hint: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.any,
  }),
  meta: PropTypes.shape({
    active: PropTypes.bool,
    dirty: PropTypes.bool,
    dirtySinceLastSubmit: PropTypes.bool,
    error: PropTypes.any,
    initial: PropTypes.bool,
    invalid: PropTypes.bool,
    pristine: PropTypes.bool,
    submitError: PropTypes.any,
    submitFailed: PropTypes.bool,
    submitSucceeded: PropTypes.bool,
    touched: PropTypes.bool,
    valid: PropTypes.bool,
    visited: PropTypes.bool,
  }),
  children: PropTypes.node.isRequired,
};

export default TextArea;