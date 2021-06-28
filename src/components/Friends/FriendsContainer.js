import { connect } from 'react-redux';
import Friends from './Friends';
import { deleteFriendCreateAction } from './../../redux/friends-reducer';

let mapStateToPorps = (state) => {
    return {
        friends: state.friends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        deleteFriend: (id) => {
            dispatch(deleteFriendCreateAction(id))
        }
    }
}

const FriendsContainer = connect(mapStateToPorps, mapDispatchToProps)(Friends);

export default FriendsContainer;