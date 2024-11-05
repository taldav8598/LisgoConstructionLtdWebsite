import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="services-section">
      <Container className="services-container">
        <Typography className="header" variant="h3">
          Services
        </Typography>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="dropdown"
          >
            Doors
          </AccordionSummary>
          <AccordionDetails>
            We offer a range a door options and styles that you choose from.{" "}
            <a target="_blank" href="https://www.howdens.com/joinery/doors">
              See Howdens website
            </a>{" "}
            for ideas on the styles, sizes and type of door you want. <br />
            <br /> <a href="#enquire">Enquire now</a>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className="dropdown"
          >
            Flooring
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            className="dropdown"
          >
            Banisters
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
            className="dropdown"
          >
            Other
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </Container>
      <div
        onClick={() => document.getElementById("enquire").scrollIntoView()}
        className="cheveron-container"
      >
        <ExpandLessIcon className="cheveron" color="white" />
        <Typography href="#enquire" className="enquire-now-link" variant="h4">
          <Link href="#enquire">Enquire now</Link>
        </Typography>
      </div>
    </section>
  );
}
