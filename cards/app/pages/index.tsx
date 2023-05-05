import CardsWrapper from '@/components/CardsWrapper/CardsWrapper';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Instructions from '@/components/Instructions/Instructions';
import { appStyles } from '@/styles/App.styles';
import { Box } from '@mui/material';
import { useState } from 'react';

export default function Home() {
  const [cards, setCards] = useState<number[]>([]);

  return (
    <Box sx={appStyles.wrapper}>
      <Box sx={appStyles.contentWrapper}>
        <Header cards={cards} setCards={setCards} />
        <CardsWrapper cards={cards} setCards={setCards} />
        <Footer />
      </Box>
      <Instructions />
    </Box>
  )
};
