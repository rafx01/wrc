import subaru from "app/public/images/subaru.jpg";
import { content } from "./decades-content";
import { getMongoData } from "~/hooks/useGetData";
type TDecades = {
  title: string;
  description: string;
};

const data = getMongoData();

export function Decades() {
  return (
    <div className="grid grid-rows-2 items-center justify-center grid-flow-col gap-y-10 gap-x-28 w-full">
      {content.map((item) => (
        <CarCard title={item.decade} description={item.description} />
      ))}
    </div>
  );
}

function CarCard({ title, description }: TDecades) {
  return (
    <div className="border-2 border-slate-700 bg-[#141414] flex w-80 h-96 rounded-lg">
      <div className=" space-y-2">
        <div>
          <img className="rounded-t-lg" src={subaru} alt="..." />
        </div>
        <div className="text-slate-400 font-bold font-sans px-4">
          <div>{title}</div>
          <div className="font-medium">{description}</div>
        </div>
      </div>
    </div>
  );
}
