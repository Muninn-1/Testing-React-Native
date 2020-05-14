import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

// Container
import { BackgroundContainer } from 'containers/index';

// Components
import InputWithLabel from 'sharedComponents/InputWithLabel/InputWithLabel';
import Button from 'sharedComponents/Button/Button';

// Routes
import { LOGGED, TEST } from 'constants/routesNames';

import styles from './Login.styles';

export default ({ navigation, screenProps }) => {
    const [ form, setForm ] = useState({});
    
    const handleForm = (key: string, value: any) => setForm({ ...form, [key]: value });
    
    const resetAction = StackActions.reset({
        index: 1,
        actions: [
            NavigationActions.navigate({ routeName: LOGGED }),
            NavigationActions.navigate({ 
                routeName: LOGGED,
                action: NavigationActions.navigate({ routeName: TEST })
                })
        ]
    });

    const storeData = async (key: string, value: any) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (e) {
            console.log(e);
        }
    };

    const onPress = () => {
        
        navigation.dispatch(resetAction);
    }

    return (
        <BackgroundContainer source={screenProps.IMAGES.WALLPAPER} boxHeight={null}>
            <Text style={styles.title}>Login</Text>
            <InputWithLabel
                label='Prénom'
                value={form.firstname}
                onChangeText={(text: string) => handleForm('firstname', text)}
            />
            <InputWithLabel
                label='Nom'
                value={form.lastname}
                onChangeText={(text: string) => handleForm('lastname', text)}
            />
            <Button label='Se connecter' onPress={() => navigation.dispatch(resetAction)} />
        </BackgroundContainer>
    );
};