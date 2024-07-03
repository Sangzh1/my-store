import { useSignup } from "../hooks/useSignup";
import { useRef } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import Button from "../components/Button";

function Signup() {
  const displayName = useRef();
  const email = useRef();
  const password = useRef();
  const { isPending } = useGlobalContext();
  const { signUpWithGoogleProvider, signup } = useSignup();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signUpWithGoogleProvider();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(
      displayName.current.value,
      email.current.value,
      password.current.value,
    );
  };
  return (
    <div className="grid h-screen place-items-center">
      <div className="h-full w-full bg-gray-600 object-cover" />
      <div className=" absolute		  rounded-lg bg-slate-200 px-10 py-10">
        <h1 className="mb-5 text-3xl font-bold">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-10 items-center">
            <label className="mr-5" htmlFor="username">
              Name:{" "}
            </label>
            <input
              ref={displayName}
              type="text"
              placeholder="Type your username"
              id="username"
              className="input input-bordered input-primary w-full max-w-xs"
              required
            />
          </div>
          <div className="mb-10 items-center">
            <label className="mr-5" htmlFor="username">
              Email:{" "}
            </label>
            <input
              ref={email}
              type="email"
              placeholder="Type your username"
              id="username"
              className="input input-bordered input-primary w-full max-w-xs"
              required
            />
          </div>
          <div className="mb-10 items-center">
            <label className="mr-5" htmlFor="password">
              Password
            </label>
            <input
              ref={password}
              type="password"
              id="password"
              placeholder="Type your password"
              className="input input-bordered input-error w-full max-w-xs"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            {!isPending && <Button text={"Login"} disabled={false} />}
            {isPending && <Button text={"Loading..."} disabled={true} />}
            <button
              onClick={handleGoogleLogin}
              class="border-blue-gray-500 text-blue-grey-500 focus:ring-blue-red-200  flex select-none items-center gap-3 rounded-lg border px-7 py-3.5 text-center align-middle font-sans text-sm font-bold uppercase transition-all hover:opacity-75 focus:ring active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <img
                src="https://docs.material-tailwind.com/icons/google.svg"
                alt="metamask"
                class="h-6 w-6"
              />
              Continue with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
