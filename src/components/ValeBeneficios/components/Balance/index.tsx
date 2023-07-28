import {
  CalendarIcon,
  CreditCardIcon,
  EyeClosedIcon,
  EyeIcon,
  LocationIcon,
  NoteIcon,
  UnlockIcon,
} from '@primer/octicons-react';
import { useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import Card from './../Card';

type BalanceProps = {
  theme: any;
};

import * as S from './styles';

const chartData = [
  {
    name: '8 jul',
    gasto: 5.76,
  },
  {
    name: '9 jul',
    gasto: 8.6,
  },
  {
    name: '10 jul',
    gasto: 14.59,
  },
  {
    name: '11 jul',
    gasto: 10.3,
  },
];

function formatCurrency(value: string | number | (string | number)[]): string {
  const currency = Number(value);
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'EUR',
  }).format(currency);
}

export default function Balance({ theme }: BalanceProps) {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <S.Wrapper>
      <S.Card css={{ gridArea: 'user', '@mobile': { order: 2 } }}>
        <S.User>
          <h1>Jonathan Felipe de Oliveira</h1>
          <ul>
            <li title="Location">
              <LocationIcon size={16} />
              Dublin/Ireland
            </li>
            <li title="User identification">
              <NoteIcon size={16} />
              123456789
            </li>
            <li title="Security code">
              <CreditCardIcon size={16} />
              1234
            </li>
            <li title="Joined at">
              <CalendarIcon size={16} />
              2023-07-09
            </li>
            <li title="Card status">
              <UnlockIcon size={16} />
              Unlocked
            </li>
          </ul>
        </S.User>
      </S.Card>

      <S.Card css={{ gridArea: 'evolution', '@mobile': { order: 3 } }}>
        <S.ExpensesEvolution>
          <ResponsiveContainer width="100%" height={130}>
            <AreaChart
              data={chartData}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="30%"
                    stopColor={theme.colors.vprimary.value}
                    stopOpacity={0.7}
                  />
                  <stop
                    offset="100%"
                    stopColor={theme.colors.vprimary.value}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={theme.colors.vtextSecondary.value}
              />
              <XAxis
                axisLine={false}
                tickMargin={15}
                tickSize={0}
                dataKey="name"
                stroke={theme.colors.vtextSecondary.value}
              />
              <YAxis
                axisLine={false}
                tickMargin={5}
                tickSize={5}
                stroke={theme.colors.vtextSecondary.value}
                width={50}
                tickFormatter={formatCurrency}
                allowDecimals
              />
              <Tooltip formatter={(value) => formatCurrency(value)} />
              <Area
                type="monotone"
                dataKey="gasto"
                stroke={theme.colors.vprimary.value}
                strokeWidth={5}
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </S.ExpensesEvolution>
      </S.Card>

      <S.Card css={{ gridArea: 'card', '@mobile': { order: 1 } }}>
        <S.Balance>
          <div className="balance-resume">
            <div>
              <p>Total balance</p>
              <p className="balance">
                {!showBalance && <span className="mask-balance" />}
                {formatCurrency(439.5)}
              </p>
              <p className="balance-diary">
                Daily balance:
                <b>
                  {!showBalance && <span className="mask-diary-balance" />}
                  {formatCurrency(29.3)}
                </b>
              </p>
            </div>
            <div className="card-actions">
              <button
                type="button"
                onClick={() => setShowBalance(!showBalance)}
                className="toggle-balance-visibility"
                title="Show/hide balance"
              >
                {showBalance ? (
                  <EyeClosedIcon size={32} />
                ) : (
                  <EyeIcon size={32} />
                )}
              </button>
            </div>
          </div>

          <Card />
        </S.Balance>
      </S.Card>
    </S.Wrapper>
  );
}
