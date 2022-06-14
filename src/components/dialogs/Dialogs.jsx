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
                <div className={s.dialog + ' ' + s.activeLink}>
                    <Navlink to="/dialogs/1" activeClassName={s.activeLink}> Dimych</Navlink>
                </div>
                <div className={s.dialog}>
                    <Navlink to="/dialogs/2" activeClassName={s.activeLink}>Andrey</Navlink>
                </div>
                <div className={s.dialog}>
                    <Navlink to="/dialogs/3" activeClassName={s.activeLink}>Sveta</Navlink>
                </div>
                <div className={s.dialog}>
                    <Navlink to="/dialogs/4"activeClassName={s.activeLink}>Sasha</Navlink>
                </div>
                <div className={s.dialog}>
                    <Navlink to="/dialogs/5"activeClassName={s.activeLink}>Victor</Navlink>
                </div>
                <div className={s.dialog}>
                    <Navlink to="/dialogs/6"activeClassName={s.activeLink}>Valera</Navlink>
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