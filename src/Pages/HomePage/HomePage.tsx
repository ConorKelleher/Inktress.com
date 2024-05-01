import usePageTitle from "localboast/hooks/usePageTitle";
import Haptic from "localboast/components/Haptic";
import styles from "./styles.module.sass";

import LeftLeafImage from "./assets/left_leaf.png";
import RightLeafImage from "./assets/right_leaf.png";
import TopLeftArrowImage from "./assets/top-left-arrow.png";
import SignPostImage from "./assets/signpost.png";
import LogoSignImage from "./assets/logo_sign.png";
import MailboxImage from "./assets/mailbox.png";
import MailboxFlapImage from "./assets/mailbox_flap.png";

const HomePage = () => {
  usePageTitle("Inkantress");

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.leftArrow}>
        <img role="presentation" src={TopLeftArrowImage} />
      </div>

      <div className={styles.rightArrow}>
        <img role="presentation" src={TopLeftArrowImage} />
      </div>

      <div className={styles.crossRoads}>
        <div className={styles.mailbox}>
          <div className={styles.mailboxImageWrapper}>
            <div className={styles.flapWrap}>
              <Haptic
                type="spin"
                animateReturn
                rotationVector={[-1, 0, 0]}
                clickRotation={100}
                clickMs={250}
                returnMs={400}
                focusRotation={40}
                component="img"
                role="presentation"
                src={MailboxFlapImage}
              />
            </div>
            <img role="presentation" src={MailboxImage} />
          </div>
        </div>
        <div className={styles.signPost}>
          <Haptic
            animateReturn={false}
            type="spin"
            rotationVector={[0, 10, -2]}
            clickMs={400}
            component="img"
            src={LogoSignImage}
          />
          <img role="presentation" src={SignPostImage} />
        </div>
      </div>

      <div className={styles.leftLeaf}>
        <img role="presentation" src={LeftLeafImage} />
      </div>

      <div className={styles.rightLeaf}>
        <img role="presentation" src={RightLeafImage} />
      </div>
    </div>
  );
};

export default HomePage;
