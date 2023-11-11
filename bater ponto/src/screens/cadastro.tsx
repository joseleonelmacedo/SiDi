import { useNavigate } from 'react-router-dom';
import '../login.css'
import { Button } from '@mui/material';

function cadastro() {
  const navigate = useNavigate();
  return (
  <><div id='conteudo'>
      <img id='logo' src="imagens/logo.png" alt="" />

      <br />

      <div id='links_login'>
        <ul><li><a href="/">Login</a></li></ul>
        <ul><li><a href="Cadastro">Cadastra</a></li></ul>
      </div>

      <div id='inputs_LoginCadastro'>
        <input type="text" placeholder='nome' /><br />
        <input type="text" placeholder='Email' />

      </div>

      <br />

      <Button type='button' variant='contained' id='botão_login'>
        <a href="cadastro_2" id='link'>next</a>
      </Button><br />

    </div><div id='detalhe'>

      </div></>
  )
}

export default cadastro