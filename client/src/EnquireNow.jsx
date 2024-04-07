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
        //uncommented for git push
        const date = new Date();
        const formattedMinDate = date.toISOString();
        await axios
        .get(`https://www.googleapis.com/calendar/v3/calendars/24dd8a69a809ae107ee7047d82890a76acb6944dfc635d195d7fe5a313e8c158@group.calendar.google.com/events?key=AIzaSyDENYFe9hlrFL_zp_d50TS520ujLU0Dqg0&timeMin=${formattedMinDate}`)
        .then(({ data }) => {
            const { items } = data;
            let dateObjectList = { dates: [], dateTimes: {start: [], end: []}};

            items.forEach(item => {
                if (item.start.dateTime) {
                    const date = new Date(item.start.dateTime)
                    const endDate = new Date(item.end.dateTime)
                    const localeString = date.toLocaleTimeString('en-UK');
                    const localeStringEnd = endDate.toLocaleTimeString('en-UK');
                    // console.log('localeString', localeString);
                    let shortenedDate = `${date.getFullYear()}-${(date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)}-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
                    dateObjectList.dates.push(shortenedDate);
                    dateObjectList.dateTimes.start.push(Number(localeString.split(':').join('')));
                    dateObjectList.dateTimes.end.push(Number(localeStringEnd.split(':').join('')));
                }
            });
            return setDateLists(prevState => ({...prevState, dateObjectList}));
        });
    } 
    useEffect(() => {
        dateFormatting();
    }, []);

    // const isInCurrentYear = (date) => date.get('year') === dayjs().get('year');
    // console.log(isInCurrentYear());

    // const disabledDates = (date) => {

    //         // if a full day is booked up
    //         const formattedDate = `${date['$y']}-${ date['$M'] + 1 < 10 ? "0" + (date['$M'] + 1) : (date['$M'] + 1)}-${date['$D'] < 10 ? "0" + date['$D'] : date['$D']}`;
            
    //         return dateLists.dateObjectList?.dates.includes(formattedDate);
    // }

    const disabledTimes = (date) => {
        let hour = date['$H'];
        
        const formattedDate = `${date['$y']}-${ date['$M'] + 1 < 10 ? "0" + (date['$M'] + 1) : (date['$M'] + 1)}-${date['$D'] < 10 ? "0" + date['$D'] : date['$D']}`;

        let formattedHour = Number(hour + '0000');

        // If the dates array contains the selected formatted date check if an appointment time is free.
        if (dateLists.dateObjectList?.dates.includes(formattedDate)) {
            const timeCheck = dateLists.dateObjectList?.dates.find((individualDate, index) => {
                // If the formatted date is not equal to the individualDate return false
    
                if (formattedDate !== individualDate) {
                    return false
                // Else if the time in hours is not between 9am and 5pm return true
                } else if (!(date['$H'] >= 9 && date['$H'] <= 17)) {
                    return true
                } else {
                // Else, if the formattedHour is less than the index of the start time or 
                // if the formattedHour is greater than or equal to the index of the end time return false, else return true.
                    if (formattedHour < dateLists.dateObjectList?.dateTimes.start[index] || formattedHour >= dateLists.dateObjectList?.dateTimes.end[index]) {
                        return false
                    } else {
                        return true
                    }
                }
            });
            return timeCheck
        } else {
            // if the time in hours is not between 9am and 5pm return true
            if (!(date['$H'] >= 9 && date['$H'] <= 17)) {
                return true
            }
        }

    }

    return (
        <section id="enquire-now-section" className='enquire-now-section'>
            {/* <h1>{dateLists.start}</h1> */}
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
                            // shouldDisableDate={disabledDates}
                            shouldDisableTime={disabledTimes}
                            disablePast={true}
                            />
                        </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
            </Container>

        </section>
    );
}