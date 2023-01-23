import LinkTo from '@storybook/addon-links/react';
import { linkTo } from '@storybook/addon-links';

import type { Meta } from '@storybook/react';

import { LinkToExample } from './LinkToExample';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/LinkToExample',
  component: LinkToExample,
} as Meta<typeof LinkToExample>;

export const Primary = () => <LinkTo kind="example-button" story="Primary">
  LinkTo Primary Button
</LinkTo>;

export const Secondary = () => <button onClick={linkTo('example-button', 'Secondary')}>LinkTo Secondary Button</button>;
