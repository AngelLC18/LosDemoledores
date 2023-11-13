import "../../../index.css";
function InputForm(props) {
  return (
    <div className="inputDiv display-flex justify-center items-center">
      <label className="inputLabel relative">
        <input
          type="text"
          className="inputBox h-10 w-96 px-6 text-l bg-white border-2 rounded-lg border-black border-opacity-80 outline-none focus:border-blue-500 focus:text-black transition duration-200"
        />
        <span className="text-2xl text-grey-700 dark:text-white text opacity-75 absolute left-0 top-4 mx-6 px-2 transition duration-200 input-text">
          hola
        </span>
      </label>
    </div>
  );
}
export default InputForm;

/**/
