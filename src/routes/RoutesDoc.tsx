import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import LogedHomePage from "../pages/LogedHomePage/LogedHomePage";
import Login from "../pages/Login/Login";
import BoletimIndex from "../pages/boletim de ocorrencia/boletimindex";
import AcidenteIndex from "../pages/boletimAcidente/acidenteIndex";
import CadSucess from "../pages/cadSucess/CadSucess";
import Register from "../pages/register/Register";
import RouboIndex from "../pages/boletimRoubo/rouboIndex";


const RoutesDoc = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={ <Home />} path="/"/>
                <Route element={ <Login /> } path="/login" />
                <Route element = { <Register /> } path="/register" />
                <Route element={<LogedHomePage />} path="/sesstrue"/>
                <Route element={<CadSucess />} path="/cadsucess" />
                <Route element={<BoletimIndex />} path="/boletimocc" />
                <Route element={<AcidenteIndex />} path="/acidente"/>
                <Route element={<RouboIndex />} path="/roubo"/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesDoc