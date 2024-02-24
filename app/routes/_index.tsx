import type { V2_MetaFunction } from "@remix-run/node";
import { HeroSection } from "../components/heroSection";
import { Header } from "~/components/header";
import { Decades } from "app/components/decades";
export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="overflow-auto space-y-10 h-screen mx-auto px-10 bg-[#141414] flex flex-col">
      <div className="flex">
        <Header />
      </div>
      <div className="flex h-full shrink-0">
        <HeroSection />
      </div>
      <div className="flex h-full">
        <Decades />
      </div>
    </div>
  );
}
