import { ErrorBoundary } from "react-error-boundary";

/* error boundary
https://www.npmjs.com/package/react-error-boundary
- non-block UI
- better UX
- log error to easy system tracking, dev fix
*/
function ErrorBoundaryComponent({ children }: React.PropsWithChildren) {
  const logError = (error: Error, info: { componentStack: string }) => {
    // Do something with the error, e.g. log to an external API
    const params = {
      level: "Error",
      datetime: new Date().toUTCString(),
      os: window.navigator.platform,
      componentStack: JSON.stringify(info.componentStack),
      error: JSON.stringify(error.message),
      errorName: JSON.stringify(error.name),
      errorStack: JSON.stringify(error.stack),
      location: window.location.href,
    };
    // call api
    console.log("log error: ", params);
  };

  function FallbackUI() {
    return (
      <div role="alert">
        <pre style={{ color: "red" }}>Server under maintaince</pre>
      </div>
    );
  }

  return (
    <ErrorBoundary
      FallbackComponent={FallbackUI}
      onError={logError as any}
      onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

export default ErrorBoundaryComponent;
