import { Group, Stack, Text } from "@mantine/core";
import BlockLink from "components/BlockLink";
import { ImageKey } from "constants/Images";
import getCopy from "constants/localisation";
import * as Links from "constants/links";
import styles from "./styles.module.sass";
import Album from "components/Album";

export interface ShowcaseProps {
  imageIds: ImageKey[];
  description: string;
}

export const Showcase = (props: ShowcaseProps) => {
  return (
    <Group className={styles.showcase}>
      <Stack className={styles.textContainer} p="xl" pr="md" gap="xl">
        <Text c="dark.9" fw={600} fz="lg">
          {props.description}
        </Text>
        <BlockLink ctaHref={Links.CALENDLY_30_MINS} target="_blank" rel="noopener noreferrer">
          <Text fz="lg">{getCopy("bookConsultationCTA")}</Text>
        </BlockLink>
      </Stack>
      {!!props.imageIds.length && <Album bg="dark.9" className={styles.imageContainer} imageIds={props.imageIds} />}
    </Group>
  );
};

export default Showcase;
