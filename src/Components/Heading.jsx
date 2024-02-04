function Heading({ type, children, moreStyles, font }) {
  const headings = {
    h1: (
      <h1
        className={`text-4xl font-${font} ${moreStyles} capitalize tracking-wider `}
      >
        {children}
      </h1>
    ),
    h2: (
      <h2
        className={`text-2xl font-${font} ${moreStyles} capitalize tracking-wide`}
      >
        {children}
      </h2>
    ),
    h3: (
      <h3
        className={`text-xl font-${font} ${moreStyles} capitalize tracking-wide`}
      >
        {children}
      </h3>
    ),
    h4: (
      <h4
        className={`text-lg font-${font} ${moreStyles} capitalize tracking-wide`}
      >
        {children}
      </h4>
    ),
    h5: (
      <h5
        className={`text-md font-${font} ${moreStyles} capitalize tracking-wide`}
      >
        {children}
      </h5>
    ),
    h6: (
      <h6
        className={`text-sm font-${font} ${moreStyles} capitalize tracking-wide`}
      >
        {children}
      </h6>
    ),
  };

  return (
    headings[type] || (
      <h3 className="text-xl font-bold capitalize tracking-wide">{children}</h3>
    )
  );
}
export default Heading;
