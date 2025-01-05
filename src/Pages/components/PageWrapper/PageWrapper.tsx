import { Center, Stack } from "@mantine/core";
import { PropsWithChildren } from "react";

const PageWrapper = (props: PropsWithChildren) => (
  <Center component="main" w="100%" h="100%" mah="fit-content">
    <Stack w="100%" mih="100%" h="100%" gap={0}>
      {props.children}
    </Stack>
  </Center>
);

export default PageWrapper;
