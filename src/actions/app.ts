import store from "../redux/store";
import { appActionType } from "../types/actions/app";

export const app: appActionType = {

    setIsLoadedPage(value) {
        store.dispatch({
            type: "LOADED_PAGE",
            payload: {
                isLoadedPage: value,
            },
        });
    },
};
