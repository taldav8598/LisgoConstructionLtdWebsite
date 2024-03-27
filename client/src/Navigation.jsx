import { Container, Link } from '@mui/material';
import './Navigation.css';

export default function Navigation() {
    return (
        <Container className='navigation-container'>
            <Link href='#' className='navigation-link' underline='hover'>Home</Link>
            <Link href='#' className='navigation-link' underline='hover'>About us</Link>
            <Link href='#' className='navigation-link' underline='hover'>Services</Link>
            <Link href='#' className='navigation-link' underline='hover'>Gallery</Link>
            <Link href='#' className='navigation-link' underline='hover'>Contacts</Link>
        </Container>
    );
}