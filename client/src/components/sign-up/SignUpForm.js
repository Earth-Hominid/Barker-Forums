import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import { ADD_USER } from '../../mutations/UserMutations';
import { GET_USERS } from '../../queries/userQueries';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const [addUser] = useMutation(ADD_USER, {
    variables: { username, email },
    update(cache, { data: { addUser } }) {
      const { users } = cache.readQuery({ query: GET_USERS });

      cache.writeQuery({
        query: GET_USERS,
        data: { users: [...users, addUser] },
      });
    },
  });

  const navigate = useNavigate();

  const goHome = () => {
    navigate('/homefeed');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === '' || email === '') {
      return alert('Please complete all fields');
    }

    addUser(username, email);

    setUsername('');
    setEmail('');
    navigate('/users');
  };

  return (
    <>
      <h1 className="px-2 mt-2 text-xl font-bold text-indigo-600 text-center">
        Fill out the form to become a member!
      </h1>
      <div className="flex w-full justify-center ">
        <div
          className="
        w-full 
        max-w-md 
        m-4
        flex 
        justify-center
        bg-white 
        border 
        border-slate-300 
        shadow-lg
        rounded-md"
        >
          <form className="mt-6 text-[14px]" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required=""
                placeholder="Username"
                className="peer h-10 w-full border-b-2 border-slate-400 focus:outline-none focus:border-indigo-600 placeholder-transparent"
              />
              <label
                htmlFor="username"
                className="
              absolute
              left-0
              -top-3.5
              text-sm 
              text-stone-800
              transition-all
              peer-placeholder-shown:text-base
              peer-placeholder-shown:text-stone-600
              peer-placeholder-shown:top-2
              peer-focus:-top-3.5
              peer-foucs:text-stone-600
              peer-focus:text-sm"
              >
                Username
              </label>
            </div>
            <div className="mt-4 relative">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required=""
                placeholder="Email"
                className="peer h-10 w-full border-b-2 border-slate-400 focus:outline-none focus:border-indigo-600 placeholder-transparent
                invalid:border-pink-500 
                invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
              <label
                htmlFor="email"
                className="
              absolute
              left-0
              -top-3.5
              text-sm 
              text-stone-800
              transition-all
              peer-placeholder-shown:text-base
              peer-placeholder-shown:text-stone-600
              peer-placeholder-shown:top-2
              peer-focus:-top-3.5
              peer-foucs:text-stone-600
              peer-focus:text-sm"
              >
                Email
              </label>
            </div>

            <div className="mt-6 mb-12">
              <button
                type="submit"
                className="bg-indigo-600 p-2 rounded-md text-white w-full text-base hover:opacity-90"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
