import { Check, Copy } from '@phosphor-icons/react';
import { useState } from 'react';

import * as S from './styles';

export default function Footer() {
  const email = 'eu@jofelipe.com';

  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmail = () => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);

    setTimeout(() => {
      setEmailCopied(false);
    }, 2000);
  };

  console.log(`%c ${S.ConsoleMessage}`, 'color: green');

  return (
    <S.Wrapper>
      <S.Container>
        <p>
          Made with ❤️ and{' '}
          <a
            href="https://github.com/jofelipe/i-love-micro-interactions"
            target="_blank"
          >
            open source
          </a>
        </p>
        <div className="mail" title="Click to copy :)">
          <a onClick={handleEmail}>{email}</a>
          {emailCopied ? (
            <Check className="ico" size={16} />
          ) : (
            <Copy className="ico" size={16} />
          )}
        </div>
      </S.Container>
    </S.Wrapper>
  );
}
