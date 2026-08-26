import { Link } from "react-router-dom";

function HomeEvent() {
  return (
    <div className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden">

      {/* Background effects */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 py-20 text-center">

        <span className="mb-6 inline-block rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
          Welcome to EventHub
        </span>

        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
          Discover.
          <span className="block text-blue-400">
            Join. Experience.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Discover upcoming events, explore event details,
          and register for activities happening around your
          campus.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            to="/events"
            className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3 font-bold transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30"
          >
            Explore Events →
          </Link>

        </div>

      </div>
    </div>
  );
}

export default HomeEvent;