import {fireEvent, render} from '@testing-library/react';
import {DropDown} from '../dropdown';

it('Should change to selected option, show the name and run callbackFn with value', () => {
  let isTrue = false;
  const {getByText, getAllByText, queryByText} = render(
    <DropDown options={[{text:'option 1', value: 'a'},{text:'option 2', value: 'b'},{text:'option 3', value: 'c'}]} 
    callbackFn={()=>(isTrue=true)}
    />
  );
  fireEvent.click(getByText('option 1'));
  //when clicked we should  see every option
  expect(getAllByText('option 1')).toBeTruthy;
  expect(getByText('option 2')).toBeTruthy;
  expect(getByText('option 3')).toBeTruthy;
  //when we click option 2 we expect the callbackFn to have been run  and the option 2 text showing only
  fireEvent.click(getByText('option 2'));
  expect(queryByText('option 1')).toBeFalse;
  expect(getByText('option 2')).toBeTruthy;
  expect(queryByText('option 3')).toBeFalse;
  expect(isTrue).toBeTruthy;
});



