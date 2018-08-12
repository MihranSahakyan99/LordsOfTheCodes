import React from 'react';
import ReactDOM from 'react-dom';
import '../../../styles/common.css';
import { LoginRegisterPageCanvasAnimation } from '../../common_components/login_register_page_canvas'

class LogInForm extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="login pos_abs">
                <div className="home_form_common_style__container">
                    <div className="home_wrap_form_common_style">
                        <form method="POST" action="/login/" className="home_form_common_style_form">
                            <span className="home_form_common_style_form_title">
                                LOGIN
                            </span>

                            <div className="home_form_common_style_form_input_div">
                                <input className="home_form_common_style_form_input" name="email" type="text" placeholder="Email"/>
                                <span className="home_form_common_style_form_icon">
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </div>
                            <div className="home_form_common_style_form_input_div">
                                <input className="home_form_common_style_form_input" id="cnfpass" name="password" type="password" placeholder="Password"/>
                                <span className="home_form_common_style_form_icon">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </div>


                            <div className="home_form_common_style_form_checkbox">
                                <label htmlFor="ck_bx1" >Remember me
                                    <input className="form_common_style_check_box" id="ck_bx1" type="checkbox" name="remember-me"/>
                                    <span className="home_form_common_style_form_checkmark"></span>
                                </label>
                            </div>
                            <div className="home_form_common_style_form_btn">
                                <button>LOGIN</button>
                            </div>
                            <div className="home_not_a_member">
                                <span>
                                    Not a member? <a href="/" className="signup_link">Sign up now</a>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

class LoginPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <LogInForm />
                <LoginRegisterPageCanvasAnimation context = {"common_canvas"} prt_count = {140} min_dist = {120} fill_dist = {"rgba(158, 98, 238, 0.7)"} />
            </div>
        );
    }
}

ReactDOM.render(<LoginPage/>, document.getElementById("login"));