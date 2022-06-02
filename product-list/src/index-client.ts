import { createApp } from "./main";

function renderApp(node) {
  const { app } = createApp();
  app.mount(node);
}
export default renderApp;
