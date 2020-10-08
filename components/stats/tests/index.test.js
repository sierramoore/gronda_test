import {render} from '@testing-library/react';
import {Stats} from '../stats';

it('Should render properties given', () => {
  let isTrue = false;
  const {getByText} = render(
    <Stats name='name_a' currentPeriod='25' lastPeriod='12'/>
  );
  expect(getByText('name a')).toBeTruthy;
  expect(getByText('25')).toBeTruthy;
  expect(getByText('12')).toBeTruthy;
});



