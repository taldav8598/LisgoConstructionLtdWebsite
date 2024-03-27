import { Paper } from '@mui/material';
import './Item.css';

export default function Item({ item }) {
    return (
        <Paper>
            <p>{item.review}</p>
            <h2>{item.name}</h2>
        </Paper>
    )
}