import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
    let navigate = useNavigate();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            /* Du är inloggad */
            setIsAuth(true);
            /* Efter du är inloggad skicka användaren till home sidan */
            navigate("/");
        });
    };
    return (
        <div className="loginPage">
            <p>Logga In Med Google För Att Fortsätta</p>
            <button
                className="login-with-google-btn"
                onClick={signInWithGoogle}
            >
                Logga in med Google
            </button>
        </div>
    );
}

export default Login;
