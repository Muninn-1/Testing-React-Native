import { createStackNavigator } from 'react-navigation-stack';

// Stacks Names
import { HOME_LOG, LOGIN } from 'constants/routesNames';

// Navigator config
import { STACK_NAVIGATOR_CONFIG } from 'constants/navigator';

// Screens
import * as screens from 'stacks/Log/index';

export default createStackNavigator(
    {
        [HOME_LOG]: {
            screen: screens.HomeScreen,
        },
        [LOGIN]: {
            screen: screens.LoginScreen,
        }
    },
    {
        initialRouteName: HOME_LOG,
        ...STACK_NAVIGATOR_CONFIG
    }
);