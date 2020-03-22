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

                        <form>
                            <input type="text" className="fadeIn second" name="nama" placeholder="Nama Lengkap"/>
                            <input type="text" className="fadeIn third" name="noinduk" placeholder="NIM"/>
                            <input type="text" className="fadeIn second" name="email" placeholder="Email"/>
                            <input type="text" className="fadeIn third" name="nohp" placeholder="No Handphone"/>
                            <input type="text" className="fadeIn second" name="password" placeholder="Password"/>
                            <input type="text" className="fadeIn third" name="konfpassword" placeholder="Konfirmasi Password"/>
                            <button type="submit" className="btn fadeIn fourth" value="Submit">Register Now</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Regispage;
