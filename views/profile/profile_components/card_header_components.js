import React from 'react';

export const ProfileCardHeaderHamburger = () => {
    return(
        <div className="profile_page_card_header_hamburger">
            <div className="hmb_line"></div>
            <div className="hmb_line short"></div>
            <div className="hmb_line"></div>
        </div>
    )
};

export const ProfileCardHeaderTitle = () => {
    return(
        <div className="profile_page_card_header_title">
            <span>PROFILE</span>
        </div>
    )
};

export const ProfileCardHeaderSettings = () => {
    return(
        <div className="profile_page_card_header_settings">
            <span>
                <i className="fas fa-cog"></i>
            </span>
        </div>
    )
};

export const ProfileCardHeaderInfo = () => {
    return(
        <div className="profile_page_card_header_info">
            <div className="pr_image_style"></div>
            <div className="user_full_name">
                Jessica Roberts
            </div>
            <div className="user_from">
                SAN FRANCISCO, CA
            </div>
            <div className="following_followers">
                <div className="following">
                    <div className="count">1,200</div>
                    <div className="title">FOLLOWING</div>
                </div>
                <div id="splitter"></div>
                <div className="followers">
                    <div className="count">5,200</div>
                    <div className="title">FOLLOWERS</div>
                </div>
            </div>
        </div>
    )
};