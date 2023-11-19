import { PropertyComp } from "../../Components/Properties/property";

const ActiveListings = () => {
  const arry = [1, 2, 3, 4, 5, 6, 7, 8, 6, 5, 4, 3, 2, 2];

  return (
    <div className="py-[1rem] px-10">
      {" "}
      <h1 className="mb-4 sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-center  lg:w-auto lg:text-left  dark:text-white text-[2rem]">
        Active&nbsp;Listings{" "}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 w-full">
        {arry?.map((data) => (
          <div key={data}>
            <PropertyComp showbid={false} showtimer={false} startcount={false} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveListings;
