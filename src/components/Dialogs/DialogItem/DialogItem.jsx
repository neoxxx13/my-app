import { NavLink } from 'react-router-dom';
import style from './../Dialogs.module.css';

const DialogItem =(_props) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={'/dialogs/' + _props.id}>{_props.name}</NavLink>
        </div>
    );
}

export default DialogItem;