import { useDispatch, useSelector } from "react-redux";
import AgentDrawer from "../../Components/Drawer/AgentDrawer";
import Profile from "./profile";
import AllProperties from "./properties";
import ActiveProperties from "./activeproperties";
import BidCredits from "./bidcredits";
import Dashboard from "./Dashboard";
import { funcdrawerstate } from "../../Redux/agentSlice";
import { useEffect } from "react";

const AgentDashboard = () => {
  const ReduxData = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(funcdrawerstate("dashboard"));
  }, []);
  return (
    <div className="py-[6rem] min-h-screen px-10 ">
      <div className="flex">
        <div className="w-1/12">
          <AgentDrawer />
        </div>
        <div className="flex justify-center w-[90%]">
          {ReduxData?.agentSlice?.drawerstate === "profile" ? (
            <Profile />
          ) : ReduxData?.agentSlice?.drawerstate === "activelistings" ? (
            <ActiveProperties />
          ) : ReduxData?.agentSlice?.drawerstate === "bidcredits" ? (
            <BidCredits />
          ) : ReduxData?.agentSlice?.drawerstate === "dashboard" ? (
            <Dashboard />
          ) : (
            <AllProperties />
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;
