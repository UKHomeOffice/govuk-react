import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import Button, {
  ButtonStart,
  ButtonStartIcon,
  ButtonDisabled,
  ButtonDisabledStartIcon,
} from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Form/Buttons', module);
const examples = storiesOf('Form/Buttons/Examples', module);

stories.addDecorator(withKnobs);
stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component Default', Button);

examples.add('Start', ButtonStart);

examples.add('Start with icon', ButtonStartIcon);

examples.add('Disabled', ButtonDisabled);

examples.add('Disabled start with icon', ButtonDisabledStartIcon);
