import { useNavigate } from "react-router-dom";

const BidCredits = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      {" "}
      <div className="flex justify-between ">
        <h1
          className="  font-black text-blue-900 text-center      text-[2rem]"
        >
          Bid&nbsp;Credits{" "}
        </h1>
        <div>
          <button
                    onClick={() => navigate("/pricing/123hgf753257ry72")}

            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-3.5 h-3.5 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 21"
            >
              <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
            </svg>
            Buy Credits
          </button>
        </div>
      </div>
      <div className="mt-4 max-w-1/2 w-[15rem] border rounded-lg bg-white shadow-md py-5 px-6 flex flex-col gap-6">
        <p className="text-lg font-bold ">
          Avaiable Credits:&nbsp;<span className="text-blue-500">300</span>
        </p>
        <p className="text-lg font-bold ">
          Spent Credits:&nbsp;<span className="text-blue-500">600</span>
        </p>
      </div>
    </div>
  );
};

export default BidCredits;
