import { ArrowRightOnRectangleIcon } from "@heroicons/react/20/solid";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Academics", href: "/academics" },
  { name: "Admission", href: "/admission" },
];

export default function Navbar() {
  const getClassName = (tabname) => {
    tabname = tabname == "home" ? "" : tabname;
    const currentURL =
      window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ];
    if (currentURL == tabname)
      return "text-lg font-semibold leading-6 text-stone-200 underline";
    return "text-lg font-semibold leading-6 hover:underline";
  };
  return (
    <header className="absolute inset-x-0 top-0 z-50 back bg-orange-500">
      <nav className="flex items-center gap-10 px-6 py-4" aria-label="Global">
        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5">
            <img
              className=" h-10 w-8"
              src="./NUS_coat_of_arms.png"
              alt="NUS Coat of Arms"
            />
          </a>
        </div>
        <div className="flex gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={getClassName(item.name.toLowerCase())}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex ml-auto items-center gap-2 justify-end text-white hover:underline">
          <a href="/login" className="font-semibold leading-6">
            Login
          </a>
          <ArrowRightOnRectangleIcon className="h-5 "></ArrowRightOnRectangleIcon>
        </div>
      </nav>
    </header>
  );
}
