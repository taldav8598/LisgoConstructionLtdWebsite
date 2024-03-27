import { Link, Stepper } from '@mui/material';
import './Home.css';
import LisgoLogo from './assets/LisgoLogo.jpg';

export default function Navigation() {
    return (
        <section className='HomeSection'>
            <div className='HomeContainer'>
                <div className='LisgoHeadingContainer'>
                    <h1 className='leading-company-heading'>Leading Construction Company</h1>
                    <Link href='#' className='about-us-link'>See about us</Link>
                </div>
                <div className='LisgoHomeLogoContainer'>
                    <img
                    className='LisgoHomeLogo'
                    src={LisgoLogo}
                    />
                </div>
            </div>
            <div className='ReviewContainer'>
                <h2 className='ReviewHeading'>Reviews</h2>
                <Stepper className='ReviewCarousel'/>
            </div>
        </section>
    );
}