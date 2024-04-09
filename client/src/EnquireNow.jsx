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
            // {
            //     dateIndex = 0
            //     dates: [ '2024-04-08' ],
            //     dateTimeIndex = 0 in start and end for the 8th April 2024 or 2024-04-08 
            //     dateTime: { start: [ [ '090000', '091500', '093000', '094500' ] ], end: [ [ '091500', '093000', '094500', '100000' ] ] }
            // }
            let dateObjectList = { 
                dates: [],
                dateTimes: { start: [], end: [] } 
            };

            items.forEach(item => {
                if (item.start.dateTime) {
                    const date = new Date(item.start.dateTime);
                    const endDate = new Date(item.end.dateTime);
                    
                    const localeString = date.toLocaleTimeString('en-UK');
                    const localeStringEnd = endDate.toLocaleTimeString('en-UK');

                    let shortenedDate = `${date.getFullYear()}-${(date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)}-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
                    
                    const formattedLocaleString = Number(localeString.split(':').join(''));
                    console.log(!dateObjectList.dates.includes(formattedLocaleString) ? dateObjectList.dates : false);

                    dateObjectList.dates.push(Number(shortenedDate.replaceAll('-', '')));
                    
                    dateObjectList.dateTimes.start.push(Number(localeString.split(':').join('')));
                    dateObjectList.dateTimes.end.push(Number(localeStringEnd.split(':').join('')));
                }
            });
            console.log(dateObjectList.dates, dateObjectList.dateTimes)
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
        let minute = date['$m'];

        let formattedMinute = Number(minute + '00')

        console.log(formattedMinute < Number(dateLists.dateObjectList.dateTimes.start[0].toString().slice(2, dateLists.dateObjectList.dateTimes.start[0].length)));
        
        const formattedDate = `${date['$y']}-${ date['$M'] + 1 < 10 ? "0" + (date['$M'] + 1) : (date['$M'] + 1)}-${date['$D'] < 10 ? "0" + date['$D'] : date['$D']}`;

        // Output for number 9 = 90000, number 14 = 140000
        let formattedHour = Number(hour + '0000');

        // If the dates array contains the selected formatted date check if an appointment time is free.
        if (dateLists.dateObjectList?.dates.includes(formattedDate)) {
            const timeCheck = dateLists.dateObjectList?.dates.find((individualDate, index) => {

                // If the formatted date is not equal to the individualDate return false
                if (formattedDate !== individualDate) {
                    return false
                // Else if the time in hours is not between 9am and 5pm disable those times.
                } else if (!(hour >= 9 && hour <= 17)) {
                    return true
                } else {
                // Else, if the formattedHour is less than the value of the starting hour or 
                // if the formattedHour is greater than or equal to the end hour return false, else return true.
                    if (formattedHour < dateLists.dateObjectList?.dateTimes.start[index] || formattedHour >= dateLists.dateObjectList?.dateTimes.end[index]) {
                        return false
                    } else {
                        return true
                    }
                }
            });
            return timeCheck
        } else {
            // if the time in hours is not between 9am and 5pm disable those times
            if (!(hour >= 9 && hour <= 17)) {
                return true
            }
        }
    }


    return (
        <section id="enquire-now-section" className='enquire-now-section'>
            {/* <h1>{dateLists.start}</h1> */}
            <ThemeProvider theme={theme}>
            <Container className='enquire-now-container'>
            <Typography className='enquire-now-heading' variant='h2' sx={{textAlign: 'center'}}>Enquire now</Typography>
            <form className='enquire-now-form'>
                <div className='label-wrapper'>
                <InputLabel htmlFor="name-input">Name</InputLabel>
                <InputLabel htmlFor="name-input">*required field</InputLabel>
                </div>
                <Input id='name-input' variant='outlined'></Input>
                <div className='label-wrapper'>
                <InputLabel htmlFor="email-input">Email</InputLabel>
                <InputLabel htmlFor="name-input">*required field</InputLabel>
                </div>
                <Input id='email-input' variant='outlined'></Input>
                <InputLabel htmlFor="phone-number-input">Phone number</InputLabel>
                <Input id='phone-number-input' variant='outlined'></Input>
                <InputLabel htmlFor="enquiry-description-textfield">Enquiry description</InputLabel>
                <TextField
                id="enquiry-description-textfield"
                multiline
                rows={4}
                fullWidth={true}
                placeholder="Please provide a description of your enquiry"
                />
                {/* <InputLabel htmlFor="choose-file-picker">Choose a file</InputLabel>
                <Button id="choose-file-button">Choose a file</Button> */}
                <InputLabel htmlFor="name-input">Choose a time for your appointment</InputLabel>
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
                            timeSteps={{minutes: 15}}
                            />
                        </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
            <Button id="submit-button" fullWidth={true}>submit</Button>
            </form>
            </Container>
            </ThemeProvider>

        </section>
    );
}