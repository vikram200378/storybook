// components/HoverButton.stories.tsx
import React from 'react';
import { StoryFn, Meta} from '@storybook/react';
import HoverButton, { Props } from './HoverButton';
import { expect, userEvent, within } from '@storybook/test';

export default {
    title: 'Example/HoverButton',
    component: HoverButton,
    argTypes: {
        backgroundColor: { control: 'color' },
        width: { control: 'text' },
        height: { control: 'text' },
        initialLabel: { control: 'text' },
        clickedLabel: { control: 'text' },
    },
} as Meta;

const Template: StoryFn<Props> = (args) => <HoverButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    initialLabel: 'Click Me and Hover Me!',
    clickedLabel: 'Clicked',
    width: '120px',
    height: '40px',
    backgroundColor: '#0070f3',
};
Primary.play = async ({ canvasElement}) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /Click Me and Hover Me!/i });
    // await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await expect(button.innerHTML).toBe('Click Me and Hover Me!');
    // await expect(button.innerHTML).not.toBeInTheDocument();

    await expect(button).toHaveStyle('background-color:#0070f3');
}