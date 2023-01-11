import type { Meta } from '@storybook/react';
import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};
export const Secondary = {
  args: {
    label: 'Button',
  },
};
export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};
export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
