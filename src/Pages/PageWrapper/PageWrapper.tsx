import Body from "components/Body";
import React from "react";

const PageWrapper = (props: React.PropsWithChildren) => {
  return (
    <>
      <Body>{props.children}</Body>
    </>
  );
};

export default PageWrapper;
