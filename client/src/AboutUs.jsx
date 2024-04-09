import { Typography, Grid, Link } from '@mui/material';
import './AboutUs.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function AboutUs() {
    return (
        <section className=''>
            <Typography className='header' variant="h3">About us</Typography>
            <div className="about-container">
                <Grid className='first-journey-part' container spacing={2}>
                    <Grid className='inner-journey-part-one' item xs={6}>
                        <p className='info'>Welcome to Lisgo, where craftmanship meets dedication and excellence.</p>
                    </Grid>
                    <Grid item xs={6}>
                        {/* <p className='info'>&nbsp; testing</p> */}
                    {/* <Typography variant="h6">Social media</Typography> */}

                    </Grid>
                </Grid>
                <br />
                <Grid className='first-journey-part' container spacing={2}>
                    <Grid item xs={4}>
                        <p></p>
                    </Grid>
                    <Grid className='inner-journey-part-two' item xs={8}>
                        <p className='info'>We are not just builders; we are creators of spaces that inspire, innovate, and endure.</p>
                    {/* <Typography variant="h6">Social media</Typography> */}

                    </Grid>
                </Grid>
                <p className='last-journey-part'>With 3 years in the industry, we have honed our expertise to deliver exceptional construction solutions tailored to meet your unique needs.</p> 
                


            </div>
            <br />
            <br />
            <div className="mention-container">
            <Typography className='header' variant="h4">Testimonials</Typography>
            <div className="mention">
            <p><i>Exceptional craftsmanship and attention to detail! From concept to completion, this construction company delivered beyond expectations. Highly recommended for any project. Exceptional craftsmanship and attention to detail! From concept to completion, this construction company delivered beyond expectations. Highly recommended for any project.</i></p>
            <p><i>Exceptional craftsmanship and attention to detail! From concept to completion, this construction company delivered beyond expectations. Highly recommended for any project. Exceptional craftsmanship and attention to detail! From concept to completion, this construction company delivered beyond expectations. Highly recommended for any project.</i></p>
            <p><i>Exceptional craftsmanship and attention to detail! From concept to completion, this construction company delivered beyond expectations. Highly recommended for any project. Exceptional craftsmanship and attention to detail! From concept to completion, this construction company delivered beyond expectations. Highly recommended for any project.</i></p>

            </div>
            </div>
            
            <div onClick={() => document.getElementById('enquire').scrollIntoView()} className="cheveron-container">
                <Typography href='#enquire' className='enquire-now-link' variant="h5">
                    <Link href='#enquire'>Enquire now</Link>
                </Typography>
                <ExpandMoreIcon className='cheveron' color='white' />
            </div>
            
        </section>
    );
}