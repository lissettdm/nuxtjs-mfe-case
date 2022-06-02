import ReactDOM from "react-dom";
import App from "./App";

function renderApp(node: HTMLElement) {
  ReactDOM.hydrate(<App />, node);
}

export default renderApp;
