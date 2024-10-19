
export interface Colors {
  default_color?: string;
  black?: string;
  shadowBlack?: string;
  shadowDark?: string;
  white?: string;
  yellow?: string;
  statusbarColor?: string;
}

export const defaultColors: Colors = {
  default_color: '#FF7622',
  black: '#171725',
  shadowBlack: '#78828A',
  shadowDark: '#D6D6D6',
  white: '#F8FBFF',
  yellow: '#FFC532',
  statusbarColor: '#F8FBFF',
};

export const colors: Colors = { ...defaultColors };

// Function to set colors from outer screen
export const setColors = (newColors: Colors) => {
  Object.assign(colors, newColors);
};
