import WRCLogo from "app/public/images/wrclogo.png";

export function Header() {
  return (
    <div className="bg-slate-800 flex-row w-full h-32 flex ">
      <div className="flex h-full pt-3 pl-3">
        <img src={WRCLogo} className="w-52 h-24 flex " />
      </div>
      <div className="flex items-center justify-center w-full">
        <nav className="space-x-4">
          <div className="font-medium font-sans">
            {navItems.map((item) => {
              return (
                <a href={item.href}>
                  <button className="bg-orange-200">{item.name}</button>
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}

const navItems = [
  { name: "Decades", href: "/" },
  { name: "Hall of Fame", href: "/about" },
];
