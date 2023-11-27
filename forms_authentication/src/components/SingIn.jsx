import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

// import InputPassword from "./InputPassword";

const SingIn = () => {
  let { setStep } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerSubmit = (e) => {
    // Evita el envio de datos a un backend
    e.preventDefault();
    console.log("Sending dato to backend");
    console.log(`El usuario digito ${email} y ${password}`);
  };

  return (
    <main>
      <h3>Hello, friend!</h3>
      <div className="card">
        <form onSubmit={handlerSubmit} autoComplete="off">
          <fieldset>
            <label htmlFor="email">email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              autoFocus
            />
            <p className="error">Valid email required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="password">password</label>
            {/*<InputPassword />*/}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
            />
            <p className="error">Password is required</p>
          </fieldset>
          <button type="submit">login</button>
          <div className="forgot" onClick={() => setStep("forgot")}>
            Forgot Password
          </div>
        </form>
      </div>
      <p>
        Don&apos;t have an account?
        <span onClick={() => setStep("signup")}> Sign In</span>
      </p>
    </main>
  );
};

export default SingIn;
