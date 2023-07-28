import { MoonIcon, SunIcon } from '@primer/octicons-react';
import { useState } from 'react';
import Switch from 'react-switch';

import Balance from './components/Balance';
import Logo from './components/Logo';
import Sidebar from './components/Sidebar';
import Transactions from './components/Transactions';

import { darkTheme } from './styles/dark';
import { lightTheme } from './styles/light';

import * as S from './styles';

export default function ValeBeneficios() {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  return (
    <S.Wrapper className={currentTheme}>
      <Sidebar />

      <S.ThemeToggle>
        <Logo />

        <Switch
          checked={currentTheme === darkTheme ? true : false}
          onChange={() =>
            setCurrentTheme(currentTheme === darkTheme ? lightTheme : darkTheme)
          }
          checkedIcon={<SunIcon size={16} />}
          uncheckedIcon={<MoonIcon size={16} />}
          activeBoxShadow="0"
          handleDiameter={22}
          width={64}
          height={32}
          offColor={currentTheme.colors.vcardBorder.value}
          onColor={currentTheme.colors.vcardBorder.value}
        />
      </S.ThemeToggle>

      <Balance theme={currentTheme} />

      <Transactions />
    </S.Wrapper>
  );
}
