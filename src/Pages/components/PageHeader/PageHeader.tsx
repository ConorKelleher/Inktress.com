import SlowImage, { SlowImageProps } from "components/SlowImage";
import styles from "./styles.module.sass";

export interface PageHeaderProps extends SlowImageProps {}

const PageHeader = (props: PageHeaderProps) => {
  return (
    <div className={styles.page_header}>
      <SlowImage {...props} style={{ objectFit: "cover", maxWidth: "unset", ...props.style }} />
    </div>
  );
};

export default PageHeader;
