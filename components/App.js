import {useEffect, useState} from 'react'
import FactContainer from './FactContainer';
import Header from "./Header";

function App() {
  const [limit, setLimit] = useState(5)
  const [facts, setFacts] = useState([])

  useEffect(()=>{
    fetch(`https://catfact.ninja/facts?limit=${limit}`)
    .then(r=>r.json())
    .then(facts=>setFacts(facts.data))
  }, [])
  // console.log(facts.length)
  return (
    <div>
      <Header/>
      <FactContainer catFacts={facts}/>
    </div>
  );
 
}

export default App;
