import {Container, ColHeader, Row, Col} from './table.style';
import {useState} from 'react';
export const Table = ({companies, callbackFn}) => {
    if(!companies || companies.length === 0){
        return <Container>Loading!</Container>
    }
    const [selected, setSelected] = useState(0);
    const handleClick = (value) => {
        setSelected(value);
        callbackFn(value);
    }
    const rows = companies.map((company, index)=>{
        if(selected === index){
            return (<Row selected key={index} >{company}</Row>)
            
        }
        return (<Row onClick={()=>handleClick(index)} key={index} >{company}</Row>)
    })
    return  (
        <Container>
            <Col>
                <ColHeader>Company name</ColHeader>
                {rows}
            </Col>
        </Container>
    )
}