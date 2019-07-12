import * as React from "react";
import { Button, WhiteSpace } from "../../components";
import "./style/index.less";

interface propsType {
  history?: any;
}

export default class Content extends React.Component<propsType, any> {
  render() {
    const btnAry: BtnChildProps[] = [
      {
        content: "Button",
        size: "xl",
        type: "primary",
        onClick: e => this.props.history.push("button")
      },
      {
        content: "Modal",
        size: "lg",
        type: "primary",
        onClick: e => this.props.history.push("modal")
      }
    ];
    return (
      <div className="button-wrap">
        <div>DashBoard</div>
        {createButtons(btnAry)}
      </div>
    );
  }
}

interface BtnChildProps {
  content: string;
  size?: "sm" | "md" | "lg" | "xl" | "xs";
  type?: "primary" | "warning" | "ghost";
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function createButtons(btnAry: BtnChildProps[]) {
  return btnAry.map((item, index) => {
    return (
      <div key={index}>
        <WhiteSpace size={item.size} />
        <Button
          type={item.type}
          disabled={item.disabled}
          onClick={item.onClick}
        >
          {item.content}
        </Button>
      </div>
    );
  });
}
