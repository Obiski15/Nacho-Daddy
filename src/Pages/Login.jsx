import Logo from "../Components/Header/Logo";

import LoginForm from "../Features/Authentication/LoginForm";

function Login() {
  return (
    <div className="no-scrollbar fixed bottom-0 left-0 right-0 top-0 flex h-[100%] flex-col items-center justify-center overflow-scroll bg-gradient-to-br from-yellow-400 to-stone-400 py-5 shadow-lg">
      <div className="no-scrollbar mx-5 flex w-[80%]  min-w-[250px] max-w-[500px] flex-col items-center justify-center overflow-scroll rounded-lg bg-gradient-to-bl from-yellow-300 to-stone-300 px-5 py-10">
        <Logo />
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
