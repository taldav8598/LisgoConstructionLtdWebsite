import { Container, Link } from '@mui/material';
import './Navigation.css';
import LisgoLogo from './assets/LisgoLogo.jpg';

export default function Navigation() {
    return (
        <Container className='navigation-container'>
            <div className='LisgoLogoContainer'>
            <img
            className='LisgoLogo'
            src={LisgoLogo}
            />
            <p className='Lisgo-Logo-Heading'>Lisgo Construction Ltd.</p>
            </div>
            <Link href='#home' className='navigation-link' underline='hover'>Home</Link>
            <Link href='#about-us' className='navigation-link' underline='hover'>About us</Link>
            <Link href='#enquire' className='navigation-link' underline='hover'>Enquire now</Link>
            <Link href='#services' className='navigation-link' underline='hover'>Services</Link>
            <Link href='#gallery' className='navigation-link' underline='hover'>Gallery</Link>
        </Container>
    );
}