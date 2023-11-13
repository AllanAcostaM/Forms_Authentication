import { useState } from "react";
import AuthContext from "./context/AuthContext";

import SingIn from "./components/SingIn";
import SingUp from "./components/SingUp";
import ForgotPassword from "./components/ForgotPassword";

const App = () => {
  const [step, setStep] = useState("forgot");

  return (
    <AuthContext.Provider value={{ step, setStep }}>
      <div className="container">
        {step === "signin" && <SingIn />}
        {step === "signup" && <SingUp />}
        {step === "forgot" && <ForgotPassword />}
      </div>
    </AuthContext.Provider>
  );
};

export default App;
