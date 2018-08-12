import React from 'react';
import ReactDOM from 'react-dom';
import '../../../styles/common.css';
import { ProfileCardHeaderHamburger, ProfileCardHeaderSettings, ProfileCardHeaderTitle, ProfileCardHeaderInfo } from './card_header_components'
import { ProfilePageCanvasAnimation } from '../../common_components/profile_page_canvas';

class ProfileCardHeader extends React.Component {
    render() {
        return(
            <div className="profile_page_card_header_style profile_page_card_style">
                <div className="dark"></div>
                <div className="card_header_functional_section">
                    <ProfileCardHeaderHamburger />
                    <ProfileCardHeaderTitle />
                    <ProfileCardHeaderSettings />
                </div>
                <div className="card_header_profile_info_section">
                    <ProfileCardHeaderInfo />
                </div>
            </div>
        )
    }
}

class ProfileCardContent extends React.Component {
    render() {
        return(
            <div className="profile_page_card_content_style profile_page_card_style">
                <div className="card_content_start">
                    <a href="#" className="btn_style">MESSAGE</a>
                    <a href="#" className="btn_style">FOLLOW</a>
                </div>
                <div className="card_content_user_info">
                    <h2>About Me</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </div>
            </div>
        )
    }
}

class ProfileCard extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="profile_card pos_abs">
                <div className="profile_page_card_flex">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

class ProfilePage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <ProfileCard>
                    <ProfileCardHeader />
                    <ProfileCardContent />
                </ProfileCard>
                <ProfilePageCanvasAnimation context = {"profile_canvas"} prt_count = { 50 } />
            </div>
        );
    }
}

ReactDOM.render(<ProfilePage />, document.getElementById("profile"));
