import { Typography, Grid } from '@mui/material';
import './Footer.css';
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import FacebookIcon from '@mui/icons-material/Facebook';
import LisgoLogo from './assets/LisgoLogo.jpg';


export default function Footer() {
    return (
        <section className='footer-container'>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Typography variant="h6">Lisgo Construction Ltd.</Typography>
                    <p className='info'>Leading contruction company with 4 years in industry.</p>
                    <div className='social-media-content'>
                        <img src={LisgoLogo} alt="" />
                        <img src={LisgoLogo} alt="" />
                        <img src={LisgoLogo} alt="" />
                    </div>
                </Grid>
                <Grid item xs={2}>
                <Typography variant="h6">Social media</Typography>
                    <div className='social-media-content'>
                        <InstagramIcon />
                        <p>Instagram</p>
                    </div>
                    <div className='social-media-content'>
                        <FacebookIcon />
                        <p>Facebook</p>
                    </div>
                    <div className='social-media-content'>
                        <XIcon />
                        <p>X</p>
                    </div>
                    <div className='social-media-content'>
                        <YouTubeIcon />
                        <p>Youtube</p>
                    </div>
                </Grid>
                <Grid item xs={3}>
                <Typography variant="h6">Useful links</Typography>
                <p className='info'><a href="#">example.com</a></p>
                <p className='info'><a href="#">example.com</a></p>
                <p className='info'><a href="mailto:someone@example.com">example.com</a></p>
                </Grid>
                <Grid item xs={3}>
                <Typography variant="h6">Contact information</Typography>
                <p className='info'>Manchester, WA, Lancashire/Cheshire</p>
                <p className='info'><a href="tel:">Phone number</a></p>
                <p className='info'><a href="mailto:lisgoconstruction@gmail.com?subject=Enquiry">lisgocontruction@gmail.com</a></p>
                </Grid>
            </Grid>
        </section>
    );
}