import { Eye, EyeOff, Lock, User } from "lucide-react";
import { useRef, useState } from "react";
import { useLoginUserMutation } from "../appStore/api/api";

const LoginPage = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const userRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const loginButtonRef = useRef<HTMLButtonElement>(null);
  const [loginUser, { isLoading: isLogginIn }] = useLoginUserMutation();
  const handleUserDownKey = (
    e: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (e.key === "Enter" || e.key === "ArrowDown") {
      e.preventDefault();
      passwordRef.current?.focus();
    }
  };

  const handlePasswordKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      userRef.current?.focus();
    }
    if (e.key === "Enter") {
      e.preventDefault();
      loginButtonRef.current?.click();
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const loginData = {
      name: user,
      password: password,
    };
    console.log(loginData);
    loginUser(loginData)
      .unwrap()
      .then((response) => {
        console.log("Login success", response);
      })
      .catch((error) => {
        console.error("Login failed", error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-2 border-gray-600 rounded-md w-[90vw] sm:w-[80vw] md:w-[50vw] lg:w-[40vw] mx-auto ">
        <h1 className="text-2xl font-semibold font-sans text-center mt-4">
          Welcome Back!
        </h1>
        <form
          onSubmit={handleSubmit}
          className="p-4 flex flex-col justify-center items-center"
        >
          <div className="pl-12 pr-12 w-full relative border-2 border-gray-600  focus-within:ring-1 focus-within:ring-blue-700 mb-3 rounded-md">
            <User
              size={22}
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
            <input
              className="py-2 px-1  w-full focus:outline-none focus:ring-0"
              type="text"
              ref={userRef}
              autoFocus
              placeholder="Enter username"
              required
              value={user}
              onKeyDown={handleUserDownKey}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUser(e.target.value)
              }
            />
          </div>
          <div className="pl-12 pr-12 w-full relative border-2 border-gray-600 mb-3 focus-within:ring-1 focus-within:ring-blue-700 rounded-md">
            <Lock
              size={22}
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
            <input
              className="py-2 px-1  w-full focus:outline-none focus:ring-0"
              type={showPassword ? "text" : "password"}
              ref={passwordRef}
              placeholder="Enter Password"
              required
              value={password}
              onKeyDown={handlePasswordKeyPress}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? <Eye size={22} /> : <EyeOff size={22} />}
            </button>
          </div>
          <button
            type="submit"
            ref={loginButtonRef}
            disabled={isLogginIn}
            className="px-4 py-2 bg-blue-700 text-white cursor-pointer hover:bg-blue-600 w-full rounded-md"
          >
            {!isLogginIn ? "Login" : "Logging In..."}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
