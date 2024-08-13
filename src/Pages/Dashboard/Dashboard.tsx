import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PagesHeader from "../../Components/PagesHeader/PagesHeader";
import { RootState, updatePageNavigation } from "../../Features/Features";

const Dashboard = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.darkMode);
  useEffect(() => {
    dispatch(updatePageNavigation("dashboard"));
  }, [dispatch]);
  return (
    <div className="flex-1">
      <PagesHeader title="Dashboard" nav={"Home"} />
      <div className="flex gap-[30px] justify-between m-[20px]">
        <div
          className={`flex-1 min-w-[300px] min-h-[200px] rounded-3xl shadow-xl ${
            darkMode ? "bg-[--sidebar-color]" : "bg-white"
          }`}
        ></div>
        <div
          className={`flex-1 min-w-[300px] min-h-[200px] rounded-3xl shadow-xl ${
            darkMode ? "bg-[--sidebar-color]" : "bg-white"
          }`}
        ></div>
        <div
          className={`flex-1 min-w-[300px] min-h-[200px] rounded-3xl shadow-xl ${
            darkMode ? "bg-[--sidebar-color]" : "bg-white"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Dashboard;
