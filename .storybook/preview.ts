import type { Preview } from "@storybook/react";
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
