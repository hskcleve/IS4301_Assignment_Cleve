import Navbar from "../components/Navbar";
import {
  CheckIcon,
  DocumentCheckIcon,
  PencilSquareIcon,
  DocumentArrowUpIcon,
  BanknotesIcon,
} from "@heroicons/react/20/solid";

export default function Admission() {
  const timeline = [
    {
      id: 1,
      content: "Understanding",
      target: "Admission Requirements",
      extra: "",
      icon: CheckIcon,
      iconBackground: "bg-gray-400",
    },
    {
      id: 2,
      content: "",
      target: "Submit application",
      extra: "online",
      icon: PencilSquareIcon,
      iconBackground: "bg-blue-500",
    },
    {
      id: 3,
      content: "Upload",
      target: "supporting documents",
      extra: "",
      icon: DocumentArrowUpIcon,
      iconBackground: "bg-green-500",
    },
    {
      id: 4,
      content: "Make",
      target: "application fee",
      extra: "payment",
      icon: BanknotesIcon,
      iconBackground: "bg-blue-500",
    },
    {
      id: 5,
      content: "Check",
      target: "application status",
      extra: "",
      icon: DocumentCheckIcon,
      iconBackground: "bg-green-500",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="relative isolate px-10 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="flex justify-center flex-col gap-10">
          <span className="text-2xl font-semibold">Admission Timeline</span>
          <div className="flow-root">
            <ul role="list" className="-mb-8">
              {timeline.map((event, eventIdx) => (
                <li key={event.id}>
                  <div className="relative pb-8">
                    {eventIdx !== timeline.length - 1 ? (
                      <span
                        className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span
                          className={classNames(
                            event.iconBackground,
                            "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                          )}
                        >
                          <event.icon
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                        <div>
                          <p className="text-sm text-gray-500">
                            {event.content}{" "}
                            <span
                              href={event.href}
                              className="font-medium text-gray-900"
                            >
                              {event.target}
                            </span>{" "}
                            {event.extra}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
