import ProfileInfo from "./ProfileInfo";
import TopImg from "./TopImg";
import Wall from "./Wall";

const Profile = () => {
    return (
        <div className="profile">
            <TopImg />
            <ProfileInfo />
            <Wall />
        </div>
    );
}

export default Profile;