
const Search = ({handleSearch})=>{
    return(
        <div style={{textAlign: 'right'}}>
            Search: <input onChange={handleSearch}  type='search' placeholder='Search a Fact!'></input>
        </div>
    )
}
export default Search;