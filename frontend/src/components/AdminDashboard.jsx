import React from 'react';

const AdminDashboard = ({ profiles, onUpdateProfiles }) => {
  const handleDelete = (id) => {
    const updatedProfiles = profiles.filter((profile) => profile.id !== id);
    onUpdateProfiles(updatedProfiles);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      {profiles.map((profile) => (
        <div key={profile.id} className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg mb-2">
          <span>{profile.name}</span>
          <button
            onClick={() => handleDelete(profile.id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;