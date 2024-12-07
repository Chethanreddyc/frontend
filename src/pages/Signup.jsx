import  { useState } from 'react';
import { Input } from '@nextui-org/react';
import Logo from '../assets/medic.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
 import { handleError, handleSuccess } from '../Utils';
export default function Login() {
  
  const navigate = useNavigate();
  const[signupinfo,setSignupInfo]=useState({
    name: '',
    email: '',
    password:'',
  })

  const handleChange =(e) =>{
    const{ name, value } = e.target;
    console.log(name, value);
    const copySignupInfo = { ...signupinfo};
    copySignupInfo[name]=value;
    setSignupInfo(copySignupInfo);
  }
  const handleSignup = async (e) => { 
    e.preventDefault();
    const {name, email, password } = signupinfo;
    if (!name || !email || !password){
      return handleError("details are required for login")
    }
try {
  const url = "http://localhost:8080/auth/signup";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupinfo) 
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json(); 
    const {success, message} = result;
    if(success){
      handleSuccess(message);
    setTimeout(() => {
        navigate('/login');
    }, 1000);
    }
    console.log(result);
} catch (err) {
    handleError(err); 
}
  }
  console.log('signupinfo->',signupinfo)
  return (
    <div className="flex h-screen justify-center items-center bg-light-green">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-md flex-grow"> 
        <img
          alt="Your Company"
          src={Logo} 
          className="mx-auto h-20 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up for your account
        </h2>

        <form onSubmit={handleSignup} className="space-y-6 mt-10">
          <div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input 
                type="text" 
                label="Username" 
                name="name" 
                required
                onChange={handleChange}
                value ={signupinfo.name}
              />
            </div>
          </div>

          <div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input 
              onChange={handleChange}
                type="email" 
                label="Email" 
                name="email" 
                required
                value ={signupinfo.email}
              />
            </div>
          </div>

          <div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input
              onChange={handleChange}
                label="Password"
                placeholder="Enter your password"
                name="password" 
                className="w-full"
                required
                value ={signupinfo.password}
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
              Sign up
            </button>
          </div>
        </form>
        <ToastContainer/>
        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{' '}
          <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}