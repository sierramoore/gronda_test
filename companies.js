const generateString = (length) => {
    let result = '';
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

const generateNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}
const generateKPI = () => {
    return {
        'current_period': generateNumber(100),
        'last_period': generateNumber(100)
    }
}
const generateCo = () => {
    const weekly_data = [];

    for (let i = 0; i <= 104; i++) {
        weekly_data.push({
            'active_source': generateKPI(),
            'weekly_active': generateKPI(),
            'nps': generateKPI()
        })
    }

    return {
        'name': generateString(6),
        'weekly_data': weekly_data
    }
}

//make array of 10 empty spaces and the indexes into a new array. map through that array to generate company
export const companies = [...Array(10).keys()].map(()=>(generateCo()));

