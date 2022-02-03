import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return(
        <MeetupDetail image = "https://img.xcitefun.net/users/2015/01/382645,xcitefun-philippines-tour-6.jpg" title = "Meetup One" address = "Some Place" description = "First" />
    );
}

export async function getStaticPaths() {
    return{
        fallback: false,
        paths: [
            {
                params: {
                    meetupID: 'm1',
                },
            },
            {
                params: {
                    meetupID: 'm2',
                },
            },
        ]
    }
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupID = context.params.meetupID;

    console.log(meetupID);

    return{
        props: {
            meetups: {
                image: "https://img.xcitefun.net/users/2015/01/382645,xcitefun-philippines-tour-6.jpg",
                id: meetupID,
                title: "Meetup One" ,
                address: "Some Place" ,
                description: "First"
            }
        }
    }
}

export default MeetupDetails;