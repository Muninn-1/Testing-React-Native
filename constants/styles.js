import { Dimensions } from 'react-native';

// Polices
const TITLE_POLICE = 'SketchGothic';
const BODY_POLICE = 'OldeEnglish';

export const WIN = Dimensions.get('window');
export const RGBA = (color: string, opacity: string) => `rgba(${color}, ${ opacity })`;

// Colors Charts
export const HEX_COLORS = {
    black: '#000000',
    blueGray: '#405361',
    gray: '#646464',
    white: '#ffffff',
}

export const RGB_COLORS = {
    black: '0, 0, 0',
    blueGray: '64, 83, 97',
    gray: '100, 100, 100',
    white: '255, 255, 255'
}

export const BORDER_RADIUS = 10;
export const PADDING_SIDES = Math.round( WIN.width / 100 * 8 );
export const BLACK_OPACITY = (opacity: string) => RGBA(RGB_COLORS.black, opacity);
export const GREY_OPACITY = (opacity: string) => RGBA(RGB_COLORS.gray, opacity);




export const TITLE = (color: string, size: number) => ({
    color,
    fontFamily: TITLE_POLICE || undefined,
    fontSize: size || 60,
    paddingHorizontal: PADDING_SIDES / 4
});

export const TEXT = (color: string, size: number) => ({
    color,
    fontFamily: BODY_POLICE,
    fontSize: size || 20,
});
