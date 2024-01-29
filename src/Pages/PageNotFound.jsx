import { useLocation } from "react-router-dom";

function PageNotFound() {
  const location = useLocation();
  return (
    <div className="italics text-md absolute left-[50%] top-[50%] m-auto translate-x-[-50%] translate-y-[-50%] font-semibold">
      😔 ooops page: {location.pathname} was not found
    </div>
  );
}

export default PageNotFound;
