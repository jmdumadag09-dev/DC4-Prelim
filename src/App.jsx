import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomeEvent from "./midterm/HomeEvent";
import Events from "./midterm/Events";
import EventDetails from "./midterm/EventDetails";
import Registration from "./midterm/Registration";
import Confirmation from "./midterm/Confirmation";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white">

        {/* NAVBAR */}
        <nav className="sticky top-0 z-50 border-b border-blue-500/20 bg-slate-950/90 px-6 py-4 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between">

            <Link
              to="/"
              className="text-2xl font-extrabold tracking-wide text-blue-400"
            >
              EVENTHUB
            </Link>

            <div className="flex gap-6">
              <Link
                to="/"
                className="font-medium text-slate-300 transition hover:text-blue-400"
              >
                Home
              </Link>

              <Link
                to="/events"
                className="font-medium text-slate-300 transition hover:text-blue-400"
              >
                Events
              </Link>
            </div>

          </div>
        </nav>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<HomeEvent />} />

          <Route
            path="/events"
            element={<Events />}
          />

          <Route
            path="/events/:id"
            element={<EventDetails />}
          />

          <Route
            path="/register/:id"
            element={<Registration />}
          />

          <Route
            path="/confirmation"
            element={<Confirmation />}
          />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;