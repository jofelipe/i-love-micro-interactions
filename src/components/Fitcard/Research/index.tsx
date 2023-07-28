import { X } from '@phosphor-icons/react';
import {
  addDays,
  endOfMonth,
  format,
  isPast,
  isSameDay,
  startOfMonth,
} from 'date-fns';

import * as S from './styles';

export default function Research() {
  const activeDate = new Date();

  const todayCheck = (
    <svg
      className="is-today"
      viewBox="0 0 102 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.5004 11.0003C18.5004 13.9997 9.31053 23.9596 6.55563 28.0001C1.31805 35.6819 1.4447 44.2775 2.00044 52.9997C2.41458 59.4997 3.45832 65.9471 7.50044 70.9997C12.4561 77.1943 14.2957 79.5307 20.389 84.4446C29.5481 91.831 50.7092 94.558 61.4445 90.7779C74.5606 86.1596 85.9869 80.8405 92.0556 67.9446C98.3308 54.6097 104.163 38.5927 96.5556 24.2223C88.6898 9.36475 71.5 5.99979 59 3.5C40.5 1.99984 31 0.499788 9.00044 11.4997"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );

  const getDates = () => {
    const startDate = startOfMonth(activeDate);
    const endDate = endOfMonth(activeDate);

    const days = [];

    let currentDate = startDate;

    while (currentDate <= endDate) {
      days.push(
        <S.Day
          key={String(currentDate)}
          past={isPast(currentDate) && !isSameDay(currentDate, new Date())}
        >
          <div className="day-name">{format(currentDate, 'iiii')}</div>
          <div className="day-number">
            {isPast(currentDate) && !isSameDay(currentDate, new Date()) && (
              <X className="is-past" />
            )}
            {isSameDay(currentDate, new Date()) && todayCheck}
            {format(currentDate, 'd')}
          </div>
        </S.Day>
      );
      currentDate = addDays(currentDate, 1);
    }

    return (
      <div className="days" style={{ width: days.length * 148 }}>
        {days}
      </div>
    );
  };

  return (
    <S.Wrapper>
      <div className="text">
        <h4>From 270 to 60 days of development</h4>
        <p>
          After a UX Research process, we reduced 210 days of development by
          adapting a company's web product for mobile devices using responsive
          design, instead of developing a native application.
        </p>
      </div>
      <S.Calendar>
        <div className="marquee">{getDates()}</div>
      </S.Calendar>
    </S.Wrapper>
  );
}
