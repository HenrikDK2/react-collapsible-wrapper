import React, { useRef, RefObject, ReactElement, CSSProperties } from "react";

enum tagName {
  "div",
  "article",
  "section",
  "ul",
  "ol",
  "li",
}

type Options = {
  children: ReactElement | ReactElement[];
  isOpen: boolean;
  duration?: number;
  easing?: string;
  className?: string;
  style?: CSSProperties;
  tagName?: keyof typeof tagName;
  tabIndex?: number;
  onTransitionEnd?: React.TransitionEventHandler<HTMLElement>;
  onChange?: React.FormEventHandler<HTMLElement>;
};

type createPropsProps = Options & {
  ref: RefObject<HTMLElement>;
};

const defaultStyle = { maxHeight: 0, overflow: "hidden" };

const createProps = ({
  isOpen,
  duration,
  easing,
  className,
  style,
  ref,
}: createPropsProps): any => {
  let transition;

  if (ref.current) {
    transition = `max-height ${duration || ref.current.scrollHeight / 750}s ${easing || "linear"}`;
  }

  if (isOpen) {
    return {
      "aria-hidden": "false",
      className,
      style: { ...style, ...defaultStyle, transition, maxHeight: ref.current?.scrollHeight + "px" },
    };
  } else {
    return { "aria-hidden": "true", className, style: { ...style, ...defaultStyle, transition } };
  }
};

export default function (props: Options) {
  const ref = useRef<HTMLDivElement>(null);
  const CustomTag = props.tagName ? props.tagName : "div";
  const containerProps = createProps({ ...props, ref });

  return (
    <CustomTag
      ref={ref}
      tabIndex={props.tabIndex}
      onChange={props.onChange}
      onTransitionEnd={props.onTransitionEnd}
      {...containerProps}
    >
      {props.children}
    </CustomTag>
  );
}
