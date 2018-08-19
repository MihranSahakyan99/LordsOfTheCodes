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

export const ProfileCardHeaderSearch = () => {
    return(
        <div className="profile_page_card_header_search">
            <span>
              <i className="fas fa-ellipsis-v"></i>
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
        </div>
    )
};

