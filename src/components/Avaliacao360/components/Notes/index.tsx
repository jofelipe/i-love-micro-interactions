import { Fragment, useRef, useState } from 'react';
import Lottie from 'react-lottie-player';

import highestNoteExplosionAnimation from './../../assets/highest-note-explosion.json';
import highestNoteAnimation from './../../assets/highest-note.json';
import userHintAnimation from './../../assets/user-hint.json';

import * as S from './styles';

export default function Notes() {
  const yayAudioRef = useRef<HTMLAudioElement>(null);

  const [showAnimation, setShowAnimation] = useState(false);

  const handleNote = (selectedNote: string) => {
    const highestNote = String(5);

    if (selectedNote === highestNote) {
      setShowAnimation(true);
      yayAudioRef.current?.play();
    } else {
      setShowAnimation(false);
    }
  };

  return (
    <S.Wrapper>
      <audio ref={yayAudioRef}>
        <source src="/sounds/yay.mp3" type="audio/mpeg" />
        <p>Your browser does not support the audio element.</p>
      </audio>

      <S.Notes>
        <p>What rating would you give to this page?</p>
        <S.RadioGroupRoot aria-label="View density" onValueChange={handleNote}>
          {[...Array(5)].map((item, i) => (
            <Fragment key={i}>
              <S.RadioGroupItem
                key={item}
                value={String(i + 1)}
                id={String(i + 1)}
              >
                <S.Label htmlFor={String(i + 1)}>{i + 1}</S.Label>

                {i === 4 && showAnimation && (
                  <S.HighestNote>
                    <div className="overflow">
                      <Lottie
                        animationData={highestNoteAnimation}
                        className="unicorn animation"
                        loop
                        play
                      />
                    </div>
                    <Lottie
                      animationData={highestNoteExplosionAnimation}
                      className="explosion animation"
                      loop={false}
                      play
                    />
                  </S.HighestNote>
                )}
              </S.RadioGroupItem>
            </Fragment>
          ))}
        </S.RadioGroupRoot>

        <S.NoteHint>
          <div className="user-hint">
            <Lottie
              animationData={userHintAnimation}
              className="user-hint-animation"
              loop
              play
            />
          </div>
          <div className="text">
            <strong>Just a hint</strong>
            <p>I would recommend you to choose the highest note 😏</p>
          </div>
        </S.NoteHint>
      </S.Notes>
    </S.Wrapper>
  );
}
