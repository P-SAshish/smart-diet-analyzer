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
    food: "",
  });

  const foodDatabase = {
    rice: 200,
    egg: 70,
    milk: 150,
    bread: 80,
    chicken: 250,
    apple: 95,
    banana: 105,
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateCalories = () => {
    const { age, weight, height, meals, activity, food } = formData;

    let requiredCalories =
      10 * Number(weight) +
      6.25 * Number(height) -
      5 * Number(age) +
      5;

    if (activity === "medium") requiredCalories *= 1.2;
    if (activity === "high") requiredCalories *= 1.4;

    let consumedCalories = 0;
    const foods = food.toLowerCase().split(",");

    foods.forEach((item) => {
      const trimmed = item.trim();
      if (foodDatabase[trimmed]) {
        consumedCalories += foodDatabase[trimmed];
      }
    });

    return {
      requiredCalories: Math.round(requiredCalories),
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

          <textarea
            name="food"
            placeholder="Enter foods eaten today (comma separated e.g. rice, egg, milk)"
            value={formData.food}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700"
          />

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