import {useParams} from "react-router"
function CakeDetails(){
    var params=useParams()
    var cakeid=params.cakeid
    return(
        <h1>Details for {cakeid} this page </h1>
    )
}
export default CakeDetails