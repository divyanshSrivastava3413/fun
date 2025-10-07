import {
  Filter,
  ListFilterPlus,
  ToggleLeft,
  ToggleRight,
  Trash,
} from "lucide-react";
import { useEffect, useState } from "react";
interface Element {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}
const products = [
  { id: 1, name: "Laptop", price: 1200, inStock: true },
  { id: 2, name: "Mouse", price: 25, inStock: false },
  { id: 3, name: "Keyboard", price: 45, inStock: false },
  { id: 4, name: "Monitor", price: 300, inStock: true },
];

const InventoryTable = () => {
  const [data, setData] = useState(products);
  const [filteredData, setFilteredData] = useState(data);
  const [filter, setFilter] = useState(false);
  const [sortTerm, setSortTerm] = useState("Norm");

  useEffect(() => {
    let updatedData = [...data];

    // Apply filter
    if (filter) {
      updatedData = updatedData.filter((row) => row.inStock);
    }

    // Apply sort
    switch (sortTerm) {
      case "Asc":
        updatedData = [...updatedData].sort((a, b) => a.price - b.price);
        break;
      case "Desc":
        updatedData = [...updatedData].sort((a, b) => b.price - a.price);
        break;
      default:
        break; // no sort, keep original order
    }

    setFilteredData(updatedData);
  }, [filter, sortTerm, data]);

  const handleCheckboxChange = (pId: number, checked: boolean) => {
    setData((prev: Element[]) =>
      prev.map((elem) =>
        elem.id === pId ? { ...elem, inStock: checked } : elem
      )
    );
  };
  const handleDeleteRow = (pId: number) => {
    setData((prev: Element[]) => prev.filter((row) => row.id !== pId));
  };

  return (
    <div className="w-full p-4">
      <div className="w-full flex justify-start items-center gap-4">
        <div className="w-max pl-12 pr-4 py-1 flex justify-center items-center rounded-4xl shadow-inner shadow-gray-500 border-2 border-gray-500 relative my-2 font-semibold">
          <Filter
            size={26}
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
          />
          <span
            className="flex justify-center items-center gap-2"
            onClick={() => setFilter(!filter)}
          >
            <p className={`${filter ? "text-gray-600" : "text-violet-600"}`}>
              All
            </p>
            {filter ? (
              <ToggleRight size={32} className="cursor-pointer" />
            ) : (
              <ToggleLeft size={32} className="cursor-pointer" />
            )}
            <p className={`${filter ? "text-violet-600" : "text-gray-600"}`}>
              In Stock
            </p>
          </span>
        </div>
        <div className="w-max pl-12 pr-4 py-2 flex justify-center items-center rounded-4xl shadow-inner shadow-gray-500 border-2 border-gray-500 relative my-2 font-semibold">
          <ListFilterPlus
            size={26}
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
          />
          <select
            className="text-md font-semibold outline-none cursor-pointer"
            value={sortTerm}
            onChange={(e) => setSortTerm(e.target.value)}
          >
            <option className="font-mono" value={"Norm"}>
              None
            </option>
            <option className="font-mono" value={"Asc"}>
              Price Ascending
            </option>
            <option className="font-mono" value={"Desc"}>
              Price Descending
            </option>
          </select>
        </div>
      </div>

      <div className="border-gray-400 border-2 rounded-md ">
        <div className="h-60 overflow-y-auto relative">
          <table className="w-full relative h-10 border-collapse">
            <thead className="bg-gray-400 text-black sticky top-0 z-10">
              <tr>
                <th className="px-4 py-2 text-center">Name</th>
                <th className="px-4 py-2 text-center">Price</th>
                <th className="px-4 py-2 text-center">In Stock</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((p) => {
                return (
                  <tr key={p.id} className="even:bg-gray-200 hover:bg-gray-100">
                    <td className="text-center py-2">{p.name}</td>
                    <td className="text-center py-2">{p.price}</td>
                    <td className="text-center py-2">
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-violet-600 cursor-pointer"
                        checked={p.inStock}
                        onChange={(e) =>
                          handleCheckboxChange(p.id, e.target.checked)
                        }
                      />
                    </td>
                    <td className="text-center py-2">
                      <div className="flex justify-center items-center">
                        <button
                          onClick={() => handleDeleteRow(p.id)}
                          className="border-2 border-red-600 bg-red-300 text-red-600 cursor-pointer p-1 rounded-md flex justify-center items-center hover:bg-red-200"
                        >
                          <Trash size={22} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryTable;
