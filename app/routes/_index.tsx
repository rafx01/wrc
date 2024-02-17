import type { V2_MetaFunction } from "@remix-run/node";
import { HeroSection } from "../components/heroSection";
import { Header } from "~/components/header";
export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className=" overflow-auto h-screen bg-slate-700 flex flex-col">
      <div className="flex ">
        <Header />
      </div>
      <div className="flex">
        <HeroSection />
      </div>
    </div>
  );
}
