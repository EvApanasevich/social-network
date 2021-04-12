import s from './ProfileInfo.module.css';
import React from "react";

type PropsType = {
}

export const ProfileInfo: React.FC<PropsType> = (props) => {
    return (
        <div className={s.info}>
            <div>
                Ava + description
            </div>
        </div>
    )
}