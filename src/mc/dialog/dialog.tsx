import * as React from "react";
import LazyRender from "./lazyRenderBox";

interface DialogPropsType {
  prefixCls: string;
  mask?: boolean;
  visible?: boolean;
  maskStyle?: {};
  footer?: React.ReactNode;
  title?: React.ReactNode;
  closable?: boolean;
  style?: {};
  bodyStyle?: {};
  className?: string;
  onClose?: (e: any) => void;
  wrapClassName?: string;
  maskClosable?: boolean;
}

export default class Dialog extends React.Component<DialogPropsType> {
  static defaultProps = {
    prefixCls: "d-mc-dialog",
    visible: false,
    mask: true,
    onClose: () => {},
    maskClosable: true
  };
  getMaskElement = () => {
    const props = this.props;
    let maskElement;
    if (props.mask) {
      maskElement = (
        <LazyRender
          className={`${props.prefixCls}-mask`}
          style={props.maskStyle || {}}
          visible={props.visible}
        />
      );
    }
    return maskElement;
  };
  close = (e: any) => {
    if (this.props.onClose) {
      this.props.onClose(e);
    }
  };
  getDialogElement = () => {
    const props = this.props;
    const closable = props.closable;
    const prefixCls = props.prefixCls;
    let footer;
    if (props.footer) {
      footer = <div className={`${prefixCls}-footer`}>{props.footer}</div>;
    }
    let title;
    if (props.title) {
      title = (
        <div className={`${prefixCls}-header`}>
          <div className={`${prefixCls}-title`}>{props.title}</div>
        </div>
      );
    }
    let closer;
    if (closable) {
      closer = (
        <button className={`${prefixCls}-close`} onClick={this.close}>
          <span className={`${prefixCls}-close-x`} />
        </button>
      );
    }
    const dialogElement = (
      <LazyRender
        style={props.style || {}}
        visible={props.visible}
        className={`${prefixCls} ${props.className || ""}`}
      >
        <div className={`${prefixCls}-content`}>
          {closer}
          {title}
          <div className={`${prefixCls}-body`} style={props.bodyStyle}>
            {props.children}
          </div>
          {footer}
        </div>
      </LazyRender>
    );

    return dialogElement;
  };
  onMaskClick = (e: any) => {
    if (e.target === e.currentTarget) {
      this.close(e);
    }
  };
  render() {
    const { props } = this;
    const { prefixCls, maskClosable } = props;
    return (
      <div>
        {this.getMaskElement()}
        <div
          className={`${prefixCls}-wrap ${props.wrapClassName || ""}`}
          onClick={maskClosable ? this.onMaskClick : undefined}
        >
          {this.getDialogElement()}
        </div>
      </div>
    );
  }
}
