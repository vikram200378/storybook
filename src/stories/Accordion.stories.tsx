// src/stories/Accordion.stories.tsx

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Accordion from './Accordion';


export default {
  title: 'UI/Accordion',
  component: Accordion,
} as Meta;

const Template: StoryFn = () => (
  <Accordion
    items={[
      {
        title: 'Is it accessible?',
        content: 'Yes. It adheres to accessibility standards.',
      },
      {
        title: 'Is it styled?',
        content: 'Yes. It comes with default styles.',
      },
      {
        title: 'Is it animated?',
        content: 'Yes. It supports animations.',
      },
    ]}
  />
);

export const Default = Template.bind({});
