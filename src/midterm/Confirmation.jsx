import {
  Link,
  useLocation,
  Navigate,
} from "react-router-dom";

function Confirmation() {
  const location = useLocation();

  const registrationData = location.state;

  if (!registrationData) {
    return <Navigate to="/events" replace />;
  }

  return (
    <div className="flex min-h-[calc(100vh-73px)] items-center justify-center px-6 py-14">

      <div className="w-full max-w-2xl rounded-3xl border border-green-500/20 bg-slate-900 p-8 text-center shadow-2xl sm:p-12">

        {/* Success icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-4xl text-green-400">
          ✓
        </div>

        <p className="mt-6 font-semibold uppercase tracking-widest text-green-400">
          Registration Complete
        </p>

        <h1 className="mt-2 text-4xl font-extrabold">
          You're All Set!
        </h1>

        <p className="mt-4 text-slate-400">
          Thank you for registering,
          <span className="font-semibold text-white">
            {" "}
            {registrationData.name}
          </span>
          !
        </p>

        {/* Event information */}
        {registrationData.event && (
          <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 text-left">

            <p className="text-sm font-semibold text-blue-400">
              YOUR EVENT
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              {registrationData.event.title}
            </h2>

            <div className="mt-4 space-y-2 text-slate-400">

              <p>
                <span className="text-slate-200">
                  Date:
                </span>{" "}
                {registrationData.event.date}
              </p>

              <p>
                <span className="text-slate-200">
                  Time:
                </span>{" "}
                {registrationData.event.time}
              </p>

              <p>
                <span className="text-slate-200">
                  Location:
                </span>{" "}
                {registrationData.event.location}
              </p>

            </div>

          </div>
        )}

        <p className="mt-6 text-sm text-slate-500">
          Registration email:{" "}
          <span className="text-slate-300">
            {registrationData.email}
          </span>
        </p>

        <Link
          to="/events"
          className="mt-8 inline-block rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3 font-bold transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30"
        >
          Explore More Events →
        </Link>

      </div>
    </div>
  );
}

export default Confirmation;