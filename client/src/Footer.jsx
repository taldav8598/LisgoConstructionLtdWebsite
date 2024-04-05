import { Link, Typography, Grid } from '@mui/material';
import './Footer.css';

export default function Footer() {
    return (
        <section className='footer-container'>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Typography variant="h6">Lisgo Construction Ltd.</Typography>
                    <p className='info'>Leading contruction company with 4 years experience.</p>
                </Grid>
                <Grid item xs={4}>
                <Typography variant="h6">Social media</Typography>

                </Grid>
                <Grid item xs={4}>
                <Typography variant="h6">Contact information</Typography>
                <p className='info'>Manchester, WA, Lancashire/Cheshire</p>
                <p className='info'><a href="#">+07 123 456890</a></p>
                <p className='info'><a href="#">info@example.com</a></p>

                </Grid>
            </Grid>
        </section>
    );
}