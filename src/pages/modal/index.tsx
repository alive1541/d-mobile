import * as React from "react";
import { Button, WhiteSpace, Modal } from "../../components";
import Wraper from "../base/wraper";

import "./style/index.less";

export default class Content extends React.Component {
  state = {
    modal1_visible: false,
    modal2_visible: false
  };
  handleClick = (key: string) => {
    this.setState({ [key]: true });
  };
  handleClose = (key: string) => {
    this.setState({ [key]: false });
  };
  render() {
    const { modal1_visible, modal2_visible } = this.state;
    const btnAry: BtnChildProps[] = [
      {
        content: "文本对话框",
        size: "lg",
        onClick: () => this.handleClick("modal1_visible")
      },
      {
        content: "带按钮的文本对话框",
        size: "lg",
        onClick: () => this.handleClick("modal2_visible")
      }
    ];

    return (
      <div className="button-wrap">
        <Wraper titleEn="Modal" titleCh="对话框" {...this.props}>
          {createButtons(btnAry)}
          <Modal
            // title="标题"
            closeable={true}
            visible={modal1_visible}
            onClose={() => this.handleClose("modal1_visible")}
            footer={[
              {
                text: "取消",
                onPress: () => this.handleClose("modal1_visible"),
                style: "default"
              },
              {
                text: "确定",
                onPress: () => this.handleClose("modal1_visible")
              }
            ]}
          >
            对话框消息内容
            <br />
          </Modal>
          <Modal
            title="标题"
            closeable={true}
            visible={modal2_visible}
            onClose={() => this.handleClose("modal2_visible")}
            footer={[
              {
                text: "取消",
                onPress: () => this.handleClose("modal2_visible"),
                style: "default"
              },
              {
                text: "确定",
                onPress: () => this.handleClose("modal2_visible")
              }
            ]}
          >
            对话框消息内容
            <br />
          </Modal>
        </Wraper>
      </div>
    );
  }
}

interface BtnChildProps {
  content: string;
  size?: "sm" | "md" | "lg" | "xl" | "xs";
  type?: "primary" | "warning" | "ghost";
  disabled?: boolean;
  onClick?: (e?: any) => void;
}

function createButtons(btnAry: BtnChildProps[]) {
  return btnAry.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <WhiteSpace size={item.size} />
        <Button
          onClick={item.onClick}
          className="modal-btn"
          type={item.type}
          disabled={item.disabled}
        >
          {item.content}
        </Button>
      </React.Fragment>
    );
  });
}
