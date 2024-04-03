import Carousel from 'react-material-ui-carousel'
import { Link, Typography } from '@mui/material';
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
                    <Carousel 
                    className='Carousel'
                    activeIndicatorIconButtonProps={{
                        style: {
                            color: '#ffd70d'
                        }
                    }}
                    >
                        {
                            reviews.map( (item, i) => <Item className="item" key={i} item={item} /> )
                        }
                    </Carousel>
                </div>
                <div className="home-title-container">
                    <h1 className='leading-company-heading'>Leading Construction Company</h1>
            <div className='HomeHeadingContainer'>
                <div className='LisgoHeadingContainer'>
                    <Typography variant="h3">
                    Lisgo Construction Ltd.
                    </Typography>
                    <Typography className='' variant="h4">
                    <Link href='#' className='about-us-link'>See about us</Link>
                    </Typography>
                    <Typography variant="h4">
                    <Link className='enquire-now-link' href='#test'>Enquire now</Link>
                    </Typography>
                </div>
                <div className='LisgoHomeLogoContainer'>
                    <img
                    className='LisgoHomeLogo'
                    src={LisgoLogo}
                    />
                </div>
                </div>
                <Typography variant="h6">
                    <Link className='enquire-now-link' href='#test'>Enquire now</Link>
                </Typography>
            </div>
        </section>
    );
}