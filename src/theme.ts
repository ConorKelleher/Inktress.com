import { Anchor, MantineColorsTuple, Menu, createTheme, darken, lighten } from "@mantine/core";

export const LB_COLORS: { [color: string]: string } = {
  boastfulYellow: "#ffca43",
  boastfulBlue: "#278fa1",
  boastfulGreen: "#8fd7b1",
  boastfulRed: "#e85f5c",
  boastfulPurple: "#3b1e51",
  dark: "#0A363D",
  light: "#ffca43",
};

Object.entries(LB_COLORS).map(([key, value]) => {
  document.documentElement.style.setProperty(`--lb-colors-${key}`, value);
});
type Theme = Record<"light" | "dark", string>;
export enum ComponentTheme {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
}
type ThemeKey = keyof typeof ComponentTheme;
export const LB_THEMES: Record<ThemeKey, Theme> = {
  primary: {
    light: LB_COLORS.boastfulBlue,
    dark: LB_COLORS.boastfulYellow,
  },
  secondary: {
    light: LB_COLORS.boastfulRed,
    dark: LB_COLORS.boastfulGreen,
  },
  tertiary: {
    light: LB_COLORS.boastfulPurple,
    dark: lighten(LB_COLORS.light, 0.8),
  },
};
LB_COLORS.lightHeaderIcons = LB_COLORS.boastfulPurple;
LB_COLORS.darkHeaderIcons = LB_COLORS.boastfulYellow;
LB_COLORS.lightFooterIcons = LB_COLORS.boastfulPurple;
LB_COLORS.darkFooterIcons = LB_COLORS.boastfulBlue;

// All generated from the base branding colour scheme with https://mantine.dev/colors-generator
const LB_COLOR_PALETTES: { [color: string]: MantineColorsTuple } = {
  blue: ["#e8fbfe", "#d9f1f6", "#b3e2eb", "#8ad2df", "#6ac5d5", "#55bccf", "#47b8cd", "#36a1b5", "#2790a2", "#007d8f"],
  yellow: [
    "#fff9e0",
    "#fff2ca",
    "#ffe399",
    "#ffd362",
    "#ffc636",
    "#ffbe18",
    "#ffba02",
    "#e4a300",
    "#ca9100",
    "#af7c00",
  ],
  green: ["#e7fdf2", "#d8f4e6", "#b5e5cc", "#8dd6b0", "#6dca99", "#57c289", "#4abe81", "#3aa76d", "#2e9560", "#1d8150"],
  cyan: [
    // "#edfafc",
    // "#ddf2f5",
    "#b6e5ed",
    "#8cd8e4",
    "#6ecddd",
    "#5cc6d8",
    "#51c2d6",
    "#42abbe",
    "#3498aa",
    "#0A363D",
    darken("#188495", 0.1),
    darken("#188495", 0.2),
  ],
  red: ["#ffe9e9", "#ffd4d3", "#f5a8a7", "#ed7977", "#e6524e", "#e23835", "#e22a27", "#c81c1a", "#b41416", "#9d060f"],
  purple: [
    // "#f5f0f9",
    // "#e7ddee",
    "#ceb8de",
    "#b490ce",
    "#9e6fc2",
    "#9159ba",
    "#8a4fb7",
    "#7740a1",
    "#6a3890",
    "#3b1e51",
    darken("#3b1e51", 0.1),
    darken("#3b1e51", 0.2),
  ],
};

export const appTheme = createTheme({
  /** Put your mantine theme override here */
  fontFamily: "Urbanist",
  primaryColor: "boastful-blue",
  cursorType: "pointer",
  colors: {
    "boastful-blue": LB_COLOR_PALETTES.blue,
    "boastful-yellow": LB_COLOR_PALETTES.yellow,
    "boastful-green": LB_COLOR_PALETTES.green,
    "boastful-red": LB_COLOR_PALETTES.red,
    "boastful-purple": LB_COLOR_PALETTES.purple,
    dark: LB_COLOR_PALETTES.cyan,
  },
  components: {
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "never",
        fw: "bolder",
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
