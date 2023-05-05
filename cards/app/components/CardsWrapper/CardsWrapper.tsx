import { Box } from "@mui/material";
import { Fragment } from "react";
import Card from "../Card/Card";
import { styles } from "./CardsWrapper.styles";

interface ICardsWrapper {
    cards: number[];
    setCards: Function;
};

const CardsWrapper = ({ cards, setCards }: ICardsWrapper): JSX.Element => {
    return (
        <Box sx={styles.content}>
            {cards?.map((item, index) => {
                return (
                    <Fragment key={index + 1}>
                        <Card cards={cards} setCards={setCards} number={item} />
                    </Fragment>
                )
            })}
        </Box>
    )
};

export default CardsWrapper;
