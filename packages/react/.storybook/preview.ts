import type { Preview } from "@storybook/react-vite";

import "@myofiber/tokens/dist/tokens.css";
import "@myofiber/tokens/dist/components/button.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    actions: {
      argTypesRegex: "^on[A-Z].*",
    },
  },
};

export default preview;