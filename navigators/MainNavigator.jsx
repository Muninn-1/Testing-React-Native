import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Stacks Names
import { LOG, LOGGED } from 'constants/routesNames';

// Navigator config
import { STACK_NAVIGATOR_CONFIG } from 'constants/navigator';

// Navigators
import * as navigators from './index';

export default createAppContainer(createStackNavigator(
    {
        [LOG]: navigators.Log,
        [LOGGED]: navigators.Logged,
    },
    {
    initialRouteName: LOG,
    ...STACK_NAVIGATOR_CONFIG
    }
));