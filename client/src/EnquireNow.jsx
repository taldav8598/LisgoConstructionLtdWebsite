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
        .get(``)
        .then(({ data }) => {
            const { items } = data;
            let dateObjectList = { dates: [], dateTimes: {start: [], end: []}};

            items.forEach(item => {
                if (item.start.dateTime) {
                    const date = new Date(item.start.dateTime)
                    const endDate = new Date(item.end.dateTime)
                    const localeString = date.toLocaleTimeString('en-UK');
                    const localeStringEnd = endDate.toLocaleTimeString('en-UK');
                    console.log('localeString', localeString);
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

    const disabledDates = (date) => {

            // if a full day is booked up
            const formattedDate = `${date['$y']}-${ date['$M'] + 1 < 10 ? "0" + (date['$M'] + 1) : (date['$M'] + 1)}-${date['$D'] < 10 ? "0" + date['$D'] : date['$D']}`;
            
            return dateLists.dateObjectList?.dates.includes(formattedDate);
    }

    const disabledTimes = (date) => {
        let hour = date['$H']
        const formattedDate = `${date['$y']}-${ date['$M'] + 1 < 10 ? "0" + (date['$M'] + 1) : (date['$M'] + 1)}-${date['$D'] < 10 ? "0" + date['$D'] : date['$D']}`;

        let formattedHour = Number(hour + '0000')

        const timeCheck = dateLists.dateObjectList?.dates.find((indivdualDate, index) => {
            if (formattedDate !== indivdualDate) {
                return false
            } else if (!(date['$H'] >= 9 && date['$H'] <= 17)) {
                return true
            } else {
                if (formattedHour < dateLists.dateObjectList?.dateTimes.start[index] || formattedHour > dateLists.dateObjectList?.dateTimes.end[index]) {
                    return false
                } else {
                    return true
                }
            }
        })
        return timeCheck
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