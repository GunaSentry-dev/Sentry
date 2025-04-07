import { createTheme, PaletteColor, PaletteColorOptions } from '@mui/material/styles';

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: PaletteColor;
    orange: PaletteColor;
    link: PaletteColor;
  }

  interface PaletteOptions {
    tertiary?: PaletteColorOptions;
    count?: PaletteColorOptions;
    note?: PaletteColorOptions;
    orange?: PaletteColorOptions;
    link?: PaletteColorOptions;
  }
}

let customTheme = createTheme({
  palette: {
    primary: {
      main: "#F26D21",
      dark: "#D55308",
    },
    secondary: {
      main: "#3097F3",
      dark: "#1271C6",
    },
    tertiary: {
      main: "#0E4678",
   
    },
    orange: {
      main: "#f26d21",
    },
    count: {
      main: "#11A5AF",
    },
    success: {
      main: "#299B3F",
    
    },
   
    error: {
      main: "#E82A21",
     
    },
    info: {
      main: "#0055B6",
    
    },
    note: {
      main: "#E9AE31",
     
    },
    warning: {
      main: "#9A6700",
     
    },
  },
 
});

customTheme = createTheme(customTheme);
export default customTheme