import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bcrypt, { hash } from 'bcryptjs';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    var salt = await bcrypt.genSalt(10);
    var password = await bcrypt.hash(formData.password, salt);
    const updatedFormData = {
        ...formData,
        password: password
    }
    axios
        .post("http://localhost:5500/api/users", updatedFormData)
        .then((response) => {
            console.log("Success:", response.data);
            navigate("/login"); // Redirect to login after signup
        })
        .catch((error) => {
            alert(JSON.stringify(error.response.data));
            console.error("Error:", error);
        });
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Signup</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your phone"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Signup
        </button>
      </form>
      <p className="mt-4 text-sm text-center text-gray-600">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default Signup;
