import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Snackbar } from '@mui/material';



import '../conteudo.css'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function Home() {
  const [openEntrada, setOpenEntrada] = React.useState(false);
  const [openSaida, setOpenSaida] = React.useState(false);
  const handleOpenEntrada = () => {
    setOpenEntrada(true);
  };

  const handleCloseEntrada = () => {
    setOpenEntrada(false);
  };

  const handleOpenSaida = () => {
    setOpenSaida(true);
  };

  const handleCloseSaida = () => {
    setOpenSaida(false);
  };

  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const handleClick = () => {
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = (_event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleCloseSnackbar}>
        UNDO
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
      </IconButton>
    </React.Fragment>
  );


  
  return (
    <div className='Home'>
      <div id='barra_menu_TelaInicial'>

      <div id='perfil_home'>

          <div id='imagens_menu_Humburguer'>
          <div className="hamburger-container">
            <input className="checkbox" type="checkbox" id="hamburger-toggle" aria-label="Toggle Navigation"/>
            <label className="hamburger" htmlFor="hamburger-toggle">
            <img id='perfil' src="imagens/perfil.png" alt="" />
            </label>

            <div className="drawer">
            <label className="hamburger" htmlFor="hamburger-toggle">
            <img id='perfil2' src="imagens/perfil.png" alt="" />
            </label>
              <ul className="nav-list">
                <li className="nav-list-item"><a href="Configuracao"><img id='icones' src="imagens/icone_config.png" alt=""/> Configuração</a></li><br/>
                <li className="nav-list-item"><a href="/"><img id='icones' src="imagens/icone_sair.png" alt=""/> Sair</a></li>
              </ul>
            </div>
          </div>
          </div>

            <div id='informacões'>
            <p>NOME: <span> Gabriel Santos</span></p><br />
            <p>CODIGO DO FUNCIONARIO: <span>9876543</span></p>
            </div>
        </div>
 
      </div>

      <div id='conteudo_home'>
        <div id='slide'>
        
        </div>
        <br/>

        <div id='botoes_home'>
            <React.Fragment>
            <Button type='button' variant='contained' id='entrada' onClick={handleOpenEntrada}>Registrar Entrada </Button>
            <Modal
              open={openEntrada}
              onClose={handleCloseEntrada}
              aria-labelledby="entrada-modal-title"
              aria-describedby="entrada-modal-description"
            >
              <Box sx={{ ...style, minwidth: 200,maxWidth: 500 }}>
                <h2 id="child-modal-title">Registrar Entrada</h2><br />

                <div id='cod_funcionario'>
                <input type="text"  placeholder='digite o codigo do funcionario'/><br/><br/>
                </div>

                <label htmlFor="pick-one"><h4>Local</h4></label>
                <select id="pick-one">
                    <option value="Home-Office">Home-Office</option>
                    <option value="Empresa">Empresa</option>
                </select><br /><br />

                <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15800.161530914553!2d-34.939626!3d-8.0973644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2sbr!4v1699603166731!5m2!1spt-PT!2sbr" width="90%" height="300" style={{ border: '0' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>

              <Button type='button' variant='contained' id='botão_comfirm_home'onClick={() => {
              handleCloseEntrada();
              handleClick();
              }}>confirmar</Button>
              </Box>
            </Modal>
            <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            message="entrada registrada"
            action={action}
            />
            </React.Fragment>

            <React.Fragment>
            <Button type='button' variant='contained' id='saida' onClick={handleOpenSaida}> Registrar Saida </Button>
            <Modal
              open={openSaida}
              onClose={handleCloseSaida}
              aria-labelledby="saida-modal-title"
              aria-describedby="saida-modal-description"
            >
              <Box sx={{ ...style, minwidth: 200,maxWidth: 500 }}>
                <h2 id="child-modal-title">Registrar saida</h2><br />
                <div id='senha_sair'>
                <input  type="password" placeholder='digite sua senha'/>
                </div><br />
                <Button
        type='button'
        variant='contained'
        id='botão_comfirm_home'
        onClick={() => {
          handleCloseSaida();
          handleClick();
        }}
      >
        Confirmar
      </Button>
              </Box>
              
            </Modal>
            <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Saida registrada"
        action={action}
      />
            </React.Fragment>
        </div>
      </div>
    </div>
  )

  
}

export default Home