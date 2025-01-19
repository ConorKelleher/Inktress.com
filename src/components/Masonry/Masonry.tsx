import { Group, Stack } from "@mantine/core";
import { ImageKey, Images } from "constants/Images";
import { useWindowResize } from "localboast/hooks/useWindowResize";
import { ReactNode, useLayoutEffect, useMemo, useRef, useState } from "react";
import { SlowImageProps } from "components/SlowImage";
import { nMap } from "localboast/utils";
import { useMediaQuery } from "@mantine/hooks";

export interface RenderProps extends SlowImageProps {
  key: string;
}

export interface MasonryProps {
  children: (imageProps: RenderProps) => ReactNode;
  imageIds: ImageKey[];
}

const LARGE_COLUMN_WIDTH = 450;
const SMALL_COLUMN_WIDTH = 300;
const GAP = 7;
const CONTAINER_PADDING = 20;

const lowestIndex = (arr: number[]) => {
  let lowest = 0;
  arr.forEach((num, index) => {
    if (num < arr[lowest]) {
      lowest = index;
    }
  });
  return lowest;
};

export const Masonry = ({ children, imageIds }: MasonryProps) => {
  const containerRef = useRef<HTMLDivElement>();
  const [availableWidth, setAvailableWidth] = useState(window.screen.width);

  const { width } = useWindowResize();

  const isSmallColumns = useMediaQuery("(max-width: 60em)");

  useLayoutEffect(() => {
    setAvailableWidth(containerRef.current!.getBoundingClientRect().width);
  }, [width]);

  const columnWidth = Math.min(
    isSmallColumns ? SMALL_COLUMN_WIDTH : LARGE_COLUMN_WIDTH,
    availableWidth - CONTAINER_PADDING * 2
  );
  const maxColumnCount = useMemo(() => {
    return Math.floor((availableWidth + GAP - CONTAINER_PADDING * 2) / (columnWidth + GAP));
  }, [availableWidth, columnWidth]);
  const columnCount = Math.max(1, Math.min(maxColumnCount, imageIds.length));
  const columnData: ImageKey[][] = nMap(columnCount, () => []);
  const columnHeights: number[] = new Array(columnCount).fill(0);
  imageIds.map((imageId) => {
    const { width, height } = Images[imageId];
    const shortestColumnIndex = lowestIndex(columnHeights);
    columnData[shortestColumnIndex].push(imageId);
    const imageRatio = height && width ? height / width : 1;
    const scaledHeight = columnWidth * imageRatio;
    columnHeights[shortestColumnIndex] += scaledHeight;
  });

  return (
    <Group
      ref={(ref) => {
        if (ref) {
          containerRef.current = ref;
        }
      }}
      w="100%"
      gap={GAP}
      pb="xl"
      justify="center"
    >
      {columnData.map((columnImages, columnIndex) => (
        <Stack key={`masonry_col-${columnIndex}`} w={columnWidth} h="100%" p={GAP / 2} mb="auto" justify="flex-start">
          {columnImages.map((imageId, rowIndex) =>
            children({
              key: `masonry_col-${columnIndex}_row-${rowIndex}`,
              imageId,
            })
          )}
        </Stack>
      ))}
    </Group>
  );
};

export default Masonry;
