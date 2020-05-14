import React from 'react';
import { BackgroundImage, Image, View } from 'react-native';

// Images
import { WALLPAPER } from 'images/index';

import styles from './BackgroundContainer.styles';

const BackgroundContainer = ({ children, source, boxHeight }) => {
    return (
        <View style={styles.mainContainer}>
            <Image style={styles.backgroundImage} source={ source }/>
            <View style={styles.overlay}/>
            <View style={styles.container}>
                <View style={{ ...styles.box, height: boxHeight }}>
                    { children }
                </View>
            </View>
        
        </View>
    );
};

BackgroundContainer.defaultProps = {
    children: null,
    boxHeight: '100%'
}

export default BackgroundContainer;