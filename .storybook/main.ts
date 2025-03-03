import type { StorybookConfig } from '@storybook/react-vite'

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

import "./styles/index.scss";

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        'storybook-addon-react-router-v6',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    viteFinal: async config => {
        config.assetsInclude = ['/sb-preview/runtime.js']
        return config
    },
}
export default config
