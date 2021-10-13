import React, { Component } from "react";
import Modal from "../../Modal";
import history from "../../history";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {fetchStream} from "../../actions"


class StreamDelete extends Component {

  componentDidMount(){
this.props.fetchStream(this.props.match.params.id)
  }

  
  renderAction(){
  return (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );}

  render(){return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        content=" Are you sure you want to delete this stream?"
        actions={this.renderAction()}
        onDismiss={()=>history.push("/")}
      />
    </div>
  );}
}

export default connect(null,{fetchStream})(StreamDelete);
