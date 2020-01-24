import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';

export default class google extends Component {

    state = {
        isLoggedIn_g: false,
        clientId: '',
        buttonText:'',
        name: '',
        email: '',
        picture: '',
    }

    responseGoogle = (response) => {
        console.log(response);
        
        this.setState({
            isLoggedIn_g:true,
            userID: response.userID,
            name: response.profileObj.name,
            email: response.profileObj.email,
            picture: response.profileObj.imageUrl
        });
    }

    render() {
        let GContent;

        if(this.state.isLoggedIn_g){
            GContent = (
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
            GContent = (<GoogleLogin
                clientId="942723636397-plgsodb9gvmogcq9qfolf8rj7gb2de3d.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
              />);
        }
        return (
            <div>
                {GContent}
            </div>
        )
    }
}
