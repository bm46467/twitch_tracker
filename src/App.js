import './App.css';
import Header from './components/Header'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TwitchStreamsGrid from './components/TwitchStreamsGrid';


function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState([])


  useEffect(() => {
    const fetchTwitchApiRequest = async () => {
      const result = await axios.get(`https://api.twitch.tv/helix/streams`, { headers: {
        "Client-ID": "ltcqektob8uwx5dewwxwsoqp0tpzld",
        "Authorization": `d8cobw22dkd2nxc27g0pzl9ul2xgw5`
      }})
      setItems(result.data.data)
      setIsLoading(false)
      console.log(result.data.data)
    }
  
    fetchTwitchApiRequest()
  }, [])

  return (
    <div className="container-fluid">
      <Header />
      <TwitchStreamsGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
