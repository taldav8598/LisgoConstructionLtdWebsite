import { Button, Container, Input, InputLabel, TextField, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { useEffect, useState } from 'react';
import axios from 'axios';
import './EnquireNow.css'
// import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
              // Name of the slot
              root: {
                // Some CSS
                fontSize: '1rem',
                color: '#111111',
                border: '4px solid #FFD70D',
                borderRadius: '14px',
                backgroundColor: '#FFD70D',
                textTransform: 'lowercase',
                margin: '3em 0',
                fontWeight: 'bolder',
                ":hover": {
                    fontSize: '1rem',
                color: '#FFD70D',
                border: '4px solid #FFD70D',
                borderRadius: '14px',
                backgroundColor: '#111111',
                textTransform: 'lowercase',
                margin: '3em 0',
                fontWeight: 'bolder',
                }
              },
            },
          },
      MuiInputBase: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1rem',
            backgroundColor: '111111',
            color: '#fff',
            border: '4px solid #FFD70D',
            borderRadius: '4px',
            margin: '0 0 1em 0',
            paddingLeft: '0.5em',
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            fontSize: '1rem',
            backgroundColor: '111111',
            color: '#fff',
            margin: '0.1em 0.25em',
          },
        },
      },
    },
  });

export default function EnquireNow() {
    const [dateLists, setDateLists] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [dateInput, setDateInput] = useState('');

// RFC 3339 format

    const today = dayjs();

    const dateFormatting = async () => {
        //uncommented for git push
        const date = new Date();
        const formattedMinDate = date.toISOString();
        await axios
        .get(`https://www.googleapis.com/calendar/v3/calendars/24dd8a69a809ae107ee7047d82890a76acb6944dfc635d195d7fe5a313e8c158@group.calendar.google.com/events?key=AIzaSyDENYFe9hlrFL_zp_d50TS520ujLU0Dqg0&timeMin=${formattedMinDate}`)
        .then(({ data }) => {
            // console.log("data", data);
            const { items } = data;
            let dateObjectList = { dates: [], dateTimes: {start: [], end: []}};

            items.forEach(item => {
                // start:[{date: 2024-04-04}, {time: 16:30:00}]
                // dateObjectList.start.push(date); 
                // dateObjectList.end.push(item.end.dateTime);
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
            
    //         return dateLists.dateObjectList?.dates.includes(formattedDate);
    // }

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
        <section id="enquire" className='enquire-now-section'>
            {/* <h1>{dateLists.start}</h1> */}
            <ThemeProvider theme={theme}>
            <Container className='enquire-now-container'>
            <Typography className='enquire-now-heading' variant='h2'>Enquire now</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker']}>
                        <DemoItem>
                            <DateTimePicker 
                            defaultValue={today}
                            sx={{
                                color: '#fff'
                            }} 
                            // shouldDisableDate={disabledDates}
                            shouldDisableTime={disabledTimes}
                            disablePast={true}
                            />
                        </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
            </Container>
            </ThemeProvider>

        </section>
    );
}