import { StyleSheet } from 'react-native';

import { BORDER_RADIUS, HEX_COLORS, PADDING_SIDES, RGB_COLORS, RGBA, TEXT } from 'constants/styles';

export default StyleSheet.create({
    container: {
        marginHorizontal: PADDING_SIDES,
        marginVertical: PADDING_SIDES / 2,
    },
    label: {
        ...TEXT(HEX_COLORS.white, 20),
        marginBottom: PADDING_SIDES / 4
    },
    inputContainer: {
        backgroundColor: RGBA(RGB_COLORS.blueGray, 0.5),
        borderRadius: BORDER_RADIUS,
        height: 40,
        minWidth: '70%',
        minWidth: '80%',
        paddingHorizontal: PADDING_SIDES / 2,
        justifyContent: 'center',
    },
    input: {
        ...TEXT(HEX_COLORS.white, 30),
    },
});
