import { useEffect } from 'react';
import axios from 'axios';

export default function EnquireNow() {
    const date = new Date();

// RFC 3339 format
const formattedMinDate = date.toISOString();
    useEffect(() => {
        axios
        .get(`https://www.googleapis.com/calendar/v3/calendars/24dd8a69a809ae107ee7047d82890a76acb6944dfc635d195d7fe5a313e8c158@group.calendar.google.com/events?key=AIzaSyDENYFe9hlrFL_zp_d50TS520ujLU0Dqg0&timeMin=${formattedMinDate}`)
        .then(({data}) => console.log('Google clanedar response', data));
    }, [])
    return (
        <section id="test">
            <h1>Enquire now</h1>
        </section>
    );
}