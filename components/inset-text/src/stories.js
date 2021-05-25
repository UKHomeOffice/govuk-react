import { withKnobs } from '@storybook/addon-knobs';

import { DocumentedInsetText as InsetText } from '.';
import InsetTextExample, { InsetTextWithParagraph } from './fixtures';

export default {
  title: 'Core/InsetText',
  component: InsetText,
  decorators: [withKnobs],
};

export const Default = InsetTextExample;

export const UsingAParagraphForContents = InsetTextWithParagraph;
