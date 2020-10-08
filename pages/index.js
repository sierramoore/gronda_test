import Head from 'next/head'
import { Wrapper, Container } from '../styles/index.style';
import { Stats } from '../components/stats/stats';
import { DropDown } from '../components/dropdown/dropdown';
import { Table } from '../components/table/table';
import { compaines } from '../companies';
import {useState} from 'react';

export default function Home({ data }) {
  const [company, setCompany] = useState(0);
  const [filter, setFilter] = useState({
    time_unit: "MONTH",
    time_unit_count: 0
  });
  const [kpis, setKPIs] = useState(data.kpis.data);
  
  const stats = Object.entries(kpis).map(([key, value]) => (<Stats key={key} name={key} currentPeriod={value.current_period} lastPeriod={value.last_period} />))

  const options = [{
    text: "This Month",
    value: {
      time_unit: "MONTH",
      time_unit_count: 0
    }
  },
  {
    text: "Last Month",
    value: {
      time_unit: "MONTH",
      time_unit_count: 1
    }
  },
  {
    text: "This Year",
    value: {
      time_unit: "YEAR",
      time_unit_count: 0
    }
  },
  {
    text: "Last Year",
    value: {
      time_unit: "YEAR",
      time_unit_count: 1
    }
  },
  {
    text: "This Quarter",
    value: {
      time_unit: "QUARTER",
      time_unit_count: 0
    }
  },
  {
    text: "Last Quarter",
    value: {
      time_unit: "QUARTER",
      time_unit_count: 1
    }
  }
  ];
  const fetchKPIs = async (cid, filter) => {
    const resKPIs = await fetch(`http://localhost:3000/api/kpis/${cid}`,{
      method: 'POST',
      header: {'Content-Type': 'application/json'},
      body: JSON.stringify(filter)
    });
    setKPIs((await resKPIs.json()).data);
  };
  const fetchFilter = async (filter) => {
    setFilter(filter);
    await fetchKPIs(company, filter);
  };
  const changeCompany = async (cid) => {
    setCompany(cid);
    await fetchKPIs(cid, filter);
  };
  return (
    <Wrapper>
        <Head>
          <title>KPIs</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

      <Container>
        {stats}
        <DropDown options={options} callbackFn={(filter)=>(fetchFilter(filter))} />
      </Container>
      <Table companies={data.companies.data} callbackFn={(cid)=>changeCompany(cid)} />
    </Wrapper>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API. defualt 1st company in list
  const resKPIs = await fetch('http://localhost:3000/api/kpis/0',{
    method: 'POST',
    header: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      time_unit: "MONTH",
      time_unit_count: 0
    })
  })
  const resCompanies = await fetch('http://localhost:3000/api/companies',{
    method: 'GET',
    header: {'Content-Type': 'application/json'}
  })
  const data = {
    kpis: await resKPIs.json(),
    companies: await resCompanies.json()
  };

  // Pass data to the page via props
  return { props: { data } }
}