import React from 'react';

export default class Login extends React.Component {
    render() {
        const { onTokenChanged, history } = this.props;
        return (
            <form className="container">
                <div className="form-signin">
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <label className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                    <label className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block"
                        onClick={(event) => {
                            event.preventDefault();
                            onTokenChanged('xxxxxxxxx');
                            history.goBack();
                        }}
                    >Sign in</button>
                </div>
            </form>
        );
    }
}