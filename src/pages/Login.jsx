import React, { useState } from 'react';
import { Input } from '@nextui-org/react';
import Logo from '../assets/medic.jpg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLogin = (event) => {
    event.preventDefault();
    
    if (email !== "" && password !== "") {
      navigate('/home'); 
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-light-green">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-md flex-grow"> 
        <img
          alt="Your Company"
          src={Logo} 
          className="mx-auto h-20 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>

        <form onSubmit={handleLogin} className="space-y-6 mt-10">
          <div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input 
                type="email" 
                label="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input
                label="Password"
                placeholder="Enter your password"
                type={isVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                required
              />
            </div>
          </div>

          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}