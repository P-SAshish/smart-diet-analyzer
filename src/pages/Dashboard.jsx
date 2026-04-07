import { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://smart-diet-backend.onrender.com/history")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  const totalUsers = data.length;

  const deficit = data.filter((d) => d.status === "Deficit").length;
  const surplus = data.filter((d) => d.status === "Surplus").length;
  const balanced = data.filter((d) => d.status === "Balanced").length;

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6 mb-10">
        <div className="bg-blue-500 p-6 rounded-xl text-center">
          <h2 className="text-xl">Total Reports</h2>
          <p className="text-3xl font-bold">{totalUsers}</p>
        </div>

        <div className="bg-red-500 p-6 rounded-xl text-center">
          <h2 className="text-xl">Deficit</h2>
          <p className="text-3xl font-bold">{deficit}</p>
        </div>

        <div className="bg-green-500 p-6 rounded-xl text-center">
          <h2 className="text-xl">Surplus</h2>
          <p className="text-3xl font-bold">{surplus}</p>
        </div>

        <div className="bg-purple-500 p-6 rounded-xl text-center">
          <h2 className="text-xl">Balanced</h2>
          <p className="text-3xl font-bold">{balanced}</p>
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl p-6">
        <h2 className="text-2xl mb-4">Recent Reports</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-2">Age</th>
              <th>Weight</th>
              <th>Height</th>
              <th>Calories</th>
              <th>Consumed</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item._id} className="border-b border-gray-800">
                <td className="py-2">{item.age}</td>
                <td>{item.weight}</td>
                <td>{item.height}</td>
                <td>{item.totalCalories}</td>
                <td>{item.consumedCalories}</td>
                <td
                  className={
                    item.status === "Surplus"
                      ? "text-green-400"
                      : item.status === "Deficit"
                      ? "text-red-400"
                      : "text-yellow-400"
                  }
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;