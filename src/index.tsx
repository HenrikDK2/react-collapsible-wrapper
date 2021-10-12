import React, { useRef, FunctionComponent, RefObject, ReactElement } from "react";

interface Options {
  isOpen: boolean;
  duration?: number;
  easing?: string;
  children: ReactElement | ReactElement[];
}

interface createPropsProps {
  isOpen: boolean;
  duration?: number;
  easing?: string;
  ref: RefObject<HTMLDivElement>;
}

const defaultStyle = { maxHeight: 0, overflow: "hidden" };

const createProps = ({ isOpen, duration, easing, ref }: createPropsProps): any => {
  let transition;

  if (ref.current) {
    transition = `max-height ${duration || ref.current.scrollHeight / 750}s ${easing || "linear"}`;
  }

  if (isOpen) {
    return {
      "aria-hidden": "false",
      style: { ...defaultStyle, transition, maxHeight: ref.current?.scrollHeight + "px" },
    };
  } else {
    return { "aria-hidden": "true", style: { ...defaultStyle, transition } };
  }
};

const Collapse: FunctionComponent<Options> = ({ isOpen, duration, easing, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const props = createProps({ isOpen, duration, easing, ref });

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
};

export default React.memo(Collapse);
