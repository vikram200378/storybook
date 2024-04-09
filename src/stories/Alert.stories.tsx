import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Alert, Icon } from '@salesforce/design-system-react';
import AlertComponent from './Alert'; 

export default {
  title: 'Components/Alerts',
  component: AlertComponent,
  argTypes: {
    className: { control: 'text' },
    variant: {
      control: {
        type: 'select',
        options: ['error', 'success', 'warning', 'info'],
      },
    },
    labels: { control: 'object' },
   
    children: { control: 'text' },
    icon: { control: 'object' },
  },
} as Meta;

interface AlertProps {
  variant: 'error' | 'success' | 'warning' | 'info';
  className?: string;
  labels: { heading: string; closeButton: string };

  children: React.ReactNode;
  style?: React.CSSProperties; // Add style property
  icon?: React.ReactNode;
}

const Template: StoryFn<AlertProps> = ({ className = '', style = {}, ...args }) => { // Explicitly type className and style
  const defaultStyles: React.CSSProperties = {};

  if (className === 'bg-color1') {
    defaultStyles.color = 'white';
    defaultStyles.backgroundColor = 'black';
  } else if (className === 'bg-color2') {
    defaultStyles.backgroundColor = 'blue';
  }

  const alertStyles: React.CSSProperties = { ...defaultStyles, ...style }; // Use the provided style

  return <Alert {...args} style={alertStyles} />;
};

export const Error: StoryFn<AlertProps> = Template.bind({});
Error.args = {
  variant: 'error',
  labels: { heading: 'Error', closeButton: 'Close' },
  className: '',
  children: 'Something went wrong. Please try again.',
  icon: <Icon name="utility:error" />,
};

export const Success: StoryFn<AlertProps> = Template.bind({});
Success.args = {
  variant: 'success',
  labels: { heading: 'Success', closeButton: 'Close' },

  className: 'custom-alert',
  children: 'Action completed successfully.',
  icon: <Icon name="utility:success" />,
};


