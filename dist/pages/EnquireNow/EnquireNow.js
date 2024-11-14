import { Button, Container, Input, InputLabel, TextField, Typography, Alert, Link } from "@mui/material";
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
      disabled: "#646464"
    },
    background: {
      default: "#121212",
      paper: "#121212"
    },
    primary: {
      main: "#FFD70D"
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "6px solid #FFD70D",
          boxShadow: "2px 4px 4px 4px #000"
        }
      }
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
          paddingLeft: "0.5em"
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          backgroundColor: "111111",
          color: "#fff",
          margin: "0.1em 0.25em"
        }
      }
    }
  }
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
    6: "Saturday"
  };
  useEffect(() => {
    dateFormatting(apiUrl, setDateLists);
  }, []);
  const handleSubmit = e => {
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
      document.getElementById("enquiry-description-textfield").value = `Details: Name: ${name} \n Email: ${email} \n Postcode: ${postcode} \n Phone number: ${phoneNumber} \n Date of appointment: ${dateInput} \n Enquiry info: ${message}`;
      const element = document.getElementById("enquiry-description-textfield");
      element.style.display = "none";
      emailjs.sendForm("service_rzgfdla", "template_7mhh8i9", e.target, "iejlvPp_cY_iY6NNE").then(result => {
        e.target.reset();
        element.style.display = "block";
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 10000);
        console.log(result.text);
      }, error => {
        console.log(error.text);
      });
    }
    setName("");
    setEmail("");
    setPostcode("");
    setPhoneNumber("");
    setMessage("");
    setDateInput("");
  };
  const handleDateChange = date => {
    const date2 = new Date(date["$d"]);
    return setDateInput(date2.toLocaleString());
  };
  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePostcode = postcode => {
    const postcodeRegex = /^[A-Za-z]{1,2}\d{1,2}[A-Za-z]?\s?\d[A-Za-z]{2}$/;
    return postcodeRegex.test(postcode);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "enquire",
    className: "enquire-now-section",
    "aria-label": "Enquire now"
  }, /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(Container, {
    className: "enquire-now-container"
  }, /*#__PURE__*/React.createElement(Container, {
    className: "enquire-now-info"
  }, /*#__PURE__*/React.createElement(Typography, {
    className: "enquire-now-heading",
    variant: "h1",
    sx: {
      textAlign: "center"
    }
  }, "Enquire now"), /*#__PURE__*/React.createElement(Typography, {
    variant: "body"
  }, "Please see the services section if you\u2019re unsure about your enquiry or want to find out more about the", " ", /*#__PURE__*/React.createElement(Link, {
    href: "#services"
  }, "services"), " we offer.")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("form", {
    className: "enquire-now-form",
    onSubmit: name && email && postcode ? handleSubmit : null,
    "aria-label": "Enquire now form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-wrapper"
  }, /*#__PURE__*/React.createElement(InputLabel, {
    htmlFor: "name"
  }, "Name"), /*#__PURE__*/React.createElement(Typography, {
    variant: "body"
  }, "* Required field")), /*#__PURE__*/React.createElement(Input, {
    name: "name",
    id: "name",
    variant: "outlined",
    onChange: ({
      target
    }) => setName(target.value),
    value: name,
    "aria-label": "Your name"
  }), /*#__PURE__*/React.createElement("div", {
    className: "label-wrapper"
  }, /*#__PURE__*/React.createElement(InputLabel, {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/React.createElement(Typography, {
    variant: "body"
  }, "* Required field")), /*#__PURE__*/React.createElement(Input, {
    name: "email",
    id: "email",
    variant: "outlined",
    value: email,
    onChange: ({
      target
    }) => setEmail(target.value),
    "aria-label": "Your email"
  }), !validEmail && /*#__PURE__*/React.createElement("p", null, " * Not a valid email. Please try again."), /*#__PURE__*/React.createElement("div", {
    className: "label-wrapper"
  }, /*#__PURE__*/React.createElement(InputLabel, {
    htmlFor: "postcode"
  }, "Postcode"), /*#__PURE__*/React.createElement(Typography, {
    variant: "body"
  }, "* Required field")), /*#__PURE__*/React.createElement(Input, {
    name: "postcode",
    id: "postcode",
    variant: "outlined",
    value: postcode,
    onChange: ({
      target
    }) => setPostcode(target.value),
    "aria-label": "Your Postcode"
  }), !validPostcode && /*#__PURE__*/React.createElement("p", null, " * Not a valid postcode. Please try again."), /*#__PURE__*/React.createElement(InputLabel, {
    htmlFor: "phone-number-input"
  }, "Phone number"), /*#__PURE__*/React.createElement(Input, {
    name: "phone_number",
    id: "phone-number-input",
    variant: "outlined",
    value: phoneNumber,
    onChange: ({
      target
    }) => setPhoneNumber(target.value),
    "aria-label": "Your Phone Number"
  }), /*#__PURE__*/React.createElement(InputLabel, {
    htmlFor: "enquiry-description-textfield"
  }, "Message - * Please be as detailed as possible"), /*#__PURE__*/React.createElement(TextField, {
    id: "enquiry-description-textfield",
    name: "enquiry-description-textfield",
    multiline: true,
    rows: 4,
    fullWidth: true,
    placeholder: "Please provide a description of your enquiry",
    onChange: ({
      target
    }) => setMessage(target.value),
    "aria-label": "Your message regarding your enquiry"
  }), /*#__PURE__*/React.createElement(Container, {
    sx: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      alignItems: "left",
      padding: "0 !important",
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "body"
  }, "Choose a date of when you want the work to start or when you would like an appointment"), /*#__PURE__*/React.createElement(Typography, {
    variant: "body"
  }, "* Note: on Sunday we do in person quotations. Please specify in the description box if you would prefer morning or afternoon. Thank you.")), /*#__PURE__*/React.createElement(LocalizationProvider, {
    dateAdapter: AdapterDayjs
  }, /*#__PURE__*/React.createElement(DemoContainer, {
    components: ["DateTimePicker"]
  }, /*#__PURE__*/React.createElement(DemoItem, null, /*#__PURE__*/React.createElement(CssBaseline, null), /*#__PURE__*/React.createElement(DateTimePicker, {
    name: "dateTimePicker",
    id: "dateTimePicker",
    sx: {
      color: "red"
    },
    className: "date-time-picker",
    shouldDisableDate: date => disabledDates(date, dateLists, days),
    shouldDisableTime: date => disabledTimes(date, dateLists, days),
    format: days[new Date(dateInput).getDay()] === "Sunday" ? "DD/MM/YYYY hh:mm" : "DD/MM/YYYY",
    views: days[new Date(dateInput).getDay()] === "Sunday" ? ["day", "hours", "minutes"] : ["day"],
    disablePast: true,
    timeSteps: {
      minutes: 30
    },
    minutesStep: 30,
    onChange: handleDateChange,
    "aria-label": "Your chosen date or time of appointment"
  })))), /*#__PURE__*/React.createElement(Button, {
    id: "submit-button",
    type: "submit",
    fullWidth: true,
    disabled: !name || !email || !postcode,
    variant: "contain"
  }, "submit")), showSuccessMessage && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Alert, {
    className: "success-message",
    severity: "success",
    onClose: () => {
      setShowSuccessMessage(false);
    }
  }, "Message sent successfully!")), /*#__PURE__*/React.createElement("div", {
    onClick: () => document.getElementById("services").scrollIntoView(),
    className: "cheveron-container"
  }, /*#__PURE__*/React.createElement(Typography, {
    href: "#services",
    className: "enquire-now-link",
    variant: "h2"
  }, /*#__PURE__*/React.createElement(Link, {
    href: "#services"
  }, "Services")), /*#__PURE__*/React.createElement(ExpandMoreIcon, {
    className: "cheveron",
    color: "white",
    "aria-label": "Services cheveron"
  })))));
}