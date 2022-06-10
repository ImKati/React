import React from  'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="data:image/jpeg;base64,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" alt="people"/>
            post1
            <div>
            <span>like</span>
            </div>
        </div>
    )

}

export default Post;