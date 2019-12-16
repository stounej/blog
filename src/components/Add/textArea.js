import React from "react";


class TextArea extends React.Component {
  render() {
    console.log(this.props);
    return (
    
      <div className="form-group">
        <textarea
          className="form-control noresize"
          rows=""
          onChange={this.props.hundleChange}
        />
      </div>
    );
  }
}
export default TextArea;
