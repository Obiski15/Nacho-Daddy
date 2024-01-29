function Button({ children, moreStyle, disabled, type, onClick }) {
  return (
    <button
      disabled={disabled}
      className={`${moreStyle} rounded-lg bg-yellow-500 p-2 text-center text-sm font-semibold capitalize ${
        !disabled ? " hover:bg-yellow-400" : ""
      } focus:outline-none ${!disabled ? "" : "bg-opacity-50"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
