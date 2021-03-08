/*
 *
 * user reducer
 *
 */
export const userDataInitial = {
    login: "",
    id: 0,
    node_id: "",
    avatar_url: "",
    gravatar_id: "",
    url: "",
    html_url: "",
    followers_url: "",
    following_url: "",
    gists_url: "",
    starred_url: "",
    subscriptions_url: "",
    organizations_url: "",
    repos_url: "",
    events_url: "",
    received_events_url: "",
    type: "",
    site_admin: false,
    name: "",
    company: "",
    blog: "",
    location: "",
    email: "",
    hireable:"",
    bio: "",
    twitter_username: "",
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: "",
    updated_at: ""
};

const user = (state = userDataInitial, action) => {
    switch (action.type) {
        case "USER_DATA":
            return Object.assign({}, state, {
                login: action.payload.userData.login,
                id: action.payload.userData.id,
                node_id: action.payload.userData.node_id,
                avatar_url: action.payload.userData.avatar_url,
                gravatar_id: action.payload.userData.gravatar_id,
                url: action.payload.userData.url,
                html_url: action.payload.userData.html_url,
                followers_url: action.payload.userData.followers_url,
                following_url:  action.payload.userData.following_url,
                gists_url: action.payload.userData.gists_url,
                starred_url: action.payload.userData.starred_url,
                subscriptions_url: action.payload.userData.subscriptions_url,
                organizations_url: action.payload.userData.organizations_url,
                repos_url: action.payload.userData.repos_url,
                events_url: action.payload.userData.events_url,
                received_events_url: action.payload.userData.received_events_url,
                type: action.payload.userData.type,
                site_admin: action.payload.userData.site_admin,
                name: action.payload.userData.name,
                company: action.payload.userData.company,
                blog: action.payload.userData.blog,
                location: action.payload.userData.location,
                email: action.payload.userData.email,
                hireable: action.payload.userData.hireable,
                bio: action.payload.userData.bio,
                twitter_username: action.payload.userData.twitter_username,
                public_repos: action.payload.userData.public_repos,
                public_gists: action.payload.userData.public_gists,
                followers: action.payload.userData.followers,
                following: action.payload.userData.following,
                created_at: action.payload.userData.created_at,
                updated_at: action.payload.userData.updated_at
            });

        default:
            return state;
    }
};

export default user;
