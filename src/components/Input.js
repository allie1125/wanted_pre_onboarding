import React, { useState, useEffect } from "react";

const Input = () => {
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const { email, password } = userInput;
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailInputEmpty, setIsEmailInputEmpty] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  useEffect(() => {
    // console.log(userInput);
    setIsEmailInputEmpty(checkEmailInputEmpty);
    setIsEmailValid(checkEmailValidation);
  }, [email]);

  const checkEmailInputEmpty = () => {
    if (email.length <= 0) {
      return true;
    }
    return false;
  };

  const checkEmailValidation = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      //   console.log(true);
      return true;
    }
    // console.log(false);
    return false;
  };

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input_box">
      <h2>4. Input</h2>
      <ul>
        <li>
          <span>E-mail</span>
          <div className="input_line">
            <input type="text" onChange={(e) => onChangeInput(e)} name="email" value={email} placeholder="E-mail" />
            <span>{isEmailInputEmpty ? "" : isEmailValid ? "⭕️" : "❌"}</span>
          </div>
        </li>
        <li>
          <span>Password</span>
          <div className="input_line">
            <input type={showPassword ? "text" : "password"} onChange={onChangeInput} name="password" value={password} placeholder="Password" />
            <span onClick={onClickShowPassword}>{showPassword ? "숨김" : "보기"}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Input;
