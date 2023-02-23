import style from './Content.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Content = (_props) => {
    return(
        <div>
            <ProfileInfo/>
            <MyPosts posts={_props.profilePage.posts}
                    newPostText={_props.profilePage.newPostText}
                    dispatch={_props.dispatch}/>
        </div>
    );
}

export default Content;