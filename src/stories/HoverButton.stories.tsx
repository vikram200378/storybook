// components/HoverButton.stories.tsx
import React from 'react';
import { StoryFn, Meta} from '@storybook/react';
import HoverButton, { Props } from './HoverButton';

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
    initialLabel: 'Click Me!',
    clickedLabel: 'Clicked',
    width: '120px',
    height: '40px',
    backgroundColor: '#0070f3',
};
