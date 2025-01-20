import React from 'react';
import AdminDashboard from '../components/AdminDashboard';

const AdminPage = ({ profiles, onUpdateProfiles }) => (
  <AdminDashboard profiles={profiles} onUpdateProfiles={onUpdateProfiles} />
);

export default AdminPage;