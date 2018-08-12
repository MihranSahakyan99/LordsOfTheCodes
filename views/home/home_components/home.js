import React from 'react';
import ReactDOM from 'react-dom';
import '../../../styles/common.css';
import { LoginRegisterPageCanvasAnimation } from '../../common_components/login_register_page_canvas'

class SingUpForm extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="sign_up pos_abs">
                <div className="home_form_common_style__container">
                    <div className="home_wrap_form_common_style">
                        <form method="POST" action="/" className="home_form_common_style_form">
                            <span className="home_form_common_style_form_title">
                                SIGN UP
                            </span>

                            <div className="home_form_common_style_form_input_div">
                                <input className="home_form_common_style_form_input" name="username" type="text" placeholder="Username"/>
                                <span className="home_form_common_style_form_icon">
                                    <i className="fas fa-user"></i>
                                </span>
                            </div>
                            <div className="home_form_common_style_form_input_div">
                                <input className="home_form_common_style_form_input" name="email" type="text" placeholder="Email"/>
                                <span className="home_form_common_style_form_icon">
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </div>
                            <div className="home_form_common_style_form_input_div">
                                <input className="home_form_common_style_form_input" name="password" type="password" placeholder="Password"/>
                                <span className="home_form_common_style_form_icon">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </div>
                            <div className="home_form_common_style_form_input_div">
                                <input className="home_form_common_style_form_input" name="confirm_pass" type="password" placeholder="Confirm Password"/>
                                <span className="home_form_common_style_form_icon">
                                    <i className="fas fa-check-double"></i>
                                </span>
                            </div>


                            <div className="home_form_common_style_form_btn">
                                <button>SIGN UP</button>
                            </div>
                            <div className="home_not_a_member">
                                <span>
                                    Already a member? <a href="/login" className="login_link">Login</a>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

class HomePage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <SingUpForm />
                <LoginRegisterPageCanvasAnimation context = {"common_canvas"} prt_count = {140} min_dist = {120} fill_dist = {"rgba(158, 98, 238, 0.7)"}/>
            </div>
        );
    }
}

ReactDOM.render(<HomePage/>, document.getElementById("home"));
