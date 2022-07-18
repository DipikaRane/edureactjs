import {Link} from 'react-router-dom';
export default function Navbar(props){
  var isloggedin=props.isloggedin
    var myName = {
      name1: "Designs",
      name2: "Flavors"
    }
    var myTab={
      taste1:"Fruit Cake",
      taste2:"Vanila Kids",
      taste3:"Young Chocolate"
    }
    var searchText
    function getSearchText(e){
      console.log(e.target.value)
      searchText=e.target.value
    }
    function searchCake(e){
      if(searchText){
        alert(searchText)
      }      
    }
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">The Cake Studio</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/home" class="nav-link active" aria-current="page" href="#Home">{myName.name1}</Link>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#Home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {myName.name2}
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link to="/cake" class="dropdown-item" href="#Home">{myTab.taste1}</Link></li>
                    <li><a class="dropdown-item" href="#Home">{myTab.taste2}</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="#Home">{myTab.taste3}</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#Home" tabindex="-1" aria-disabled="true">Cup-Cakes</a>
                </li>
              </ul>
              <form class="d-flex">
                <input onChange={getSearchText} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button onClick={searchCake}class="btn btn-outline-success" type="submit" >Search</button>
                {!isloggedin && <button className="btn btn-outline-success" style={{marginLeft:'3px'}}>Login</button>}
                {isloggedin && <button className="btn btn-outline-success" style={{marginLeft:'3px'}}>Logout</button>}
              </form>
            </div>
          </div>
        </nav>
        </>
    )
}