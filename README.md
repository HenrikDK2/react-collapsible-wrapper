# React collapsible wrapper

Lightwight collapsible wrapper that is easy to use and customizable.

![screen-gif](https://raw.githubusercontent.com/HenrikDK2/react-collapsible-wrapper/main/example/example.gif)

## Install

```bash
npm i react-collapsible-wrapper
```

## Properties

### Required

- isOpen (`boolean`) If wrapper should collapse or not

### Optional

- duration (`number`) | Transition duration in seconds | `Based on content`
- easing (`string`) | Acceleration curve | `linear`
- tagName (`string`) | The wrapper tag | `div`
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
      <Collapse isOpen={isOpen}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas, mi vel ultrices
          lacinia, lacus nibh vestibulum nunc, ac fringilla nisl magna tempor mi.
        </p>
      </Collapse>

      <button onClick={() => setIsOpen(!isOpen)}>Click me!</button>
    </article>
  );
};

export default ExampleComponent;
```
