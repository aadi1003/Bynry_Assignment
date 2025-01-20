import React, { useState } from 'react';
import './index.css';
import { Link, Route, Router, Routes, useParams } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import ProfilePage from './pages/ProfilePage';
import Images from './assets/Images';


const profilesData = [
  {
    id: 1,
    name: "John Doe",
    age:17,
    gender:"Male",
    marital_status:"Single",
    nationality:"Indian",
    dob:"18-09-1998",
    photo: "https://tse1.mm.bing.net/th?id=OIP.i4gS0Wk09F9ZxJT5eMWHJwHaJQ&pid=Api&P=0&h=180",
    description: "Member of Technical Staff, Oracle Bengalaru.",
    address: "India Development Centre, Oracle Technology Park, No. 3, Bannerghatta Rd, Bhavani Nagar, S.G. Palya, Bengaluru, Karnataka 560029",
    contact_number:8945789645,
    email:"ufyd@gmail.com",
    employee_id:"A238AW1",
    designation:"Associate Software Developer",
    salary:"7 LPA",
    lat: 12.93962489374916, 
    lng: 77.60031811340211,
  },
  {
    id: 2,
    name: "Jane Smith",
    age:17,
    gender:"Male",
    marital_status:"Single",
    nationality:"Indian",
    dob:"18-09-1998",
    photo: "https://tse3.mm.bing.net/th?id=OIP.eKb_kv_4L_a7TfLOySMzsAHaLG&pid=Api&P=0&h=180",
    description: "Senior Frontend Developer , Amazon Pune.",
    address: "San Francisco, CA, USA",
    contact_number:8945789645,
    email:"ufyd@gmail.com",
    employee_id:"A238AW1",
    designation:"Associate Software Developer",
    salary:"7 LPA",
    lat: 37.774929,
    lng: -122.419418,
  },
  {
    id: 3,
    name: "Jane Smith",
    age:17,
    gender:"Male",
    marital_status:"Single",
    nationality:"Indian",
    dob:"18-09-1998",
    photo: "https://tse4.mm.bing.net/th?id=OIP._A69S1l62fQYNYZ15KTFywHaHa&pid=Api&P=0&h=180",
    description: "Java Solution Architect , Veritas Hyderabad.",
    address: "San Francisco, CA, USA",
    contact_number:8945789645,
    email:"ufyd@gmail.com",
    employee_id:"A238AW1",
    designation:"Associate Software Developer",
    salary:"7 LPA",
    lat: 37.774929,
    lng: -122.419418,
  },
  {
    id: 4,
    name: "Jane Smith",
    age:17,
    gender:"Male",
    marital_status:"Single",
    nationality:"Indian",
    dob:"18-09-1998",
    photo: "https://tse4.mm.bing.net/th?id=OIP.TMapqeVZ9hICKUPrNu0_PAHaLH&pid=Api&P=0&h=180",
    description: "Data Scientist , Data Axle Gurgaon.",
    address: "San Francisco, CA, USA",
    contact_number:8945789645,
    email:"ufyd@gmail.com",
    employee_id:"A238AW1",
    designation:"Associate Software Developer",
    salary:"7 LPA",
    lat: 37.774929,
    lng: -122.419418,
  },
];

const ProfilePageWrapper = ({ profiles }) => {
  const { id } = useParams(); // Extract the profile ID from the URL
  const profile = profiles.find((profile) => profile.id === parseInt(id)); // Find the matching profile
  return profile ? <ProfilePage profile={profile} /> : <div>Profile not found</div>;
};



const App = () => {
  const [profiles, setProfiles] = useState(profilesData);

  return (

      <div className="app">
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-3xl font-bold">Profile Explorer</h1>
          <nav className="mt-2">
            <Link to="/" className="text-blue-400 hover:underline mr-4">Home</Link>
            <Link to="/admin" className="text-blue-400 hover:underline">Admin Dashboard</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePage profiles={profiles} />} />
          <Route
            path="/admin"
            element={<AdminPage profiles={profiles} onUpdateProfiles={setProfiles} />}
          />
          <Route
            path="/profile/:id"
            element={<ProfilePageWrapper profiles={profiles} />}
          />
        </Routes>
      </div>
  );
};

export default App;