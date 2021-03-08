import axios from "axios";
import { CONSTS } from "../config/objectConst";

import { userApiType } from "../types/api/user";

export const user: userApiType = {
    getUserData: async () => {
        return axios({
            url: `${CONSTS.API.url}users/a8m`,
            method: "get",
        });
    },
};
