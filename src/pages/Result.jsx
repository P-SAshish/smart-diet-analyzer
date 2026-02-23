import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold">No Data Found</h2>
          <button
            onClick={() => navigate("/form")}
            className="mt-6 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
          >
            Go Back
          </button>
        </div>
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
  } = data;

  const getMessage = () => {
    if (activity === "low")
      return "Consider adding light exercise to improve overall health.";
    if (activity === "medium")
      return "Great balance! Maintain your current lifestyle.";
    if (activity === "high")
      return "Excellent activity level! Keep fueling your body properly.";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-4xl font-bold text-center mb-12">
          Your Diet Analysis
        </h1>

        {/* Stat Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 p-8 rounded-2xl shadow-xl text-center">
            <h3 className="text-gray-400 text-lg">Total Daily Calories</h3>
            <p className="text-4xl font-bold mt-4 text-purple-400">
              {totalCalories} kcal
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl shadow-xl text-center">
            <h3 className="text-gray-400 text-lg">Calories Per Meal</h3>
            <p className="text-4xl font-bold mt-4 text-pink-400">
              {perMealCalories} kcal
            </p>
          </div>
        </div>

        {/* Details Section */}
        <div className="bg-slate-900 p-8 rounded-2xl shadow-xl mt-10">
          <h3 className="text-2xl font-semibold mb-6">
            Your Details
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Weight:</strong> {weight} kg</p>
            <p><strong>Height:</strong> {height} cm</p>
            <p><strong>Meals per day:</strong> {meals}</p>
            <p><strong>Activity level:</strong> {activity}</p>
          </div>

          <p className="mt-8 text-purple-400 font-medium">
            {getMessage()}
          </p>
        </div>

        {/* Buttons */}
        <div className="text-center mt-10 flex justify-center gap-6">
          <button
            onClick={() => navigate("/form")}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Analyze Again
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="px-8 py-3 bg-slate-800 border border-slate-700 rounded-xl font-semibold hover:bg-slate-700 transition"
          >
            Go to Dashboard
          </button>
        </div>

      </div>
    </div>
  );
}

export default Result;