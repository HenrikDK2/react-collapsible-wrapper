# React collapsible component

Lightwight collapsible wrapper that is easy to use and customizable.

## Install

```bash
npm i react-collapsible-wrapper
```

## All Properties

- isOpen (`required`) Tells the wrapper if it should collapse or not
- duration (default `is calculated based on content`) Transition duration in seconds
- easing (default `linear`) - Acceleration curve for transition
- tagName (default `div`) - The wrapper tag
- className
- style
- onTransitionEnd
- onChange

## Simple Example:

```jsx
import React, { useState } from "react";
import Collapse from "react-collapsible-wrapper";

const ExampleComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <h1>Lorem is god</h1>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industrys standard dummy text ever since the 1500s
      </p>

      <Collapse isOpen={isOpen}>
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

export default ExampleComponent;
```
