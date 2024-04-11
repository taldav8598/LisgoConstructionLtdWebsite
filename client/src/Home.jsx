import Carousel from 'react-material-ui-carousel'
import { Link, Typography, Grid } from '@mui/material';
import './Home.css';
import Item from './Item';
import LisgoLogo from './assets/LisgoLogo.jpg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Home() {
    
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
        <section id="home" className='HomeSection'>
                <div className='ReviewContainer'>
                    <Carousel 
                    className='Carousel'
                    activeIndicatorIconButtonProps={{
                        style: {
                            color: '#ffd70d',
                        }
                    }}
                    >
                        {
                            reviews.map( (item, i) => <Item className="item" key={i} item={item} /> )
                        }
                    </Carousel>
                    <Link target="_blank" href="https://www.google.com/search?q=lisgo+construction+ltd&rlz=1C5GCCM_en&oq=lisgo+co&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMg0IARAuGK8BGMcBGIAEMgYIAhBFGDkyCAgDEAAYFhgeqAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0xa51f849c094cefd3:0xc770e71668c7846d,1,,,,">See more reviews</Link>
                </div>
                <div className="home-title-container">
                    <h1 className='leading-company-heading'>Leading Construction Company</h1>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <div className='LisgoHeadingContainer'>
                        <Typography variant="h3">
                        Lisgo Construction Ltd.
                        </Typography>
                        <Typography className='' variant="h4">
                        <Link href='#aboutUs' className='about-us-link'>See about us</Link>
                        </Typography>
                        <Typography variant="h4">
                        <Link href='#enquire'>Enquire now</Link>
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={4}>
                <div className='LisgoHomeLogoContainer'>
                    <img
                    className='LisgoHomeLogo'
                    src={LisgoLogo}
                    />
                </div>
                </Grid>
            </Grid>
            <div onClick={() => document.getElementById('enquire').scrollIntoView()} className="cheveron-container">
                <Typography href='#enquire' className='enquire-now-link' variant="h5">
                    <Link href='#enquire'>Enquire now</Link>
                </Typography>
                <ExpandMoreIcon 
                className='cheveron' 
                color='white'
                fontSize="small"
                />
            </div>
        </div>
               
        </section>
    );
}