// eslint-disable-next-line import/no-extraneous-dependencies
import initStoryshots, { renderOnly } from '@storybook/addon-storyshots';

initStoryshots({
  configPath: './packages/storybook/.storybook',
  test: renderOnly,
});
