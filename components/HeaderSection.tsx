import { useContext } from 'react';
import { ThemeContext } from '@/context/themeContext';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const H1 = styled(motion.h1)`
  font-size: 4rem;
  background: linear-gradient(145deg, #72f, hsl(204deg 100% 83%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
`;

const ModeButtonDiv = styled(motion.div)<{ isDarkModeOn: Boolean }>`
  width: 50px;
  height: 24px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: ${({ isDarkModeOn }) =>
    isDarkModeOn ? 'flex-start' : 'flex-end'};
  margin-bottom: 2rem;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.15);
`;

const ModeButton = styled(motion.button)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  background: var(--color-text);
  color: var(--color-background);
  border-radius: 50%;
  border: none;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
`;

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 20,
};

const ModeBtn = ({
  darkColorMode,
  changeColorMode,
}: {
  darkColorMode: boolean;
  changeColorMode: (arg: string) => void;
}) => (
  <>
    <ModeButtonDiv isDarkModeOn={darkColorMode ? true : false}>
      <ModeButton
        layout
        onClick={() => {
          const changeColorModeTo = darkColorMode ? 'light' : 'dark';
          changeColorMode(changeColorModeTo);
        }}
        transition={spring}>
        {darkColorMode ? '🌞' : '🌜'}
      </ModeButton>
    </ModeButtonDiv>
  </>
);

function HeaderSection() {
  const { colorMode, changeColorMode } = useContext(ThemeContext);

  return (
    <>
      {colorMode == 'light' && (
        <H1
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{ delay: 0.025 }}>
          LIGHT
        </H1>
      )}
      {colorMode == 'dark' && (
        <H1
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{ delay: 0.025 }}>
          DARK
        </H1>
      )}
      <ModeBtn
        darkColorMode={colorMode === 'dark'}
        changeColorMode={changeColorMode}
      />
    </>
  );
}

export default HeaderSection;
