import React, { Component } from 'react'

export default class GoogleAuth extends Component {
    state={isSignedIn:null}

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'692368308334-gu3670j4okfc7818tl3vb46b59naai2v.apps.googleusercontent.com',
                scope:'email'

            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                 this.setState({isSignedIn:this.auth.isSignedIn.get()})
            })
        });
    }

    renderAuthButton(){
        if(this.state.isSignedIn===null){
            return <div>I dont know if</div>
        }
        else if(this.state.isSignedIn){
            return <div>I signed in</div>
        }
        else{
            return <div>i'm not signin</div>

        }
    }
  render() {
        return (
            <div>
               {this.renderAuthButton()}
            </div>
        )
    }
}
