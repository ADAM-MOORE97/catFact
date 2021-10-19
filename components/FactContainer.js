import FactCards from "./FactCards";
import Search from "./Search";
import {useEffect, useState} from 'react'

const FactContainer = ({catFacts}) => {

const [filteredFact, setFilterFact] = useState(catFacts)
    
useEffect(()=>{
    setFilterFact(catFacts)
    // console.log('hey')
},[catFacts])

function search(e){
const filteredFact = catFacts.filter(fact=>{
    return fact.fact.toLowerCase().includes(e.target.value.toLowerCase())
} )
setFilterFact(filteredFact)
}
    return(
        <div>
            <Search handleSearch={search}/>
            {filteredFact.map((cat,i)=><FactCards key={i} number={i+1} fact={cat.fact}/>)}
        </div>
            
    )
    
}

export default FactContainer;