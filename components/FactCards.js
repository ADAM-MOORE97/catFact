
const FactCards = ({fact, number}) =>{
  let facts=[fact]
  
    return(
        <div style={{textAlign:'center'}}>
            <h2>Fact#{number}</h2>
            <p>{fact}</p>
        </div>
    )
}

export default FactCards;