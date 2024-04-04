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
        const timeStampDate = Date.parse(formattedMinDate);
        console.log("dateString", new Date(timeStampDate));
        
        await axios
        .get(``)
        .then(({ data }) => {
            // console.log("data", data);
            const { items } = data;
            console.log('items', items);
            // dates: ["2024-04-04"], dateTimes: {"2024-04-04-16:30:00"}
            let dateObjectList = { dates: [], dateTimes: {}};

            items.forEach(item => {
                // start:[{date: 2024-04-04}, {time: 16:30:00}]
                // dateObjectList.start.push(date); 
                // dateObjectList.end.push(item.end.dateTime);
                console.log("start Datetime", item.start.dateTime);
                if (item.start.dateTime) {
                    const date = new Date(item.start.dateTime)
                    let shortenedDate = `${date.getFullYear()}-${(date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)}-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
                    // console.log("shortenedDate", shortenedDate);
                    dateObjectList.dates.push(shortenedDate);
                }
            });
            // console.log("dateObjectList", dateObjectList);
            // setDateLists(dateObjectList);
            // console.log(dateLists);
            return setDateLists(prevState => ({...prevState, dateObjectList}));
        });
    } 
    useEffect(() => {
        dateFormatting();
    }, []);

    // const isInCurrentYear = (date) => date.get('year') === dayjs().get('year');
    // console.log(isInCurrentYear());

    const disabledDates = (date) => {
            console.log("date", date);

            const formattedDate = `${date['$y']}-${ date['$M'] + 1 < 10 ? "0" + (date['$M'] + 1) : (date['$M'] + 1)}-${date['$D'] < 10 ? "0" + date['$D'] : date['$D']}`;

            // const date = new Date();
            // console.log(date)
            // console.log("Date-ISOString", date.toISOString().slice(0, 19) + "+01:00");
            // const original = date.toISOString();
            // const formattedDate = `${date.toISOString().slice(0, 19)}+01:00`;
            // console.log("originalISOString", original);
            // console.log("formattedDate", formattedDate)
            // const formattedDate = `${date.get('year')}-${date.get('month') < 10 ? `0${date.get('month')}` : date.get('month')}-${date.get('day') < 10 ? `0${date.get('day')}` : date.get('day')}`;

            // const formattedDate = `${date.get('year')}-${date.get('month') < 10 ? `0${date.get('month')}` : date.get('month')}-${date.get('day') < 10 ? `0${date.get('day')}` : date.get('day')}`;
            // console.log(formattedDate);
            // const isInCurrentYear = (date) => date.get('year') === dayjs().get('year');
            // console.log(date['$d']);
            // console.log('dateLists', dateLists.dateObjectList.start.includes(formattedDate));
            // console.log('dateLists', dateLists.dateObjectList?.start);
            console.log("dateLists.dateObjectList?.dates", dateLists.dateObjectList?.dates, "formattedDate", formattedDate);
            
            return dateLists.dateObjectList?.dates.includes(formattedDate);
    }
    console.log("disabledDates", disabledDates(new Date()));

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
                            shouldDisableDate={disabledDates}
                            disablePast={true}
                            timeSteps={{minute: 30}}
                            />
                        </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
            </Container>

        </section>
    );
}