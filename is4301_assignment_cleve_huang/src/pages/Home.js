import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div
      className="relative isolate px-10 pt-14 h-screen"
      style={{
        backgroundImage: `url(${require("../assets/erc.jpeg")})`,
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(5px)",
          zIndex: -10,
        }}
      ></div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="flex justify-center flex-col text-center">
          <img
            alt="NUS with typeface"
            className="h-28 w-auto mx-auto"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/NationalUniversityofSingapore.svg/2880px-NationalUniversityofSingapore.svg.png"
          />

          <p className="mt-6 text-lg font-semibold leading-8 text-black">
            NUS is a leading research university in Asia
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/admission"
              className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Admissions
            </a>
            <a
              href="/academics"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Modules <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
