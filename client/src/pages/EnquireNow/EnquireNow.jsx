import {
  Button,
  Container,
  Input,
  InputLabel,
  TextField,
  Typography,
  Alert,
  Link,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CssBaseline from "@mui/material/CssBaseline";

import { useEffect, useState } from "react";
import { dateFormatting } from "../../utils/dateFormatting";
import { disabledDates } from "../../utils/disabledDates";
import { disabledTimes } from "../../utils/disabledTimes";
import emailjs from "emailjs-com";
import "./EnquireNow.css";

const theme = createTheme({
  palette: {
    text: {
      primary: "#fff",
      secondary: "#fff",
      disabled: "#646464",
    },
    background: {
      default: "#121212",
      paper: "#121212",
    },
    primary: {
      main: "#FFD70D",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "6px solid #FFD70D",
          boxShadow: "2px 4px 4px 4px #000",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1rem",
          backgroundColor: "111111",
          color: "#fff",
          border: "4px solid #FFD70D",
          borderRadius: "4px",
          margin: "0 0 1em 0",
          paddingLeft: "0.5em",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          backgroundColor: "111111",
          color: "#fff",
          margin: "0.1em 0.25em",
        },
      },
    },
  },
});

export default function EnquireNow() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const today = dayjs();
  const [dateLists, setDateLists] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [dateInput, setDateInput] = useState(new Date(today).toLocaleString());
  const [showSuccessMessage, setShowSuccessMessage] = useState("");
  const [postcode, setPostcode] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [validPostcode, setValidPostcode] = useState(true);

  const days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };

  useEffect(() => {
    dateFormatting(apiUrl, setDateLists);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidPostcode(true);
    setValidEmail(true);
    let postcodeCheck = true;
    let emailCheck = true;

    if (!validateEmail(email)) {
      setValidEmail(false);
      emailCheck = false;
      setTimeout(() => {
        setValidEmail(true);
      }, 30000);
    }
    if (!validatePostcode(postcode)) {
      setValidPostcode(false);
      postcodeCheck = false;
      setTimeout(() => {
        setValidPostcode(true);
      }, 30000);
    }

    if (!emailCheck || !postcodeCheck) {
      return;
    } else {
      document.getElementById(
        "enquiry-description-textfield"
      ).value = `Details: Name: ${name} \n Email: ${email} \n Postcode: ${postcode} \n Phone number: ${phoneNumber} \n Date of appointment: ${dateInput} \n Enquiry info: ${message}`;
      const element = document.getElementById("enquiry-description-textfield");
      element.style.display = "none";

      emailjs
        .sendForm(
          "service_rzgfdla",
          "template_7mhh8i9",
          e.target,
          "iejlvPp_cY_iY6NNE"
        )
        .then(
          (result) => {
            e.target.reset();
            element.style.display = "block";

            setShowSuccessMessage(true);
            setTimeout(() => {
              setShowSuccessMessage(false);
            }, 10000);
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const handleDateChange = (date) => {
    const date2 = new Date(date["$d"]);
    return setDateInput(date2.toLocaleString());
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePostcode = (postcode) => {
    const postcodeRegex = /^[A-Za-z]{1,2}\d{1,2}[A-Za-z]?\s?\d[A-Za-z]{2}$/;
    return postcodeRegex.test(postcode);
  };

  return (
    <section
      id="enquire"
      className="enquire-now-section"
      aria-label="Enquire now"
    >
      <ThemeProvider theme={theme}>
        <Container className="enquire-now-container">
          <Container className="enquire-now-info">
            <Typography
              className="enquire-now-heading"
              variant="h1"
              sx={{ textAlign: "center" }}
            >
              Enquire now
            </Typography>
            <Typography variant="body">
              Please see the services section if you’re unsure about your
              enquiry or want to find out more about the{" "}
              <Link href="#services">services</Link> we offer.
            </Typography>
          </Container>
          <br />
          <form
            className="enquire-now-form"
            onSubmit={name && email && postcode ? handleSubmit : null}
            aria-label="Enquire now form"
          >
            <div className="label-wrapper">
              <InputLabel htmlFor="name">Name</InputLabel>
              <Typography variant="body">* Required field</Typography>
            </div>
            <Input
              name="name"
              id="name"
              variant="outlined"
              onChange={({ target }) => setName(target.value)}
              value={name}
              aria-label="Your name"
            ></Input>
            <div className="label-wrapper">
              <InputLabel htmlFor="email">Email</InputLabel>
              <Typography variant="body">* Required field</Typography>
            </div>

            <Input
              name="email"
              id="email"
              variant="outlined"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              aria-label="Your email"
            ></Input>
            {!validEmail && <p> * Not a valid email. Please try again.</p>}
            <div className="label-wrapper">
              <InputLabel htmlFor="postcode">Postcode</InputLabel>
              <Typography variant="body">* Required field</Typography>
            </div>
            <Input
              name="postcode"
              id="postcode"
              variant="outlined"
              value={postcode}
              onChange={({ target }) => setPostcode(target.value)}
              aria-label="Your Postcode"
            ></Input>
            {!validPostcode && (
              <p> * Not a valid postcode. Please try again.</p>
            )}
            <InputLabel htmlFor="phone-number-input">Phone number</InputLabel>
            <Input
              name="phone_number"
              id="phone-number-input"
              variant="outlined"
              value={phoneNumber}
              onChange={({ target }) => setPhoneNumber(target.value)}
              aria-label="Your Phone Number"
            ></Input>
            <InputLabel htmlFor="enquiry-description-textfield">
              Message - * Please be as detailed as possible
            </InputLabel>
            <TextField
              id="enquiry-description-textfield"
              name="enquiry-description-textfield"
              multiline
              rows={4}
              fullWidth={true}
              placeholder="Please provide a description of your enquiry"
              onChange={({ target }) => setMessage(target.value)}
              aria-label="Your message regarding your enquiry"
            />
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "left",
                padding: "0 !important",
                margin: 0,
              }}
            >
              <Typography variant="body">
                Choose a date or time of when you want the work to start or when
                you would like an appointment
              </Typography>
              <Typography variant="body">
                * Note: on Sunday we do in person quotations
              </Typography>
            </Container>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DemoItem>
                  <CssBaseline />
                  <DateTimePicker
                    name="dateTimePicker"
                    id="dateTimePicker"
                    sx={{
                      color: "red",
                    }}
                    className="date-time-picker"
                    defaultValue={today}
                    shouldDisableDate={(date) =>
                      disabledDates(date, dateLists, days)
                    }
                    shouldDisableTime={(date) =>
                      disabledTimes(date, dateLists, days)
                    }
                    format={
                      days[new Date(dateInput).getDay()] === "Sunday"
                        ? "DD/MM/YYYY hh:mm"
                        : "DD/MM/YYYY"
                    }
                    views={
                      days[new Date(dateInput).getDay()] === "Sunday"
                        ? ["day", "hours", "minutes"]
                        : ["day"]
                    }
                    disablePast={true}
                    timeSteps={{ minutes: 30 }}
                    minutesStep={30}
                    onChange={handleDateChange}
                    aria-label="Your chosen date or time of appointment"
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
            <Button
              id="submit-button"
              type="submit"
              fullWidth={true}
              disabled={!name || !email || !postcode}
              variant="contain"
            >
              submit
            </Button>
          </form>
          {showSuccessMessage && (
            <>
              <Alert
                className="success-message"
                severity="success"
                onClose={() => {
                  setShowSuccessMessage(false);
                }}
              >
                Message sent successfully!
              </Alert>
            </>
          )}
          <div
            onClick={() => document.getElementById("services").scrollIntoView()}
            className="cheveron-container"
          >
            <Typography
              href="#services"
              className="enquire-now-link"
              variant="h2"
            >
              <Link href="#services">Services</Link>
            </Typography>
            <ExpandMoreIcon
              className="cheveron"
              color="white"
              aria-label="Services cheveron"
            />
          </div>
        </Container>
      </ThemeProvider>
    </section>
  );
}