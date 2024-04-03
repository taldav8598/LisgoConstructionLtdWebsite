import { Paper } from '@mui/material';
import './Item.css';

export default function Item({ item }) {
    return (
        <Paper>
            <div className='reviewContainer'>
            <p className='review'>{item.review}</p>
            <h2 className='reviewName'>{item.name}</h2>
            </div>
        </Paper>
    )
}