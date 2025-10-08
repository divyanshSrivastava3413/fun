import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";
import Layout from "./Layout/Layout";
import PageNotFound from "./Pages/PageNotFound";
import { useDispatch, useSelector } from "react-redux";
import { dec, decByNumber, inc, incByNumber } from "./features/counterSlice";
import { useState } from "react";
import type { RootState } from "./appStore/store";
import TodoList from "./Components/fun/TodoList";
import Permissions from "./Components/fun/Permissions";
import InventoryTable from "./Components/fun/InventoryTable";
import Posts from "./Components/fun/Posts";
import StudentTable from "./Components/fun/StudentTable";

function App() {
  const [num, setNum] = useState(0);
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <div className="h-96 flex flex-col justify-start items-center gap-2">
        <h1 className="text-2xl text-blue font-semibold">
          Count from store:{count}
        </h1>
        <span className="flex justify-center gap-2">
          <button
            className="border-3 border-blue-600 px-4 py-2"
            onClick={() => dispatch(inc())}
          >
            Increase by 1
          </button>
          <button
            className="border-3 border-blue-600 px-4 py-2"
            onClick={() => dispatch(dec())}
          >
            Decrease by 1
          </button>
        </span>
        <span className="flex flex-col justify-center items-center gap-2">
          <input
            type="number"
            value={num}
            onChange={(e) => setNum(Number(e.target.value))}
            className="border-3 border-green-800 px-4 py-2 text-md"
            placeholder="Enter the number"
          />
          <span className="flex gap-2">
            <button
              className="border-3  border-green-800  px-4 py-2"
              onClick={() => dispatch(incByNumber(num))}
            >
              Increase by input number
            </button>
            <button
              className="border-3  border-green-800  px-4 py-2"
              onClick={() => dispatch(decByNumber(num))}
            >
              Decrease by input number
            </button>
          </span>
        </span>
      </div>
      <div className="w-full">
        <TodoList />
        <Permissions />
        <InventoryTable />
        <Posts />
        <StudentTable />
      </div>
    </>
  );
}

export default App;
