import React from 'react';
import ProfileDetails from '../components/ProfileDetails';

const ProfilePage = ({ profile }) => {
    return(
        <div>
            <ProfileDetails profile={profile} />
        </div>
    )
}


export default ProfilePage;