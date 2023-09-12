import React from 'react';
import './login.css';
import { ClassNames } from '@emotion/react';
import Link from 'next/link';


function Login() {
    return (
    <div className="login">
        <div className="login-card">
            <img style={{
                width: '90px', 
                height: '80px', 
                marginLeft: 'auto', 
                marginRight: 'auto', 
                display: 'block'}}

             src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png" alt="Spotify" />
            
            <h2>Login</h2>
            
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="Email" />
                </div>
                
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" placeholder="Senha" />
                   
                    <Link href="/forgot-password">Esqueceu a senha?</Link>
                </div>

                <button type="submit">Entrar</button>
                <button type="submit">Cadastrar-se</button>
            
        </div>
    </div>
        )
}

export default Login;