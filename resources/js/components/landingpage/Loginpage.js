import React, {Component} from 'react';
import Nav2 from "./Nav2";

class Loginpage extends Component {
    render() {
        return (
            <div>
                <Nav2 />
                <div className="wrapper fadeInDown">
                    <div className="formContent">
                        <div className="fadeIn first">
                            <h1 className="icon">Login</h1>
                        </div>

                        <form className="form-group">
                            <input type="email" className="form-control fadeIn second" name="email" placeholder="Email"/>
                            <input type="password" className="form-control fadeIn third" name="password"
                                   placeholder="Password"/>
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

export default Loginpage;
