import { user as userApi } from "../api/user";
import { userActionType } from "../types/actions/user";

export const user: userActionType = {
    async getUserData() {
        try {
            const response = await userApi.getUserData();
            if (response.status === 200) {
                return response;
            }
        } catch (e) {
            return e.response;
        }
    },
};
