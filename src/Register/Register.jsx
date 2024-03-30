import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { useState } from 'react';
import { IoMdEye } from 'react-icons/io';
import { IoMdEyeOff } from 'react-icons/io';

function Register() {
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [checkBoxStatus, setCheckBoxStatus] = useState(false);
  const handleRegister = event => {
    event.preventDefault();
    const name = event.target.fullname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    setRegisterError('');
    setSuccess('');
    if (password.length < 6) {
      setRegisterError('Password must be at least 6 characters');
      return;
    } else if (
      !/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{"':;?/.,<>]).{6,}$/.test(
        password
      )
    ) {
      setRegisterError(
        'Password must contain Uppercase, Number, and Special characters'
      );
      return;
    }
    createUserWithEmailAndPassword(auth, email, password, name)
      .then(userCredential => {
        console.log(userCredential.user), setSuccess(userCredential.user);
      })
      .catch(error => setRegisterError(error.message));
  };
  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col border">
        <form
          onSubmit={handleRegister}
          className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2"
        >
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded-lg mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded-lg mb-4"
              name="email"
              placeholder="Email"
            />

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="block border border-grey-light w-full p-3 rounded-lg mb-4"
                name="password"
                placeholder="Password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-4 right-4"
              >
                {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
              </span>
            </div>
            <div className="mb-3 ml-2 text-sm">
              <input
                onClick={() => setCheckBoxStatus(!checkBoxStatus)}
                type="checkbox"
                name="terms"
                id=""
              />
              <label className="ml-2" htmlFor="terms">
                Accept Our{' '}
                <a className="underline" href="#">
                  Terms and Conditions
                </a>
              </label>
            </div>
            {registerError && (
              <p className="text-lg bg-red-500 px-8 py-2 rounded-lg text-white flex justify-center mx-auto text-center my-4">
                {registerError}
              </p>
            )}
            {success && (
              <p className="text-lg bg-green-500 px-8 py-2 rounded-lg text-white flex justify-center mx-auto text-center my-4">
                Successfully Created
              </p>
            )}
            {
              checkBoxStatus?"":<p>Please accept all terms and conditions</p>
            }

            <button
              type="submit"
              className="w-full text-center py-3 rounded-lg bg-gray-900 text-white border border-gray-900 hover:bg-green-dark focus:outline-none my-1"
              disabled={checkBoxStatus?'':'disabled'}
            >
              Sign Up
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{' '}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <a
              className="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              Log in
            </a>
            .
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
