import { INSTRUCTIONS_ADD, INSTRUCTIONS_CLOSE, INSTRUCTIONS_SORT } from "@/constants/instructions";
import { Box, Typography } from "@mui/material";
import { styles } from "./Instructions.styles";

const Instructions = (): JSX.Element => {
    return (
        <Box sx={styles.instructionsBox}>
            <Box>
                <Typography>{INSTRUCTIONS_ADD}</Typography>
                <Typography>{INSTRUCTIONS_SORT}</Typography>
                <Typography>{INSTRUCTIONS_CLOSE}</Typography>
            </Box>
        </Box>
    )
};

export default Instructions;
