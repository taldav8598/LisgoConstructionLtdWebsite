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


        // const timeStampDate = Date.parse(formattedMinDate);
        // console.log("dateString", new Date(timeStampDate));
        
        await axios
        .get(``)
        .then(({ data }) => {
            // console.log("data", data);
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
                // start:[{date: 2024-04-04}, {time: 16:30:00}]
                // dateObjectList.start.push(date); 
                // dateObjectList.end.push(item.end.dateTime);
                if (item.start.dateTime) {
                    const date = new Date(item.start.dateTime);
                    const endDate = new Date(item.end.dateTime);
                    
                    const localeString = date.toLocaleTimeString('en-UK');
                    const localeStringEnd = endDate.toLocaleTimeString('en-UK');

                    let shortenedDate = `${date.getFullYear()}-${(date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)}-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
                    
                    // const formattedLocaleString = Number(localeString.split(':').join(''));
                    // console.log(!dateObjectList.dates.includes(formattedLocaleString) ? dateObjectList.dates : false);
                    // console.log("localeString ------>",Number(localeString.split(':').join('')))

                    dateObjectList.dates.push(Number(shortenedDate.replaceAll('-', '')));
                    
                    dateObjectList.dateTimes.start.push(Number(localeString.split(':').join('')));
                    dateObjectList.dateTimes.end.push(Number(localeStringEnd.split(':').join('')));
                }
            });
            // console.log(dateObjectList.dates, dateObjectList.dateTimes)
            return setDateLists(prevState => ({...prevState, dateObjectList}));
        });
    } 
    useEffect(() => {
        dateFormatting();
    }, []);

    // const isInCurrentYear = (date) => date.get('year') === dayjs().get('year');
    // console.log(isInCurrentYear());

    const disabledDates = (date) => {
        // console.log(date);
        let day = new Date(date['$d']).getDay();
        // console.log('------> day', day)

        const days = { 
            0: 'Sunday',
            1: 'Monday',
            2: 'Tuesday', 
            3: 'Wednesday', 
            4: 'Thursday', 
            5: 'Friday', 
            6: 'Saturday', 
        };
        
        const formattedDate = `${date['$y']}${ date['$M'] + 1 < 10 ? "0" + (date['$M'] + 1) : (date['$M'] + 1)}${date['$D'] < 10 ? "0" + date['$D'] : date['$D']}`;

        let numberDate = Number(formattedDate.split('-').join(''));

        if (days[day] === 'Saturday') {
            return true;
        } else if (days[day] === 'Sunday') {
            return false;
        } else {
            // console.log("object ----->",dateLists.dateObjectList?.dates, 'formatted Date', numberDate)
            return dateLists.dateObjectList?.dates.includes(numberDate);
        }
    }

    function sliceHour(num) {
        const numberString = num.toString();
    
        if (numberString.length % 2 === 0) {
            return +numberString.slice(0,2);
        } else {
            return +numberString.slice(0,1);
        }
    }

    sliceHour(90000);
    
    // function sliceMinute(num) {
    //     console.log("Minute NUMBER ----->", num)
    //     const numberString = num.toString();
    
    //     if (numberString.length % 2 === 0) {
    //         return +numberString.slice(2,4);
    //     } else {
    //         return +numberString.slice(1, 3);
    //     }
    // }

    const disabledTimes = (date) => {
        // let minute = date['$m'];
        // let formattedMinute = Number(minute + '00')
        // console.log(formattedMinute < Number(dateLists.dateObjectList.dateTimes.start[0].toString().slice(2, dateLists.dateObjectList.dateTimes.start[0].length)));
        // const formattedHourString = `${}`
        // Output for number 9 = 90000, number 14 = 140000
        // let formattedHour = `${hour}${formattedMinute}`;
        // console.log('hour', hour, 'formattedHour', Number(formattedHour))
        // console.log("formattedTime ------->", formattedHour, "date object ------->", dateLists.dateObjectList?.dateTimes.start);
        
        // const formattedTime = new Date(date['$d']).toLocaleTimeString('en-UK').split(':').join('');
        // console.log("formattedTime", formattedTime);
        
        let hour = date['$H'];
        // let minute = date['$m'];

        const formattedDate = `${date['$y']}${ date['$M'] + 1 < 10 ? "0" + (date['$M'] + 1) : (date['$M'] + 1)}${date['$D'] < 10 ? "0" + date['$D'] : date['$D']}`;
        
        // console.log('hour', hour, 'minute', minute);
        // If the dates array contains the selected formatted date check if an appointment time is free.
        // if (dateLists.dateObjectList?.dates.includes(formattedDate)) {
            return dateLists.dateObjectList?.dates.find((individualDate, index) => {
                
                console.log("sliceHour -------->", hour, sliceHour(dateLists.dateObjectList?.dateTimes.start[index]), sliceHour(dateLists.dateObjectList?.dateTimes.end[index]));
                
                // If the formatted date is not equal to the individualDate return false
                if (formattedDate !== individualDate) {
                    console.log("------------>", formattedDate, individualDate)
                    if (!(hour >= 9 && hour <= 17)) {
                        return true
                    } else {
                    // Else, if the formattedHour is less than the value of the starting hour or 
                    // if the formattedHour is greater than or equal to the end hour return false, else return true.
                        if ((hour < sliceHour(dateLists.dateObjectList?.dateTimes.start[index]) || hour >= sliceHour(dateLists.dateObjectList?.dateTimes.end[index]))) {
                            return false
                        } else {
                            return true
                        }
                    }
                // Else if the time in hours is not between 9am and 5pm disable those times.
                } 
            });
        // } else {
        //     // if the time in hours is not between 9am and 5pm disable those times
        //     if (!(hour >= 9 && hour <= 17)) {
        //         return true
        //     }
        // }
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        const { target } = e;
        // console.log( target.value );
        return target;
    }

    const handleDateChange = (date) => {
        const date2 = new Date(date['$d'])
        // console.log("new console.log ->", date2.toLocaleString());
        return setDateInput(date2.toLocaleString());
    }

    return (
        <section id="enquire" className='enquire-now-section'>
            {/* <h1>{dateLists.start}</h1> */}
            <ThemeProvider theme={theme}>
            <Container className='enquire-now-container'>
            <Typography className='enquire-now-heading' variant='h3' sx={{textAlign: 'center'}}>Enquire now</Typography>
            <p>Please see the services section if you’re unsure about your enquiry classification or want to find out more about the <a href="#services">services</a> that we offer.</p>  
            <p>If you have any queries feel free to <a href="">contact us.</a></p>
            <br />
            <form className='enquire-now-form' onSubmit={name && email ? handleSubmit : null}>
                <div className='label-wrapper'>
                <InputLabel htmlFor="name-input">Name</InputLabel>
                <InputLabel htmlFor="name-input">*required field</InputLabel>
                </div>
                <Input id='name-input' variant='outlined' onChange={({ target }) => setName(target.value)} value={name}></Input>
                {name}
                <div className='label-wrapper'>
                <InputLabel htmlFor="email-input">Email</InputLabel>
                <InputLabel htmlFor="name-input">*required field</InputLabel>
                </div>
                <Input id='email-input' variant='outlined' onChange={({ target }) => (setEmail(target.value))}></Input>
                <InputLabel htmlFor="phone-number-input">Phone number</InputLabel>
                <Input id='phone-number-input' variant='outlined' onChange={({ target }) => (setPhoneNumber(target.value))}></Input>
                <InputLabel htmlFor="enquiry-description-textfield">Message</InputLabel>
                <TextField
                id="enquiry-description-textfield"
                multiline
                rows={4}
                fullWidth={true}
                placeholder="Please provide a description of your enquiry"
                onChange={({ target }) => (setMessage(target.value))}
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
                            shouldDisableDate={disabledDates}
                            shouldDisableTime={disabledTimes}
                            disablePast={true}
                            timeSteps={{minutes: 30}}
                            onChange={handleDateChange}
                            />
                        </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
                            <h1>{ dateInput }</h1>
            <Button id="submit-button" type='submit' fullWidth={true} disabled={ !name || !email } variant='contain'>submit</Button>
            </form>
            </Container>
            </ThemeProvider>

        </section>
    );
}