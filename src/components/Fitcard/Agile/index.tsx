import * as S from './styles';

export default function Agile() {
  return (
    <S.Wrapper>
      <div className="text">
        <h4>Agile environment</h4>
        <p>We use Scrum and Kanban processes to organize our tasks.</p>
      </div>
      <S.KanBan>
        <S.KanBanColumn step="backlog">
          <header>Backlog</header>
          <div className="cards">
            <S.Card>
              <span className="title">Update the onboarding text</span>
              <span className="team">Design team</span>
            </S.Card>
          </div>
        </S.KanBanColumn>

        <S.KanBanColumn step="doing">
          <header>Doing</header>
          <div className="cards">
            <S.Card>
              <span className="title">
                Create prototype for new functionality
              </span>
              <span className="team">Development team</span>
            </S.Card>
          </div>
        </S.KanBanColumn>

        <S.KanBanColumn step="done">
          <header>Done</header>
          <div className="cards">
            <S.Card done>
              <span className="title">
                Insert quantitative research on the website
              </span>
              <span className="team">Design team</span>
            </S.Card>
          </div>
        </S.KanBanColumn>
      </S.KanBan>
    </S.Wrapper>
  );
}
