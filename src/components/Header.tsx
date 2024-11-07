
import DarkmodeToggle from "./DarkModeToggle";
import Typography from "./Typography";

const items = [
  {
    name: "Article",
    href: "/",
  },
  {
    name: "Gallery",
    href: "/about",
  },
  {
    name: "Features",
    href: "/contact",
  },
  {
    name: "Othe_links",
    href: "/other",
  },
];

const Header = () => {
  return (
    <>
      <div className="flex justify-center p-5 ">
        <div className="flex flex-col gap-4 w-3/5 items-center md:flex-row md:justify-between duration-300 md:delay-100">
          <div className="items-center text-[22px] text-sky-500 font-semibold">Dev_Squad</div>
          <div className="flex">
            <ul className="flex flex-row gap-4 list-none">
              {
                items.map((item, key) => (
                  <li key={key}><Typography size="md">{item.name}</Typography></li>
                ))
              }
            </ul>
          </div>

        </div>

      </div>
      <div>
        <DarkmodeToggle />
      </div>
    </>
  )
}

export default Header;