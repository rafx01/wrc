import type { V2_MetaFunction } from "@remix-run/node";
import { HeroSection } from '../components/heroSection';
import { Header } from "~/components/header";
export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="p-4 overflow-auto flex flex-col">
      <div className="flex h-8 ">
      <Header/>
      </div>
    <HeroSection />
    </div>
  );
}
