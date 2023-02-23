import style from './Post.module.css';

function Post (_props) {
    return(
        <div className={style.text}>
            <img src="https://www.meme-arsenal.com/memes/e6adac8c2b0d7958ff9fa0964cf49a6d.jpg" alt="ава" />
            <span className={style.message}>{_props.message}</span>
            <div className={style.like}>likes:{_props.like}</div>
        </div>
    );
}

export default Post;