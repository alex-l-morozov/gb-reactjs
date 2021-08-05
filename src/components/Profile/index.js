import React from 'react';
import {store} from "../../store";
import {PROFILE_TOGGLE_SHOW} from "../../store/actionTypes";

function Profile() {
    const profileState = store.getState();

    console.log(profileState);

    const toggleShow = () => {
        store.dispatch({
            type: PROFILE_TOGGLE_SHOW
        });
    }

    return (
        <>
            <h2>
                PROFILE
            </h2>
            <input type="checkbox" onClick={toggleShow} /> Тест
        </>

    );
}

export default Profile;