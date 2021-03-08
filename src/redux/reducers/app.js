/*
 *
 * app reducer
 *
 */
const initialState = {
    isLoadedPage: false,
};

const app = (state = initialState, action) => {
    switch (action.type) {
        case "LOADED_PAGE":
            return Object.assign({}, state, {
                isLoadedPage: action.payload.isLoadedPage,
            });
        default:
            return state;
    }
};

export default app;
