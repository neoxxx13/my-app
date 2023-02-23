import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (_props) => {

    let dialogsElements = _props.state.dialogsData.map ( dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = _props.state.messagesData.map ( m => <Message message={m.message} id={m.id} />);

    let newMessageElement = React.createRef ();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert (text);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <textarea ref={newMessageElement} className={style.textarea} name="" id="" cols="80" rows="3"></textarea>
                <button onClick={addMessage} className={style.button}>Add message</button>
            </div>
        </div>
    );
}

export default Dialogs;