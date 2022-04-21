import { h, render } from "preact";
import { Example } from "./components/Example";

const App = () => {
  return <Example title="Hello World" />;
};

render(<App />, document.body);
