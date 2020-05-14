import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './Button.styles';

export default ({ label, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
};