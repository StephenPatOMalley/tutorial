import { Fragment } from "react";

function MeetupDetails() {
    return(
        <Fragment>
            <img
                src = 'https://wallsdesk.com/wp-content/uploads/2017/01/Monkey-Photos.jpg'
                alt = 'A First Meetup'
            />
            <h1>A First Meetup</h1>#
            <address>Street, City</address>
            <p>The Description</p>
        </Fragment>
    );
    
}

export default MeetupDetails;