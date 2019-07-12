import * as React from "react";
import classnames from "classnames";
import { ButtonPropsType } from "./PropsType";
import TouchFeedback from "../../mc/feedback";
import "./style/index.less";

export interface ButtonProps extends ButtonPropsType {
  prefixCls?: string;
  className?: string;
  role?: string;
  inline?: boolean;
  icon?: React.ReactNode;
  activeClassName?: string;
  activeStyle?: boolean | React.CSSProperties;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

//中文字符范围\u4e00-\u9fa5
const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str: any) {
  return typeof str === "string";
}
//判断是否是两个中文字符
function insertSpace(child: any) {
  if (isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(
      child,
      {},
      child.props.children.split("").join(" ")
    );
  }
  if (isString(child)) {
    if (isTwoCNChar(child)) {
      child = child.split("").join(" ");
    }
    return <span>{child}</span>;
  }
  return child;
}

class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    prefixCls: "d-button",
    size: "large",
    inline: false,
    disabled: false,
    loading: false,
    activeStyle: {}
  };

  render() {
    const {
      children,
      className,
      prefixCls,
      type,
      size,
      inline,
      disabled,
      icon,
      loading,
      activeStyle,
      activeClassName,
      onClick,
      ...restProps
    } = this.props;

    // const iconType: any = loading ? "loading" : icon;
    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-primary`]: type === "primary",
      [`${prefixCls}-ghost`]: type === "ghost",
      [`${prefixCls}-warning`]: type === "warning",
      [`${prefixCls}-small`]: size === "small",
      [`${prefixCls}-inline`]: inline,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-loading`]: loading
      // [`${prefixCls}-icon`]: !!iconType
    });

    const kids = React.Children.map(children, insertSpace);

    // let iconEl;
    // if (typeof iconType === "string") {
    //   iconEl = (
    //     <Icon
    //       aria-hidden="true"
    //       type={iconType}
    //       size={size === "small" ? "xxs" : "md"}
    //       className={`${prefixCls}-icon`}
    //     />
    //   );
    // } else if (iconType) {
    //   const rawCls = iconType.props && iconType.props.className;
    //   const cls = classnames(
    //     "am-icon",
    //     `${prefixCls}-icon`,
    //     size === "small" ? "am-icon-xxs" : "am-icon-md"
    //   );
    //   iconEl = React.cloneElement(iconType, {
    //     className: rawCls ? `${rawCls} ${cls}` : cls
    //   });
    // }
    return (
      <TouchFeedback
        // tslint:disable-next-line:jsx-no-multiline-js
        activeClassName={
          activeClassName || (activeStyle ? `${prefixCls}-active` : undefined)
        }
        disabled={disabled}
        activeStyle={activeStyle}
      >
        <a
          role="button"
          className={wrapCls}
          {...restProps}
          onClick={disabled ? undefined : onClick}
        >
          {kids}
        </a>
      </TouchFeedback>
    );
  }
}

export default Button;
