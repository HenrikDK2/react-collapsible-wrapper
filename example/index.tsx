import React, { useState } from "react";
import { render } from "react-dom";
import Collapse from "../dist";
import "./style.css";

const ExampleComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <h1>Lorem is god</h1>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industrys standard dummy text ever since the 1500s
      </p>

      <Collapse
        onTransitionEnd={(e) => console.log(e)}
        className="collapse-container"
        isOpen={isOpen}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas, mi vel ultrices
          lacinia, lacus nibh vestibulum nunc, ac fringilla nisl magna tempor mi.
        </p>

        <p>
          Quisque sollicitudin metus sit amet nunc malesuada, quis lobortis velit fermentum. Mauris
          sodales nisi id ipsum facilisis auctor. Nullam sit amet magna non lectus elementum
          interdum pharetra id nulla.
        </p>
      </Collapse>

      <button onClick={() => setIsOpen(!isOpen)}>Click me!</button>
    </article>
  );
};

render(<ExampleComponent />, document.getElementById("react"));
