import WRCLogo from "app/public/images/wrclogo.png";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@remix-run/react";
export function Header() {
  return (
    <div className=" flex-row w-full h-32 justify-between flex ">
      <div className="flex h-full  items-center">
        <div>
          <img src={WRCLogo} className="w-52 h-24 flex " />
        </div>
      </div>
      <div className="flex items-center  w-fit h-full">
        <nav>
          <div className="font-medium font-sans mx-auto items-center justify-center">
            {navItems.map((item) => {
              return (
                <Link to={item.href}>
                  <Button className="text-slate-400" variant="ghost">
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
      <div className=" h-full items-center flex">
        <div className="flex h-fit ">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="text-slate-400" variant="ghost">
                Actions
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel onClick={() => {}}>Vehicles</DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

const navItems = [
  { name: "Decades", href: "/" },
  { name: "Hall of Fame", href: "/hof.tsx" },
];
