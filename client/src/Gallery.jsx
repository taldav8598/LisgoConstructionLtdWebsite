import { Typography } from '@mui/material';
import './Gallery.css';

export default function Gallery() {

    return (
        <section className='gallery-section'>
        <div className='gallery-container'>
            <div className="imageOne"></div>
            <Typography variant="h3">Gallery</Typography>
            <div className="imageTwo"></div>
            <div className="imageThree"></div>
            <div className="imageFour"></div>
            <div className="imageFive"></div>
            <div className="imageSix"></div>
            <div className="imageSeven"></div>
            <div className="imageEight"></div>
        </div>
        <div className='empty'></div>
        </section>
    );
}