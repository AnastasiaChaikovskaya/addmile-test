'use client';

import FinishPage from '@/modules/FinishPage/FinishPage';
import GameContainer from '@/modules/GameContainer/GameContainer';
import WelcomeContainer from '@/modules/WelcomeContainer/WelcomeContainer';
import { useGameStore } from '@/store/GameStore';

const page = () => {
  const { isStarted, isFinished } = useGameStore((state) => state);

  const isGameStart = isStarted && !isFinished;

  return (
    <>
      {!isStarted && <WelcomeContainer />}
      {isGameStart && <GameContainer />}
      {isFinished && <FinishPage />}
    </>
  );
};

export default page;
