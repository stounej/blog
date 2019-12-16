import React, { Component } from 'react';
import TextArea from "./textArea";

import Results from "./Results";
class Add extends Component {
    state = {
        text: ""
      };
              hundleChange = e => {
                this.setState({ text: e.target.value });
              };
              render() {
                return (
          
                  
                    <div className="row">
                      <div className="col-sm-6">
                        <TextArea hundleChange={this.hundleChange} />
                      </div>
                      <div className="col-sm-6 card">
                        <div class="card-header">outPut</div>
                        <div className="card-body">
                          <Results text={this.state.text} />
                        </div>
                      </div>
                    </div>
                 
                );
              }
     
}


export default Add;