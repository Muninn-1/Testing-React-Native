import { StyleSheet } from 'react-native';

import { BORDER_RADIUS, GREY_OPACITY, HEX_COLORS, PADDING_SIDES, TEXT, TITLE } from 'constants/styles';

export default StyleSheet.create({
    title: TITLE(HEX_COLORS.white),
    button: {
        backgroundColor: GREY_OPACITY('0.8'),
        padding: 10,
        borderRadius: BORDER_RADIUS,
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowColor: HEX_COLORS.white,
        shadowOpacity: 0.5,
    },
    buttonText: {
        ...TEXT(HEX_COLORS.white)
    }
});
