import React, { useRef, useState } from "react";
import { render } from "react-dom";
import Collapse from "../dist";
import "./style.css";

const ExampleComponent = (props) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);

  return (
    <li>
      <button onClick={() => setIsOpen(!isOpen)}>Click me!</button>
      <Collapse className="collapse-container" isOpen={isOpen}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas, mi vel ultrices lacinia, lacus nibh
          vestibulum nunc, ac fringilla nisl magna tempor mi.
        </p>
      </Collapse>
    </li>
  );
};

const App = () => {
  return (
    <ul>
      <ExampleComponent />
      <ExampleComponent isOpen={true} />
      <ExampleComponent />
    </ul>
  );
};

render(<App />, document.getElementById("react"));
