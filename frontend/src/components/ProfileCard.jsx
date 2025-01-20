import React from 'react';
import { Link } from 'react-router-dom';

const ProfileCard = ({ profile, onViewMap }) => (
  <div className="bg-white shadow-md rounded-lg p-4 m-4 text-center">
    <img src={profile.photo} alt={profile.name} className="w-24 h-24 rounded-full mx-auto" />
    <h3 className="text-xl font-bold mt-2">{profile.name}</h3>
    <p className="text-gray-600">{profile.description}</p>
    <button
      onClick={() => onViewMap(profile)}
      className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
    >
      View on Map
    </button>
    <Link to={`/profile/${profile.id}`} className="block text-blue-500 mt-2">View Details</Link>
  </div>
);

export default ProfileCard;
