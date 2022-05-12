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

  const fetchAddNewAccount = () => {

  }

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      label: "名前：",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "メールアドレス：",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "生年月日：",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "パスワード：",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
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
    },
  ];
  return (
    <div className="create-new-account">
      <div className="add-new-table">
        <h2 className="add-new-title">Create New Account</h2>
        {inputs.map((input) => (
          <FormInput input={input}></FormInput>
        ))}
        <button onClick={fetchAddNewAccount}>Submit</button>
      </div>
    </div>
  );
};

export default AddNew;
