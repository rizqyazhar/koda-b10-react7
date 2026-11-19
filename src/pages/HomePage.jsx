import { useNavigate } from "react-router";
import { AuthContext } from "../context/Context";
import { useContext, useEffect } from "react";

export default function HomePage() {
  const [user] = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.username) navigate("/login");
  }, [user, navigate]);

  return (
    <div className='w-full min-h-dvh bg-stone-950 flex flex-col justify-center items-center gap-10'>
      <h1 className='text-6xl text-stone-100'>Welcome in home page</h1>
      <p className='text-3xl text-stone-100'>{user?.username}</p>
    </div>
  );
}
