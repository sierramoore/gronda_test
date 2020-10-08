import { DropDownContainer, DropDownHeader, DropDownList, ListItem } from './dropdown.style';
import { useState } from 'react';

export const DropDown = ({ options, callbackFn }) => {
    const initialState = !!options ? options[0].value : null

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(initialState);

    const toggling = () => setIsOpen(!isOpen);
    
    const onOptionClicked = (option) => {
        if(!!callbackFn) callbackFn(option.value);
        setSelectedOption(option);
        setIsOpen(false);
    };
    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggling}>
                {selectedOption.text || options[0].text}
            </DropDownHeader>
            {isOpen && (
                <DropDownList>
                    {options.map(option => (
                        <ListItem onClick={() => onOptionClicked(option)} key={Math.random()}>
                            {option.text}
                        </ListItem>
                    ))}
                </DropDownList>
        
            )}
        </DropDownContainer>
    );
}