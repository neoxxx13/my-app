import style from './../Dialogs.module.css';

const Message = (_props) => {
    return (
        <div className={style.message}>{_props.message}</div>
    );
}

export default Message;