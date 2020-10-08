import {Card, Text, Number} from './stats.style';

export const Stats = ({name, currentPeriod, lastPeriod}) => {
    return  (
        <Card>
            <Text>{name.replace(/_|-|\./g, ' ')}</Text>
            <Number>{currentPeriod}</Number>
            <Text>{lastPeriod}</Text>
        </Card>
    )

}