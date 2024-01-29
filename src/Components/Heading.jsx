function Heading({ type, children, moreStyles }) {
  if (type === "h1")
    return (
      <h1
        className={`text-2xl font-bold capitalize tracking-wider ${moreStyles}`}
      >
        {children}
      </h1>
    );
  if (type === "h2")
    return (
      <h2
        className={`text-xl font-bold capitalize tracking-wide ${moreStyles}`}
      >
        {children}
      </h2>
    );
}
export default Heading;
