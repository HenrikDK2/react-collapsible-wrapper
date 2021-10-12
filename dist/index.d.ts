import React, { ReactElement, CSSProperties } from "react";
declare enum tagName {
    "div" = 0,
    "article" = 1,
    "section" = 2,
    "ul" = 3,
    "ol" = 4,
    "li" = 5
}
declare type Options = {
    children: ReactElement | ReactElement[];
    isOpen: boolean;
    duration?: number;
    easing?: string;
    className?: string;
    style?: CSSProperties;
    tagName?: keyof typeof tagName;
    onTransitionEnd?: React.TransitionEventHandler<HTMLElement>;
    onChange?: React.FormEventHandler<HTMLElement>;
};
declare const _default: React.NamedExoticComponent<Options>;
export default _default;
