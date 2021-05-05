let state = {
    chats: {
        chat_items_data: [
            {
                from_id: "id2",
                from_img: "https://pbs.twimg.com/profile_images/938269312166563840/tbT6X3eU.jpg",
                from_name: "Пёсопёс",
                text: "Йо, петух, стрела за гаражами",
                date: "30.04.21"
            },
            {
                from_id: "id3",
                from_img: "https://krasivosti.pro/uploads/posts/2021-04/1618486033_16-krasivosti_pro-p-riba-v-ochkakh-ribi-krasivo-foto-17.jpg",
                from_name: "Рыборыб",
                text: "Есть чо? А еси найду?",
                date: "29.04.21"
            },
            {
                from_id: "id4",
                from_img: "https://wallbox.ru/resize/640x960/wallpapers/main/201546/20309cc1d731ed6.jpg",
                from_name: "Крысокрыс",
                text: "Го пить, я создал",
                date: "28.04.21"
            },
        ],
        current_chat_data: [
            {
                companion_id: "id5",
                message_id: "msg1",
                text: "Дороу",
                date: "03.05.2021",
                time: "17:58",
                direction: "to_me"
            },
            {
                companion_id: "id5",
                message_id: "msg2",
                text: "Дратути",
                date: "03.05.2021",
                time: "17:59",
                direction: "from_me"
            },
            {
                companion_id: "id5",
                message_id: "msg3",
                text: "Как жись?",
                date: "03.05.2021",
                time: "18:05",
                direction: "to_me"
            },
            {
                companion_id: "id5",
                message_id: "msg4",
                text: "Намана",
                date: "03.05.2021",
                time: "18:06",
                direction: "from_me"
            },
            {
                companion_id: "id5",
                message_id: "msg5",
                text: "Што делоиш?",
                date: "03.05.2021",
                time: "18:06",
                direction: "to_me"
            },
            {
                companion_id: "id5",
                message_id: "msg6",
                text: "Кушою",
                date: "03.05.2021",
                time: "18:07",
                direction: "from_me"
            },
            {
                companion_id: "id5",
                message_id: "msg7",
                text: "Панятна",
                date: "03.05.2021",
                time: "18:14",
                direction: "to_me"
            },
        ],
        companion_name: "Птицептиц",
        companion_img: "https://www.meme-arsenal.com/memes/67e204168b032eea544ad1a45f880945.jpg",
    },
    profile: {
        posts_data: [
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
            },
        ],
    },
    friends: {
        friend_items_data: [
            {
                id: "id2",
                avatar: "https://pbs.twimg.com/profile_images/938269312166563840/tbT6X3eU.jpg",
                name: "Пёсопёс",
                age: "5"
            },
            {
                id: "id3",
                avatar: "https://krasivosti.pro/uploads/posts/2021-04/1618486033_16-krasivosti_pro-p-riba-v-ochkakh-ribi-krasivo-foto-17.jpg",
                name: "Рыборыб",
                age: "10"
            },
            {
                id: "id4",
                avatar: "https://wallbox.ru/resize/640x960/wallpapers/main/201546/20309cc1d731ed6.jpg",
                name: "Крысокрыс",
                age: "15"
            },
            {
                id: "id5",
                avatar: "https://www.meme-arsenal.com/memes/67e204168b032eea544ad1a45f880945.jpg",
                name: "Птицептиц",
                age: "20"
            },
        ],
    },
};

export default state;