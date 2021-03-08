import { responseType } from "./auth";

export type userDataType = {
    login: null | string;
    id: null | number;
    node_id: null | string;
    avatar_url: null | string;
    gravatar_id: null | string;
    url: null | string;
    html_url: null | string;
    followers_url: null | string;
    following_url:  null | string;
    gists_url: null | string;
    starred_url: null | string;
    subscriptions_url: null | string;
    organizations_url: null | string;
    repos_url: null | string;
    events_url: null | string;
    received_events_url: null | string;
    type: null | string;
    site_admin: boolean;
    name: null | string;
    company: null | string;
    blog: null | string;
    location: null | string;
    email: null | string;
    hireable: null | string;
    bio: null | string;
    twitter_username: null | string;
    public_repos: null | number;
    public_gists: null | number;
    followers: null | number;
    following: null | number;
    created_at: null | string;
    updated_at: null | string;
};

export type userActionType = {
    getUserData: () => Promise<responseType<userDataType>>;
};
