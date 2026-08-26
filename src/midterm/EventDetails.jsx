import { Link, useParams } from "react-router-dom";
import events from "./eventdata/events";

function EventDetails() {
  const { id } = useParams();

  const event = events.find(
    (event) => event.id === id
  );

  if (!event) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">

          <h1 className="text-4xl font-bold text-red-400">
            Event Not Found
          </h1>

          <Link
            to="/events"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold"
          >
            ← Back to Events
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-14">

      <div className="mx-auto max-w-3xl">

        <div className="overflow-hidden rounded-3xl border border-blue-500/20 bg-slate-900 shadow-2xl">

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-500/10 p-8">

            <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
              EVENT #{event.id}
            </span>

            <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
              {event.title}
            </h1>

          </div>

          {/* Details */}
          <div className="p-8">

            <div className="grid gap-4 sm:grid-cols-3">

              <div className="rounded-xl bg-slate-800/70 p-4">
                <p className="text-sm text-slate-500">
                  DATE
                </p>
                <p className="mt-1 font-semibold">
                  {event.date}
                </p>
              </div>

              <div className="rounded-xl bg-slate-800/70 p-4">
                <p className="text-sm text-slate-500">
                  TIME
                </p>
                <p className="mt-1 font-semibold">
                  {event.time}
                </p>
              </div>

              <div className="rounded-xl bg-slate-800/70 p-4">
                <p className="text-sm text-slate-500">
                  LOCATION
                </p>
                <p className="mt-1 font-semibold">
                  {event.location}
                </p>
              </div>

            </div>

            <div className="mt-8">

              <h2 className="text-xl font-bold">
                About this event
              </h2>

              <p className="mt-3 leading-7 text-slate-400">
                {event.description}
              </p>

            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to={`/register/${event.id}`}
                state={{ event }}
                className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3 font-bold transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30"
              >
                Register for This Event
              </Link>

              <Link
                to="/events"
                className="rounded-xl border border-slate-700 px-7 py-3 font-semibold text-slate-300 transition hover:border-blue-400 hover:text-blue-400"
              >
                ← Back
              </Link>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default EventDetails;