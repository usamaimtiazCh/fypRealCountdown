import { AgentComp } from "../../Components/Agents/agent";

const Agents = () => {
  const arry = [1, 2, 3, 4, 5, 6, 7, 8, 6, 5, 4, 3, 2, 2];
  return (
    <div className="py-10 grid grid-cols-3 gap-4">
      {arry?.map((data) => (
        <div key={data}>
          <AgentComp />
        </div>
      ))}
    </div>
  );
};

export default Agents;
