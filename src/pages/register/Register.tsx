import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import { api } from "../../service";
import './register.css';
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const handleClickRegister =(values:any) => {
        try{
            api.post("/registerP", values).then((Response: any) => {
                console.log(Response);
                if(Response){
                    navigate('/cadsucess');
                }
            });
        } catch(error){
            console.log(error)
        }     
    };

    const validationRegister = yup.object().shape({
        email: yup.string().email("E-mail invalido").required("Este campo é obrigatório"),
        senha: yup.string().min(8, "Senha invalida").required("Este campo é obrigatório"),
        confirm: yup.string().oneOf([yup.ref("senha")], "as senhas devem ser iguais").required("Este campo é obrigatório"),
        nome:   yup.string().required("este campo é obrigatório"),
        telefone: yup.string().required("este campo é obrigatório"),
        sexo: yup.string().required("este campo é obrigatório"),
        cpf: yup.string().required("este campo é obrigatório"),
        data_n: yup.date().required("este campo é obrigatório"),
    });

    return(
        <div >
                <div className="container">
                
                <Formik 
                onSubmit={handleClickRegister}
                validationSchema={validationRegister} 
                initialValues={{
                    email: undefined,
                    password: undefined,
                    nome: undefined,
                    telefone: undefined,
                    sexo: undefined,
                    cpf: undefined,
                    data_n: undefined
                }}>

                    
                <Form className="register-form">
                <div className="reg-image">
                <svg className="userIcontxt_reg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 5.33332C10.116 5.33332 5.33335 10.132 5.33335 16.0671C5.33335 17.7502 5.71738 19.3391 6.40059 20.7533C6.72092 21.4164 6.44308 22.2136 5.78002 22.5339C5.11696 22.8542 4.31977 22.5764 3.99945 21.9133C3.14508 20.1448 2.66669 18.1601 2.66669 16.0671C2.66669 8.67325 8.62922 2.66666 16 2.66666C23.3708 2.66666 29.3334 8.67325 29.3334 16.0671C29.3334 18.1601 28.855 20.1448 28.0006 21.9133C27.6803 22.5764 26.8831 22.8542 26.22 22.5339C25.557 22.2136 25.2791 21.4164 25.5994 20.7533C26.2827 19.3391 26.6667 17.7502 26.6667 16.0671C26.6667 10.132 21.8841 5.33332 16 5.33332Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3487 21.7659C21.3329 20.611 22.6667 18.4613 22.6667 16C22.6667 12.3181 19.6819 9.33332 16 9.33332C12.3181 9.33332 9.33335 12.3181 9.33335 16C9.33335 18.4613 10.6671 20.611 12.6514 21.7659C10.6105 22.3189 9.04916 23.3266 7.9167 24.3395C7.0796 25.0882 6.47829 25.8373 6.08313 26.4044C5.88505 26.6887 5.7372 26.9295 5.63607 27.105C5.58546 27.1928 5.54641 27.2645 5.51849 27.3173C5.50453 27.3438 5.49334 27.3655 5.48487 27.3822L5.47418 27.4035L5.47036 27.4113L5.46882 27.4144L5.46814 27.4158C5.46783 27.4164 5.46753 27.4171 6.66669 28L5.46753 27.4171C5.14559 28.0793 5.42149 28.8772 6.08376 29.1991C6.74424 29.5202 7.53957 29.2467 7.86321 28.5883L7.86397 28.5868L7.8764 28.5629C7.88976 28.5376 7.91299 28.4947 7.94643 28.4367C8.01342 28.3204 8.12077 28.1446 8.27108 27.9289C8.57267 27.496 9.04081 26.9118 9.69446 26.3271C10.989 25.1693 13.017 24 16 24C18.983 24 21.0111 25.1693 22.3056 26.3271C22.9592 26.9118 23.4274 27.496 23.729 27.9289C23.8793 28.1446 23.9866 28.3204 24.0536 28.4367C24.0871 28.4947 24.1103 28.5376 24.1236 28.5629L24.1361 28.5868L24.1368 28.5883C24.4604 29.2467 25.2558 29.5202 25.9163 29.1991C26.5786 28.8772 26.8545 28.0793 26.5325 27.4171L25.3334 28C26.5325 27.4171 26.5322 27.4164 26.5319 27.4158L26.5297 27.4113L26.5259 27.4035L26.5152 27.3822C26.5067 27.3655 26.4955 27.3438 26.4815 27.3173C26.4536 27.2645 26.4146 27.1928 26.364 27.105C26.2628 26.9295 26.115 26.6887 25.9169 26.4044C25.5217 25.8373 24.9204 25.0882 24.0833 24.3395C22.9509 23.3266 21.3896 22.3189 19.3487 21.7659ZM16 20C18.2092 20 20 18.2091 20 16C20 13.7909 18.2092 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" fill="white"/>
                </svg>
                </div>
                <h1>Registro</h1>
                <a href="/">Retornar a tela inicial</a>

                    <div >
                    <Field className="registerFIeld" name="nome" placeholder="Nome completo" />

                        <ErrorMessage 
                        component="span"
                        name="nome"
                        className="formError"/>

                        <Field name="telefone"  className="registerFIeld" placeholder="Telefone" />

                        <ErrorMessage 
                        component="span"
                        name="telefone"
                        className="formError"/>

                        <Field name="cpf" placeholder="CPF" className="registerFIeld"/>

                        <ErrorMessage 
                        component="span"
                        name="cpf"
                        className="formError"/>

                        <div className="radioGroup">
                            <p>Sexo</p>
                            <label>
                                <Field name="sexo" type="radio" value="M"/>
                                Masculino
                            </label>
                            <label>
                                <Field name="sexo" type="radio" value="F" />
                                Feminino
                            </label>
                        </div>
    
                        <ErrorMessage 
                        component="span"
                        name="sexo"
                        className="formError"/>

                        <Field name="data_n" type="date" className="registerFIeld"/>

                        <ErrorMessage 
                        component="span"
                        name="data_n"
                        className="formError"/>

                        <Field name="email" placeholder="Email" className="registerFIeld"/>

                        <ErrorMessage 
                        component="span"
                        name="email"
                        className="formError"/>

                        <p><Field name="senha" type="password" placeholder="Senha"  className="registerFIeld"/></p>

                        <ErrorMessage 
                        component="span"
                        name="senha"
                        className="formError"/>
                        
                        <p><Field name="confirm" placeholder="Confirmar Senha" className="registerFIeld"/></p>

                        <ErrorMessage 
                        component="span"
                        name="confirm"
                        className="formError"/>
                    </div>
                    <button type="submit">Registrar-se</button> ja possui uma conta? <a href='/login'>Realizar Login</a>
                </Form>
                </Formik>
                </div>

           
            </div>
    );
}

export default Register