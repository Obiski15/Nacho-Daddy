import Logo from "../Components/Header/Logo";

import SignUpForm from "../Features/Authentication/SignUpForm";

function SignUp() {
  return (
    <div className="no-scrollbar absolute bottom-0 left-0 right-0 top-0 flex h-[100%] flex-col items-center justify-center overflow-scroll bg-gradient-to-br from-yellow-400 to-stone-400 shadow-lg">
      <div className="no-scrollbar flex min-w-[350px] max-w-[500px] flex-col items-center justify-center overflow-scroll rounded-lg bg-gradient-to-bl from-yellow-300 to-stone-300 p-3">
        <Logo />
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUp;
