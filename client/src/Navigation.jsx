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
            <Link href='#' className='navigation-link' underline='hover'>Home</Link>
            <Link href='#' className='navigation-link' underline='hover'>About us</Link>
            <Link href='#' className='navigation-link' underline='hover'>Services</Link>
            <Link href='#' className='navigation-link' underline='hover'>Gallery</Link>
            <Link href='#' className='navigation-link' underline='hover'>Contacts</Link>
        </Container>
    );
}