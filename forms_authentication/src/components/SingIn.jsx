import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const SingIn = () => {
  let { setStep } = useContext(AuthContext);
  return (
    <main>
      <h3>Hello, friend!</h3>
      <div className="card">
        <form autoComplete="off">
          <fieldset>
            <label htmlFor="email">email</label>
            <input type="email" id="email" autoFocus />
            <p className="error">Valid email required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="password">password</label>
            <input type="password" id="password" />
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
        <span onClick={() => setStep("signup")}>Sign In</span>
      </p>
    </main>
  );
};

export default SingIn;
