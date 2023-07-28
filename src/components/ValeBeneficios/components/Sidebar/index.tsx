import {
  GraphIcon,
  InfoIcon,
  MentionIcon,
  PersonIcon,
  SignOutIcon,
} from '@primer/octicons-react';

import Logo from './../Logo';

import icoAppStore from '../../assets/ico-app-store.svg';
import icoGooglePlay from '../../assets/ico-google-play.svg';

import * as S from './styles';

export default function Sidebar() {
  return (
    <S.Wrapper>
      <Logo />

      <S.Avatar>
        <div className="avatar-background">
          <PersonIcon size={24} />
        </div>
        <div>
          <p>
            Welcome, <b>Jonathan</b>
          </p>
        </div>
      </S.Avatar>

      <S.Menu>
        <ul>
          <li className="active">
            <a>
              <GraphIcon size={24} /> Dashboard
            </a>
          </li>

          <li>
            <a>
              <InfoIcon size={24} /> About
            </a>
          </li>

          <li>
            <a>
              <MentionIcon size={24} /> Contact
            </a>
          </li>

          <li>
            <a>
              <SignOutIcon size={24} /> Logout
            </a>
          </li>
        </ul>
      </S.Menu>

      <S.AppDownload>
        <p>Download our app</p>
        <ul>
          <li>
            <a>
              <img src={icoGooglePlay} alt="Google Play" /> Google Play
            </a>
          </li>
          <li>
            <a>
              <img src={icoAppStore} alt="App Store" /> App Store
            </a>
          </li>
        </ul>
      </S.AppDownload>
    </S.Wrapper>
  );
}
