import Carousel from 'react-material-ui-carousel'
import { Link } from '@mui/material';
import './Home.css';
import Item from './Item';
import LisgoLogo from './assets/LisgoLogo.jpg';

export default function Navigation() {
    const reviews = [
        {
            name: "John",
            review: "Exceptional craftsmanship and attention to detail! From concept to completion, this construction company delivered beyond expectations. Highly recommended for any project."
        },
        {
            name: "Sally",
            review: "Professionalism at its finest! Timely and efficient, this construction company tackled our renovation project with expertise and finesse. Delighted with the results!"
        },
        {
            name: "Ian",
            review: "Outstanding communication and transparency throughout the build process. This construction company's dedication to client satisfaction is commendable. Will definitely hire again."
        },
        {
            name: "Katie",
            review: "Reliable and trustworthy, this construction company exceeded all our expectations. Their commitment to quality workmanship and customer service sets them apart in the industry. A top choice for any construction needs."
        }
    ];
    return (
        <section className='HomeSection'>
                <div className='ReviewContainer'>
                    <Carousel className='Carousel'>
                        {
                            reviews.map( (item, i) => <Item className="item" key={i} item={item} /> )
                        }
                    </Carousel>
                </div>
            <div className='HomeHeadingContainer'>
                <div className='LisgoHeadingContainer'>
                    <h1 className='leading-company-heading'>Leading Construction Company</h1>
                    <Link href='#' className='about-us-link'>See about us</Link>
                    <button><a href='#test'>Enquire now</a></button>
                </div>
                <div className='LisgoHomeLogoContainer'>
                    <img
                    className='LisgoHomeLogo'
                    src={LisgoLogo}
                    />
                </div>
            </div>
        </section>
    );
}