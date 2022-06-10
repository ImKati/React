import React from  'react';
import s from './Profile.module.css';
import MyPost from "./myPosts/MyPost";

const Profile = () => {
    return ( <div>
        <div>
            <img src="https://img.wallscloud.net/uploads/cache/1228847120/%D0%9F%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6,_%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%B0%D1%8F_%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0,_%D0%BB%D0%B5%D1%81,_%D0%BD%D0%B5%D0%B1%D0%BE,_%D0%B7%D0%B0%D0%BA%D0%B0%D1%82,_%D0%B2%D0%BE%D1%81%D1%85%D0%BE%D0%B4,_%D0%BE%D0%B7%D0%B5%D1%80%D0%BE-1024x576-MM-90.webp" alt="art"/>
        </div>

        <div>
            ava + discription
        </div>
        <MyPost />
    </div>
    )
}

export default Profile;