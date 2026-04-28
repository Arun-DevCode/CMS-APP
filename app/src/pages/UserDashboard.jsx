import React, { useState } from "react";
import { getUserProfile } from "../api/user.api";

function UserDashboard() {
  const [profile, setProfile] = useState({});

  // to fetch user profile
  React.useEffect(() => {
    async function fetchProfile() {
      const profileData = await getUserProfile();
      setProfile(profileData.data);
    }
    fetchProfile();
  }, []);
  console.log(profile);
  return (
    <div>
      <h1>{profile.name}</h1>
    </div>
  );
}

export default UserDashboard;
