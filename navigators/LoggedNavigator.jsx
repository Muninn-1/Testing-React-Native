import { createStackNavigator } from 'react-navigation-stack';

// Stacks Names
import { HOME_LOGGED, TEST } from 'constants/routesNames';

// Screens
import * as screens from 'stacks/Logged/index';

// Navigator config
import { STACK_NAVIGATOR_CONFIG } from 'constants/navigator';


export default createStackNavigator(
    {
        [HOME_LOGGED]: {
            screen: screens.HomeScreen,
        },
        [TEST]: {
            screen: screens.LoginScreen,
        }
    },
    {
        initialRouteName: HOME_LOGGED,
        ...STACK_NAVIGATOR_CONFIG
    }
);