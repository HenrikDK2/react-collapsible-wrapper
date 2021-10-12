import { CSSProperties, ReactElement } from "react";
declare enum TagName {
    "div" = 0,
    "article" = 1,
    "section" = 2,
    "ul" = 3,
    "ol" = 4,
    "li" = 5
}
declare type Ref = React.MutableRefObject<HTMLElement>;
declare type Options = {
    children: ReactElement | ReactElement[];
    isOpen: boolean;
    updateAfterInitRender?: boolean;
    duration?: number;
    ref?: Ref;
    easing?: string;
    id?: string;
    className?: string;
    style?: CSSProperties;
    tagName?: keyof typeof TagName;
    tabIndex?: number;
    onTransitionEnd?: React.TransitionEventHandler<HTMLElement>;
    onChange?: React.FormEventHandler<HTMLElement>;
};
declare const _default: import("react").FC<Options>;
export default _default;
