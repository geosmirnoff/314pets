import ProfileInfo from "./ProfileInfo";
import TopImg from "./TopImg";
import WallContainer from "./Wall/WallContainer";

const Profile = (props) => {
    
    return (
        <div>
            <TopImg />
            <ProfileInfo />
            <WallContainer /*store={props.store}*/ />
        </div>
    );
}

export default Profile;