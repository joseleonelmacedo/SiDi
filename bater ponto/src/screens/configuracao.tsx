

import '../conteudo.css'


function Configuracao() {
  
  return (
    <div className='Home'>
      <div id='barra_menu_TelaInicial'>
      <div id='icone_home'>
          <a href="Home"><img src="imagens/icone_home.png" alt="" /></a>
        </div>
        
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
                <li className="nav-list-item"><a href="#"><img id='icones' src="imagens/icone_config.png" alt=""/> Configuração</a></li><br/>
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
      <div id='iconHome'>
          <img src="imagens/iconHome.png" alt="" />
      </div>
      <div id='conteudo_config'>

        <h1>Configurações da conta</h1>
        <br />
        <hr />
        
        <div id='nome_config'>
            <div><h3>nome:</h3> <p>cosimaj857@mainmile.com</p></div>
        </div><br />

        <div id='email_config'><div>
            <h3>email:</h3> cosimaj857@mainmile.com</div>
        </div><br />
        
        <hr />
        <br />
      
      

      </div>
    </div>
  )

  
}

export default Configuracao