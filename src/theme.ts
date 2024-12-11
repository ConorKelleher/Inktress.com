import { Anchor, Button, MantineColorsTuple, Menu, createTheme } from "@mantine/core";

const ColorPalette = [
  "#f7f3f2",
  "#e8e6e5",
  "#DCBEBE",
  "#bdaaa4",
  "#ab9087",
  "#a17f74",
  "#A87272",
  "#7C3F3F",
  "#451414",
  "#381705",
] as const;
// // All generated from the base branding colour scheme with https://mantine.dev/colors-generator
export const COLOR_PALETTES: { [color: string]: MantineColorsTuple } = {
  dark: ColorPalette,
};

export const COLORS: { [color: string]: string } = {
  body: ColorPalette[2],
  light: ColorPalette[2],
  header: ColorPalette[9],
  footer: ColorPalette[8],
  headerIcons: ColorPalette[0],
};

Object.entries(COLORS).map(([key, value]) => {
  document.documentElement.style.setProperty(`--colors-${key}`, value);
});

export const appTheme = createTheme({
  /** Put your mantine theme override here */
  fontFamily: "Cabin",
  primaryColor: "dark",

  cursorType: "pointer",
  colors: {
    dark: COLOR_PALETTES.dark,
  },
  components: {
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "never",
        // @ts-ignore
        tabIndex: 0,
        fw: "bolder",
        // color: "white",
        c: ColorPalette[0],
      },
    }),
    "Menu.Dropdown": Menu.Dropdown.extend({
      defaultProps: {
        style: {
          backgroundColor: "var(--mantine-color-gray-9)",
        },
      },
    }),
  },
});
