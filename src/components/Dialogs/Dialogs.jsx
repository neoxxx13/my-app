import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../Redux/state';

const Dialogs = (_props) => {
    let state = _props.store.getState().dialogsPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = state.messagesData.map(m => <Message message={m.message} id={m.id} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        _props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        _props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea value={newMessageBody} onChange={onNewMessageChange}
                        placeholder='Enter your message' 
                        className={style.textarea} name="" id="" cols="80" rows="3">
                    </textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick} className={style.button}>Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;