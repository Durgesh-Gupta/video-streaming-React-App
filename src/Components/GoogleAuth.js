import React, { Component } from 'react'

export default class GoogleAuth extends Component {

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'692368308334-gu3670j4okfc7818tl3vb46b59naai2v.apps.googleusercontent.com',
                scope:'email'

            });
        });
    }

    render() {
        return (
            <div>
                Google Auth
            </div>
        )
    }
}
