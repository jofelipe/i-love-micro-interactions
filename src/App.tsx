import { globalStyles } from '@/styles/global';
import {
  Eye,
  FileJs,
  Gauge,
  Link,
  PersonArmsSpread,
} from '@phosphor-icons/react';

import wc3Photo from './assets/w3c.jpg';

import AnimateOnScroll from '@/components/AnimateOnScroll';
import Avaliacao360 from '@/components/Avaliacao360';
import Avaliacao360Notes from '@/components/Avaliacao360/components/Notes';
import BoardDimensions from '@/components/BoardDimensions';
import ButtonLink from '@/components/ButtonLink';
import DeveloperSkill from '@/components/DeveloperSkill';
import Divider from '@/components/Divider';
import FigmaCursor from '@/components/FigmaCursor';
import FigmaText from '@/components/FigmaText';
import FitcardAgile from '@/components/Fitcard/Agile';
import FitcardData from '@/components/Fitcard/Data';
import FitcardOKRs from '@/components/Fitcard/OKRs';
import FitcardResearch from '@/components/Fitcard/Research';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import ValeBeneficios from '@/components/ValeBeneficios';
import VerticalSeparator from '@/components/VerticalSeparator';

import * as S from '@/styles/app';

function App() {
  globalStyles();

  return (
    <S.Main>
      <S.Container>
        <S.Header>
          <a href="https://jofelipe.com/" className="logo" target="_blank">
            Jonathan Felipe
          </a>
        </S.Header>

        <PageTitle />

        <S.Beginning>
          <div className="text">
            <h2>
              I believe in{' '}
              <FigmaText initialState={{ width: 110, height: 44 }} size="xs">
                Design
              </FigmaText>{' '}
              and <span className="code-text">{'<Development>'}</span> working
              together since 2012
            </h2>
            <p>
              My first opportunity in technology was at a marketing agency,
              where I started as a "Web Designer". Newbie. But I was 😂
            </p>
          </div>
          <div className="photo">
            <figure>
              <img src={wc3Photo} alt="Jonathan Felipe at W3C" />
              <figcaption>
                Me before speak about HTML5 Boilerplate at W3C Web Conference in
                2012 🤓
              </figcaption>
            </figure>
          </div>
        </S.Beginning>

        <S.CidadeReclama>
          <S.CidadeReclamaButton
            href="https://jofelipe.com/projeto/cidade-reclama"
            target="_blank"
            title="See the project at my portfolio"
          >
            Reclamar
          </S.CidadeReclamaButton>
          <div className="text">
            <p>
              One of my favourite works (even if it's dated) is{' '}
              <a
                href="https://jofelipe.com/projeto/cidade-reclama"
                target="_blank"
              >
                Cidade Reclama
              </a>
              . <br />
              I built the User Interface and Front-end with HTML5 and CSS3
              (which were new at that time).
              <br />I already focused on micro-interactions, such as this
              call-to-action button.
            </p>
          </div>
        </S.CidadeReclama>

        <VerticalSeparator height={168} />

        <AnimateOnScroll>
          <S.Developer>
            <S.TitleDescription>
              <small>and then...</small>I focused my career as a Developer
              <small>
                and the things I have learned, I carry with me to this day.
              </small>
            </S.TitleDescription>

            <div className="developer-skills">
              <DeveloperSkill
                icon={Eye}
                title="Pixel-perfect"
                description="Designers can trust me as a friend. BFF's."
              />
              <DeveloperSkill
                icon={Gauge}
                title="Performance"
                description="Beautiful. But fast. Really fast. As possible."
              />
              <DeveloperSkill
                icon={PersonArmsSpread}
                title="Acessibility"
                description="It has to be functional for everyone, even robots."
              />
              <DeveloperSkill
                icon={FileJs}
                title="JavaScript-Guru"
                description="Because we have new frameworks everyday."
              />
            </div>
          </S.Developer>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <VerticalSeparator height={168} />

          <S.Design>
            <h3>
              And in 2020 I had the opportunity to <em>Design</em> again
            </h3>
            <p>
              At Fitcard, I was hired to be a reference for Front-end within the
              technology sector, but I saw an opportunity to evaluate their
              products with UI Design as well.
            </p>
          </S.Design>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <S.Project>
            <AnimateOnScroll>
              <div className="project-description">
                <S.ProjectTitle project="valeBeneficios">
                  Vale Benefícios
                </S.ProjectTitle>
                <span className="project-type">
                  Web application - Dashboard
                </span>
                <p>
                  First, I made the redesign and front-end development of a
                  product aimed at over 100,000 employees who use Food and Meal
                  Vouchers benefits.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <BoardDimensions position="top" />

              <FigmaCursor>
                <ValeBeneficios />
              </FigmaCursor>

              <BoardDimensions position="bottom" />
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="project-description">
                <p>
                  The final result was widely approved by the product users,
                  being recognized as one of the best design solutions ever
                  implemented by the company until then.
                </p>
                <p>
                  This allowed for the creation of new opportunities for the UI
                  (User Interface) sector within Fitcard, and later on, a Design
                  Team.
                </p>
              </div>

              <ButtonLink
                href="https://jofelipe.com/projeto/vale-beneficios"
                target="_blank"
                icon={Link}
              >
                See the project at my portfolio
              </ButtonLink>
            </AnimateOnScroll>
          </S.Project>

          <Divider />
        </AnimateOnScroll>

        <AnimateOnScroll>
          <S.Project>
            <AnimateOnScroll>
              <div className="project-description">
                <S.ProjectTitle project="avaliacao360">
                  Avaliação 360
                </S.ProjectTitle>
                <span className="project-type">
                  Web application - Evaluation tool
                </span>
                <p>
                  Later on, I co-created with my favourite UX Designer from
                  Fitcard (there's only one),{' '}
                  <a
                    href="https://renanbonin.com/"
                    target="_blank"
                    title="Visit Renan's portfolio"
                  >
                    Renan Bonin
                  </a>
                  . We created together a web application for an 360-degree
                  evalution tool based on Management 3.0
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <BoardDimensions position="top" />

              <FigmaCursor>
                <Avaliacao360 />
              </FigmaCursor>

              <BoardDimensions position="bottom" />
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="project-description">
                <h4>
                  One of the projects that I am most proud of for two reasons:
                </h4>
              </div>

              <S.Avaliacao360Reasons>
                <div className="item">
                  <div className="item-number">
                    <span>01.</span>
                  </div>
                  <div className="item-text">
                    <p>
                      We were free to inovate and create since our client its
                      Fitcard for itself, and we could experiment new
                      technologies and test libraries like Styled Components and
                      Lottie for animations and micro-interactions. We also had
                      fun creating easter eggs hided on the application to
                      create buzz marketing.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="item-number">
                    <span>02.</span>
                  </div>
                  <div className="item-text">
                    <p>
                      With this web application, our squad leaders spend much
                      less time on repetitive and burocractic tasks creating
                      sheets, and could focus on metodology itself, creating
                      careers paths together with the people. With team members
                      engaged, the results were very quick.
                    </p>
                  </div>
                </div>
              </S.Avaliacao360Reasons>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <S.HideMobile>
                <span
                  className="project-type"
                  style={{ marginBottom: '1.6rem' }}
                >
                  The most important component
                </span>

                <FigmaCursor>
                  <Avaliacao360Notes />
                </FigmaCursor>

                <BoardDimensions position="bottom" />
              </S.HideMobile>

              <S.BlockQuote>
                Collaboration between designers and developers enhances the
                process and outcome of the project.{' '}
                <span className="author">Jonathan &amp; Renan</span>
              </S.BlockQuote>

              <ButtonLink
                href="https://jofelipe.com/projeto/avaliacao-360"
                target="_blank"
                icon={Link}
              >
                See the project at my portfolio
              </ButtonLink>
            </AnimateOnScroll>
          </S.Project>

          <Divider />
        </AnimateOnScroll>

        <AnimateOnScroll>
          <S.Project>
            <div className="project-description">
              <p>
                With these projects (and some more) delivering results to the
                company and adding value to our users, we were able to bring UX
                methodologies and processes to the Fitcard development
                environment.
              </p>
            </div>

            <S.TitleDescription>
              <small>and then...</small>The{' '}
              <span className="fitcard">Fitcard</span> Design Team was born
              <small>and Renan and I were responsible for its structure.</small>
            </S.TitleDescription>

            <S.FitcardTeam>
              <div className="research">
                <FitcardResearch />
              </div>
              <div className="data">
                <FitcardData />
              </div>
              <div className="okr">
                <FitcardOKRs />
              </div>
              <div className="agile">
                <FitcardAgile />
              </div>
            </S.FitcardTeam>

            <ButtonLink
              href="https://jofelipe.com/projeto/estruturacao-de-area-de-design"
              target="_blank"
              icon={Link}
            >
              Read the process at my portfolio
            </ButtonLink>
          </S.Project>

          <Divider />
        </AnimateOnScroll>

        <AnimateOnScroll>
          <S.EndTitle>And this is the end... or the beginning... ✨</S.EndTitle>
        </AnimateOnScroll>
      </S.Container>

      <Footer />
    </S.Main>
  );
}

export default App;
