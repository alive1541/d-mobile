import * as React from "react";
import Dialog from "../../mc/dialog";
import classnames from "classnames";

import "./style/index.less";
import TouchFeedback from "src/mc/feedback";

interface Action<T> {
  text: string;
  onPress?: () => void | Promise<any>;
  style?: T | string;
}

export interface ModalProps<T> {
  visible?: boolean;
  onClose?: () => void;
  title?: string;
  closeable?: boolean;
  wrapClassName?: string;
  popup?: boolean;
  prefixCls?: string;
  className?: string;
  transparent?: boolean;
  operation?: boolean;
  footer: Action<T>[];
}

export default class Modal extends React.Component<
  ModalProps<React.CSSProperties>,
  any
> {
  static defaultProps = {
    prefixCls: "d-modal",
    transparent: true,
    popup: false
  };
  renderFooterDom = (
    button: Action<React.CSSProperties>,
    prefixCls: string | undefined,
    i: number
  ) => {
    let buttonStyle = {};
    if (button.style) {
      buttonStyle = button.style;
      if (typeof buttonStyle === "string") {
        const styleMap: { [key: string]: object } = {
          cancel: {},
          default: {},
          destructive: { color: "red" }
        };
        buttonStyle = styleMap[buttonStyle] || {};
      }
    }

    const onClickFn = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (button.onPress) {
        button.onPress();
      }
    };

    return (
      <TouchFeedback activeClassName={`${prefixCls}-button-active`} key={i}>
        <a
          className={`${prefixCls}-button`}
          style={buttonStyle}
          onClick={onClickFn}
        >
          {button.text || "Button"}
        </a>
      </TouchFeedback>
    );
  };
  render() {
    const {
      wrapClassName,
      popup,
      prefixCls,
      className,
      transparent,
      footer,
      operation,
      ...restProps
    } = this.props;

    const wrapCls = classnames(wrapClassName, {
      [`${prefixCls}-wrap-popup`]: popup
    });
    const cls = classnames(className, {
      [`${prefixCls}-transparent`]: transparent,
      [`${prefixCls}-popup`]: popup
    });
    const btnGroupClass = classnames(
      `${prefixCls}-button-group-${
        footer.length === 2 && !operation ? "h" : "v"
      }`,
      `${prefixCls}-button-group-${operation ? "operation" : "normal"}`
    );
    const footerDom = footer.length ? (
      <div className={btnGroupClass}>
        {footer.map((button, i) => {
          return this.renderFooterDom(button, prefixCls, i);
        })}
      </div>
    ) : null;

    return (
      <Dialog
        prefixCls={prefixCls}
        wrapClassName={wrapCls}
        className={cls}
        footer={footerDom}
        {...restProps}
      />
    );
  }
}
