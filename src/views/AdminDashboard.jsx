import React from 'react';
import { Shield } from 'lucide-react';

const AdminDashboard = () => {
  const stats = {
    totalUsers: 12543,
    premiumUsers: 2456,
    revenue: 145678,
    pendingReports: 23
  };

  return (
    <div className="space-y-6">
      <div className="card-sexy p-6">
        <h1 className="text-4xl font-bold text-white mb-2">
          Panel de Administración
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card-sexy p-6">
          <p className="text-gray-400 text-sm">Total Usuarios</p>
          <h3 className="text-3xl font-bold text-white">
            {stats.totalUsers.toLocaleString()}
          </h3>
        </div>
        <div className="card-sexy p-6">
          <p className="text-gray-400 text-sm">Usuarios Premium</p>
          <h3 className="text-3xl font-bold text-white">
            {stats.premiumUsers.toLocaleString()}
          </h3>
        </div>
        <div className="card-sexy p-6">
          <p className="text-gray-400 text-sm">Ingresos</p>
          <h3 className="text-3xl font-bold text-white">
            {stats.revenue.toLocaleString()}€
          </h3>
        </div>
        <div className="card-sexy p-6">
          <p className="text-gray-400 text-sm">Reportes</p>
          <h3 className="text-3xl font-bold text-white">
            {stats.pendingReports}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
