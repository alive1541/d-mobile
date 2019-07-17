import * as React from "react";

export interface lazyRenderProps {
  style: {};
  visible?: boolean;
  className?: string;
}

export default class LazyRender extends React.Component<lazyRenderProps, any> {
  shouldComponentUpdate(nextProps: lazyRenderProps) {
    return !!nextProps.visible;
  }
  render() {
    const props: any = { ...this.props };
    delete props.visible;
    return <div {...props} />;
  }
}
