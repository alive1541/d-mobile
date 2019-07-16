import * as React from "react";
import * as ReactDOM from "react-dom";
import closest from "../util/closest";
import Modal from "./modal";
import { Action } from "./propsType";

export default function operation(
  actions = [{ text: "确定" }],
  platform = "ios"
) {
  let closed = false;

  const prefixCls = "d-modal";
  const div = document.createElement("div");
  document.body.appendChild(div);

  function close() {
    ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  const footer = actions.map((button: Action<React.CSSProperties>) => {
    // tslint:disable-next-line:only-arrow-functions
    const orginPress = button.onPress || function() {};
    button.onPress = () => {
      if (closed) {
        return;
      }

      const res = orginPress();
      if (res && res.then) {
        res
          .then(() => {
            closed = true;
            close();
          })
          .catch(() => {});
      } else {
        closed = true;
        close();
      }
    };
    return button;
  });

  function onWrapTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target as Element, `.d-modal-footer`);
    if (!pNode) {
      e.preventDefault();
    }
  }

  ReactDOM.render(
    <Modal
      visible
      operation
      transparent
      prefixCls={prefixCls}
      onClose={close}
      footer={footer}
      className="d-modal-operation"
      platform={platform}
      wrapProps={{ onTouchStart: onWrapTouchStart }}
    />,
    div
  );

  return {
    close
  };
}
