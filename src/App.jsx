

import * as React from 'react';
import Home from './pages/Home'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Filter from './components/Filter';

async function getData(){
  const endpoint = `https://digiafeassignment.onrender.com/`;

  let res = await fetch(endpoint, {
    method: "GET",
    headers: {
      'Content-type': 'application/json'
    }
  });

  res = await res.json();
  console.log(res);

  return res;

}


function App() {
  
  const [value, setValue] = React.useState('1');
  const [data, setData] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [filter, setFilter] = React.useState({
    subscription: false,
    burner: false
  })

  React.useEffect(() => {
    if(data.length === 0){
      getData()
      .then(val => setData(val))
      .catch(err => console.log(err));
    }

  }, [data])

  // console.log(data);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // console.log(filter);

  return (
    <>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Your" value="1" />
            <Tab label="All" value="2" />
            <Tab label="Blocked" value="3" />
          </TabList>

          <div className='flex mb-2 mt-4' style={{flexDirection: "row-reverse"}}>
            <Filter setInput={setInput} setFilter={setFilter}/>
          </div>
        </Box>

        <TabPanel value="1"><Home data={data} name={input} filter={filter} status={"active"} /></TabPanel>
        <TabPanel value="2"><Home data={data} name={input} filter={filter} status={"All"}/></TabPanel>
        <TabPanel value="3"><Home data={data} name={input} filter={filter} status={"blocked"}/></TabPanel>
      </TabContext>
      
    </>
  )
}

export default App
