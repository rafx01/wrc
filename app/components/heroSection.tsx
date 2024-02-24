import { Carousel } from "flowbite-react";
import subaru from "app/public/images/subaru.jpg";
export function HeroSection() {
  return (
    <div className="flex w-full rounded-none h-full">
      <Carousel>
        <img src={subaru} alt="..." className="rounded-none" />
      </Carousel>
    </div>
  );
}
