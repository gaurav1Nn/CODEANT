import { useContext } from "react";
import Sidebar from "./componenets/sidebar";
import { Outlet } from "react-router-dom";
import { menuContext } from "./contexts/menu";

function AppLayout() {
    const {state} = useContext(menuContext);
  return (
    <div className="flex flex-col md:flex-row md:overflow-auto">
        <Sidebar />
        <div className={`absolute w-full md:relative md:w-[88%] md:top-0 top-[5rem] ${state && "md:blur-none blur-sm"}`}><Outlet /></div>
    </div>
  );
}

export default AppLayout;