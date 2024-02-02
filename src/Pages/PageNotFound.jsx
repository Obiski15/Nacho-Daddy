import { useLocation } from "react-router-dom";

function PageNotFound() {
  const location = useLocation();
  return (
    <div className="italics m-auto mt-10 flex w-[80%] min-w-[250px] flex-col items-center justify-center font-semibold">
      <div className="self-centerp-2">
        😔 sorry {location.pathname} was not found
      </div>
    </div>
  );
}

export default PageNotFound;
