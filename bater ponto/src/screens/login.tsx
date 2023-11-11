import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import '../login.css'

function Login() {
  
    const navigate = useNavigate();
    return (
    <>
    
    <div id='conteudo'>
        <img id='logo' src="imagens/logo.png" alt="" />

        <br />

        <div id='links_login'>
          <ul><li><a href="">Login</a></li></ul>
          <ul><li><a href="Cadastro">Cadastra</a></li></ul>
        </div>

        <div id='inputs_LoginCadastro'>
          <input type="text" placeholder='Email' /><br />
          <input type="password" placeholder='Senha' />

        </div>

        <br />

        <Button type='button' variant='contained' id='botão_login'>
          <a href="home" id='link'>next</a>
        </Button><br />
        <div id='esqueci_senha'>
          <a href="">Esqueci Senha</a>
        </div>
      
      </div>
      
      <div id='detalhe'>
        
      </div>
      </>
    )
  }
  
  export default Login