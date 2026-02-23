function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-10">SmartDiet</h2>

        <ul className="space-y-4 text-gray-400">
          <li className="hover:text-white cursor-pointer">Overview</li>
          <li className="hover:text-white cursor-pointer">Analytics</li>
          <li className="hover:text-white cursor-pointer">Users</li>
          <li className="hover:text-white cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-10">Admin Dashboard</h1>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-8 rounded-2xl shadow-xl">
            <h3 className="text-gray-400">Total Users</h3>
            <p className="text-3xl font-bold mt-4 text-purple-400">1,245</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl shadow-xl">
            <h3 className="text-gray-400">Daily Analyses</h3>
            <p className="text-3xl font-bold mt-4 text-pink-400">312</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl shadow-xl">
            <h3 className="text-gray-400">Active Users</h3>
            <p className="text-3xl font-bold mt-4 text-green-400">842</p>
          </div>
        </div>

        {/* Activity Section */}
        <div className="bg-slate-900 p-8 rounded-2xl shadow-xl mt-10">
          <h3 className="text-2xl font-semibold mb-6">
            Recent Activity
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li>User John analyzed diet plan</li>
            <li>User Sarah updated profile</li>
            <li>User Alex calculated calories</li>
            <li>New user registered</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;