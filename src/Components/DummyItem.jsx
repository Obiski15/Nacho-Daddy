import Logo from "./Header/Logo";

function DummyItem() {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto] items-start justify-between gap-3 min-[420px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={i}
          className="dummy-item-animate no-scrollbar relative m-auto h-[320px] w-[200px] overflow-hidden rounded-lg bg-stone-200 text-left"
        >
          <div className="flex h-[180px] w-full items-center justify-center bg-stone-300">
            <div className="logo-animate">
              <Logo />
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-4 p-2">
            <p className="h-4 w-[70%] rounded-sm bg-stone-300"></p>
            <p className="h-3 w-[50%] rounded-sm bg-stone-300"></p>
            <p className="h-3 w-[50%] rounded-sm bg-stone-300"></p>
          </div>
          <div className="absolute bottom-1 mx-2  my-1 h-6 w-[50%] rounded-sm bg-stone-300"></div>
        </div>
      ))}
    </div>
  );
}

export default DummyItem;
