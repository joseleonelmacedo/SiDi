import { Link } from "react-router-dom"
import '../App.css'
import { Button } from '@mui/material';


function Navbar() {

    return (
      <nav id="links_Login">
        <Link id="#caixa_texto" to="/Login">login</Link>
        <Link to="/">cadastro</Link>
       
        <Link to="Cadastro2">
        <Button variant='contained' color='primary'>
        <p>next</p>
        </Button>
        </Link>
      </nav>
    )
  }
  
  export default Navbar