import { Trash } from "lucide-react";
import { useState } from "react";
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
  const productsData: any[] = JSON.parse(JSON.stringify(products));
  const [data, setData] = useState(productsData);

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
      <div className="border-gray-400 border-2 rounded-md">
        <table className="w-full">
          <thead className="bg-gray-400 text-black">
            <tr>
              <th className="px-4 py-2 text-center">Name</th>
              <th className="px-4 py-2 text-center">Price</th>
              <th className="px-4 py-2 text-center">In Stock</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((p) => {
              return (
                <tr key={p.id} className=" even:bg-gray-200 hover:bg-gray-100">
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
                  <td className="text-center py-2 flex justify-center items-center">
                    <button
                      onClick={() => handleDeleteRow(p.id)}
                      className="border-2 border-red-600 bg-red-300 text-red-600 cursor-pointer p-1 rounded-md flex justify-center items-center hover:bg-red-200"
                    >
                      <Trash size={22} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryTable;
