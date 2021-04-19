import ProfileInfo from "./ProfileInfo";
import TopImg from "./TopImg";
import Wall from "./Wall/Wall";

import profile from './Profile.module.css';

const Profile = () => {
    return (
        <div className={profile.profile}>
            <TopImg />
            <ProfileInfo />
            <Wall />
        </div>
    );
}

export default Profile;