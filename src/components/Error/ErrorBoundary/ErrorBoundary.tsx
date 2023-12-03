import React, { ErrorInfo } from "react";
import FallbackComponent from "../FallbackComponent/FallbackComponent";
import { ChildrenProps } from "../../../types";

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
  ChildrenProps,
  State
> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error(
      "Show error from ErrorBoundary:",
      error,
      errorInfo.componentStack,
    );
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <FallbackComponent />;
    }

    return children;
  }
}
