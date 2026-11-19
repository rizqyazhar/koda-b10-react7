import { useContext, useEffect } from "react";
import { AuthContext } from "../context/Context";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const [user, setUser] = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    setUser({
      username,
      password,
    });

    e.target.reset();
  };

  useEffect(() => {
    if (user.username && user.password) navigate("/");
  }, [user, navigate]);

  return (
    <div className='w-full min-h-dvh flex justify-center items-center bg-stone-900'>
      <form
        onSubmit={handleSubmit}
        className='w-1/4 p-5 bg-stone-700 border border-stone-100 rounded-lg flex flex-col gap-5'>
        <div className='flex justify-center items-center'>
          <h1 className='text-2xl font-medium text-stone-100'>Login</h1>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='flex flex-col gap-0.5'>
            <label
              htmlFor='username'
              className='tex-sm font-medium text-stone-100'>
              Username
            </label>
            <input
              type='text'
              id='username'
              name='username'
              placeholder='Masukkan username'
              className='px-4 py-2 outline-none border border-stone-100 rounded-sm text-stone-50 overflow-hidden'
            />
          </div>
          <div className='flex flex-col gap-0.5'>
            <label
              htmlFor='password'
              className='tex-sm font-medium text-stone-100'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Masukkan password'
              autoComplete='off'
              className='px-4 py-2 outline-none border border-stone-100 rounded-sm text-stone-50 overflow-hidden'
            />
          </div>
        </div>
        <button
          type='submit'
          className='w-full flex justify-center items-center py-2 rounded bg-stone-100 text-stone-700'>
          Submit
        </button>
      </form>
    </div>
  );
}
