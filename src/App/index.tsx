import axios from 'axios';
import React, {useState, useEffect} from 'react';
import '../App.css';
import {Table} from '../Models/table'
import {CustomTable} from './Table/index'

function App() {
  const [data, setSData] = useState<Table[]>([])

  useEffect(() => {
    async function fetchData(){
      const response = await axios.get<Table[]>('https://jsonplaceholder.typicode.com/comments');
      setSData(response.data)
    }

    fetchData()
  }, [])

  return (
    <div className="App">
      <CustomTable data={data} />
    </div>
  );
}

export default App;
