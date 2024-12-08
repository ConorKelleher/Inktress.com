import ErrorBoundaryDisplay from "components/ErrorBoundaryDisplay";
import AppWrapper from "components/AppWrapper";
import { Outlet } from "react-router-dom";

export const UnwrappedRoot = () => (
  <ErrorBoundaryDisplay>
    <Outlet />
  </ErrorBoundaryDisplay>
);

const Root = () => (
  <AppWrapper>
    <UnwrappedRoot />
  </AppWrapper>
);

export default Root;
