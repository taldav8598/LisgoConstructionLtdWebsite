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

        
        // const timeStampDate = Date.parse(formattedMinDate);
        // console.log("dateString", new Date(timeStampDate));
        
        await axios
        .get(``)
        .then(({ data }) => {
            // console.log("data", data);
            const { items } = data;
            // console.log('items', items);
            // dates: ["2024-04-04"], dateTimes: {"2024-04-04-16:30"}
            let dateObjectList = { dates: [], dateTimes: {start: [], end: []}};

            items.forEach(item => {
                // start:[{date: 2024-04-04}, {time: 16:30:00}]
                // dateObjectList.start.push(date); 
                // dateObjectList.end.push(item.end.dateTime);
                if (item.start.dateTime) {
                    // console.log("start Datetime", item.start.dateTime);
                    const date = new Date(item.start.dateTime)
                    const endDate = new Date(item.end.dateTime)
                    const localeString = date.toLocaleTimeString('en-UK');
                    const localeStringEnd = endDate.toLocaleTimeString('en-UK');
                    console.log('localeString', localeString);
                    let shortenedDate = `${date.getFullYear()}-${(date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)}-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
                    // let formattedDateTime = item.start.dateTime.replace(/:[0-9][0-9]\+[0-9][0-9]:00/g, '').replace(/T/, '-');
                    // console.log("shortenedDate", shortenedDate);
                    dateObjectList.dates.push(shortenedDate);
                    dateObjectList.dateTimes.start.push(Number(localeString.split(':').join('')));
                    dateObjectList.dateTimes.end.push(Number(localeStringEnd.split(':').join('')));
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
            // console.log("date", date);

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
            // console.log("dateLists.dateObjectList?.dates", dateLists.dateObjectList?.dates, "formattedDate", formattedDate);
            
            return dateLists.dateObjectList?.dates.includes(formattedDate);
    }

    const disabledTimes = (date) => {

        console.log(date, ' ---------> date from calendar')
        console.log(dateLists.dateObjectList?.dateTimes.start, dateLists.dateObjectList?.dateTimes.end, dateLists.dateObjectList?.dates,  '---------> datessssssss')


        //17
        //10  

        // 7 loop over starting 12 [{12: true}, {13: true}, {14: false}, {15: true}, {14: false}, {15: false}, {14: true}, {17: 00}]


        // .find to find the date first and then use the index to compare the start time arr and the end time arr. If the times are inbetween these values on the set date then disable them
        // const formattedDate = `${date['$y']}-${ date['$M'] + 1 < 10 ? "0" + (date['$M'] + 1) : (date['$M'] + 1)}-${date['$D'] < 10 ? "0" + date['$D'] : date['$D']}`;
        // 12:05
        // const formattedTime = `${date['$H'] < 10 ? 0 + date['$H'] : date['$H']}:${date['$m'] < 10 ? '0' + date['$m'] : date['$m']}`;
        // const formattedDateTime = formattedDate + "-" + formattedTime;
        // console.log("disabledTimesDate", date['$H'] >= 9 && date['$H'] <= 17)
        // console.log(dateLists.dateObjectList?.dateTimes[0].slice(0, 10), dateLists.dateObjectList?.dateTimes[0].slice(11, ))
        // console.log(formattedDateTime);
        // console.log(dateLists.dateObjectList?.dateTimes);
        // const formattedDateTimeIsPresent = dateLists.dateObjectList?.dateTimes.includes(formattedDateTime);
        // console.log('formattedDateTimeIsPresent', formattedDateTimeIsPresent)
        // if (formattedDateTimeIsPresent) {
        //     console.log(formattedDateTime);
        //     let reservedHour = date['$H'];
        //     console.log('reservedHour', reservedHour)
        //     // let reservedMinutes = date['$m'];
        //     return !(date['$H'] >= 9 && date['$H'] <= 17) && date['$H'] === reservedHour;
        // }
        // Disable the hours which are not between 9am and 5pm
        return !(date['$H'] >= 9 && date['$H'] <= 17);
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