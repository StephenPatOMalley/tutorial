//https://youtu.be/MFuwkrseXVE?t=4794

//https://youtu.be/MFuwkrseXVE?t=8092
import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';


const DUMMY = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://wallsdesk.com/wp-content/uploads/2017/01/Monkey-Photos.jpg',
        address: 'Someplace Where',
        description: 'Cunt',
    },
    {
        
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://wallsdesk.com/wp-content/uploads/2017/01/Monkey-Photos.jpg',
        address: 'Someplace Where',
        description: 'Fuck',

    }
]

function HomePage(props) {
    //"export async function getStaticProps()" replaces and provides the 
    // same fuction of the commented code below, but instead it does it 
    // on the server side compaired to the clients side.

    //const [loadedMeetups, setLoadedMeetups] = useState([]);
    //useEffect(() => {
        // Send a http request and fetch data
    //    setLoadedMeetups(DUMMY);
    //}, []);

    return <MeetupList meetups = {props.meetups} />
    
}

export async function getStaticProps() {
    // fetch data from an API or Database
    return {
        props: {
            meetups: DUMMY
        },
        //Reloads the server web page after however many seconds if their
        // is data update requests
        revalidate: 10 // 10 is time in seconds
    };
}

export default HomePage;