import React, { useState } from "react";
import TextInput from "./TextInput";

export default function Form() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (field: keyof typeof formValues, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const clearAll = () => {
    setFormValues({ username: "", email: "", password: "" });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <TextInput
        label="Username"
        placeholder="Enter your username"
        value={formValues.username}
        onChange={(val) => handleChange("username", val)}
        helperText="Must be 8–20 characters."
        variant="outlined"
      />

      <TextInput
        label="Email"
        placeholder="Enter your email"
        value={formValues.email}
        onChange={(val) => handleChange("email", val)}
        variant="filled"
      />

      <TextInput
        label="Password"
        placeholder="Enter your password"
        value={formValues.password}
        onChange={(val) => handleChange("password", val)}
        password
        variant="ghost"
      />

      <button
        onClick={clearAll}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Clear All
      </button>
    </div>
  );
}
