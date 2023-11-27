import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

import InputPassword from "./InputPassword";

const SingIn = () => {
  let { setStep } = useContext(AuthContext);

  // Datos del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main>
      <h3>Hello, friend!</h3>
      <div className="card">
        <form autoComplete="off">
          <fieldset>
            <label htmlFor="email">email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
            <p className="error">Valid email required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="password">password</label>
            <InputPassword />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
            />
            <p className="error">Valid password required</p>
          </fieldset>
          <button type="submit">login</button>
          <div className="forgot" onClick={() => setStep("forgot")}>
            Forgot Password?
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
