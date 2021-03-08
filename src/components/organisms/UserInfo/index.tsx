import React, {FC} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

// Components


// Styles
import "./style.scss";

const UserInfoContainer: FC = props => {
    return (
        <div id="user-info">User info</div>
    );
};

const mapStateToProps = function (state: any) {
    return {
        app: state.app
    };
};

export default connect(mapStateToProps)(withRouter(UserInfoContainer));
