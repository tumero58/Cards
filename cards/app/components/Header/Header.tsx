import { ADD_CARDS, MAX_NUMBER, SORT_CARDS } from "@/constants/general";
import { Box, Button } from "@mui/material"
import { styles } from "./Header.styles";
import { checkUnique } from "./Header.utils";

interface IHeader {
    cards: number[];
    setCards: Function;
};

const Header = ({ cards, setCards }: IHeader): JSX.Element => {

    const handleAddCards = () => {
        const newNumber = Math.floor(Math.random() * MAX_NUMBER);
        const validNumber = checkUnique(newNumber, cards)
        setCards([...cards, validNumber]);
    };

    const handeSortCards = () => {
        const sortedCards = cards.sort(function (a, b) { return a - b });
        setCards([...sortedCards]);
    };
    return (
        <Box sx={styles.header}>
            <Button onClick={handleAddCards}>{ADD_CARDS}</Button>
            <Button onClick={handeSortCards}>{SORT_CARDS}</Button>
        </Box>
    )
};

export default Header;
