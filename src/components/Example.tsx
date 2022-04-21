import { h, FunctionComponent } from "preact";

type ExampleProps = {
  title: string;
};

export const Example: FunctionComponent<ExampleProps> = ({ title }) => {
  return <h1>{title}</h1>;
};
