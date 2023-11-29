export function Header (){
    return(
      <div className="bg-blue-200 flex-row w-full h-10 flex items-center justify-center">
        <nav className="gap-x-2">
            <div className="">
                {
                    navItems.map(item => {
                        return(
                            <a href={item.href}>
                                <button className="bg-orange-200">{item.name}</button></a>
                        )
                    })
                }
            </div>
        </nav>
      </div>
    )
  }

  const navItems = [
    { name: "Decades", href: "/" },
    { name: "Hall of Fame", href: "/about" },
  ]