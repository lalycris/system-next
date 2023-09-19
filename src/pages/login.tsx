import React, { use, useEffect } from "react";
import "./login.css";
//import { ClassNames } from '@emotion/react';
import Link from "next/link";
import router, { Router, useRouter } from "next/router";
import { useTheme } from "../contexts/themeContext";
import "../styles/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const router = useRouter();

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="main">
      
      <div className="button-theme">
      <button onClick={toggleTheme}>
                <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
            </button>
    </div>


      <div className="login">
        <div className="login-card">
          <img
            style={{
              width: "90px",
              height: "80px",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
            src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png"
            alt="Spotify"
          />

          <h2>Login</h2>

          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>

          <div>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
            />

            <Link href="/forgot-password">Esqueceu a senha?</Link>
          </div>

          <button>Entrar</button>
          <button onClick={() => router.push("createAccount")}>
            Cadastrar-se
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
