import { Group, Stack, Text } from "@mantine/core";
import BlockLink from "components/BlockLink";
import { ImageKeys } from "constants/Images";
import getCopy from "constants/localisation";
import Paths from "Paths";
import styles from "./styles.module.sass";
import Album from "components/Album";

export interface ShowcaseProps {
  imageIds: (keyof typeof ImageKeys)[];
  description: string;
}

export const Showcase = (props: ShowcaseProps) => {
  return (
    <Group className={styles.showcase}>
      <Stack className={styles.textContainer} p="xl" pr="md" gap="xl">
        <Text c="dark.9" fw={600} fz="lg">
          {props.description}
        </Text>
        {/** todo */}
        <BlockLink ctaTo={`/${Paths.Contact}`}>
          <Text fz="lg">{getCopy("bookConsultationCTA")}</Text>
        </BlockLink>
      </Stack>
      {!!props.imageIds.length && <Album bg="dark.9" className={styles.imageContainer} imageIds={props.imageIds} />}
    </Group>
  );
};

export default Showcase;
