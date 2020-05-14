import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './InputWithLabel.styles';

export default ({ label, value, onChangeText }) => {    
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text: string) => onChangeText(text)}
                    value={value}
                />
            </View>
        </View>
    );
};