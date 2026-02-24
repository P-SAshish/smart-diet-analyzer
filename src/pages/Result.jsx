import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        <h2>No Data Found</h2>
      </div>
    );
  }

  const {
    requiredCalories,
    perMealCalories,
    consumedCalories,
    age,
    weight,
    height,
    meals,
    activity,
  } = location.state;

  const difference = consumedCalories - requiredCalories;

  let statusMessage = "";
  let statusColor = "";

  if (difference > 100) {
    statusMessage = "You are in Calorie Surplus.";
    statusColor = "text-red-400";
  } else if (difference < -100) {
    statusMessage = "You are in Calorie Deficit.";
    statusColor = "text-yellow-400";
  } else {
    statusMessage = "You are Balanced. Great job!";
    statusColor = "text-green-400";
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        Your Diet Analysis
      </h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Required Calories */}
        <div className="bg-slate-900 p-8 rounded-2xl shadow-xl text-center">
          <h3 className="text-lg text-gray-400">Required Daily Calories</h3>
          <p className="text-3xl font-bold text-purple-400 mt-3">
            {requiredCalories} kcal
          </p>
        </div>

        {/* Consumed Calories */}
        <div className="bg-slate-900 p-8 rounded-2xl shadow-xl text-center">
          <h3 className="text-lg text-gray-400">Calories Consumed</h3>
          <p className="text-3xl font-bold text-pink-400 mt-3">
            {consumedCalories} kcal
          </p>
        </div>

        {/* Per Meal */}
        <div className="bg-slate-900 p-8 rounded-2xl shadow-xl text-center md:col-span-2">
          <h3 className="text-lg text-gray-400">Calories Per Meal</h3>
          <p className="text-2xl font-bold mt-3">
            {perMealCalories} kcal
          </p>
        </div>

        {/* User Details */}
        <div className="bg-slate-900 p-8 rounded-2xl shadow-xl md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Your Details</h3>
          <p>Age: {age}</p>
          <p>Weight: {weight} kg</p>
          <p>Height: {height} cm</p>
          <p>Meals per day: {meals}</p>
          <p>Activity Level: {activity}</p>

          <p className={`mt-6 text-lg font-semibold ${statusColor}`}>
            {statusMessage}
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/dietform")}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold"
        >
          Re-Analyze
        </button>
      </div>
    </div>
  );
}

export default Result;