import React from 'react';
import { Text } from 'react-native';

// Routes
import { LOGIN } from 'constants/routesNames';

// Containers
import { BackgroundContainer } from 'containers/index';

// Components
import Button from 'sharedComponents/Button/Button';

import styles from './Home.styles';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor lorem in interdum feugiat. Vivamus sem ante, varius sed molestie id, cursus vitae enim. Fusce semper enim quis quam rutrum, quis consectetur felis dignissim. Nunc sapien quam, dictum vitae metus in, viverra blandit lectus. Praesent quis rhoncus odio, non porttitor sapien. Quisque non accumsan dui, id faucibus dolor.';
const ipsum = 'Donec est lorem, dignissim sed lacinia eget, maximus in erat. Cras at varius enim, eget consequat arcu. Curabitur augue diam, suscipit ut vestibulum id, sagittis et nulla. Vestibulum convallis quis lectus scelerisque venenatis. Vestibulum odio tellus, feugiat vitae euismod ut, venenatis eget enim. Etiam consectetur purus a vehicula blandit. Nam venenatis eleifend diam sit amet pharetra.';

export default ({ navigation, screenProps }) => {
    return (
        <BackgroundContainer source={screenProps.IMAGES.WALLPAPER}>
            <>
                <Text style={styles.title}>FrostPunk</Text>
                <Text style={styles.text}>{lorem}</Text>
                <Text style={styles.text}>{ipsum}</Text>
                <Button label={`S'identifier`} onPress={() => navigation.navigate(LOGIN)} />

            </>
        </BackgroundContainer>
    );
};