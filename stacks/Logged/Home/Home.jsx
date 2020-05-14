import React from 'react';
import { Text } from 'react-native';

// Containers
import { BackgroundContainer } from 'containers/index';

// Components
import Button from 'sharedComponents/Button/Button';

// Routes
import { TEST } from 'constants/routesNames';

import styles from './Home.styles';

export default ({ navigation, screenProps }) => {
    return (
        <BackgroundContainer source={screenProps.IMAGES.WALLPAPER}>
            <>
                <Text style={styles.title}>Hello There</Text>
                <Button label='Retour' onPress={() => navigation.goBack(null)} />

                <Button label='TEST' onPress={() => navigation.navigate(TEST)} />
            </>
        </BackgroundContainer>
    );
};