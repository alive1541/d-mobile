import * as React from "react";
import classname from "classnames";
import { WingBlankPropsType } from "./PropsType";

import "./style/index.less";

export interface WingBlankProps extends WingBlankPropsType {
  className?: string;
  prefixCls?: string;
  style?: React.CSSProperties;
}

class WingBlank extends React.Component<WingBlankProps, any> {
  static defaultProps = {
    prefixCls: "d-wingblank",
    size: "lg"
  };
  render() {
    const { prefixCls, size, style, children, className } = this.props;
    const wrapCls = classname(prefixCls, `${prefixCls}-${size}`, className);
    return (
      <div className={wrapCls} style={style}>
        {children}
      </div>
    );
  }
}

export default WingBlank;
