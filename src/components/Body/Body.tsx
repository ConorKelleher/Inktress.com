import { Box } from "@mantine/core";
import { PropsWithChildren } from "react";
import styles from "./styles.module.sass";
import { COLORS } from "theme";

const Body = (props: PropsWithChildren) => {
  return (
    <Box id="page-body" className={styles.body_box} style={{ backgroundColor: COLORS.body }}>
      {props.children}
    </Box>
  );
};

export default Body;
