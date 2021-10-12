import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends Component {

    renderError({error,touched}){
            if (touched && error){
                return (
                    <div className="ui error message">

                    <div className="header">
                        {error}
                    </div>
                    </div>
                )
            }
    }


  renderInput=({ input, label,meta })=> {
    //   console.log(meta)
    const className=`field ${meta.error && meta.touched? "error":""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input
          // onChange={formProps.input.onChange}
          // value={formProps.input.value}
          // or
          {...input}
          />
          {this.renderError(meta)}
      </div>
    );
  };

  onSubmit=(formValue)=> {
    this.props.createStream(formValue)
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
          />
          <button className="ui button primary">submit</button>
        </form>
      </div>
    );
  }
}

const validate =(formValue)=>{
const error={}
    if(!formValue.title){
error.title="You must enter a title"
    }
    if(!formValue.description){
error.description="You must enter a description"
    }
    return error;
}



const formWrapped = reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);

export default connect(null,{createStream})(formWrapped);