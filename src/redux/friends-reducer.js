const DELETE_FRIEND = "DELETE-FRIEND";

export const deleteFriendCreateAction = (id) => {

    return {
        type: DELETE_FRIEND,
        id: id
    }
}


let initialState = {
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

};

export const friendsReducer = (state = initialState, action) => {
    
    let stateChanged = {...state};

    switch (action.type) {
        case DELETE_FRIEND:
            
            stateChanged.friend_items_data = [...state.friend_items_data];

            let friendIndex = stateChanged.friend_items_data.findIndex(item => item.id === action.id);

            stateChanged.friend_items_data.splice(friendIndex, 1);

            break;
    
        default:
            return state;
    }
    return stateChanged;
}