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
    breakfast: "none",
    lunch: "none",
    dinner: "none",
    snacks: "none",
  });

  // Structured Meal Calorie Database
  const mealCalories = {
    breakfast: { none: 0, light: 300, moderate: 500, heavy: 700 },
    lunch: { none: 0, light: 500, moderate: 700, heavy: 900 },
    dinner: { none: 0, light: 400, moderate: 600, heavy: 800 },
    snacks: { none: 0, light: 150, moderate: 300, heavy: 500 },
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateCalories = () => {
    const { age, weight, height, meals, activity } = formData;

    let requiredCalories =
      10 * Number(weight) +
      6.25 * Number(height) -
      5 * Number(age) +
      5;

    if (activity === "medium") requiredCalories *= 1.2;
    if (activity === "high") requiredCalories *= 1.4;

    const consumedCalories =
      mealCalories.breakfast[formData.breakfast] +
      mealCalories.lunch[formData.lunch] +
      mealCalories.dinner[formData.dinner] +
      mealCalories.snacks[formData.snacks];

    return {
      totalCalories: Math.round(requiredCalories),
      perMealCalories: Math.round(requiredCalories / Number(meals)),
      consumedCalories,
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

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700"
          />

          <input
            type="number"
            name="weight"
            placeholder="Weight (kg)"
            value={formData.weight}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700"
          />

          <input
            type="number"
            name="height"
            placeholder="Height (cm)"
            value={formData.height}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700"
          />

          <input
            type="number"
            name="meals"
            placeholder="Meals per day"
            value={formData.meals}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700"
          />

          <select
            name="activity"
            value={formData.activity}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700"
          >
            <option value="low">Low Activity</option>
            <option value="medium">Medium Activity</option>
            <option value="high">High Activity</option>
          </select>

          {/* Meal Selection */}
          {["breakfast", "lunch", "dinner", "snacks"].map((meal) => (
            <select
              key={meal}
              name={meal}
              value={formData[meal]}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 capitalize"
            >
              <option value="none">{meal} - None</option>
              <option value="light">{meal} - Light</option>
              <option value="moderate">{meal} - Moderate</option>
              <option value="heavy">{meal} - Heavy</option>
            </select>
          ))}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-white"
          >
            Analyze Diet
          </button>
        </form>
      </div>
    </div>
  );
}

export default DietForm;