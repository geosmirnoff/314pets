import ProfileInfo from "./ProfileInfo";
import TopImg from "./TopImg";
import WallContainer from "./Wall/WallContainer";

// import profile from './Profile.module.css';

const Profile = (props) => {

    // let posts_data = props.posts_data;
    
    return (
        // <div className={profile.profile}>
        <div>
            <TopImg />
            <ProfileInfo />
            <WallContainer store={props.store} />
            {/* <Wall posts_data={props.data.posts_data} 
                  new_post_text={props.data.new_post_text}  */}
                  {/*add_post={props.add_post}
                  update_post_text={props.update_post_text}*/}
                  {/* dispatch={props.dispatch}
                  post_symbol_limit={props.data.post_symbol_limit} /> */}
        </div>
    );
}

export default Profile;