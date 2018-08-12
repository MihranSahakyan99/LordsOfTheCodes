import React from 'react';
import ReactDOM from 'react-dom';

class ProfileCardContentCategoryType extends React.Component {
    switchCase(name) {
        switch (name) {
            case "event"    : {
                console.log("event");
                return this.event();
            }
            case "interest" : {
                console.log("interest");
                return this.interest();
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

    interest() {
        return (
            <div id="interest">
                <h1 className="interest_name">
                    {this.props.interest_name}
                </h1>
                <div className="interest_image">
                    <img src="" className="interest_image"/>
                </div>
            </div>
        )
    }

    activity() {
        return (
            <div id="activity">

            </div>
        )
    }

    render() {
        return(
            <div className="profile_card_content_category_type">
                {this.switchCase(this.props.category_type)}
            </div>

        )
    }
}

export const ProfileCardContentCategories = () => {
    return (
        <div className="profile_page_card_content_categories">
            <ProfileCardContentCategoryType
                category_type = "event"
                event_title = "Party"
                event_about = "lorem ipsum dolor...."
                event_location = "Glendale..."
                event_date = "12:00AM-20:00PM"/>
        </div>
    )
};