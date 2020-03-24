import React, { Component } from 'react'
import { register } from './UserFunctions'
import Nav2 from "./Nav2";

class Registerpage extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirmation: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit (e) {
        e.preventDefault()

        const newUser = {
            name: this.state.first_name + ' ' + this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
        }

        register(newUser).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render () {
        return (
            <div>
                <Nav2 />
                <div className="wrapper fadeInDown">
                    <div className="formContent">
                        <div className="fadeIn first">
                            <h1 className="icon">Register</h1>
                        </div>

                        <form noValidate onSubmit={this.onSubmit} className="form-group">
                            <input
                                type="text"
                                className="form-control fadeIn second"
                                name="first_name"
                                placeholder="Nama Depan"
                                value={this.state.first_name}
                                onChange={this.onChange}
                            />
                            <input
                                type="text"
                                className="form-control fadeIn second"
                                name="last_name"
                                placeholder="Nama Belakang"
                                value={this.state.last_name}
                                onChange={this.onChange}
                            />
                            <input
                                type="email"
                                className="form-control fadeIn third"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                            <input
                                type="password"
                                className="form-control fadeIn second"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                            <input
                                type="password"
                                className="form-control fadeIn third"
                                name="password_confirmation"
                                placeholder="Konfirmasi Password"
                                value={this.state.password_confirmation}
                                onChange={this.onChange}
                            />
                            <button type="submit" className="btn btn-primary fadeIn fourth" value="Submit">Register Now</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registerpage
