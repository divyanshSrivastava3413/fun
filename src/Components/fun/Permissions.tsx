import { useState } from "react";
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
  const [check, setCheck] = useState(false);
  const permClone = structuredClone(permData);
  permClone[0].pageName = "changed";
  console.log(permClone);
  console.log("Perm: ", permData);

  return (
    <div className="w-full font-mono">
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
            {permData.map((p) => (
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
                        checked={check}
                        onChange={() => setCheck(!check)}
                      />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <button className="px-4 py-2 text-white bg-gray-900 hover:bg-black cursor-pointer">
          Save changes
        </button>
      </div>
    </div>
  );
};

export default Permissions;
