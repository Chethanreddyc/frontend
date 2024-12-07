import  { useState } from 'react';
import { Input } from '@nextui-org/react';
import Logo from '../assets/medic.jpg';
import { Link } from 'react-router-dom';

export default function Login() {
  const [signupInfo, setSignupInfo] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [isVisible] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;

    // Create a copy of the current signupInfo
    const copySignupInfo = {
      ...signupInfo
    };

    // Update the specific field
    copySignupInfo[name] = value;

    // Set the updated signupInfo
    setSignupInfo(copySignupInfo);

    // Log the updated signupInfo
    console.log('signupInfo ->', copySignupInfo);
  };

  const handleSignup = (event) => {
    event.preventDefault();

    const signupInfo = { name, email, password }; // Assuming these variables are defined somewhere
    const { name, email, password } = signupInfo;

    // Check if any of the required fields are missing
    if (!name || !email || !password) {
        return handleError('Name, email, and password are required');
    }

    // Proceed with signup logic (e.g., API call)
    // ...
};

const handleError = (message) => {
    console.error(message);
    alert(message); // Display the error message to the user
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
          Sign up for your account
        </h2>

        <form onSubmit={handleSignup} className="space-y-6 mt-10">
          <div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input 
                type="text" 
                label="Username" 
                name="username" 
                value={signupInfo.username} // Updated to use signupInfo.username
                onChange={handleChange} 
                required
              />
            </div>
          </div>

          <div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input 
                type="email" 
                label="Email" 
                name="email" 
                value={signupInfo.email} // Updated to use signupInfo.email
                onChange={handleChange} 
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
                name="password" 
                value={signupInfo.password} // Updated to use signupInfo.password
                onChange={handleChange} 
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
              Sign up
            </button>
          </div>
        </form>

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