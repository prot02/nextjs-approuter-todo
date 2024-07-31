import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

export default {
	component: Button,
	argTypes: {},
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
	args: {
		text: 'ボタン',
	},
};
