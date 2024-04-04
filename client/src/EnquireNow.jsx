import { Container, Typography } from '@mui/material';

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EnquireNow() {
    const [dateLists, setDateLists] = useState({});

// RFC 3339 format

    const today = dayjs();

    const dateFormatting = async () => {
        const date = new Date();
        const formattedMinDate = date.toISOString();


        const isInCurrentYear = (date) => date.get('year') === dayjs().get('year');
        
        console.log(isInCurrentYear);
        await axios
        .get(`https://www.googleapis.com/calendar/v3/calendars/24dd8a69a809ae107ee7047d82890a76acb6944dfc635d195d7fe5a313e8c158@group.calendar.google.com/events?key=AIzaSyDENYFe9hlrFL_zp_d50TS520ujLU0Dqg0&timeMin=${formattedMinDate}`)
        .then(({data}) => {
            const {items} = data;
            let dateObjectList = { start: [], end: [] };
            items.forEach(item => {
                dateObjectList.start.push(item.start.dateTime);
                dateObjectList.end.push(item.end.dateTime);
            });
            console.log("dateObjectList", dateObjectList);
            // setDateLists(dateObjectList);
            console.log(dateLists);
            return setDateLists(prevState => ({...prevState, dateObjectList}));
        });
    } 
    useEffect(() => {
        dateFormatting();
    }, []);

    const disabledDates = (date) => {
            const formattedDate = `${date.get('year')}-${date.get('month') < 10 ? `0${date.get('month')}` : date.get('month')}-${date.get('day') < 10 ? `0${date.get('day')}` : date.get('day')}`;
            console.log(formattedDate);
            // const isInCurrentYear = (date) => date.get('year') === dayjs().get('year');
            console.log(date['$d']);
            console.log('dateLists', dateLists.dateObjectList.start?.includes(formattedDate));
            return dateLists.dateObjectList.start?.includes(formattedDate);
    }
    // console.log("",disabledDates);

    return (
        <section id="enquire-now-section" className='enquire-now-section'>
            <h1>{dateLists.start}</h1>
            <Container className='enquire-now-container'>
            <Typography className='enquire-now-heading' variant='h2'>Enquire now</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker']}>
                        <DemoItem label="DateTimePicker">
                            <DateTimePicker 
                            defaultValue={today}
                            sx={{
                                color: 'white'
                            }} 
                            shouldDisableYear={disabledDates} 
                            />
                        </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
            </Container>

        </section>
    );
}