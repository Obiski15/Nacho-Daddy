function ErrorMessage({ error }) {
  return (
    <h1 className="absolute left-[50%] top-[50%] w-auto translate-x-[-50%] translate-y-[-50%] text-center text-lg font-semibold text-stone-700">
      😧 sorry ): {error}
    </h1>
  );
}

export default ErrorMessage;
