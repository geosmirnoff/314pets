const ProfileInfo = () => {
    return (
        <div className="profile-info">
            <img className="profile-img" src="https://i.pinimg.com/originals/a7/35/bd/a735bd89df1a0fb4c80ffa583585943e.jpg" alt="avatar" />
            <section className="profile-description">
                <p><strong>Имя:</strong> Котокот</p>
                <p><strong>Вид:</strong> Кот</p>
                <p><strong>Порода:</strong> В очках</p>
                <p><strong>Пол:</strong> мужской</p>
                <p><strong>Город:</strong> Санкт-Петербург</p>
                <p><strong>Родился:</strong> 2018</p>
            </section>
        </div>
    );
}

export default ProfileInfo;