import Navbar from "../components/Navbar";

export default function Academics() {
  const modules = [
    {
      code: "BT1101",
      title: "Introduction to Business Analytics",
    },
    {
      code: "BT2101",
      title: "Econometrics Modelling for Business Analytics",
    },
    {
      code: "BT2102",
      title: "Data Management and Visualisation",
    },
    {
      code: "BT2103",
      title: "Optimization Methods in Business Analytics",
    },
  ];

  return (
    <div className="relative isolate px-10 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="flex justify-center flex-col gap-10">
          <span className="text-2xl font-semibold">Modules Taught</span>
          <div className="flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-orange-500">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Module Code
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Module Title
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {modules.map((module) => (
                        <tr key={module.email}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {module.code}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {module.title}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
