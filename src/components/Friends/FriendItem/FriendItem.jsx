import { NavLink } from 'react-router-dom';
import style from './../Friends.module.css';

function FriendItem(_props) {
    return (
        <div className={style.friend + ' ' + style.active}>
            <NavLink to={'/friends/' + _props.id}>{_props.name}</NavLink>
        </div>
    );
}

export default FriendItem;