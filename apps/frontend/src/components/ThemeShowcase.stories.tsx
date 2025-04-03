import type { Meta, StoryObj } from '@storybook/react';
import { ThemeShowcase } from './ThemeShowcase';

const meta: Meta<typeof ThemeShowcase> = {
    title: 'Theme/ThemeShowcase',
    component: ThemeShowcase,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof ThemeShowcase>;

export const Default: Story = {}; 
