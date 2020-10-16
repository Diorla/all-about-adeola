import "styled-components";

declare module "styled-components" {
  export interface Header {
    link: {
      color: string;
      cursor: string;
      margin: string;
      padding: string;
    };
    logo: {
      fontFamily: string;
      fontSize: string;
      textDecoration: string;
      margin: string;
      padding: string;
    };
    contact: {
      backgroundColor: string;
      borderRadius: string;
      textAlign: string;
      hoverColor: string;
      color: string;
      textDecoration: string;
    };
    main: {
      display: string;
      justifyContent: string;
      padding: string;
      alignItems: string;
      position: string;
      top: number;
      zIndex: number;
      backgroundColor: string;
      boxShadow: string;
      breakpoint: string;
      mdDirection: string;
      mdJustifyContent: string;
      mdPosition: string;
    };
  }
  export interface Breakpoints {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  }
  // shadow
  export interface Elevation {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
  }
  //z-index
  export interface Priority {
    base: number;
    low: number;
    header: number;
    modal: number;
    max: number;
  }
  // colours
  export interface Palette {
    primary: {
      main: string;
      dark: string;
      light: string;
      text: string;
    };
    secondary: {
      main: string;
      dark: string;
      light: string;
      text: string;
    };
    link: {
      color: string;
      visited?: string;
      hover?: string;
      focus?: string;
      active?: string;
    };
  }
  export interface Timing {
    transition: string;
    animation: string;
  }
}
