import { Group, Stack, Text } from "@mantine/core";
import BlockButton from "components/BlockButton";
import SlowImage from "components/SlowImage";
import { ImageKeys } from "constants/Images";
import getCopy from "constants/localisation";
import Paths from "Paths";
import styles from "./styles.module.sass";

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
        <BlockButton ctaTo={`/${Paths.Contact}`}>
          <Text fz="lg">{getCopy("bookConsultationCTA")}</Text>
        </BlockButton>
      </Stack>
      {!!props.imageIds.length && (
        <SlowImage bg="dark.5" imageContainerClassName={styles.imageContainer} imageId={props.imageIds[0]} />
      )}
    </Group>
  );
};

export default Showcase;
