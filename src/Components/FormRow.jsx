function FormRow({ children, label, error }) {
  return (
    <>
      {error && <p className="text-sm font-light text-red-500">{error} </p>}
      <div className="mb-5 flex items-center justify-start gap-5">
        <label
          htmlFor={children.props.id}
          className="flex-[10%] p-1 text-lg font-semibold capitalize"
        >
          {label}:
        </label>
        {children}
      </div>
    </>
  );
}

export default FormRow;
