const calcRem = (size) => `${size / 16}rem`;

const fontSizes = {
  xs: calcRem(12),
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(24),
  titleSize: calcRem(32),
};

const fontWeights = {
  thin: '200',
  light: '300',
  regular: '400',
  bold: '500',
  semiBold: '600',
  extraBold: '700',
}

const colors = {
  pink: "#ed8bf2",
  neoblue: "#66d3f1",
  mint : "#73f7d1",
  green: '#41b979',
  red: '#ef6253',
  black: '#222222',
  darkGray: '#4D4D4D',
  gray: '#8E8E8E',
  lightGray: '#f4f4f4',
  disabled: '#ebebeb',
  white: '#ffffff',
  purple: '#342461',
  mint: '#027b94',
  blue: '#3366FF',
};

const flex = {
    flexBox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
    `,
};

const theme = {
  fontSizes,
  fontWeights,
  colors,
  flex,
};
export default theme;