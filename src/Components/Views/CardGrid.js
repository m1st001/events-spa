import EventCard from '../EventCard';
import {Container, Grid} from "@mui/material";

export default function CardGrid() {
    return (
        <Container spacing={{ tp: 2 }}>
            <Grid container spacing={{ xs: 1, sm: 2, md: 3}}>
                <Grid item>
                    <EventCard/>
                </Grid>
                <Grid item>
                    <EventCard/>
                </Grid>
                <Grid item>
                    <EventCard/>
                </Grid>
            </Grid>
        </Container>
    );
}