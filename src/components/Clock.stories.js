import React from 'react';
import {Clock} from './clock';
import Logo from './agf-logo.svg';

export default {
    title: 'Example/Clock',
    component: Clock
}

const Template = (args) => <Clock {...args} />;

export const Default = Template.bind({});

Default.args = {
    clockBackgroundImage: Logo,
    size: '400px'
}