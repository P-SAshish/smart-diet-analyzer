import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <h2>No data found. Please fill the form first.</h2>
      </div>
    );
  }

  const {
    age,
    weight,
    height,
    meals,
    activity,
    totalCalories,
    perMealCalories,
    consumedCalories,
  } = location.state;

  // 🔥 Determine calorie status
  let status = "";
  let message = "";

  const difference = consumedCalories - totalCalories;

  if (Math.abs(difference) <= 100) {
    status = "Balanced ⚖";
    message = "Great job! Your calorie intake matches your requirement.";
  } else if (difference > 100) {
    status = "Calorie Surplus 🔺";
    message =
      "You are consuming more calories than required. This may lead to weight gain.";
  } else {
    status = "Calorie Deficit 🔻";
    message =
      "You are consuming fewer calories than required. This may lead to weight loss.";
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        Your Diet Analysis
      </h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-slate-900 p-6 rounded-2xl text-center">
          <h3 className="text-gray-400">Total Daily Calories Needed</h3>
          <p className="text-3xl font-bold text-purple-400 mt-3">
            {totalCalories} kcal
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl text-center">
          <h3 className="text-gray-400">Calories Consumed</h3>
          <p className="text-3xl font-bold text-pink-400 mt-3">
            {consumedCalories} kcal
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl text-center md:col-span-2">
          <h3 className="text-gray-400">Calories Per Meal</h3>
          <p className="text-2xl font-bold mt-3">
            {perMealCalories} kcal
          </p>
        </div>

        {/* 🔥 Conclusion Card */}
        <div className="bg-slate-800 p-6 rounded-2xl text-center md:col-span-2">
          <h3 className="text-xl font-semibold mb-3">Conclusion</h3>
          <p className="text-2xl font-bold mb-2">{status}</p>
          <p className="text-gray-300">{message}</p>
        </div>
      </div>

      <div className="text-center mt-10 space-x-4">
        <button
          onClick={() => navigate("/form")}
          className="bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700 transition"
        >
          Analyze Again
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-green-600 px-6 py-3 rounded-xl hover:bg-green-700 transition"
        >
          Go to Admin Dashboard
        </button>
      </div>
    </div>
  );
}

export default Result;