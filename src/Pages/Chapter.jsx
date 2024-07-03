import React, { useState } from 'react';
import ChapterCard from './ChapterCard';
// import Header from "../Components/Header";
import NavBar from '../Components/HomePageComponents/NavBar';
import Footer from '../Components/HomePageComponents/Footer';
import delhiUniversity from '../Assets/chandigarhUniversity.png';
import UnderConstruction from '../Components/UnderConstruction';
import { Button } from '@material-tailwind/react';
import cuimg from '../Assets/cuimg.png';

const Chapter = () => {
  const firstSetOfCards = [
    {
      title: 'Chandigarh University',
      description: '',
      imageUrl: cuimg,
    },
  ];

  const secondSetOfCards = [
    {
      title: 'Chandigarh University',
      description: '',
      imageUrl: delhiUniversity,
    },
  ];

  const [cards, setCards] = useState(firstSetOfCards);

  const showFirstSet = () => {
    setCards(firstSetOfCards);
  };

  const showSecondSet = () => {
    setCards(secondSetOfCards);
  };

  return (
    <div className='flex flex-col items-center justify-center bg-gray-100'>
      <NavBar />
      <div className='flex justify-center my-4'>
        <div className='w-full flex items-center justify-center gap-10 flex-wrap'>
          <Button
            size='lg'
            className='bg-[#7BBB3B] rounded-3xl'
            onClick={showFirstSet}
          >
            College<span className='text-[20px]'>/</span>University Chapters
          </Button>
          <Button
            size='lg'
            className='bg-white text-[#797979] rounded-3xl'
            onClick={showSecondSet}
          >
            School Chapters
          </Button>
        </div>
      </div>
      <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 mx-auto'>
        {cards.map((card, index) => (
          <ChapterCard
            key={index}
            title={card.title}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default Chapter;
