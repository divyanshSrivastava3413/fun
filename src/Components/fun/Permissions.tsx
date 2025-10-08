import { useState } from "react";
interface permElement {
  id: number;
  pageName: string;
  permissionIds: number[];
}

const permData = [
  { id: 1, pageName: "Dashboard", permissionIds: [1, 2] },
  { id: 2, pageName: "About", permissionIds: [1, 2, 3] },
  { id: 3, pageName: "Classes", permissionIds: [1] },
  { id: 4, pageName: "Sections", permissionIds: [1, 2] },
  { id: 5, pageName: "Admin Section", permissionIds: [1, 2, 3] },
  { id: 7, pageName: "Developers Section", permissionIds: [1] },
  { id: 8, pageName: "Contact", permissionIds: [1, 2] },
];

const permissions = [1, 2, 3];
const Permissions = () => {
  const [permClone, setPermClone] = useState(
    JSON.parse(JSON.stringify(permData))
  );

  const handleCheckboxChange = (
    pageId: number,
    permId: number,
    checked: boolean
  ) => {
    setPermClone((prev: any) =>
      prev.map((p: permElement) => {
        if (p.id === pageId) {
          return {
            ...p,
            permissionIds: checked
              ? [...p.permissionIds, permId]
              : p.permissionIds.filter((f) => f !== permId),
          };
        }
        return p;
      })
    );
  };

  const handleSave = () => {
    console.log(permClone);
  };

  return (
    <div className="w-full font-mono px-4">
      <h1 className="text-xl mb-2">Permissions Table</h1>
      <div className="border-2 border-gray rounded-md overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-400 text-black font-semibold">
              <th className="text-center px-4 py-2">Page Name</th>
              <th className="text-center px-4 py-2">View</th>
              <th className="text-center px-4 py-2">Edit</th>
              <th className="text-center px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {permClone.map((p: permElement) => (
              <tr
                className="odd:bg-gray-100 even:bg-white hover:bg-gray-200"
                key={p.id}
              >
                <td className="text-center px-4 py-2">{p.pageName}</td>
                {permissions.map((perm) => (
                  <td key={perm} className="px-4 py-2">
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        className="cursor-pointer w-4 h-4 accent-blue-500"
                        checked={p.permissionIds.includes(perm)}
                        onChange={(e) =>
                          handleCheckboxChange(p.id, perm, e.target.checked)
                        }
                      />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end items-center my-2">
        <button
          className="px-4 py-2 text-white bg-gray-900 hover:bg-black cursor-pointer"
          onClick={handleSave}
        >
          Save changes
        </button>
      </div>
    </div>
  );
};

export default Permissions;
