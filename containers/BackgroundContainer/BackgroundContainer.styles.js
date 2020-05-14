import { StyleSheet } from 'react-native';

import { BORDER_RADIUS, BLACK_OPACITY, PADDING_SIDES } from 'constants/styles';

export default StyleSheet.create({
    mainContainer: { 
        flex: 1
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: -2
    },
    overlay: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -1,
        backgroundColor: BLACK_OPACITY('0.5')
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: PADDING_SIDES,
        marginVertical: PADDING_SIDES,
    },
    box: {
        width: '100%',
        borderRadius: BORDER_RADIUS,
        alignItems: 'center',
        backgroundColor: BLACK_OPACITY('0.5'),
        paddingVertical: PADDING_SIDES / 2
    },
});
