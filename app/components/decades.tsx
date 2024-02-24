import subaru from "app/public/images/subaru.jpg";

type TDecades = {
  title: string;
  description: string;
};

export function Decades() {
  return (
    <div className="grid grid-rows-2 items-center justify-center grid-flow-col gap-y-10 gap-x-28 w-full">
      <div className="">
        <CarCard title={"50's"} description={"Lorem abuble"} />
      </div>
      <div className="">
        <CarCard title={"90's"} description={"Abuble Lorem"} />
      </div>
      <div className="">
        <CarCard title={"60's"} description={"abuble abuble"} />
      </div>
      <div className="">
        <CarCard title={"00's"} description={"abuble abuble"} />
      </div>
      <div className="">
        <CarCard title={"70's"} description={"abuble abuble"} />
      </div>
      <div className="">
        <CarCard title={"10's"} description={"abuble abuble"} />
      </div>
      <div className="">
        <CarCard title={"80's"} description={"abuble abuble"} />
      </div>
      <div className="">
        <CarCard title={"20's"} description={"abuble abuble"} />
      </div>
    </div>
  );
}

function CarCard({ title, description }: TDecades) {
  return (
    <div className="border-2 border-slate-400 bg-[#141414] flex w-80 h-96 rounded-lg">
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
