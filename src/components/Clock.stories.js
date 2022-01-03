import React from 'react';
import {Clock} from './clock';

export default {
    title: 'Example/Clock',
    component: Clock
}

const Template = (args) => <Clock {...args} />;

export const Default = Template.bind({});
