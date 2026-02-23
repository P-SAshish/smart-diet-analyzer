import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DietForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    meals: "",
    activity: "low",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateCalories = () => {
    const { age, weight, height, meals, activity } = formData;

    let baseCalories =
      10 * Number(weight) +
      6.25 * Number(height) -
      5 * Number(age) +
      5;

    if (activity === "medium") baseCalories *= 1.2;
    if (activity === "high") baseCalories *= 1.4;

    const mealCalories = baseCalories / Number(meals);

    return {
      totalCalories: Math.round(baseCalories),
      perMealCalories: Math.round(mealCalories),
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = calculateCalories();

    navigate("/result", {
      state: {
        ...formData,
        ...result,
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="bg-slate-900 p-10 rounded-2xl shadow-2xl w-full max-w-lg">
        
        <h2 className="text-3xl font-bold text-white text-center">
          Analyze Your Diet
        </h2>

        <p className="text-gray-400 text-center mt-2">
          Enter your details to calculate daily calories
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="number"
            name="weight"
            placeholder="Weight (kg)"
            value={formData.weight}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="number"
            name="height"
            placeholder="Height (cm)"
            value={formData.height}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="number"
            name="meals"
            placeholder="Meals per day"
            value={formData.meals}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <select
            name="activity"
            value={formData.activity}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="low">Low Activity</option>
            <option value="medium">Medium Activity</option>
            <option value="high">High Activity</option>
          </select>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-white hover:opacity-90 transition"
          >
            Analyze Diet
          </button>
        </form>
      </div>
    </div>
  );
}

export default DietForm;