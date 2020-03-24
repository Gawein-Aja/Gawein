import React, {Component} from 'react';
import Nav2 from "./Nav2";

class Regispage extends Component {
    render() {
        return (
            <div>
                <Nav2 />
                <div className="wrapper fadeInDown">
                    <div className="formContent">
                        <div className="fadeIn first">
                            <h1 className="icon">Register</h1>
                        </div>

                        <form className="form-group">
                            <input type="text" className="form-control fadeIn second" name="nama" placeholder="Nama Lengkap"/>
                            <input type="email" className="form-control fadeIn third" name="email" placeholder="Email"/>
                            <input type="password" className="form-control fadeIn second" name="password" placeholder="Password"/>
                            <input type="password" className="form-control fadeIn third" name="konfpassword" placeholder="Konfirmasi Password"/>
                            <button type="submit" className="btn btn-primary fadeIn fourth" value="Submit">Register Now</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Regispage;
