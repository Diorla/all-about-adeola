import { Palette } from "styled-components";

const teal = "#008080";
const darkTeal = "#005354";
const lightTeal = "#4cb0af";

const pinkish = "#e00078";
const darkPink = "#a8004c";
const lightPink = "#ff56a7";

const white = "#fff";
const black = "#000";

const cornflowerblue = "#6495ed";
const darkBlue = "#2668ba";
const lightBlue = "#9ac5ff";

const palette: Palette = {
  primary: {
    main: teal,
    text: white,
    dark: darkTeal,
    light: lightTeal,
  },
  secondary: {
    main: pinkish,
    text: white,
    dark: darkPink,
    light: lightPink,
  },
  link: {
    color: cornflowerblue,
    visited: lightBlue,
    hover: darkBlue,
    focus: darkBlue,
    active: darkBlue,
  },
};

export default palette;
