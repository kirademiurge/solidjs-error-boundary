import { Component, ErrorBoundary, For } from "solid-js";
import { ErrorProvider, errorStore } from "./providers";

export const BrokenComponent = () => {
  throw new Error("something was wrong");
  return <p>broken component</p>
}

export const App: Component = () => {
  return (
    <ErrorProvider>

      <div class="app">
        <button onClick={ () => errorStore.pushError(new Error("oh, no.")) }>push error</button>
        
        <h2>errors:</h2>
        <ul>
          <For each={errorStore.errors}>
            {
              (error, index) => {
                return (
                  <li>{index}. {error.message}</li>
                )
              }
            }
          </For>
        </ul>

        <hr />

        <h2>error boundary:</h2>

        <ErrorBoundary
          fallback={ (error) => {
            errorStore.pushError(error);
            return error.message;
          }}
        >
          <BrokenComponent />
        </ErrorBoundary>

      </div>

    </ErrorProvider>
  );
};
