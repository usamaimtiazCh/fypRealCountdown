import { PropertyComp } from "../../Components/Properties/property";

const Properties = () => {
  const arry = [1, 2, 3, 4, 5, 6, 7, 8, 6, 5, 4, 3, 2, 2];

  return (
    <div className="py-[7rem] px-10">
      {" "}
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 w-full">
        {arry?.map((data) => (
          <div key={data}>
            <PropertyComp />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
