import * as React from "react";
import { Button, WingBlank, WhiteSpace } from "../../components";

import "./style/index.less";

export default class Content extends React.Component {
  render() {
    const btnAry: BtnChildProps[] = [
      {
        size: "xl",
        type: "primary"
      },
      {
        size: "lg",
        type: "primary",
        disabled: true
      },
      {
        size: "lg"
      },
      {
        size: "lg",
        disabled: true
      },
      {
        size: "lg",
        type: "warning"
      },
      {
        size: "lg",
        type: "warning",
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
        </WingBlank>
      </div>
    );
  }
}

interface BtnChildProps {
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
          Primary
        </Button>
      </React.Fragment>
    );
  });
}
