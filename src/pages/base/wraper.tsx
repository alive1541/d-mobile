import * as React from "react";
import { WingBlank, WhiteSpace, Button } from "../../components";
import "./index.less";
interface WraperProps {
  titleEn: string;
  titleCh: string;
  history?: any;
}

export default class Wraper extends React.Component<WraperProps, any> {
  handleClick = () => {
    this.props.history.push("dashboard");
  };
  render() {
    const { titleEn, titleCh, children } = this.props;
    return (
      <React.Fragment>
        <WingBlank>
          <WhiteSpace size="lg" />
          <div className="title-en">
            {titleEn}
            <Button
              className="base-btn"
              inline={true}
              onClick={this.handleClick}
            >
              返回
            </Button>
          </div>
          <WhiteSpace />
          <div className="title-ch">{titleCh}</div>

          {children}
        </WingBlank>
      </React.Fragment>
    );
  }
}
