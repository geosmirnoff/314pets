import ProfileInfo from "./ProfileInfo";
import TopImg from "./TopImg";
import Wall from "./Wall/Wall";

// import profile from './Profile.module.css';

const Profile = () => {

    let posts_data = [
        {
            author: "Котокот",
            avatar: "https://i.pinimg.com/originals/a7/35/bd/a735bd89df1a0fb4c80ffa583585943e.jpg",
            date: "20.04.2021",
            body: "Мой человек - долбоящер",
            likes_number: "300"
        },
        {
            author: "Котокот",
            avatar: "https://i.pinimg.com/originals/a7/35/bd/a735bd89df1a0fb4c80ffa583585943e.jpg",
            date: "19.04.2021",
            body: "Давненько меня не гладили",
            likes_number: "200",
        },
        {
            author: "Котокот",
            avatar: "https://i.pinimg.com/originals/a7/35/bd/a735bd89df1a0fb4c80ffa583585943e.jpg",
            date: "18.04.2021",
            body: "100 дней без валерьянки",
            likes_number: "100",
        }
    ];

    return (
        // <div className={profile.profile}>
        <div>
            <TopImg />
            <ProfileInfo />
            <Wall posts_data={posts_data} />
        </div>
    );
}

export default Profile;