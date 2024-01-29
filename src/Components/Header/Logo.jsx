import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  return (
    <div>
      <img
        src="/nacho-daddy-logo.png"
        alt="nacho-daddy-logo"
        className="h-24 w-24 rounded-full"
        onClick={() => {
          navigate("/items");
        }}
      />
    </div>
  );
}

export default Logo;
