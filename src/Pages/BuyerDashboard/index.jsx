import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./Dashboard";
import UploadListing from "./UploadRequirments";
import Profile from "./profile";
import BuyerDrawer from "../../Components/Drawer/drawer";
import AllProperties from "./AllListings";
import ActiveListings from "./ActiveListings";
import { funcdrawerstate } from "../../Redux/agentSlice";
import { useEffect } from "react";

const BuyerDashboard = () => {
  const ReduxData = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(funcdrawerstate("dashboard"));
  }, []);
  return (
    <div className="py-[6rem] min-h-screen px-10 ">
      <div className="flex">
        <div className="w-1/12">
          <BuyerDrawer />
        </div>
        <div className="flex justify-center w-5/6">
          {ReduxData?.agentSlice?.drawerstate === "profile" ? (
            <Profile />
          ) : ReduxData?.agentSlice?.drawerstate === "dashboard" ? (
            <Dashboard />
          ) : ReduxData?.agentSlice?.drawerstate === "alllistings" ? (
            <AllProperties />
          ) : ReduxData?.agentSlice?.drawerstate === "activelistings" ? (
            <ActiveListings />
          ) : (
            <UploadListing />
          )}
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
