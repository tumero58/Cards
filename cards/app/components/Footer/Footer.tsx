import { FOOTER } from "@/constants/general";
import { Box, Typography } from "@mui/material";
import { styles } from "./Footer.style";

const Footer = (): JSX.Element => {
    return (
        <Box sx={styles.footer}>
            <Typography>{FOOTER}</Typography>
        </Box>
    )
};

export default Footer;
