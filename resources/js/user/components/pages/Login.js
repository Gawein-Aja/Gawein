    import React, {Component} from 'react';
import { Auth } from '../functions/UserFunctions'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            error_message: null,
            errors: null
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault();

        this.setState({
            error_message: null,
            errors: null
        });

        if(this.state.email == "" || this.state.password == "") {
            this.setState({
                error_message: "Please enter login credentials"
            });

            return false;
        }

        Auth.login({email: this.state.email, password: this.state.password}, (response) => {
            if (response) {
                console.log(response);
                for (var i in response) {
                    console.log(response[i]);
                    localStorage.setItem("user." + i, response[i]);

                    setTimeout(() => {
                        this.props.history.push("/");
                    }, 500);
                }
            } else {
                localStorage.clear();

                this.setState({
                    error_message: "Unauthorized"
                });
            }
        }, (err) => {
            this.setState({
                error_message: err.response.data.message,
                errors: err.response.data.errors
            });
        });
    }

    render() {
        return (
            <div className="wrapper fadeInDown">
                <div className="form-layout">
                    <div className="formContent">
                        <div className="fadeIn first">
                            <h1 className="icon">Login</h1>
                        </div>

                        {
                            this.state.error_message?(<div className="alert alert-danger">{this.state.error_message}</div>):null
                        }

                        <form noValidate onSubmit={this.onSubmit} className="form-group">
                            <input
                                type="email"
                                className="form-control fadeIn second"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                            {
                                this.state.errors && this.state.errors.email?(<div className="help-block">{this.state.errors.email[0]}</div>):null
                            }
                            <input
                                type="password"
                                className="form-control fadeIn third"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                            {
                                this.state.errors && this.state.errors.password?(<div className="help-block">{this.state.errors.password[0]}</div>):null
                            }
                            <button type="submit" className="btn btn-primary fadeIn fourth" value="Submit">Log In</button>
                        </form>

                        <div className="formFooter">
                            <p className="underlineHover">Back to <a href="/">Homepage</a>?</p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Login
