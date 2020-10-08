import {fireEvent, render} from '@testing-library/react';
import {Table} from '../table';

it('Should return a loading screen with an empty company array', () => {
  const {getByText} = render(
    <Table  companies={[]} callbackFn={()=>(isTrue=true)} />
  );
  expect(getByText('Loading!')).toBeTruthy;
});

it('Table, check starts selected first option, and change when  click', () => {
  let isTrue = false;
  const {getByText} = render(
    <Table  companies={['company_a','company_b','company_c']} callbackFn={()=>(isTrue=true)} />
  );
  //console.log(queryByLabelText('company_a'));
  expect(getByText('company_a').selected).toBeTruthy;
  expect(getByText('company_b').selected).toBeFalse;

  fireEvent.click(getByText('company_b'));
  expect(getByText('company_b').selected).toBeTruthy;
  expect(getByText('company_a').selected).toBeFalse;
  
  expect(isTrue).toBeTruthy();
});

