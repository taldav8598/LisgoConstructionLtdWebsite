import { Link } from '@mui/material';
import './Home.css';
import LisgoLogo from './assets/LisgoLogo.jpg';

export default function Navigation() {
    return (
        <section>
            <div className='LisgoHomeLogoContainer'>
            <h1>Leading Construction Company</h1>
            <Link href='#' className='about-us-link' underline='hover'>See about us</Link>
            <img
            className='LisgoHomeLogo'
            src={LisgoLogo}
            />
            </div>
        </section>
    );
}