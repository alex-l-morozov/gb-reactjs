import React from 'react';
//import {store} from "../../store";
import {PROFILE_TOGGLE_SHOW} from "../../store/actionTypes";
import {useSelector, useDispatch} from "react-redux";

function Profile() {
    //const profileState = store.getState();
    const profileState = useSelector(state => state);
    const dispatch = useDispatch();

    //console.log(profileState);

    const toggleShow = () => {
        // store.dispatch({
        //     type: PROFILE_TOGGLE_SHOW
        // });
        dispatch({
            type: PROFILE_TOGGLE_SHOW
        });
    }

    return (
        <div>
            <h2>
                PROFILE
            </h2>
            <input type="checkbox" onClick={toggleShow} /> Показать / спрятать Имя пользователя
            {profileState.show && <div>Имя: Александр</div>}
        </div>
    );
}

export default Profile;