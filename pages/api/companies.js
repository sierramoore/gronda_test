import {companies} from '../../companies';

export default (req, res) => {
    res.json({data:companies.map((company)=>company.name)});
}