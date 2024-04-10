import { Typography } from '@mui/material';
import './Gallery.css';

export default function Gallery() {

    return (
        <section className='gallery-section'>
        <div className='gallery-container'>
            <div className="imageOne">1</div>
            <Typography variant="h3">Gallery</Typography>
            <div className="imageTwo">2</div>
            <div className="imageThree">3</div>
            <div className="imageFour">4</div>
            <div className="imageFive">5</div>
            <div className="imageSix">6</div>
            <div className="imageSeven">7</div>
            <div className="imageEight">8</div>
        </div>
        </section>
    );
}