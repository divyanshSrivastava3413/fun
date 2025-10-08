import {
  Edit,
  Save,
  Search,
  Trash,
  UserPlus,
  VenusAndMars,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

export const students = [
  { id: 1, name: "Aarav", class: "10A", marks: 5, gender: "Male" },
  { id: 2, name: "Riya", class: "10A", marks: 92, gender: "Female" },
  { id: 3, name: "Kabir", class: "9B", marks: 65, gender: "Male" },
  { id: 4, name: "Meera", class: "10B", marks: 88, gender: "Female" },
  { id: 5, name: "Tanish", class: "9A", marks: 0, gender: "Male" },
  { id: 6, name: "Isha", class: "9C", marks: 81, gender: "Female" },
  { id: 7, name: "Rohan", class: "10A", marks: 74, gender: "Male" },
  { id: 8, name: "Sanya", class: "9B", marks: 100, gender: "Female" },
  { id: 9, name: "Dev", class: "10C", marks: 69, gender: "Male" },
  { id: 10, name: "Ananya", class: "9A", marks: 83, gender: "Female" },
  { id: 11, name: "Ishaan", class: "9C", marks: 12, gender: "Male" },
  { id: 12, name: "Tara", class: "10A", marks: 96, gender: "Female" },
  { id: 13, name: "Veer", class: "9B", marks: 79, gender: "Male" },
  { id: 14, name: "Kiara", class: "10C", marks: 84, gender: "Female" },
  { id: 15, name: "Aditya", class: "9A", marks: 59, gender: "Male" },
  { id: 16, name: "Diya", class: "10B", marks: 73, gender: "Female" },
  { id: 17, name: "Yash", class: "9C", marks: 22, gender: "Male" },
  { id: 18, name: "Sara", class: "10A", marks: 94, gender: "Female" },
  { id: 19, name: "Arjun", class: "10C", marks: 71, gender: "Male" },
  { id: 20, name: "Navya", class: "9A", marks: 82, gender: "Female" },
  { id: 21, name: "Karan", class: "10B", marks: 68, gender: "Male" },
  { id: 22, name: "Priya", class: "9B", marks: 76, gender: "Female" },
  { id: 23, name: "Nikhil", class: "9C", marks: 87, gender: "Male" },
  { id: 24, name: "Aisha", class: "10A", marks: 93, gender: "Female" },
  { id: 25, name: "Rudra", class: "9A", marks: 30, gender: "Male" },
  { id: 26, name: "Mira", class: "10C", marks: 85, gender: "Female" },
  { id: 27, name: "Hriday", class: "9B", marks: 74, gender: "Male" },
  { id: 28, name: "Suhana", class: "10B", marks: 78, gender: "Female" },
  { id: 29, name: "Ayaan", class: "9A", marks: 15, gender: "Male" },
  { id: 30, name: "Nisha", class: "10A", marks: 91, gender: "Female" },
  { id: 31, name: "Manav", class: "9C", marks: 68, gender: "Male" },
  { id: 32, name: "Kavya", class: "10C", marks: 79, gender: "Female" },
  { id: 33, name: "Reyansh", class: "9B", marks: 66, gender: "Male" },
  { id: 34, name: "Lavanya", class: "10B", marks: 80, gender: "Female" },
  { id: 35, name: "Shaurya", class: "9A", marks: 61, gender: "Male" },
  { id: 36, name: "Sia", class: "10C", marks: 89, gender: "Female" },
  { id: 37, name: "Krishna", class: "10A", marks: 75, gender: "Male" },
  { id: 38, name: "Avni", class: "9C", marks: 92, gender: "Female" },
  { id: 39, name: "Vivaan", class: "9B", marks: 64, gender: "Male" },
  { id: 40, name: "Myra", class: "10B", marks: 88, gender: "Female" },
  { id: 41, name: "Aryan", class: "9A", marks: 72, gender: "Male" },
  { id: 42, name: "Anvi", class: "9C", marks: 95, gender: "Female" },
  { id: 43, name: "Ritesh", class: "10C", marks: 70, gender: "Male" },
  { id: 44, name: "Aditi", class: "9B", marks: 97, gender: "Female" },
  { id: 45, name: "Raghav", class: "10A", marks: 83, gender: "Male" },
  { id: 46, name: "Chhavi", class: "10B", marks: 87, gender: "Female" },
  { id: 47, name: "Parth", class: "9C", marks: 62, gender: "Male" },
  { id: 48, name: "Ira", class: "9A", marks: 90, gender: "Female" },
  { id: 49, name: "Ritesh", class: "10C", marks: 68, gender: "Male" },
  { id: 50, name: "Tanvi", class: "10A", marks: 94, gender: "Female" },
  { id: 51, name: "Mihir", class: "9B", marks: 20, gender: "Male" },
  { id: 52, name: "Zara", class: "10B", marks: 89, gender: "Female" },
  { id: 53, name: "Rajat", class: "9C", marks: 60, gender: "Male" },
  { id: 54, name: "Aarohi", class: "9A", marks: 75, gender: "Female" },
  { id: 55, name: "Devansh", class: "10C", marks: 73, gender: "Male" },
  { id: 56, name: "Mahika", class: "10A", marks: 85, gender: "Female" },
  { id: 57, name: "Laksh", class: "9B", marks: 71, gender: "Male" },
  { id: 58, name: "Jiya", class: "10B", marks: 98, gender: "Female" },
  { id: 59, name: "Rohit", class: "9A", marks: 66, gender: "Male" },
  { id: 60, name: "Anaya", class: "10C", marks: 91, gender: "Female" },
  { id: 61, name: "Samar", class: "9B", marks: 79, gender: "Male" },
  { id: 62, name: "Manya", class: "10A", marks: 77, gender: "Female" },
  { id: 63, name: "Keshav", class: "9C", marks: 63, gender: "Male" },
  { id: 64, name: "Rachita", class: "10B", marks: 82, gender: "Female" },
  { id: 65, name: "Pranav", class: "9A", marks: 68, gender: "Male" },
  { id: 66, name: "Tisha", class: "10C", marks: 99, gender: "Female" },
  { id: 67, name: "Amit", class: "9B", marks: 64, gender: "Male" },
  { id: 68, name: "Sana", class: "10A", marks: 86, gender: "Female" },
  { id: 69, name: "Arnav", class: "9C", marks: 67, gender: "Male" },
  { id: 70, name: "Kritika", class: "10B", marks: 94, gender: "Female" },
  { id: 71, name: "Ishan", class: "9A", marks: 73, gender: "Male" },
  { id: 72, name: "Ritika", class: "10C", marks: 95, gender: "Female" },
  { id: 73, name: "Ayush", class: "9B", marks: 77, gender: "Male" },
  { id: 74, name: "Sneha", class: "9C", marks: 88, gender: "Female" },
  { id: 75, name: "Kunal", class: "10B", marks: 58, gender: "Male" },
  { id: 76, name: "Ishita", class: "10A", marks: 89, gender: "Female" },
  { id: 77, name: "Manas", class: "9A", marks: 70, gender: "Male" },
  { id: 78, name: "Diya", class: "9B", marks: 91, gender: "Female" },
  { id: 79, name: "Naman", class: "10C", marks: 82, gender: "Male" },
  { id: 80, name: "Simran", class: "10B", marks: 83, gender: "Female" },
  { id: 81, name: "Vir", class: "9C", marks: 76, gender: "Male" },
  { id: 82, name: "Anisha", class: "9A", marks: 99, gender: "Female" },
  { id: 83, name: "Ritesh", class: "10C", marks: 61, gender: "Male" },
  { id: 84, name: "Mitali", class: "10A", marks: 88, gender: "Female" },
  { id: 85, name: "Om", class: "9B", marks: 72, gender: "Male" },
  { id: 86, name: "Esha", class: "9C", marks: 93, gender: "Female" },
  { id: 87, name: "Raj", class: "10B", marks: 79, gender: "Male" },
  { id: 88, name: "Avika", class: "9A", marks: 84, gender: "Female" },
  { id: 89, name: "Siddharth", class: "10C", marks: 74, gender: "Male" },
  { id: 90, name: "Pia", class: "10B", marks: 92, gender: "Female" },
  { id: 91, name: "Varun", class: "9B", marks: 68, gender: "Male" },
  { id: 92, name: "Anjali", class: "9C", marks: 87, gender: "Female" },
  { id: 93, name: "Harsh", class: "10A", marks: 64, gender: "Male" },
  { id: 94, name: "Aarohi", class: "10B", marks: 81, gender: "Female" },
  { id: 95, name: "Rehan", class: "9A", marks: 63, gender: "Male" },
  { id: 96, name: "Ishani", class: "10C", marks: 96, gender: "Female" },
  { id: 97, name: "Dev", class: "9B", marks: 10, gender: "Male" },
  { id: 98, name: "Charvi", class: "9C", marks: 90, gender: "Female" },
  { id: 99, name: "Tanishq", class: "10A", marks: 77, gender: "Male" },
  { id: 100, name: "Niharika", class: "10B", marks: 85, gender: "Female" },
];

const StudentTable = () => {
  const [allStudents, setAllStudents] = useState(students);
  const [genderFilter, setGenderFilter] = useState("all");
  const [marksFilter, setMarksFilter] = useState("all");
  const [studData, setStudData] = useState(students);
  const [newData, setNewData] = useState(allStudents);
  const [search, setSearch] = useState("");
  const [adding, setAdding] = useState(false);
  const [maxId, setMaxId] = useState(0);
  const [addStudentData, setAddStudentData] = useState({
    id: 0,
    name: "",
    class: "",
    marks: 0,
    gender: "",
  });

  useEffect(() => {
    if (!adding) {
      return;
    }
    setMaxId(Math.max(0, ...studData.map((row) => row.id)));
  }, [adding, studData]);

  useEffect(() => {
    let filteredData = [...allStudents];
    switch (genderFilter) {
      case "Male":
        filteredData = [...filteredData].filter((row) => row.gender === "Male");
        break;
      case "Female":
        filteredData = [...filteredData].filter(
          (row) => row.gender === "Female"
        );
        break;
      default:
        break;
    }
    switch (marksFilter) {
      case "failed":
        filteredData = [...filteredData].filter((row) => row.marks < 35);
        break;
      case ">90":
        filteredData = [...filteredData].filter((row) => row.marks > 90);
        break;
      case ">80":
        filteredData = [...filteredData].filter(
          (row) => row.marks > 80 && row.marks <= 90
        );
        break;
      case ">70":
        filteredData = [...filteredData].filter(
          (row) => row.marks > 70 && row.marks <= 80
        );
        break;
      case ">60":
        filteredData = [...filteredData].filter(
          (row) => row.marks > 60 && row.marks <= 70
        );
        break;
      case "60>":
        filteredData = [...filteredData].filter((row) => row.marks <= 60);
        break;
      default:
        break;
    }
    // filteredData = [...filteredData].filter((row) =>
    //   row.name.toLowerCase().includes(search.toLowerCase().trim())
    // );
    setStudData(filteredData);
  }, [genderFilter, marksFilter]);

  useEffect(() => {
    const debouncedSearch = () => {
      let copy = [...studData];
      console.log(copy);
      let timeout;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        copy = [...copy].filter((row) =>
          row.name.toLowerCase().includes(search.toLowerCase())
        );
        setStudData(copy);
      }, 500);
    };
    debouncedSearch();
  }, [search]);

  const handleSaveAdd = () => {
    if (
      !addStudentData.class ||
      !addStudentData.name ||
      !addStudentData.gender ||
      !addStudentData.marks
    ) {
      alert("Please fill all the details");
      return;
    }
    const readyData = {
      id: maxId + 1,
      name: addStudentData.name,
      class: addStudentData.class,
      marks: addStudentData.marks,
      gender: addStudentData.gender,
    };
    console.log(readyData);
    setStudData((prev) => [...prev, { ...readyData }]);
    setAllStudents((prev) => [...prev, { ...readyData }]);
    setAdding(false);
    setAddStudentData({
      id: 0,
      name: "",
      class: "",
      marks: 0,
      gender: "",
    });
  };

  const handleDeleteRow = (id: number) => {
    setStudData((prev) => [...prev].filter((row) => row.id !== id));
    setAllStudents((prev) => [...prev].filter((row) => row.id !== id));
  };

  return (
    <div className="w-full p-4 mb-4 font-mono mt-10">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <div className="flex justify-start items-center my-4 gap-3">
          <span className="pl-12 pr-4 py-2 rounded-4xl shadow-inner shadow-gray-400 border-2 border-gray-400 relative ">
            <VenusAndMars
              size={26}
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
            />
            <select
              className="focus:outline-none cursor-pointer"
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </span>
          <span className="pl-18 pr-4 py-2 rounded-4xl shadow-inner shadow-gray-400 border-2 border-gray-400 relative ">
            <p className="absolute left-4 top-1/2 transform -translate-y-1/2 font-semibold">
              Marks:
            </p>
            <select
              className="focus:outline-none cursor-pointer"
              value={marksFilter}
              onChange={(e) => setMarksFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="failed" className="text-red-600">
                Failed
              </option>
              <option value=">90">{">90"}</option>
              <option value=">80">{"81-90"}</option>
              <option value=">70">{"71-80"}</option>
              <option value=">60">{"61-70"}</option>
              <option value="60>">{"<=60"}</option>
            </select>
          </span>
          <div className="flex justify-center items-center">
            <span className="pl-12 pr-1 py-2 rounded-4xl shadow-inner shadow-gray-400 border-2 border-gray-400 relative ">
              <Search
                size={24}
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
              />
              <input
                className="focus:outline-none"
                placeholder="Search Students"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </span>
            {/* <div className="bg-gray-900 text-white cursor-pointer p-2 border-2 border-gray-900 rounded-tr-4xl rounded-br-4xl hover:bg-black">
            Search
          </div> */}
          </div>
        </div>
        <div className="">
          <button
            className="flex justify-center items-center px-4 py-2 bg-gray-900 hover:bg-black cursor-pointer gap-2 rounded-md text-white"
            onClick={() => setAdding(true)}
          >
            <UserPlus size={24} /> Add Student
          </button>
        </div>
      </div>

      <div className="w-[90%] mx-auto rounded-md max-h-96 overflow-y-auto relative border-2 border-gray-900 scrollbar-custom">
        <table className="w-full table-fixed">
          <thead className="bg-gray-900  sticky top-0 z-10">
            <tr className="font-semibold text-white">
              <th className="py-2 text-center w-16">ID</th>
              <th className="py-2 text-center">Name</th>
              <th className="py-2 text-center">Class</th>
              <th className="py-2 text-center">Marks</th>
              <th className="py-2 text-center">Gender</th>
              <th className="py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {studData.length == 0 && (
              <tr className="bg-gray-100 hover:bg-gray-200">
                <td className="py-1 px-2" colSpan={5}>
                  No student found.
                </td>
              </tr>
            )}
            {adding && (
              <tr className="even:bg-gray-100 hover:bg-gray-200">
                <td className="py-1 text-center">{maxId + 1}</td>
                <td className="py-1 text-center">
                  <input
                    type="text"
                    className="px-2 py-1 border-2 border-gray focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                    placeholder="Enter name"
                    value={addStudentData.name}
                    autoFocus
                    onChange={(e) =>
                      setAddStudentData((prev) => {
                        return { ...prev, name: e.target.value };
                      })
                    }
                  />
                </td>
                <td className="py-1 text-center">
                  <input
                    type="text"
                    className="px-2 py-1 border-2 border-gray focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                    placeholder="Enter class"
                    value={addStudentData.class}
                    onChange={(e) =>
                      setAddStudentData((prev) => {
                        return { ...prev, class: e.target.value };
                      })
                    }
                  />
                </td>
                <td className="py-1 text-center">
                  <input
                    type="number"
                    className="px-2 py-1 border-2 border-gray focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                    placeholder="Enter marks"
                    min={0}
                    max={100}
                    value={addStudentData.marks}
                    onChange={(e) =>
                      setAddStudentData((prev) => {
                        return { ...prev, marks: Number(e.target.value) };
                      })
                    }
                  />
                </td>
                <td className="py-1 text-center">
                  <select
                    className="px-2 py-1 border-2 border-gray focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                    value={addStudentData.gender}
                    onChange={(e) =>
                      setAddStudentData((prev) => {
                        return { ...prev, gender: e.target.value };
                      })
                    }
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </td>
                <td className="py-1 text-center">
                  <span className="flex justify-center items-center gap-3 w-full">
                    <X
                      size={20}
                      className="text-gray-600 cursor-pointer hover:text-gray-700"
                      onClick={() => setAdding(false)}
                    />
                    <Save
                      size={20}
                      className="text-green-600 cursor-pointer hover:text-green-500"
                      onClick={handleSaveAdd}
                    />
                  </span>
                </td>
              </tr>
            )}
            {studData.map((row) => {
              return (
                <tr className="even:bg-gray-100 hover:bg-gray-200" key={row.id}>
                  <td className="py-1 text-center">{row.id}</td>
                  <td className="py-1 text-center">{row.name}</td>
                  <td className="py-1 text-center">{row.class}</td>
                  <td className="py-1 text-center">{row.marks}</td>
                  <td className="py-1 text-center">{row.gender}</td>
                  <td className="py-1 text-center">
                    <span className="flex justify-center items-center gap-3 w-full">
                      <Edit
                        size={20}
                        className="text-blue-600 cursor-pointer hover:text-blue-500"
                      />
                      <Trash
                        size={20}
                        className="text-red-600 cursor-pointer hover:text-red-500"
                        onClick={() => handleDeleteRow(row.id)}
                      />
                    </span>
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

export default StudentTable;
