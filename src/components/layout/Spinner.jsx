import spinner from "./assets/1484.gif";
function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        width={180}
        className="text-center mx-auto"
        src={spinner}
        alt="Loading..."
      ></img>
    </div>
  );
}

export default Spinner;
