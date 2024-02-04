function FormInput({ children, error }) {
  return (
    <>
      {children}
      {error && (
        <p className="w-full rounded-md px-1 text-sm font-light text-red-500">
          {error}
        </p>
      )}
    </>
  );
}

export default FormInput;
