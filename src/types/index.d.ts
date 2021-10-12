import React, { RefObject, ReactElement, CSSProperties } from "react";

export enum TagName {
  "div",
  "article",
  "section",
  "ul",
  "ol",
  "li",
}

export type Options = {
  children: ReactElement | ReactElement[];
  isOpen: boolean;
  duration?: number;
  easing?: string;
  id?: string;
  className?: string;
  style?: CSSProperties;
  tagName?: keyof typeof TagName;
  tabIndex?: number;
  onTransitionEnd?: React.TransitionEventHandler<HTMLElement>;
  onChange?: React.FormEventHandler<HTMLElement>;
};

export type CreatePropsProps = Options & {
  ref: RefObject<HTMLElement>;
};
