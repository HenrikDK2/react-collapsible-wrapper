import {
  CSSProperties,
  useEffect,
  useRef,
  useState,
  forwardRef,
  ReactElement,
  RefObject,
} from "react";

enum TagName {
  "div",
  "article",
  "section",
  "ul",
  "ol",
  "li",
}

type Ref = React.MutableRefObject<HTMLElement>;

type Options = {
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

type CreatePropsProps = Options & {
  ref: RefObject<HTMLElement> | Ref;
};

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

const Collapse = forwardRef((props: Options, refParent: Ref) => {
  const forceUpdate: () => void = useState()[1].bind(null, {});
  const ref = refParent || useRef<HTMLElement>(null);
  const CustomTag = props.tagName || "div";

  useEffect(() => {
    if (props.isOpen || props.updateAfterInitRender) forceUpdate();
  }, []);

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
});

export default Collapse as React.FC<Options>;
