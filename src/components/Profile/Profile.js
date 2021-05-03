import ProfileInfo from "./ProfileInfo";
import TopImg from "./TopImg";
import Wall from "./Wall/Wall";

// import profile from './Profile.module.css';

const Profile = (props) => {

    // let posts_data = props.posts_data;

    return (
        // <div className={profile.profile}>
        <div>
            <TopImg />
            <ProfileInfo />
            <Wall posts_data={props.posts_data} />
        </div>
    );
}

export default Profile;