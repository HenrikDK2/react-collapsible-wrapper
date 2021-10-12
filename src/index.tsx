import { CSSProperties, useEffect, useRef, useState } from "react";
import { Options, CreatePropsProps } from "./types";

const defaultStyle: CSSProperties = { maxHeight: 0, overflow: "hidden" };

const createProps = ({ isOpen, duration, easing, style, ref }: CreatePropsProps): any => {
  let transition: string;

  if (ref.current) {
    transition = `max-height ${duration || ref.current.scrollHeight / 750}s ${easing || "linear"}`;
  }

  if (isOpen) {
    return {
      "aria-hidden": "false",
      style: { ...style, ...defaultStyle, transition, maxHeight: ref.current?.scrollHeight + "px" },
    };
  } else {
    return { "aria-hidden": "true", style: { ...style, ...defaultStyle, transition } };
  }
};

export default function (props: Options) {
  const forceUpdate: () => void = useState()[1].bind(null, {});
  const ref = useRef<HTMLElement>(null);
  const CustomTag = props.tagName || "div";

  useEffect(() => {
    if (props.isOpen) forceUpdate();
  }, []);

  console.log("update");

  return (
    <CustomTag
      ref={ref}
      id={props.id}
      className={props.className}
      tabIndex={props.tabIndex}
      onChange={props.onChange}
      onTransitionEnd={props.onTransitionEnd}
      {...createProps({ ...props, ref })}
    >
      {props.children}
    </CustomTag>
  );
}
