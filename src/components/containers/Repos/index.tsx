import React, {FC} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

// Components
import MainTemplate from "../templates/MainTemplate";

// Styles
import "./style.scss";

const ReposContainer: FC = props => {
    return (
        <MainTemplate>
            <div id="repos">repos</div>
        </MainTemplate>
    );
};

const mapStateToProps = function (state: any) {
    return {
        app: state.app
    };
};

export default connect(mapStateToProps)(withRouter(ReposContainer));
