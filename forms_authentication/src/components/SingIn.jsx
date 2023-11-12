const SingIn = () => {
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
          <div className="forgot">Forgot Password</div>
        </form>
      </div>
      <p>
        Don&apos;t have an account? <span>Sing Up</span>
      </p>
    </main>
  );
};

export default SingIn;
