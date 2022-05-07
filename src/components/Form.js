import { useState } from "react";

export const Form2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch("Backendurl", {
      method: "POST",
      body: JSON.stringify(formData)
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>

      <input
        type="text"
        onChange={handleChange}
        // value={formData.name}
        name="name"
        className="Ainput"
        placeholder="Enter Your Name"
        id="name"
      />
      <br />

      <label>Email:</label>

      <input
        type="text"
        onChange={handleChange}
        // value={formData.email}
        className="Ainput"
        placeholder="Enter Your Email"
        id="email"
      ></input>
      <br />

      <label>Password:</label>

      <input
        type="password"
        onChange={handleChange}
        //  value={formData.password}
        className="Ainput3"
        placeholder="Enter Your Password"
        id="password"
      ></input>

      <p className="Apara">
        By “logging in to KFC”, you agree to our <b>Privacy Policy</b> and{" "}
        <b>Terms & Conditions</b>.
      </p>

      <input type="submit" className="button-27" value="Sign Up"></input>

      <p className="Aorpara">or</p>
      <button className="Abtn2">Skip, Continue As Guest</button>
    </form>
  );
};
