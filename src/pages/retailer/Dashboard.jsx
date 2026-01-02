import { useEffect, useState } from "react";
import { getRetailerAnalytics } from "../../services/analyticsService";
import { useAuth } from "../../context/AuthContext";
import { getNotifications } from "../../services/notificationService";
export default function Dashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function loadData() {
      const res = await getRetailerAnalytics(user.token);
      setStats(res.data);
    }
    loadData();
  }, [user.token]);

  useEffect(() => {
  async function loadNotifications() {
    const res = await getNotifications(user.token);
    setNotifications(res.data);
  }
  loadNotifications();
}, [user.token]);

  if (!stats) return <p className="p-6 text-white">Loading...</p>;

  return (                        
    <div className="p-8 text-white">
      <h2 className="text-3xl font-bold mb-6">Retailer Analytics</h2>

      <div className="grid  gap-4 grids-cols-1 md:grid-cols-4">

        <div className="mt-8 bg-white/10 p-4 rounded col-span-3 md:col-span-1 lg:col-span-1">
  <h3 className="text-xl font-semibold mb-3">Notifications</h3>

  {notifications.length === 0 && <p className="text-white">No notifications</p>}

  {notifications.map((n) => (
    <div key={n.id} className="bg-white/10 p-3 rounded mb-2">
      {n.message}
    </div>
  ))}
</div>
        <div className="bg-white/10 p-4 rounded">
          <p>Total Products</p>
          <h3 className="text-2xl font-bold">{stats.totalProducts}</h3>
        </div>

        <div className="bg-white/10 p-4 rounded">
          <p>Average Price</p>
          <h3 className="text-2xl font-bold">₹{stats.avgPrice}</h3>
        </div>

        <div className="bg-white/10 p-4 rounded">
          <p>Total Views</p>
          <h3 className="text-2xl font-bold">{stats.totalViews}</h3>
        </div>
      </div>
    </div>
  );
}
