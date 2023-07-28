import CurrencyIcon from './currency';
import RestaurantIcon from './restaurant';

import * as S from './styles';

function formatCurrency(value: string | number | (string | number)[]): string {
  const currency = Number(value);
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'EUR',
  }).format(currency);
}

export default function Transactions() {
  return (
    <S.Wrapper>
      <h3>Latest transactions</h3>

      <S.TransactionsList>
        <S.TransactionItem>
          <div className="name">
            <div className="ico">
              <RestaurantIcon />
            </div>
            <h4>31 Lennox</h4>
          </div>
          <div className="date">July 11th at 01:01 pm</div>
          <div className="amount">{formatCurrency(10.3)}</div>
        </S.TransactionItem>

        <S.TransactionItem>
          <div className="name">
            <div className="ico">
              <RestaurantIcon />
            </div>
            <h4>L'Ecrivain</h4>
          </div>
          <div className="date">July 10th at 12:32 am</div>
          <div className="amount">{formatCurrency(14.59)}</div>
        </S.TransactionItem>

        <S.TransactionItem>
          <div className="name">
            <div className="ico">
              <RestaurantIcon />
            </div>
            <h4>Greenhouse</h4>
          </div>
          <div className="date">July 9th at 12:10 am</div>
          <div className="amount">{formatCurrency(8.6)}</div>
        </S.TransactionItem>

        <S.TransactionItem credit>
          <div className="name">
            <div className="ico">
              <CurrencyIcon />
            </div>
            <h4>Credit</h4>
          </div>
          <div className="date">July 9th at 00:00 am</div>
          <div className="amount">{formatCurrency(350)}</div>
        </S.TransactionItem>

        <S.TransactionItem>
          <div className="name">
            <div className="ico">
              <RestaurantIcon />
            </div>
            <h4>Chapter One</h4>
          </div>
          <div className="date">July 8th at 11:52 am</div>
          <div className="amount">{formatCurrency(5.76)}</div>
        </S.TransactionItem>
      </S.TransactionsList>
    </S.Wrapper>
  );
}
