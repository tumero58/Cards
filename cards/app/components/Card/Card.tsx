import { CLOSE_ICON_TEXT } from "@/constants/general";
import { Box, Button, Typography } from "@mui/material"
import { styles } from "./Card.styles";

interface ICard {
    number: number;
    cards: number[];
    setCards: Function;
}

const Card = ({ number, cards, setCards }: ICard): JSX.Element => {

    const handleClose = () => {
        const index = cards.indexOf(number);
        const currentCards = cards;
        currentCards.splice(index, 1);
        setCards([...currentCards]);
    };
    
    return (
        <Box sx={styles.card}>
            <Typography variant="h1">{number}</Typography>
            <Button onClick={handleClose} sx={styles.closeIcon}>{CLOSE_ICON_TEXT}</Button>
        </Box>
    )
}

export default Card;
