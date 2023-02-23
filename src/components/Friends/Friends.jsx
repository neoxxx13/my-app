import style from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem';

function Friends(_props) {

    let friendsElements = _props.state.friendsData.map ( friend => <FriendItem name={friend.name} id={friend.id} />);

    return (
        <div className={style.friends}>
            <div className={style.friendsItems}>
                {friendsElements}
            </div>
        </div>
    );
}
export default Friends;