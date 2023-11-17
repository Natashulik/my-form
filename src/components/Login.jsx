import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";

import { useSelector, useDispatch } from "react-redux";
import { setEmail, setPassword, setIsError } from "../redux/loginSlice";

import { fetchLogin } from "../helpers/fetchLogin";

function Login() {
  const email = useSelector((state) => state.login.email);
  const password = useSelector((state) => state.login.password);
  const isError = useSelector((state) => state.login.isError);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await fetchLogin(email, password);
      console.log(data);
      if (!data.token) {
        throw new Error(data.message);
      } else {
        localStorage.setItem("token", data.token);
        navigate("/result");
      }
    } catch (error) {
      console.log(error.message);
      dispatch(setIsError(true));
    }
  };
  return (
    <div className="login_wrapper">
      <img src={logo} alt="logo" className="logo" />
      <h3 className="form_title">Вход</h3>

      <form onSubmit={(event) => handleSubmit(event)} className="login_form">
        <div className="login_block">
          <p className="field_name">Эл.почта</p>
          <input
            type="email"
            className="log_input"
            value={email}
            onChange={(event) => dispatch(setEmail(event.target.value))}
          />
        </div>

        <div className="password_block">
          <p className="field_name"> Пароль</p>
          <input
            type="password"
            className="password_input"
            value={password}
            onChange={(event) => dispatch(setPassword(event.target.value))}
          />
        </div>

        <button type="submit" className="button_login">
          Войти
        </button>
      </form>

      <div className="redirect_block">
        <span>Нет аккаунта? </span>
        <Link to="/register" className="redirect_link">
          Создать аккаунт
        </Link>
      </div>

      <div className="error_block">
        {isError && (
          <p className="error-message"> Неверные эл.почта или пароль!</p>
        )}
      </div>
    </div>
  );
}

export default Login;
