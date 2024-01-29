function FormInput({ children, error }) {
  return (
    <>
      {children}
      {error && (
        <p className="w-[100%] rounded-md px-1 text-sm font-light text-red-500">
          {error}
        </p>
      )}
    </>
  );
}

export default FormInput;
