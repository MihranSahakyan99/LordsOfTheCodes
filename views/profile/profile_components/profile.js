import React from 'react';
import ReactDOM from 'react-dom';
import '../../../styles/common.css';
import { ProfileCardHeaderHamburger, ProfileCardHeaderSearch, ProfileCardHeaderInfo, ProfileCardHeaderCategoriesList } from './card_header_components'
import { ProfileCardContentCategories } from './card_content_components'
import { ProfilePageCanvasAnimation } from '../../common_components/profile_page_canvas';

class ProfileCardStrangerHeader extends React.Component {
    render() {
        return(
            <div className="profile_page_card_header_style profile_page_card_style">
                <div className="dark"></div>
                <div className="card_header_functional_section">
                    <ProfileCardHeaderHamburger />
                    <ProfileCardHeaderSearch />
                </div>
                <div className="card_header_profile_info_section">
                    <ProfileCardHeaderInfo />
                </div>
                <div className="profile_page_card_content_categories_list">
                    <ProfileCardHeaderCategoriesList />
                </div>
            </div>
        )
    }
}

class ProfileCardStrangerContent extends React.Component {
    render() {
        return(
            <div className="profile_page_card_content_style profile_page_card_style">
                <ProfileCardContentCategories />
            </div>
        )
    }
}

class ProfileCardStrangerCard extends React.Component {
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
                <ProfileCardStrangerCard>
                    <ProfileCardStrangerHeader />
                    <ProfileCardStrangerContent />
                </ProfileCardStrangerCard>
                <ProfilePageCanvasAnimation context = {"profile_canvas"} prt_count = { 50 } />
            </div>
        );
    }
}

ReactDOM.render(<ProfilePage />, document.getElementById("profile"));
