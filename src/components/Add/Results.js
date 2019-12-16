import React from "react";
import marked from "marked";

class Results extends React.Component {
  getMarkedDownText() {
    return { __html: marked(this.props.text) };
  }
  render() {
    return <div dangerouslySetInnerHTML={this.getMarkedDownText()} />;
    // return <div>{this.props.text}</div>;
  }
}
export default Results;
