import * as React from "react";
import * as ReactDOM from "react-dom";
import Dialog from "./dialog";
import { PropsTypes } from "./propsType";

import "./style/index.less";

const IS_REACT_16 = !!(ReactDOM as any).createPortal;

export default class DialogWraper extends React.Component<PropsTypes> {
  static defaultProps = {
    visible: false,
    onClose: () => {}
  };
  _component: any;
  contenter: any;

  componentDidUpdate() {
    if (!IS_REACT_16) {
      this.renderDialog();
    }
  }

  renderDialog() {
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.getComponent(),
      this.getContainer()
    );
  }

  getComponent = () => {
    const props = { ...this.props };
    return <Dialog {...props} />;
  };

  getContainer = () => {
    if (!this.contenter) {
      const contenter = document.createElement("div");
      document.body.appendChild(contenter);
      this.contenter = contenter;
    }
    return this.contenter;
  };

  render() {
    const { visible } = this.props;
    if (IS_REACT_16 && (visible || this._component)) {
      return ReactDOM.createPortal(this.getComponent(), this.getContainer());
    }
    return null as any;
  }
}
