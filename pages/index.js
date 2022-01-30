https://youtu.be/MFuwkrseXVE?t=4794import MeetupList from '../components/meetups/MeetupList';

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

function HomePage() {
    return <MeetupList meetups = {DUMMY} />
    
}

export default HomePage;