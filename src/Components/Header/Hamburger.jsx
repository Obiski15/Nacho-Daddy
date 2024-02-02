const LINE_STYLE = "w-10 h-[5px] bg-yellow-500 transition-all duration-500";
function Hamburger({ showFilter, setShowFilter, setShowSearch }) {
  return (
    <>
      <div
        className="relative z-[999] flex flex-col items-center justify-center gap-[5px] lg:hidden"
        onClick={() => {
          setShowFilter((showFilter) => !showFilter);
          setShowSearch(false);
        }}
      >
        <div className={`${LINE_STYLE} ${!showFilter ? "" : "line1"}`}></div>

        <div
          className={`${LINE_STYLE} ${!showFilter ? "" : "opacity-0"}`}
        ></div>

        <div className={`${LINE_STYLE} ${!showFilter ? "" : "line3"}`}></div>
      </div>
    </>
  );
}

export default Hamburger;
