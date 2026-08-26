import { Link } from "react-router-dom";
import events from "./eventdata/events";

function Events() {
  return (
    <div className="min-h-screen px-6 py-14">

      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-12">
          <p className="mb-2 font-semibold uppercase tracking-widest text-blue-400">
            What's happening
          </p>

          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Upcoming Events
          </h1>

          <p className="mt-4 max-w-2xl text-slate-400">
            Explore our upcoming events and find something
            you would love to participate in.
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {events.map((event) => (
            <div
              key={event.id}
              className="group rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/10"
            >

              {/* Event number */}
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-lg bg-blue-500/10 px-3 py-1 text-sm font-bold text-blue-400">
                  EVENT #{event.id}
                </span>

                <span className="h-2 w-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50" />
              </div>

              <h2 className="text-2xl font-bold transition group-hover:text-blue-400">
                {event.title}
              </h2>

              <div className="mt-6 space-y-3 text-sm">

                <p className="text-slate-400">
                  <span className="font-semibold text-blue-400">
                    Date:
                  </span>{" "}
                  {event.date}
                </p>

                <p className="text-slate-400">
                  <span className="font-semibold text-blue-400">
                    Time:
                  </span>{" "}
                  {event.time}
                </p>

                <p className="text-slate-400">
                  <span className="font-semibold text-blue-400">
                    Location:
                  </span>{" "}
                  {event.location}
                </p>

              </div>

              <Link
                to={`/events/${event.id}`}
                className="mt-7 block rounded-xl bg-blue-600 px-5 py-3 text-center font-bold transition hover:bg-blue-500"
              >
                View Event Details →
              </Link>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Events;