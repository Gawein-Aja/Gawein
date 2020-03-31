import React, {Component} from 'react';
import Nav2 from "./Nav2";
import { login } from '../tools/UserFunctions'

class Loginpage extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if (res) {
                this.props.history.push(`/profile`)
            }
        })
    }

    render() {
        return (
            <div>
                <Nav2 />
                <div className="wrapper fadeInDown">
                    <div className="formContent">
                        <div className="fadeIn first">
                            <h1 className="icon">Login</h1>
                        </div>

                        <form noValidate onSubmit={this.onSubmit} className="form-group">
                            <input
                                type="email"
                                className="form-control fadeIn second"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                            <input
                                type="password"
                                className="form-control fadeIn third"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                            <button type="submit" className="btn btn-primary fadeIn fourth" value="Submit">Log In</button>
                        </form>

                        {/*<div className="formFooter">*/}
                        {/*    <a className="underlineHover" href="#">Forgot Password?</a>*/}
                        {/*</div>*/}

                    </div>
                </div>
            </div>
        );
    }
}

export default Loginpage
