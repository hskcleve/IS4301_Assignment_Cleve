import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithGoogle, auth, logout } from "../firebase";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/20/solid";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Academics", href: "/academics" },
  { name: "Admission", href: "/admission" },
];

export default function Navbar() {
  const [user] = useAuthState(auth);
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
          <a href="/" className="-m-1.5 p-1.5">
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
        {user ? (
          <div className="ml-auto flex items-center gap-2">
            <div className="font-light flex flex-col tracking-tight text-right leading-tight">
              <span className="text-xs">Signed in as:</span>
              <span className="font-bold text-sm">{user.displayName}</span>
            </div>
            <button
              onClick={() => {
                logout();
              }}
              className="ml-auto rounded-md bg-blue-600 px-3.5 py-2.5 
          text-sm font-semibold text-white shadow-sm hover:bg-blue-500 
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
          focus-visible:outline-indigo-600"
            >
              <div className="flex items-center gap-2">
                <ArrowLeftOnRectangleIcon className="h-5"></ArrowLeftOnRectangleIcon>
                <span>Sign out</span>
              </div>
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              signInWithGoogle();
            }}
            className="ml-auto rounded-md bg-blue-600 px-3.5 py-2.5 
          text-sm font-semibold text-white shadow-sm hover:bg-blue-500 
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
          focus-visible:outline-indigo-600"
          >
            <div className="flex items-center">
              <img
                className=" h-6 w-6 bg-white rounded-3xl mr-2"
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt="fucky"
              />
              <span>
                Login with <span className="font-bold">Google</span>
              </span>
            </div>
          </button>
        )}
      </nav>
    </header>
  );
}
