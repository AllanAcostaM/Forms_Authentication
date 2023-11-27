import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const InputPassword = () => {
  const [type, setType] = useState("password");
  const [show, setShow] = useState(false);

  const switchVisibility = (visivility) => {
    setShow(visivility);
    setType(visivility ? "text" : "password");
  };

  return (
    <div className="input_password">
      <input type={type} />
      {!show && <AiOutlineEye className="password_icon" onClick={() => switchVisibility(true)} />}
      {show && (
        <AiOutlineEyeInvisible className="password_icon" onClick={() => switchVisibility(false)} />
      )}
    </div>
  );
};

export default InputPassword;
