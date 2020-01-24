import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class facebook extends Component {

    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: '',
    }

    responseFacebook = response => {
        console.log(response);
        this.setState({
            isLoggedIn:true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url,
        })
    }

    componentClicked = () => console.log("kiliksaya");


    render() {
        let fbContent;

        if(this.state.isLoggedIn){
            fbContent = (
                <div style={{
                    width:'400px',
                    margin:'auto',
                    padding:'20px'
                }}>
                    <img src={this.state.picture} alt={this.state.name}></img>
            <h2>welcome {this.state.name}</h2>
            email: {this.state.email}
                </div>
            );
        }else{
            fbContent = (<FacebookLogin
                appId="2496692170584468"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />);
        }
        return (
            <div>
                {fbContent}
            </div>
        )
    }
}
