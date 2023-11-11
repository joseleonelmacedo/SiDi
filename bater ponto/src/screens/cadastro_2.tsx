import { useNavigate } from 'react-router-dom';
import '../login.css'
import { Button } from '@mui/material';

function Cadastro2() {
  return (
  <><div id='conteudo'>
      <img id='logo' src="imagens/logo.png" alt="" />

      <br />

      <div id='links_login'>
        <ul><li><a href="/">Login</a></li></ul>
        <ul><li><a href="Cadastro">Cadastra</a></li></ul>
      </div>

      <div id='inputs_LoginCadastro'>
        <input type="password" placeholder='Senha' /><br />
        <input type="password" placeholder='Confirmar Senha' />

      </div>

      <br />

      <Button type='button' variant='contained' id='botão_login'>
      <a href="home" id='link'><p>terminar</p></a>
      </Button><br />

    </div><div id='detalhe'>

      </div></>
  )
}

export default Cadastro2