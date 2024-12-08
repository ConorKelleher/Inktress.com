import { Text, TextProps } from "@mantine/core";
import { PropsWithChildren } from "react";

export interface FancyTitleProps extends PropsWithChildren, TextProps {}

const FancyTitle = (props: FancyTitleProps) => (
  <Text
    c="dark.8"
    ff="Alice"
    fz="30px"
    lh="35px"
    {...props}
    style={{ textAlign: "center", whiteSpace: "pre-wrap", ...props.style }}
  />
);

export default FancyTitle;
