
function FormInput() {
  return (
    <form
      action=""
      className="flex items-center gap-4 bg-gray-50 dark:bg-navy-900 rounded-md px-5 py-2.5 before:content-[''] before:size-5 before:border-2 before:border-gray-300 dark:before:border-purple-700 before:rounded-full"
    >
      <input
        type="text"
        placeholder="Create a new todo..."
        className="outline-none w-[90%] border-none placeholder:text-gray-600 text-lg placeholder:text-sm dark:placeholder:text-purple-600"
      />
    </form>
  );
}
export default FormInput;