import {useSearchParams} from 'react-router-dom'

function Search(){
    var [query,setQuery]=useSearchParams()      //useState for queryParam
    var text=query.get("q")

    function filter(){
        setQuery({
            q:text,
            type:"Eggless"
        })
    }
    return(
        <div>
            <h1>Search Cakes for {text}</h1>
            <button onClick={filter}>Eggless Cakes</button>
        </div>
    )
}
export default Search