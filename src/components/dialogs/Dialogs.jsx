import React from 'react';
import s from './Dialogs.module.css';
import {findAllByDisplayValue} from "@testing-library/react";
import * as PropTypes from "prop-types";

function Navlink(props) {
    return null;
}

Navlink.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node
};
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <Navlink to="/dialogs/1"> Dimych</Navlink>
                </div>
                <div className={s.dialog}>
                    <Navlink to="/dialogs/2">Andrey</Navlink>
                </div>
                <div className={s.dialog}>
                    <Navlink to="/dialogs/3">Sveta</Navlink>
                </div>
                <div className={s.dialog}>
                    <Navlink to="/dialogs/4">Sasha</Navlink>
                </div>
                <div className={s.dialog}>
                    <Navlink to="/dialogs/5">Victor</Navlink>
                </div>
                <div className={s.dialog}>
                    <Navlink to="/dialogs/6">Valera</Navlink>
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How are you?</div>
                <div className={s.dialog}>Yo</div>
            </div>
        </div>
    )
}


export default Dialogs;