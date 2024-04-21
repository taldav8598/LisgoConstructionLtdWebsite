import { Button, Container, Input, InputLabel, TextField, Typography, Alert } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import axios from 'axios';
import './EnquireNow.css'

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
              root: {
                fontSize: '1rem',
                color: '#ffffff',
                border: '4px solid #FFD70D',
                borderRadius: '14px',
                backgroundColor: '#111111',
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
          root: {
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
          root: {
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
    const today = dayjs();
    const [dateLists, setDateLists] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [dateInput, setDateInput] = useState(new Date(today).toLocaleString());
    const [showSuccessMessage, setShowSuccessMessage] = useState('');
    const [postcode, setPostcode] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [validPostcode, setValidPostcode] = useState(true);

// RFC 3339 format

   
const days = { 
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday', 
    3: 'Wednesday', 
    4: 'Thursday', 
    5: 'Friday', 
    6: 'Saturday', 
};
    const dateFormatting = async () => {
        //uncommented for git push
        const date = new Date();
        const formattedMinDate = date.toISOString();
        // const timeStampDate = Date.parse(formattedMinDate);
        // console.log("dateString", new Date(timeStampDate));
        
        await axios
        .get(`https://www.googleapis.com/calendar/v3/calendars/24dd8a69a809ae107ee7047d82890a76acb6944dfc635d195d7fe5a313e8c158@group.calendar.google.com/events?key=AIzaSyDENYFe9hlrFL_zp_d50TS520ujLU0Dqg0&timeMin=${formattedMinDate}`)
        .then(({ data }) => {
            const { items } = data;
        
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

                    dateObjectList.dates.push(Number(shortenedDate.replaceAll('-', '')));
                    
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

    const disabledDates = (date) => {
        let day = new Date(date['$d']).getDay();  
        const formattedDate = `${date['$y']}${ date['$M'] + 1 < 10 ? "0" + (date['$M'] + 1) : (date['$M'] + 1)}${date['$D'] < 10 ? "0" + date['$D'] : date['$D']}`;

        let numberDate = Number(formattedDate.split('-').join(''));

        if (days[day] === 'Saturday') {
            return true;
        } else if (days[day] === 'Sunday') {
            return false;
        } else {
            return dateLists.dateObjectList?.dates.includes(numberDate);
        }
    }

    const disabledTimes = (date) => {

        let day = new Date(date['$d']).getDay();
        let hour = date['$H'];
        const formattedDate = `${date['$y']}${ date['$M'] + 1 < 10 ? "0" + (date['$M'] + 1) : (date['$M'] + 1)}${date['$D'] < 10 ? "0" + date['$D'] : date['$D']}`;



        if (days[day] !== 'Sunday') {
             if (!(hour >= 9 && hour <= 17)) {
                return true
            } else {
                return false;
            }
        } else {
            let minutes = date['$m'];

            if (dateLists.dateObjectList?.dates.includes(Number(formattedDate))) {
                if (!(hour >= 9 && hour <= 17)) {
                    return true
                } else {

                    let mappedObj = dateLists.dateObjectList?.dates.map((individualDate, index) => {
                        if (individualDate === Number(formattedDate)) {
                            return index
                        }
                    })
                    let timeIndexes = mappedObj.filter(Number)
                    
    
                    return timeIndexes.find((index) => {
                        let startTime = dateLists.dateObjectList?.dateTimes.start[index];
                        let endTime =  dateLists.dateObjectList?.dateTimes.end[index];

                        let startHour = startTime / 10000;
                        let endHour = endTime / 10000;

                        if(hour >= startHour && hour < endHour && (!String(startTime).includes('30') || !String(endTime).includes('30'))) {
                            return true
                        }

                        let time = `${hour}${minutes}${minutes == 30 ? ('00') : ("000")}`;

                        if (minutes === 0 || minutes === 30) {

                            if (Number(time) > startTime && Number(time) < endTime) {
                                return true
                            } else {
                                return false
                            }
                        }
                    })
                }
            }
        } 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setValidPostcode(true)
        setValidEmail(true)
        let postcodeCheck = true;
        let emailCheck = true;

        if (!validateEmail(email)) {
            setValidEmail(false);
            emailCheck = false
            setTimeout(() => {
                setValidEmail(true)
            }, 30000)
        }
        if (!validatePostcode(postcode)) {
            setValidPostcode(false);
            postcodeCheck = false
            setTimeout(() => {
                setValidPostcode(true)
            }, 30000)
        }

        if(!emailCheck || !postcodeCheck) {
            return
        } else {
            document.getElementById('enquiry-description-textfield').value =  `Details: Name: ${name} \n Email: ${email} \n Postcode: ${postcode} \n Phone number: ${phoneNumber} \n Date of appointment: ${dateInput} \n Enquiry info: ${message}`;
            const element = document.getElementById('enquiry-description-textfield');
            element.style.display = 'none';
        
            emailjs.sendForm('service_rzgfdla', 'template_7mhh8i9', e.target, 'iejlvPp_cY_iY6NNE')
                .then((result) => {
                    e.target.reset();
                    element.style.display = 'block';
                      
                setShowSuccessMessage(true)
                    setTimeout(() => {
                        setShowSuccessMessage(false)
                    }, 10000);
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
            });
        }
    }

    const handleDateChange = (date) => {
        const date2 = new Date(date['$d'])
        return setDateInput(date2.toLocaleString());
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePostcode = (postcode) => {
        const postcodeRegex = /^[A-Za-z]{1,2}\d{1,2}[A-Za-z]?\s?\d[A-Za-z]{2}$/;
        return postcodeRegex.test(postcode);
    };

    return (
        <section id="enquire" className='enquire-now-section'>
            <ThemeProvider theme={theme}>
            <Container className='enquire-now-container'>
            <Typography className='enquire-now-heading' variant='h3' sx={{textAlign: 'center'}}>Enquire now</Typography>
            <p>Please see the services section if you’re unsure about your enquiry classification or want to find out more about the <a href="#services">services</a> that we offer.</p>  
            <p>If you have any queries feel free to <a href="">contact us.</a></p>
            <br />
            <form className='enquire-now-form' onSubmit={name && email && postcode ? handleSubmit : null}>
                <div className='label-wrapper'>
                <InputLabel htmlFor="name-input">Name</InputLabel>
                <InputLabel htmlFor="name-input">* required field</InputLabel>
                </div>
                <Input name="from_name" id='name-input' variant='outlined' onChange={({ target }) => setName(target.value)} value={name}></Input>
                <div className='label-wrapper'>
                <InputLabel htmlFor="email-input">Email</InputLabel>
                <InputLabel htmlFor="name-input">* required field</InputLabel>
                </div>
                
                <Input name="email" id='email-input' variant='outlined' value={email} onChange={({ target }) => (setEmail(target.value))}></Input>
                {!validEmail && <p> * Not a valid email. Please try again.</p>}
                <div className='label-wrapper'>
                <InputLabel htmlFor="postcode">Postcode</InputLabel>
                <InputLabel htmlFor="postcode-input">* required field</InputLabel>
                </div>
                <Input name="postcode" id='postcode-input' variant='outlined' value={postcode} onChange={({ target }) => (setPostcode(target.value))}></Input>
                {!validPostcode && <p> * Not a valid postcode. Please try again.</p>}
                <InputLabel htmlFor="phone-number-input">Phone number</InputLabel>
                <Input name="phone_number" id='phone-number-input' variant='outlined' value={phoneNumber} onChange={({ target }) => (setPhoneNumber(target.value))}></Input>
                <InputLabel htmlFor="enquiry-description-textfield">Message - Please be as detailed as possible *</InputLabel>
                <TextField
                id="enquiry-description-textfield"
                name="message"
                multiline
                rows={4}
                fullWidth={true}
                placeholder="Please provide a description of your enquiry"
                onChange={({ target }) => (setMessage(target.value))}
                />
                <InputLabel htmlFor="name-input">Choose a date or time of when you want the work to start or when you would like an appointment</InputLabel>
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
                            name="start_date"
                            />
                        </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
            <Button id="submit-button" type='submit' fullWidth={true} disabled={ !name || !email || !postcode } variant='contain'>submit</Button>

            </form>
            {showSuccessMessage && (
                <>
                    <Alert className='success-message' severity="success" onClose={() => {setShowSuccessMessage(false)}}>Message sent successfully!</Alert>
                </>
            )}
            </Container>
            </ThemeProvider>

        </section>
    );
}