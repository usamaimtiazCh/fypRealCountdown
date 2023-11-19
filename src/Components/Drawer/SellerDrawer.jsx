import { useState } from "react";
import { Button, Drawer, Space } from "antd";
import { useDispatch } from "react-redux";
import { funcdrawerstate } from "../../Redux/agentSlice";
const SellerDrawer = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const title = (
    <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
      RealCountdown
    </span>
  );
  const [activestate, setactivestate] = useState("dashboard");
  return (
    <>
      <Space>
        <Button onClick={showDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              fill="#172554"
              fillRule="evenodd"
              d="M2 8a1 1 0 0 1 1-1h10.308a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm0-4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h10.308a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </Space>
      <Drawer
        title={title}
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        key="left"
      >
        <div className="flex flex-col gap-7">
          <p
            onClick={() => {
              setactivestate("dashboard");
              dispatch(funcdrawerstate("dashboard"));
            }}
            className={`flex rounded-lg text-[20px] font-bold relative text-transparent shadow-md px-3 py-4 cursor-pointer ${
              activestate === "dashboard" ? "bg-slate-600 text-white" : ""
            }`}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    stroke="#1c7ce5"
                    strokeWidth="2.5"
                    d="M21 12a8.958 8.958 0 0 1-1.526 5.016A8.991 8.991 0 0 1 12 21a8.991 8.991 0 0 1-7.474-3.984A9 9 0 1 1 21 12Z"
                  />
                  <path
                    fill="#1c7ce5"
                    d="M12.75 9a.75.75 0 0 1-.75.75v2.5A3.25 3.25 0 0 0 15.25 9h-2.5Zm-.75.75a.75.75 0 0 1-.75-.75h-2.5A3.25 3.25 0 0 0 12 12.25v-2.5ZM11.25 9a.75.75 0 0 1 .75-.75v-2.5A3.25 3.25 0 0 0 8.75 9h2.5Zm.75-.75a.75.75 0 0 1 .75.75h2.5A3.25 3.25 0 0 0 12 5.75v2.5Zm-6.834 9.606L3.968 17.5l-.195.653l.444.517l.949-.814Zm13.668 0l.949.814l.444-.517l-.195-.653l-1.198.356ZM9 16.25h6v-2.5H9v2.5Zm0-2.5a5.252 5.252 0 0 0-5.032 3.75l2.396.713A2.752 2.752 0 0 1 9 16.25v-2.5Zm3 6a7.73 7.73 0 0 1-5.885-2.707L4.217 18.67A10.23 10.23 0 0 0 12 22.25v-2.5Zm3-3.5c1.244 0 2.298.827 2.636 1.963l2.396-.713A5.252 5.252 0 0 0 15 13.75v2.5Zm2.885.793A7.73 7.73 0 0 1 12 19.75v2.5a10.23 10.23 0 0 0 7.783-3.58l-1.898-1.627Z"
                  />
                </g>
              </svg>
            </span>
            &nbsp;
            <span className="bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300  ">
              Dashboard
            </span>
          </p>
          <p
            onClick={() => {
              setactivestate("profile");
              dispatch(funcdrawerstate("profile"));
            }}
            className={`flex rounded-lg text-[20px] font-bold relative text-transparent shadow-md px-3 py-4 cursor-pointer ${
              activestate === "profile" ? "bg-slate-600 text-white" : ""
            }`}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    stroke="#1c7ce5"
                    strokeWidth="2.5"
                    d="M21 12a8.958 8.958 0 0 1-1.526 5.016A8.991 8.991 0 0 1 12 21a8.991 8.991 0 0 1-7.474-3.984A9 9 0 1 1 21 12Z"
                  />
                  <path
                    fill="#1c7ce5"
                    d="M12.75 9a.75.75 0 0 1-.75.75v2.5A3.25 3.25 0 0 0 15.25 9h-2.5Zm-.75.75a.75.75 0 0 1-.75-.75h-2.5A3.25 3.25 0 0 0 12 12.25v-2.5ZM11.25 9a.75.75 0 0 1 .75-.75v-2.5A3.25 3.25 0 0 0 8.75 9h2.5Zm.75-.75a.75.75 0 0 1 .75.75h2.5A3.25 3.25 0 0 0 12 5.75v2.5Zm-6.834 9.606L3.968 17.5l-.195.653l.444.517l.949-.814Zm13.668 0l.949.814l.444-.517l-.195-.653l-1.198.356ZM9 16.25h6v-2.5H9v2.5Zm0-2.5a5.252 5.252 0 0 0-5.032 3.75l2.396.713A2.752 2.752 0 0 1 9 16.25v-2.5Zm3 6a7.73 7.73 0 0 1-5.885-2.707L4.217 18.67A10.23 10.23 0 0 0 12 22.25v-2.5Zm3-3.5c1.244 0 2.298.827 2.636 1.963l2.396-.713A5.252 5.252 0 0 0 15 13.75v2.5Zm2.885.793A7.73 7.73 0 0 1 12 19.75v2.5a10.23 10.23 0 0 0 7.783-3.58l-1.898-1.627Z"
                  />
                </g>
              </svg>
            </span>
            &nbsp;
            <span className="bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300  ">
              Profile
            </span>
          </p>
          <p
            onClick={() => {
              setactivestate("alllistings");
              dispatch(funcdrawerstate("alllistings"));
            }}
            className={`flex gap-3 rounded-lg text-[20px] font-bold relative text-transparent    shadow-md px-3 py-4 cursor-pointer ${
              activestate === "alllistings" ? "bg-slate-600 text-white" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="#1c7ce5"
                d="M704 192h160v736H160V192h160v64h384v-64zM288 512h448v-64H288v64zm0 256h448v-64H288v64zm96-576V96h256v96H384z"
              />
            </svg>
            <span className="bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300  ">
              All&nbsp;Listings
            </span>
          </p>
          <p
            onClick={() => {
              setactivestate("activelistings");
              dispatch(funcdrawerstate("activelistings"));
            }}
            className={`flex gap-3 rounded-lg text-[20px] font-bold relative text-transparent    shadow-md px-3 py-4 cursor-pointer ${
              activestate === "activelistings" ? "bg-slate-600 text-white" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#1c7ce5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.615 20H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8m-3 5l2 2l4-4M9 8h4m-4 4h2"
              />
            </svg>{" "}
            <span className="bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300  ">
              Active&nbsp;Listings
            </span>
          </p>
          <p
            onClick={() => {
              setactivestate("addlistings");
              dispatch(funcdrawerstate("addlistings"));
            }}
            className={`flex gap-3 rounded-lg text-[20px] font-bold relative text-transparent    shadow-md px-3 py-4 cursor-pointer ${
              activestate === "addlistings" ? "bg-slate-600 text-white" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
            >
              <path
                fill="#1c7ce5"
                d="M17.5 21h1v-2.5H21v-1h-2.5V15h-1v2.5H15v1h2.5V21Zm.5 2q-2.075 0-3.538-1.463T13 18q0-2.075 1.463-3.538T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23ZM9 7V5h12v2H9ZM5 20q-.825 0-1.413-.588T3 18q0-.825.588-1.413T5 16q.825 0 1.413.588T7 18q0 .825-.588 1.413T5 20Zm0-6q-.825 0-1.413-.588T3 12q0-.825.588-1.413T5 10q.825 0 1.413.588T7 12q0 .825-.588 1.413T5 14Zm0-6q-.825 0-1.413-.588T3 6q0-.825.588-1.413T5 4q.825 0 1.413.588T7 6q0 .825-.588 1.413T5 8Zm4 11v-2h2.075Q11 17.5 11 18t.075 1H9Zm0-6v-2h9q-1.425 0-2.675.537T13.125 13H9Z"
              />
            </svg>{" "}
            <span className="bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300  ">
              Add&nbsp;Listings
            </span>
          </p>

          <p
            onClick={() => setactivestate("logout")}
            className={`flex gap-3 rounded-lg text-[20px] font-bold relative text-transparent    shadow-md px-3 py-4 cursor-pointer`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#1c7ce5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 12h-9.5m7.5 3l3-3l-3-3m-5-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-1"
              />
            </svg>
            <span className="bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300  ">
              LogOut
            </span>
          </p>
        </div>
      </Drawer>
    </>
  );
};
export default SellerDrawer;
