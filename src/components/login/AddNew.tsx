import React from "react";
import { useState } from "react";
import "./addNew.css";
import FormInput from "./FormInput";

export const AddNew = () => {
  const [values, setValues] = useState({
    name: "",
    password: "",
    birthday: "",
    email: "",
    confirmPassword: "",
  });
  
  let nameError = "";
  let emailError = "";
  let birthdayError = "";
  let psError = "";
  let confirmError = "";

  const changeValue = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log("values username:" + e.target.value);
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    console.log("values username:" + values.name);
    return;
    console.log("values password:" + values.password);
  };

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      label: "ユーザー名：",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
      onChange: changeValue,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "メールアドレス：",
      required: true,
      onChange: changeValue,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "生年月日：",
      onChange: changeValue,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: `パスワードは以下の形で入力してください。・8-24桁・少なくとも大文字が一つ含まれる・少なくても以下の記号が一つ含まれる!`,
      label: "パスワード：",
      pattern: `^(?![0-9]+$)(?![a-zA-Z]+$)(?![0-9a-zA-Z]+$)(?![0-9\\W]+$)(?![a-zA-Z\\W]+$)[0-9A-Za-z\\W]{8,24}$`,
      required: true,
      onChange: changeValue,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "パスワード確認：",
      pattern: values.password,
      required: true,
      onChange: changeValue,
    },
  ];
  return (
    <div className="create-new-account">
      <div className="add-new-table">
        <h2 className="add-new-title">Create New Account</h2>
        {/* {inputs.map((input) => (
          <FormInput input={input} key={input.id}></FormInput>
        ))} */}
        <div className="formInput">
          <label>ユーザー名：</label>
          <input
            name="name"
            type="text"
            pattern="^[A-Za-z0-9]{3,16}$"
            placeholder="Name"
            required={true}
            onChange={changeValue}
          />
          <span>{nameError !== "" && nameError}</span>
        </div>
        <div className="formInput">
          <label>メールアドレス：</label>
          <input
            name="email"
            type="text"
            placeholder="email"
            required={true}
            onChange={changeValue}
          />
          <span>{emailError !== "" && emailError}</span>
        </div>
        <div className="formInput">
          <label>生年月日：</label>
          <input
            name="birthday"
            type="date"
            placeholder="birthday"
            required={true}
            onChange={changeValue}
          />
          <span>{birthdayError !== "" && birthdayError}</span>
        </div>
        <div className="formInput">
          <label>パスワード：</label>
          <input
            name="password"
            type="password"
            pattern="^(?![0-9]+$)(?![a-zA-Z]+$)(?![0-9a-zA-Z]+$)(?![0-9\\W]+$)(?![a-zA-Z\\W]+$)[0-9A-Za-z\\W]{8,24}$"
            placeholder="password"
            required={true}
            onChange={changeValue}
          />
          <span>{psError !== "" && psError}</span>
        </div>
        <div className="formInput">
          <label>パスワード確認：</label>
          <input
            name="confirmPassword"
            type="password"
            pattern={values.password}
            placeholder="confirmPassword"
            required={true}
            onChange={changeValue}
          />
          <span>{confirmError !== "" && confirmError}</span>
        </div>
        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
};

export default AddNew;
