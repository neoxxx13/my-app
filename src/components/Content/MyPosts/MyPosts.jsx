import style from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { updateNewPostTextActionCreator } from '../../../Redux/state';
import { addPostActionCreator } from '../../../Redux/state';

const MyPosts = (_props) => {

    let postsElements = _props.posts.map(post => <Post message={post.message} like={post.like} />);

    let newPostElement = React.createRef ();

    let addPost = () => {
        _props.dispatch (addPostActionCreator ());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        _props.dispatch (action);
    }

    return (
        <div className={style.postBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea onChange={onPostChange} value={_props.newPostText} ref={newPostElement} className={style.textarea} name="" id="" cols="120" rows="3" />
                </div>
                <div>
                    <button onClick={addPost} className={style.button}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;