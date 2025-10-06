import { useEffect, useState } from "react";
import { useGetTodosQuery } from "../../appStore/api/api";
import { Search } from "lucide-react";
const TodoList = () => {
  const { data: todosData, isLoading, isError } = useGetTodosQuery();
  // console.log("TodosData: ", todosData);
  const todosList = todosData?.todos ?? [];
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (todosList.length > 0) {
      setFilteredList(todosList);
    }
  }, [todosList]);

  const handleFilterList = () => {
    if (searchTerm.trim().length === 0) {
      setFilteredList(todosList);
      return;
    }
    const sanitizeSearch = searchTerm.trim().toLowerCase();
    const filtering = todosList.filter((todo: any) =>
      todo?.todo?.toLowerCase().includes(sanitizeSearch)
    );
    setFilteredList(filtering);
  };

  return (
    <div className="w-[95vw] md:w-[70vw] lg:w-[50vw] p-4 border-2 border-gray-700 rounded-md mx-auto my-4 flex flex-col justify-center items-center gap-4">
      <div className="px-12 py-3 w-full rounded-md border-2 border-gray-700 focus-within:ring-1 focus-within:ring-blue-600 focus-within:shadow-sm focus-within:shadow-blue-400 relative">
        <Search
          size={20}
          className="absolute left-3 top-1/2  transform -translate-y-1/2"
        />
        <input
          type="text"
          placeholder="Search Todos here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="focus:outline-none text-md w-[90%]"
        />
        <button
          className="absolute right-1 top-1/2 transform -translate-y-1/2 w-min h-max px-4 py-2 bg-gray-900 text-white rounded-md cursor-pointer hover:bg-black"
          onClick={handleFilterList}
        >
          Search
        </button>
      </div>

      <div className="mx-2 w-full flex flex-col justify-center items-center gap-2">
        {isLoading && !isError && (
          <p className="text-md font-semibold font-serif text-blue-600 mx-auto">
            Loading...
          </p>
        )}
        {!isLoading && isError && (
          <p className="text-md font-semibold font-serif text-red-600 mx-auto">
            Error: Couldn't load Todo List...
          </p>
        )}
        {filteredList.length === 0 && <p>No Todo found.</p>}
        {filteredList.map((todo: any) => {
          return (
            <span
              className="border-2 border-cyan-500 w-full rounded-md px-4 py-2 truncate font-mono text-md"
              key={todo.id}
            >
              {todo.todo}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
