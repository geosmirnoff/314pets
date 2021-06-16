import Friends from './Friends';
import StoreContext from './../../StoreContext';

const FriendsContainer = () => {

    return (
        <StoreContext.Consumer>
            { (store) => <Friends data={store.getState().friends} /> }
        </StoreContext.Consumer>
    );
}

export default FriendsContainer;