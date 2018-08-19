import React from 'react';

export class ProfileCardContentCategoryType extends React.Component {

    switchCase(name) {
        switch (name) {
            case "event"    : {
                console.log("event");
                return this.event();
            }
            case "connection" : {
                console.log("interest");
                return this.connection();
            }
            case "activity" : {
                console.log("activity");
                return this.activity();
            }
        }
    }

    event() {
        return(
            <div id="event">
                <div className="event_details">
                    <h1 className="event_title">{this.props.event_title}</h1>
                    <div className="event_about">
                        {this.props.event_about}
                    </div>
                    <div className="event_location">
                        {this.props.event_location}
                    </div>
                    <div className="event_date">
                        {this.props.event_date}
                    </div>
                </div>
            </div>
        )
    }

    connection() {
        return (
            <div id="connection">
                <h1 className="connection_name">
                    {this.props.connection_title}
                </h1>
                <div className="connection_image_section">
                    <img src="" className="connection_image"/>
                </div>
            </div>
        )
    }

    activity() {
        return (
            <div id="activity">
                <h1>
                    {this.props.activity_title}
                </h1>
            </div>
        )
    }

    render() {
        return(
            <div className="categories_translate">
                <div className="profile_card_content_category_type_padding">
                    <div className="profile_card_content_category_type">
                        {this.switchCase(this.props.category_type)}
                    </div>
                </div>
            </div>
        )
    }
}

export class ProfileCardContentCategories extends React.Component {
    constructor() {
        super();
        this.nextCategory = this.nextCategory.bind(this);
        this.state = {
            categories_details : [
                {
                    visibility: true
                },
                {
                    visibility: false
                },
                {
                    visibility: false
                }
            ],
        }
    }

    nextCategory(index) {
        console.log("nextCategory");
        let categories_details_copy = this.state.categories_details;
        let category_div_width = document.querySelector(".profile_card_content_category_type_padding").offsetWidth;
        let category_types_list = document.querySelectorAll(".categories_translate");
        let category_animation_controller_buttons_list = document.querySelectorAll(".border");

        for (let i = 0; i < categories_details_copy.length; ++ i) {
            if (i === index)
            {
                categories_details_copy[i].visibility = true;
                category_animation_controller_buttons_list[i].style.borderBottom = "4px solid #fff"
            } else {
                category_animation_controller_buttons_list[i].style.borderBottom = "none";
                categories_details_copy[i].visibility = false;
            }
        }

        for (let i = 0; i < category_types_list.length; ++ i) {
            category_types_list[i].style.transform = `translateX(-${category_div_width * index}px)`;
        }

        this.setState({
            categories_details: categories_details_copy
        })
    }

    render() {
        return (
            <div>
                <div className="profile_page_card_content_categories_list">
                    <div className="cl_item evt">
                        <a className="active border" onClick={() => { this.nextCategory(0)}}>Events List</a>
                    </div>
                    <div className="cl_item int">
                        <a className="border"       onClick={() => { this.nextCategory(1)}}>Connections</a>
                    </div>
                    <div className="cl_item act">
                        <a className="border"       onClick={() => { this.nextCategory(2)}}>Activity Stats</a>
                    </div>
                </div>
                <div className="profile_page_card_content_categories">
                    <div id="event_category_section" className="profile_card_content_category_type_style">
                        <ProfileCardContentCategoryType
                            category_type = "event"
                            event_title = "Party-1"
                            event_about = "lorem ipsum dolor...."
                            event_location = "Glendale..."
                            event_date = "12:00AM-20:00PM"
                        />
                        <ProfileCardContentCategoryType
                            category_type = "event"
                            event_title = "Party-2"
                            event_about = "lorem ipsum dolor...."
                            event_location = "Glendale..."
                            event_date = "12:00AM-20:00PM"
                        />
                        <ProfileCardContentCategoryType
                            category_type = "event"
                            event_title = "Party-3"
                            event_about = "lorem ipsum dolor...."
                            event_location = "Glendale..."
                            event_date = "12:00AM-20:00PM"
                        />
                    </div>
                    <div id="connection_category_section" className="profile_card_content_category_type_style">
                        <ProfileCardContentCategoryType
                            category_type = "connection"
                            connection_title = "Connection-1"
                        />
                    </div>
                    <div id="activity_category_section" className="profile_card_content_category_type_style">
                        <ProfileCardContentCategoryType
                            category_type = "activity"
                            activity_title = "activity-1"
                        />
                    </div>
                </div>
            </div>
        )
    }
}
