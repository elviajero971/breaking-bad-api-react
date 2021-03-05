import DotLoader from "react-spinners/DotLoader";

import "./Spinner.css";

function Spinner() {
  return (
    <div className="spinner">
      <div className="container">
        <DotLoader color={"#800040"} size={150} />
      </div>
    </div>
  );
}

export default Spinner;
