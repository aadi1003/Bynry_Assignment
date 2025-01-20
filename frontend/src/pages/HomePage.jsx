import React, { useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import Map from '../components/Map';

const HomePage = ({ profiles }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const point=<img src="https://www.kindpng.com/picc/m/23-235395_map-marker-png-google-maps-pin-svg-transparent.png" alt="" srcset="" />

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onViewMap={setSelectedProfile}
          />
        ))}
      </div>
      {selectedProfile && (
        <Map
          center={{ lat: selectedProfile.lat, lng: selectedProfile.lng }}
          zoom={15}
          markerText={selectedProfile.address}
          
        />
      )}
    </div>
  );
};

export default HomePage;