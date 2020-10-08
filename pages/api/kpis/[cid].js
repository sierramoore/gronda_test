import { companies } from '../../../companies';

const calculateAverage = (company, startMonth, endMonth) => {
  const weeks = company.weekly_data.slice(4*startMonth, 4*endMonth);
  const runningSum = weeks.reduce((acc, curr)=>{
    acc.active_source.current_period += curr.active_source.current_period
    acc.active_source.last_period += curr.active_source.last_period
    acc.weekly_active.current_period += curr.weekly_active.current_period
    acc.weekly_active.last_period += curr.weekly_active.last_period
    acc.nps.current_period += curr.nps.current_period
    acc.nps.last_period += curr.nps.last_period
    return acc;
  },{
    active_source:{
      current_period: 0,
      last_period: 0
    },
    weekly_active:{
      current_period: 0,
      last_period: 0
    },
    nps: {
      current_period: 0,
      last_period: 0
    }
  })
  const length = (endMonth-startMonth)*4; //to get the average we divide by the amount of weeks sumed
  const averaged = {
    active_source:{
      current_period: Math.floor(runningSum.active_source.current_period/length),
      last_period: Math.floor(runningSum.active_source.last_period/length)
    },
    weekly_active:{
      current_period: Math.floor(runningSum.weekly_active.current_period/length),
      last_period: Math.floor(runningSum.weekly_active.last_period/length)
    },
    nps:{
      current_period: Math.floor(runningSum.nps.current_period/length),
      last_period: Math.floor(runningSum.nps.last_period/length)
    }
  }
  return averaged;
}

const calculatedKPI = (company, time) => {
  switch (time.time_unit) {
    case "MONTH": 
      return calculateAverage(company, time.time_unit_count,time.time_unit_count+1);
    case "QUARTER":
      return calculateAverage(company, time.time_unit_count*3, time.time_unit_count*3+3);
    case "YEAR":
      return calculateAverage(company, time.time_unit_count*12, time.time_unit_count*12+12);
    default:
      return undefined;
  }
}

export default (req, res) => {
  const { query: { cid } } = req;
  const timeframe = JSON.parse(req.body);
  const result = calculatedKPI(companies[cid], timeframe);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  /*
    We check the truthyness of result to see if it's is undefined, 
    if that's the case the response is an error
  */
  res.json({"data": result,
  "status": !!result?"ok":"error"});
}
