import App from '../App.tsx'
import Home from '../screens/home.tsx';
import Cadastro from '../screens/cadastro.tsx';
import Cadastro2 from '../screens/Cadastro_2.tsx';
import Configuracao from '../screens/configuracao.tsx';
import Login from '../screens/login.tsx';

import { Suspense } from "react";
import { CircularProgress } from "@mui/material";
import { Route,BrowserRouter,Routes as Switch} from 'react-router-dom';

function Routes(){
    return (
        <BrowserRouter>
        <Suspense fallback={<CircularProgress />}>
            <Switch>

                <Route path={"/"} element={<Login/>}/>
                <Route path={"Cadastro"} element={<Cadastro/>}/>
                <Route path={"Cadastro_2"} element={<Cadastro2/>}/>
                <Route path={"Home"} element={<Home/>}/>
                <Route path={"Configuracao"} element={<Configuracao/>}/>

            </Switch>
        </Suspense>
        </BrowserRouter>
    );
}
 export default Routes;


