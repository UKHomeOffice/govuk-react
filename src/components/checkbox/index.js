// https://github.com/alphagov/govuk-frontend/blob/master/src/components/checkbox/_checkbox.scss

import React from 'react'
import glamorous from 'glamorous'

import * as COLOUR from 'govuk-colours'
import { BREAKPOINTS, SITE_WIDTH } from '../../constants/index'

const mediaQueries = {
	largeScreen: `@media only screen and (min-width: ${BREAKPOINTS.LARGESCREEN})`,
}

const MultipleChoice = glamorous.div({
  display: 'block',
  float: 'none',
  clear: 'left',
  position: 'relative',
  padding: '0 0 0 38px',
  marginBottom: '10px'
})

const Input = glamorous.input({
  position: 'absolute',
  cursor: 'pointer',
  left: 0,
  top: 0,
  width: '38px',
  height: '38px',
  zIndex: 1,
  margin: 0,
  zoom: 1,
  opacity: 0,
  '[disabled]': {
    cursor: 'auto',
  },
  '[disabled] + label': {
    opacity: '.4',
    cursor: 'auto',
    pointerEvents: 'none'
  },
  ':checked + label::after': {
    opacity: 1
  },
  ':focus + label::before': {
    boxShadow: `0 0 0 4px ${COLOUR.YELLOW}`
  }
})

const Label = glamorous.label({
  fontFamily: '"nta", Arial, sans-serif',
  fontWeight: 400,
  textTransform: 'none',
  fontSize: '16px',
  lineHeight: '1.25',
  cursor: 'pointer',
  padding: '8px 10px 9px 12px',
  display: 'block',
  color: `${COLOUR.BLACK}`,
  ':before': {
    content: ' ',
    display: 'block',
    border: `2px solid ${COLOUR.BLACK}`,
    background: 'transparent',
    width: '34px',
    height: '34px',
    position: 'absolute',
    top: 0,
    left: 0
  },
  ':after': {
    content: ' ',
    border: 'solid',
    borderWidth: '0 0 5px 5px',
    background: 'transparent',
    borderTopColor: 'transparent',
    width: '17px',
    height: '7px',
    position: 'absolute',
    top: '10px',
    left: '8px',
    transform: 'rotate(-45deg)',
    zoom: 1,
    opacity: 0
  }
});


const Checkbox = ({children, ...props}) => (
  <MultipleChoice>
    <Input type="checkbox" id={props.checkboxId} {...props} />
    <Label htmlFor={props.checkboxId}>{children}</Label>
  </MultipleChoice>
)

export default Checkbox;
