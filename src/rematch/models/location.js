import util from "../../utils/utils";

export default {

    state: {

    }, // initial state
    reducers: {
        // handle state changes with pure functions
        setLocations(state, payload) {
            return {
                ...state,
                user: payload
            };
        },
        setFBUser(state, payload) {
            return {
                ...state,
                facebook: payload
            };
        },
        login(state, payload) {
            return {
                ...state,
                user: payload
            }
        },
        checkUser(state, payload) {
            
        }
    },
    effects: dispatch => ({
        // handle state changes with impure functions.
        // use async/await for async actions
        async loginAsync(payload, history) {
            await new Promise((resolve, reject) => {
                // firebase.login(payload).then(response => {
                //     console.log(response);
                    history.push("/app");
                //     resolve(response);
                // })
            }).then(response => {
                dispatch.user.login(response);
            })
        },
    }),
}
