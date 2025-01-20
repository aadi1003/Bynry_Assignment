// import React from 'react';

// const ProfileDetails = ({ profile }) => (
//   <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
//     <img src={profile.photo} alt={profile.name} className="w-32 h-32 rounded-full mx-auto" />
//     <h2 className="text-2xl font-bold mt-4">{profile.name}</h2>
//     <p className="mt-2 text-gray-700">{profile.description}</p>
//     <p className="mt-4 text-gray-500">Address: {profile.address}</p>
//   </div>
// );

// export default ProfileDetails;








// import React from 'react';

// const ProfileDetails = ({ profile }) => (
//   <div className="p-6 bg-gray-100 rounded-lg shadow-md text-left border border-gray-300 overflow-hidden">
//     <img
//       src={profile.photo}
//       alt={profile.name}
//       className="w-32 h-32 rounded-full mx-auto mb-4"
//     />
//     <div className="text-left">
//       <h2 className="text-2xl font-bold">{profile.name}</h2>
//       <p className="mt-2 text-gray-700">Age: {profile.age}</p>
//       <p className="mt-2 text-gray-700">Gender: {profile.gender}</p>
//       <p className="mt-2 text-gray-700">Marital Status: {profile.marital_status}</p>
//       <p className="mt-2 text-gray-700">Nationality: {profile.nationality}</p>
//       <p className="mt-2 text-gray-700">Date of Birth: {profile.dob}</p>
//       <p className="mt-4 text-gray-700">Contact Number: {profile.contact_number}</p>
//       <p className="mt-2 text-gray-700">Email Address: {profile.email}</p>
//       <p className="mt-4 text-gray-500">Address: {profile.address}</p>
//       <p className="mt-4 text-gray-700">Employee ID: {profile.employee_id}</p>
//       <p className="mt-2 text-gray-700">Designation: {profile.designation}</p>
//       <p className="mt-4 text-gray-700">Salary: {profile.salary}</p>
//     </div>
//   </div>
// );

// export default ProfileDetails;












import React from 'react';

const ProfileDetails = ({ profile }) => {
  return (
<div className="p-8  bg-white rounded-xl shadow-lg transform transition duration-500 ">
  <div className="flex justify-center mb-6">
    <img
      src={profile.photo}
      alt={profile.name}
      className="w-40 h-40 rounded-full border-4 border-indigo-600 shadow-md transition duration-500 ease-in-out"
    />
  </div>
  <div className="text-center">
    <h2 className="text-3xl font-bold text-indigo-800 mb-4">{profile.name}</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-600 font-medium">Age</td>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">{profile.age}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-600 font-medium">Gender</td>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">{profile.gender}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-600 font-medium">Marital Status</td>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">{profile.marital_status}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-600 font-medium">Nationality</td>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">{profile.nationality}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-600 font-medium">Date of Birth</td>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">{profile.dob}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-600 font-medium">Contact Number</td>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">{profile.contact_number}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-600 font-medium">Email Address</td>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">{profile.email}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-600 font-medium">Address</td>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">{profile.address}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-600 font-medium">Employee ID</td>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">{profile.employee_id}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-600 font-medium">Designation</td>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">{profile.designation}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-600 font-medium">Salary</td>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">{profile.salary}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

)
}

export default ProfileDetails;


