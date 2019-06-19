import * as React from "react";
import { Button, WingBlank, WhiteSpace } from "../../components";

import "./style/index.less";

export default class Content extends React.Component {
  render() {
    const btnAry: BtnChildProps[] = [
      {
        content: "页面主操作",
        size: "xl",
        type: "primary"
      },
      {
        content: "页面主操作",
        size: "lg",
        type: "primary",
        disabled: true
      },
      {
        content: "页面次要操作",
        size: "lg"
      },
      {
        content: "页面次要操作",
        size: "lg",
        disabled: true
      },
      {
        content: "警告操作",
        size: "lg",
        type: "warning"
      },
      {
        content: "警告操作",
        size: "lg",
        type: "warning",
        disabled: true
      }
    ];
    const inlineBtnAry: BtnChildProps[] = [
      {
        content: "按钮",
        type: "primary"
      },
      {
        content: "按钮"
      },
      {
        content: "警告",
        type: "warning"
      },
      {
        content: "禁止",
        disabled: true
      }
    ];
    return (
      <div className="button-wrap">
        <WingBlank>
          <WhiteSpace size="lg" />
          <div className="title-en">Button</div>
          <WhiteSpace />
          <div className="title-ch">按钮</div>
          {createButtons(btnAry)}
          {createInlineButtons(inlineBtnAry)}
        </WingBlank>
      </div>
    );
  }
}

interface BtnChildProps {
  content: string;
  size?: "sm" | "md" | "lg" | "xl" | "xs";
  type?: "primary" | "warning" | "ghost";
  disabled?: boolean;
}

function createButtons(btnAry: BtnChildProps[]) {
  return btnAry.map(item => {
    return (
      <React.Fragment>
        <WhiteSpace size={item.size} />
        <Button type={item.type} disabled={item.disabled}>
          {item.content}
        </Button>
      </React.Fragment>
    );
  });
}
function createInlineButtons(btnAry: BtnChildProps[]) {
  return (
    <React.Fragment>
      <WhiteSpace size="lg" />{" "}
      {btnAry.map(item => {
        return (
          <React.Fragment>
            <Button type={item.type} inline={true} disabled={item.disabled}>
              {item.content}
            </Button>
            <span className="button-right-space" />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}
