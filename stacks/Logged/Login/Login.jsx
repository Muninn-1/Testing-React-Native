import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';

// Container
import { BackgroundContainer } from 'containers/index';

// Components
import Button from 'sharedComponents/Button/Button';

import styles from './Login.styles';

export default ({ navigation, screenProps }) => {
    return (
        <BackgroundContainer source={screenProps.IMAGES.WALLPAPER}>
            <Text style={styles.title}>General Kenobi</Text>
            <Button label='Retour' onPress={() => navigation.goBack(null)} />
        </BackgroundContainer>
    );
};