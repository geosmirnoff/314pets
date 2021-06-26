import { connect } from 'react-redux';
import Friends from './Friends';

/*const FriendsContainer = () => {

    return (
        <Consumer>
            { (store) => <Friends data={store.getState().friends} /> }
        </Consumer>
    );
}*/

let mapStateToPorps = (state) => {
    return {
        friends: state.friends
    }
}

const FriendsContainer = connect(mapStateToPorps)(Friends);

export default FriendsContainer;