import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

import * as S from './styles';

export default function OKRs() {
  return (
    <S.Wrapper>
      <div className="text">
        <h4>OKR's</h4>
        <p>The goals and objectives of the team are measured.</p>
      </div>
      <S.Progress>
        <S.ProgressBar>
          <InView>
            {({ ref, inView }) => (
              <motion.div
                className="progress"
                ref={ref}
                initial={{ width: '15%' }}
                animate={inView ? { width: '75%' } : { width: '15%' }}
                transition={{ duration: 10, delay: 0.25 }}
              />
            )}
          </InView>
          <span>To revolutionize the user experience across all platforms</span>
        </S.ProgressBar>
        <S.Results>
          <li>
            <span>Increase customer satisfaction by 95%</span>
          </li>
          <li>
            <span>Hire an UX Engineer</span>
          </li>
        </S.Results>
      </S.Progress>
    </S.Wrapper>
  );
}
