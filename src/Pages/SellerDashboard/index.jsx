import { useEffect } from "react";
import SellerDrawer from "../../Components/Drawer/SellerDrawer";
import ActiveListings from "./ActiveListings";
import AllProperties from "./AllListings";
import Dashboard from "./Dashboard";
import UploadListing from "./UploadListings";
import Profile from "./profile";
import { useDispatch, useSelector } from "react-redux";
import { funcdrawerstate } from "../../Redux/agentSlice";

const SellerDashboard = () => {
  const ReduxData = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(funcdrawerstate("dashboard"));
  }, []);

  return (
    <div className="py-[6rem] min-h-screen px-20 w-full ">
      <div className="flex">
        <div className="">
          <SellerDrawer />
        </div>
        <div className="flex justify-center w-full">
          {ReduxData?.agentSlice?.drawerstate === "profile" ? (
            <Profile />
          ) : ReduxData?.agentSlice?.drawerstate === "alllistings" ? (
            <AllProperties />
          ) : ReduxData?.agentSlice?.drawerstate === "activelistings" ? (
            <ActiveListings />
          ) : ReduxData?.agentSlice?.drawerstate === "dashboard" ? (
            <Dashboard />
          ) : (
            <UploadListing />
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
