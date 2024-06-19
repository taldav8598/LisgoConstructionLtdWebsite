import Carousel from 'react-material-ui-carousel'
import { Link, Typography, Grid } from '@mui/material';
import './Home.css';
import Item from './Item';
import LisgoLogo from './assets/LisgoLogo.jpg';
import StarIcon from '@mui/icons-material/Star';
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
    const starNums = [1,2,3,4,5,6,7,8,9, 10]
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
                <a target="_blank" href="https://www.checkatrade.com/trades/lisgoconstruction892696"><div className='check-a-trade-container'>
                        <div className='rating-and-img'>
                            <img src="http://www.checkatrade.com/Images/CAT_Approved_member_logo.jpg" alt="check a trade" />
                            <div className='rating-container'>
                                <Typography variant="h5">10/10</Typography>
                                <tbody>
                                    {starNums.map((_, i) => <StarIcon key={i} className='star' style={{ opacity: 1 }} fontSize="inherit"></StarIcon>)}
                                </tbody>
                                
                        </div>
                        
                       


                        </div> 
                        <div className='as-of'>
                            <Typography variant="p">* Rating snapshot taken from 01/05/2024</Typography>
                        </div>
                         
                        
                        {/* {starNums.map(num && )} */}


                </div>
                </a>
                <div className="home-title-container">
                    <h1 className='leading-company-heading'>Leading Construction Company</h1>
            <Grid container spacing={2}>
                <Grid lg={8} item xs={12}>
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
                <Grid lg={4} item xs={12}>
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