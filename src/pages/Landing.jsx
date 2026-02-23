import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Smart{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Diet Analyzer
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-400">
          Analyze your daily nutrition, calculate calories,
          and improve your health with intelligent insights.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <Link
            to="/form"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-lg font-semibold transition"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="px-6 py-3 border border-gray-600 hover:bg-gray-800 rounded-xl text-lg font-semibold transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;